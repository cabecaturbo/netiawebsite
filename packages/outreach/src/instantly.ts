import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';
import dotenv from 'dotenv';
import { EnvSchema } from '@netia/shared';

dotenv.config();

const env = EnvSchema.parse(process.env);

interface OutreachConfig {
  limit: number;
  outputDir: string;
}

const config: OutreachConfig = {
  limit: 200,
  outputDir: 'ops/samples/outbox',
};

class InstantlyCampaignGenerator {
  private subjects: string[] = [
    "Quick idea for {{company}}",
    "Botox bookings this week?",
    "{{city}} med-spa: instant replies"
  ];

  private bodies: string[] = [
    `Hi {{first_name}}, quick one—{we built|we made} an AI receptionist {for med-spas|for Botox clinics} that answers {DMs & website chats|inquiries} instantly and {books consults|captures leads} 24/7. 
{{personal_line}}

Would a 10-min demo be crazy? – Matt`,
    `Hey {{first_name}}, noticed {{company}} runs {{city}} Botox/filler. 
We help clinics reply in under 5s, {save missed calls|convert after-hours} and auto-book consults.

Up for a quick look? – Matt`
  ];

  async generateCampaign(leadsFile: string): Promise<void> {
    console.log('🚀 Starting Instantly campaign generation...');
    console.log(`📊 Processing leads from ${leadsFile}`);

    // Ensure output directory exists
    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
    }

    try {
      // Read and parse leads CSV
      const leads = parse(fs.readFileSync(leadsFile), { columns: true });
      console.log(`📈 Loaded ${leads.length} leads`);

      // Filter top leads (score >= 3.5, has email)
      const top = leads.filter((r: any) => Number(r.score) >= 3.5 && r.email).slice(0, config.limit);
      console.log(`✅ Filtered to ${top.length} qualified leads`);

      // Generate campaign data
      const rows = top.map((r: any) => ({
        email: r.email,
        first_name: r.first_name || '',
        company: r.name,
        city: r.city,
        personal_line: this.generatePersonalLine(r),
        variant: Number(r.score) >= 4.3 ? 'A' : 'B'
      }));

      // Write files
      fs.writeFileSync(`${config.outputDir}/instantly_campaign.csv`, stringify(rows, { header: true }));
      fs.writeFileSync(`${config.outputDir}/subject_pool.txt`, this.subjects.join('\n'));
      fs.writeFileSync(`${config.outputDir}/body_spintax.txt`, this.bodies.join('\n\n---\n\n'));

      console.log('\n✅ Instantly campaign generation complete!');
      console.log(`📁 Files written to: ${config.outputDir}/`);
      console.log(`📊 Generated ${rows.length} campaign entries`);
    } catch (error) {
      console.error('❌ Error generating campaign:', error);
      throw error;
    }
  }

  private generatePersonalLine(r: any): string {
    return `Loved your ${r.services?.split('|')[0] ?? 'aesthetics'} page—are you taking new consults this week?`;
  }
}

// Main execution
async function main() {
  try {
    const args = process.argv.slice(2);
    const leadsFile = args[0] || 'leads-2024-01-01.csv'; // Default to today's file
    
    console.log(`📂 Looking for leads file: ${leadsFile}`);
    
    if (!await fs.pathExists(leadsFile)) {
      console.error(`❌ Leads file not found: ${leadsFile}`);
      console.log('💡 Run leadgen first: pnpm leadgen:run');
      process.exit(1);
    }

    const generator = new InstantlyCampaignGenerator();
    await generator.generateCampaign(leadsFile);
  } catch (error) {
    console.error('❌ Outreach generation failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
