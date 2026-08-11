/* Lightweight sakura petals - ~1.5KB */
(function(){
var petals=[],max=12,winW=window.innerWidth;
var colors=['rgba(196,181,253,.6)','rgba(167,139,250,.5)','rgba(216,180,254,.7)','rgba(192,132,252,.4)'];
function Petal(){
  this.el=document.createElement('div');
  this.el.style.cssText='position:fixed;top:-30px;z-index:999;pointer-events:none;font-size:'+(12+Math.random()*10)+'px;opacity:'+(.4+Math.random()*.4)+';animation:sakuraFall '+(6+Math.random()*6)+'s linear infinite;animation-delay:'+(Math.random()*5)+'s;left:'+(Math.random()*winW)+'px;color:'+colors[Math.floor(Math.random()*4)];
  this.el.innerHTML='\u{1F338}';
  document.body.appendChild(this.el);
}
document.head.insertAdjacentHTML('beforeend','<style>@keyframes sakuraFall{0%{transform:translateY(0) rotate(0deg) scale(1)}25%{transform:translateY(25vh) rotate(90deg) scale(1.1) translateX('+(20+Math.random()*40)+'px)}50%{transform:translateY(60vh) rotate(200deg) scale(.9) translateX(-'+(10+Math.random()*20)+'px)}75%{transform:translateY(85vh) rotate(300deg) scale(1.05) translateX('+(5+Math.random()*30)+'px)}100%{transform:translateY(105vh) rotate(360deg) scale(.8)}}</style>');
for(var i=0;i<max;i++) petals.push(new Petal());
setInterval(function(){if(petals.length<max+3){petals.push(new Petal());if(petals.length>max+5)petals.shift()}},8000);
})();
