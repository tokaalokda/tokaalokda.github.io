/* Shared navigation and one light/dark switch across the main website. */
(function(){
  'use strict';
  const root=document.documentElement;
  const key='toka-jekyll-color-mode';
  let preference='light';
  try{const stored=localStorage.getItem(key);if(stored==='light'||stored==='dark')preference=stored;}catch(e){}
  root.dataset.siteTheme=preference;
  function theme(mode, save){
    root.dataset.siteTheme=mode;
    if(save){try{localStorage.setItem(key,mode);}catch(e){}}
    const btn=document.getElementById('cosmos-theme-btn');
    if(btn){btn.innerHTML=mode==='dark'?'☀ <span>Light mode</span>':'☾ <span>Dark mode</span>';
      btn.setAttribute('aria-label',mode==='dark'?'Switch website to light mode':'Switch website to dark mode');}
    window.dispatchEvent(new CustomEvent('toka:themechange',{detail:{theme:mode}}));
  }
  function init(){
    if(document.getElementById('cosmos-sitebar'))return;
    // Hide earlier theme controls if an older page is still cached.
    const old=document.getElementById('site-theme-control');if(old)old.remove();
    const path=location.pathname;
    const current=/research\.html$/.test(path)?'research':/publications\.html$/.test(path)?'publications':/cvpdf\.html$/.test(path)?'cv':/about\.html$/.test(path)?'trivia':'home';
    const links=[['home','Home','/'],['research','Research','/research.html'],['publications','Publications','/publications.html'],['cv','CV','/cvpdf.html'],['trivia','Trivia','/about.html']];
    const bar=document.createElement('div');bar.className='cosmos-sitebar';bar.id='cosmos-sitebar';
    const brand=document.createElement('a');brand.className='cosmos-brand';brand.href='/';brand.setAttribute('aria-label','Toka Alokda — home');
    brand.innerHTML='<svg aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 16C19.7 11.7 25.7 12.1 27.4 16.4C29.8 22.6 23.6 28.5 16.1 27.1" stroke="currentColor" stroke-width="2.15" stroke-linecap="round"/><path d="M16 16C12.3 20.3 6.3 19.9 4.6 15.6C2.2 9.4 8.4 3.5 15.9 4.9" stroke="currentColor" stroke-width="2.15" stroke-linecap="round"/><path d="M16 16C20.7 17.3 21.6 21.4 18.9 23.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".75"/><path d="M16 16C11.3 14.7 10.4 10.6 13.1 8.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".75"/><circle cx="16" cy="16" r="2.5" fill="currentColor"/></svg><span>TOKA ALOKDA</span>';
    bar.appendChild(brand);
    const nav=document.createElement('nav');nav.className='cosmos-navlinks';nav.setAttribute('aria-label','Website pages');
    for(const [id,label,url] of links){const a=document.createElement('a');a.href=url;a.textContent=label;
      if(id===current)a.setAttribute('aria-current','page');
      nav.appendChild(a)}
    bar.appendChild(nav);
    const btn=document.createElement('button');btn.className='cosmos-theme-btn';btn.type='button';btn.id='cosmos-theme-btn';
    btn.addEventListener('click',()=>theme(root.dataset.siteTheme==='dark'?'light':'dark',true));bar.appendChild(btn);
    document.body.insertBefore(bar,document.body.firstChild);
    theme(preference,true);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();
