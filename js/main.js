'use strict';
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();toggle.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
window.matchMedia('(min-width: 801px)').addEventListener('change',closeMenu);
const links=[...nav.querySelectorAll('a')];
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}},{rootMargin:'-15% 0px -65% 0px',threshold:0});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));}
