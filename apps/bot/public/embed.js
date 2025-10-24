(()=>{
  const s=document.createElement('div');
  s.id='netia-bubble';
  s.style.cssText='position:fixed;bottom:24px;right:24px;width:64px;height:64px;border-radius:50%;box-shadow:0 8px 24px rgba(0,0,0,.2);cursor:pointer;display:flex;align-items:center;justify-content:center;font:14px/1.2 system-ui;background:#111;color:#fff;z-index:999999';
  s.innerText='Chat';
  document.body.appendChild(s);
  
  let open=false; 
  const panel=document.createElement('iframe');
  panel.style.cssText='position:fixed;bottom:100px;right:24px;width:360px;height:520px;border:1px solid #e6e6e6;border-radius:12px;background:#fff;box-shadow:0 16px 40px rgba(0,0,0,.2);display:none;z-index:999999';
  panel.src='about:blank'; 
  document.body.appendChild(panel);
  
  const endpoint=(window.NETIA_CHAT_ENDPOINT||'https://your-bot-domain/chat');
  
  function send(m){
    fetch(endpoint,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({message:m,sessionId:crypto.randomUUID()})
    }).then(r=>r.json()).then(data=>panel.contentWindow.postMessage({type:'bot',data},'*'))
  }
  
  window.addEventListener('message',e=>{
    if(e.data?.type==='user') send(e.data.text)
  });
  
  s.onclick=()=>{
    open=!open; 
    panel.style.display=open?'block':'none'; 
    if(open && !panel.srcdoc){
      panel.srcdoc=`<!doctype html><html><body style="margin:0;font-family:system-ui"><div id="hist" style="height:460px;overflow:auto;padding:12px"></div><form id="f" style="display:flex;border-top:1px solid #eee"><input id="i" placeholder="Ask about Botox, pricing..." style="flex:1;padding:12px;border:0"><button>Send</button></form><script>
const h=document.getElementById('hist'); const f=document.getElementById('f'); const i=document.getElementById('i');
function add(role, text){const p=document.createElement('div');p.style.margin='8px 0';p.textContent=(role==='user'?'You: ':'Clinic: ')+text; h.appendChild(p); h.scrollTop=h.scrollHeight}
window.addEventListener('message',e=>{if(e.data?.type==='bot') add('assistant', e.data.data.response)});
f.onsubmit=(e)=>{e.preventDefault(); const t=i.value.trim(); if(!t) return; add('user',t); parent.postMessage({type:'user', text:t}, '*'); i.value='';}
</script></body></html>`
    }
  }
})();
