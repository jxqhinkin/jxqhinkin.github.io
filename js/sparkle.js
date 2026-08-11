/* Tiny sparkle on click + custom cursor */
(function(){
// Mini sparkles
document.addEventListener('click',function(e){
  for(var i=0;i<5;i++){
    var s=document.createElement('div');
    var size=2+Math.random()*3;
    var angle=Math.random()*Math.PI*2;
    var dist=10+Math.random()*20;
    s.style.cssText='position:fixed;z-index:99999;pointer-events:none;width:'+size+'px;height:'+size+'px;background:#ff9a9e;border-radius:50%;left:'+(e.clientX-size/2)+'px;top:'+(e.clientY-size/2)+'px;box-shadow:0 0 4px #ff6b6b;transition:all .6s ease-out;opacity:1';
    document.body.appendChild(s);
    requestAnimationFrame(function(){
      s.style.transform='translate('+(Math.cos(angle)*dist)+'px,'+(Math.sin(angle)*dist)+'px) scale(0)';
      s.style.opacity='0';
    });
    setTimeout(function(){s.remove()},700);
  }
});
// Cursor glow
var c=document.createElement('div');
c.style.cssText='position:fixed;z-index:99999;pointer-events:none;width:20px;height:20px;border-radius:50%;border:2px solid rgba(255,107,107,.4);transform:translate(-50%,-50%);transition:transform .05s linear;display:none';
c.id='glowCursor';
document.body.appendChild(c);
document.addEventListener('mousemove',function(e){
  var el=document.getElementById('glowCursor');
  if(el){el.style.display='block';el.style.left=e.clientX+'px';el.style.top=e.clientY+'px'}
});
document.addEventListener('mouseleave',function(){var el=document.getElementById('glowCursor');if(el)el.style.display='none'});
})();
