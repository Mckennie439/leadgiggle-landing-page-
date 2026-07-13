function showForm(){document.getElementById('page-form').style.display='block';document.getElementById('page-lp').style.display='none';window.scrollTo({top:0,behavior:'instant'});}
function hideForm(){document.getElementById('page-form').style.display='none';document.getElementById('page-lp').style.display='block';}
let menuOpen=false;
function toggleMenu(){menuOpen=!menuOpen;const p=document.getElementById('nav-panel');if(menuOpen){p.style.display='block';requestAnimationFrame(()=>p.classList.add('open'));document.body.style.overflow='hidden';}else closeMenu();}
function closeMenu(){menuOpen=false;const p=document.getElementById('nav-panel');p.classList.remove('open');document.body.style.overflow='';setTimeout(()=>{if(!p.classList.contains('open'))p.style.display='none';},240);}
document.addEventListener('click',function(e){if(menuOpen&&!e.target.closest('#nav-panel')&&!e.target.closest('#hamburger'))closeMenu();});
function scrollToSection(id){const el=document.getElementById(id);if(!el)return;const h=document.querySelector('nav').offsetHeight;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-h,behavior:'smooth'});}
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){const id=this.getAttribute('href').slice(1);if(id&&document.getElementById(id)){e.preventDefault();scrollToSection(id);}});});
const mainNav=document.querySelector('nav');
window.addEventListener('scroll',()=>{mainNav.style.boxShadow=window.scrollY>40?'0 1px 24px rgba(25,57,101,0.16)':'0 1px 20px rgba(25,57,101,0.1)';});
function toggleFaq(btn){const item=btn.closest('.faq-item');const open=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));if(!open)item.classList.add('open');}
const revObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revObs.unobserve(e.target);}});},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));
function animateCounter(el){const target=parseInt(el.dataset.target);const prefix=el.dataset.prefix||'';const suffix=el.dataset.suffix||'';const comma=el.dataset.comma==='true';const s=performance.now();const fmt=n=>prefix+(comma?Math.round(n).toLocaleString('en-KE'):Math.round(n))+suffix;const step=now=>{const p=Math.min((now-s)/1800,1);el.textContent=fmt((1-Math.pow(1-p,3))*target);if(p<1)requestAnimationFrame(step);};requestAnimationFrame(step);}
const cObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){animateCounter(e.target);cObs.unobserve(e.target);}});},{threshold:0.4});
document.querySelectorAll('[data-target]').forEach(el=>cObs.observe(el));
(function(){
  // Wavy grid — many small boxes with deep 〰️ curves
  const isMobileViewport = window.matchMedia('(max-width:860px)').matches;
  const CELL    = isMobileViewport ? 34 : 28;      // smaller cells = more boxes
  const SPEED   = 0.00038;
  const AMP_H   = 18;      // deep horizontal wave
  const AMP_V   = 18;      // deep vertical wave
  const FREQ    = 0.22;    // tighter frequency = more curves per line
  const LW      = isMobileViewport ? 1.1 : 0.75;
  const ALPHA   = isMobileViewport ? 0.26 : 0.15;

  function init(wrap){
    const canvas = wrap.querySelector('.wave-canvas');
    if(!canvas) return;
    const sec = wrap.parentElement;
    const ctx  = canvas.getContext('2d');
    let W, H, cols, rows, raf, active = false;
    let t = Math.random() * 600;

    function resize(){
      W = sec.offsetWidth;
      H = sec.offsetHeight;
      canvas.width  = W;
      canvas.height = H;
      cols = Math.ceil(W / CELL) + 2;
      rows = Math.ceil(H / CELL) + 2;
    }

    // Distorted grid point — both axes wave deeply
    function pt(c, r){
      const bx = c * CELL;
      const by = r * CELL;
      // Horizontal lines ripple up/down — deep vertical displacement
      const dy = Math.sin(c * FREQ + t + r * 0.28) * AMP_V
               + Math.sin(r * FREQ * 0.55 + t * 1.35 + c * 0.15) * AMP_V * 0.5;
      // Vertical lines ripple left/right — deep horizontal displacement
      const dx = Math.sin(r * FREQ + t + c * 0.28) * AMP_H
               + Math.sin(c * FREQ * 0.55 + t * 1.2 + r * 0.15) * AMP_H * 0.5;
      return [bx + dx, by + dy];
    }

    function draw(){
      if(!active) return;
      t += SPEED * 16;
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = LW;

      // Horizontal lines
      for(let r = 0; r <= rows; r++){
        const pulse = Math.sin(r * 0.4 + t * 1.0) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(255,105,0,${ALPHA * (0.5 + pulse * 0.8)})`;
        ctx.beginPath();
        for(let c = 0; c <= cols; c++){
          const [x, y] = pt(c, r);
          c === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Vertical lines
      for(let c = 0; c <= cols; c++){
        const pulse = Math.sin(c * 0.4 + t * 0.85) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(255,105,0,${ALPHA * (0.5 + pulse * 0.8)})`;
        ctx.beginPath();
        for(let r = 0; r <= rows; r++){
          const [x, y] = pt(c, r);
          r === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    }

    function start(){
      if(active) return;
      active = true;
      resize();
      canvas.classList.add('visible');
      raf = requestAnimationFrame(draw);
    }

    function stop(){
      active = false;
      canvas.classList.remove('visible');
      if(raf) cancelAnimationFrame(raf);
    }

    window.addEventListener('resize', ()=>{ if(active) resize(); });

    const obs = new IntersectionObserver(entries=>{
      entries[0].isIntersecting ? start() : stop();
    }, { threshold: 0.05 });
    obs.observe(sec);
  }

  document.querySelectorAll('.wave-wrap').forEach(init);
})();
(function(){
  let cur=1,adsHist=null;
  function s3(){return adsHist==='running'?'3a':adsHist==='stopped'?'3b':'3c';}
  function show(s){
    document.querySelectorAll('.fp-step').forEach(el=>el.classList.remove('active'));
    document.getElementById('fp-step-'+s).classList.add('active');
    cur=s;
    const n=(['3a','3b','3c'].includes(String(s)))?3:(s==='thankyou'?6:parseInt(s));
    document.getElementById('fp-bar').style.width=Math.min((n/5)*100,100)+'%';
    document.querySelectorAll('.fp-step-labels span').forEach(el=>el.classList.toggle('active',parseInt(el.dataset.step)<=n));
    const nb=document.getElementById('fp-nav-btns'),note=document.getElementById('fp-footer-note'),back=document.getElementById('fp-back'),cont=document.getElementById('fp-continue');
    if(s==='thankyou'){nb.style.display='none';if(note)note.style.display='none';}
    else{nb.style.display='flex';if(note)note.style.display='block';back.disabled=(s===1||s==='1');cont.textContent=(s===5||s==='5')?'Book My Strategy Call':'Continue';}
  }
  function validate(s){
    if(s===1||s==='1'){const ids=['f-biz-name','f-name','f-phone','f-email','f-location','f-biz-type'];for(const id of ids){const el=document.getElementById(id);if(!el.value.trim()){el.focus();el.style.borderColor='#e05a2b';setTimeout(()=>el.style.borderColor='',1800);return false;}}return true;}
    if(s===2||s==='2'){if(!adsHist){alert('Please select an option to continue.');return false;}}
    return true;
  }
  window.fpNext=function(){if(!validate(cur))return;if(cur===1||cur==='1'){show(2);return;}if(cur===2||cur==='2'){show(s3());return;}if(['3a','3b','3c'].includes(String(cur))){show(4);return;}if(cur===4){show(5);return;}if(cur===5){show('thankyou');return;}};
  window.fpBack=function(){if(cur===2){show(1);return;}if(['3a','3b','3c'].includes(String(cur))){show(2);return;}if(cur===4){show(s3());return;}if(cur===5){show(4);return;}};
  document.querySelectorAll('.fp-options:not(.multi) .fp-option').forEach(opt=>{opt.addEventListener('click',function(){this.closest('.fp-options').querySelectorAll('.fp-option').forEach(o=>o.classList.remove('selected'));this.classList.add('selected');if(this.closest('#f-ads-history'))adsHist=this.dataset.val;if(this.closest('#f-service-interest'))document.getElementById('meta-note').style.display=this.dataset.val==='meta'?'block':'none';if(this.closest('#f-why-stopped'))document.getElementById('f-stopped-other-wrap').style.display=this.dataset.val==='other'?'flex':'none';});});
  document.querySelectorAll('.fp-options.multi .fp-option').forEach(opt=>{opt.addEventListener('click',function(){this.classList.toggle('selected');});});
  document.getElementById('f-biz-type').addEventListener('change',function(){document.getElementById('f-other-wrap').style.display=this.value==='Other'?'flex':'none';});
  show(1);
})();
