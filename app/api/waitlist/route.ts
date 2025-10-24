import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company } = body

    // Validate required fields
    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email notification to matt@netia.ai
    const emailData = {
      to: 'matt@netia.ai',
      subject: 'New Waitlist Signup - Netia AI',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Source:</strong> Netia Website Waitlist</p>
      `,
      text: `
        New Waitlist Signup
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Date: ${new Date().toLocaleString()}
        Source: Netia Website Waitlist
      `
    }

    // Send email using a simple fetch to an email service
    // For production, you might want to use a service like SendGrid, Resend, or Nodemailer
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
          to_email: 'matt@netia.ai',
          from_name: 'Netia Website',
          subject: 'New Waitlist Signup - Netia AI',
          message: emailData.text,
          reply_to: email
        }
      })
    })

    if (!emailResponse.ok) {
      console.error('Failed to send email notification')
      // Don't fail the request if email fails, just log it
    }

    // Send confirmation email to the user
    const userEmailData = {
      to: email,
      subject: 'Welcome to the Netia AI Waitlist!',
      html: `
        <h2>Welcome to the Netia AI Waitlist!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
        <p>You'll be among the first to know when our AI voice receptionist and lead follow-up features are ready.</p>
        <p>In the meantime, feel free to explore our AI ChatBot that's available now!</p>
        <p>Best regards,<br>The Netia Team</p>
      `,
      text: `
        Welcome to the Netia AI Waitlist!
        
        Hi ${name},
        
        Thank you for joining our waitlist! We're excited to have you on board.
        
        You'll be among the first to know when our AI voice receptionist and lead follow-up features are ready.
        
        In the meantime, feel free to explore our AI ChatBot that's available now!
        
        Best regards,
        The Netia Team
      `
    }

    // Send confirmation email to user
    const userEmailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
          to_email: email,
          from_name: 'Netia Team',
          subject: 'Welcome to the Netia AI Waitlist!',
          message: userEmailData.text,
          reply_to: 'matt@netia.ai'
        }
      })
    })

    if (!userEmailResponse.ok) {
      console.error('Failed to send confirmation email')
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined the waitlist! Check your email for confirmation.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
