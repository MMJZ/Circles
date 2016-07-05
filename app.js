!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/circles/",t(0)}([function(e,t,n){n(6),n(3)},function(e,t){e.exports=function(){var e={tickLength:20,playerRadius:20,playerMaxSpeed:20,playerAcceleration:.2,outerBoundarySize:8e3,gameLength:4e4,maxLag:1e4};return e.maxTime=e.gameLength/e.tickLength,e.boundarySpeed=e.outerBoundarySize/(4*e.maxTime),e.innerBoundaryStart=e.outerBoundarySize/4,e.centrePoint=e.outerBoundarySize/2,e.getInnerBoundaryPosition=function(t){return e.innerBoundaryStart+t*e.boundarySpeed},e.getOuterBoundaryPosition=function(t){return t*e.boundarySpeed},e.getOuterBoundaryRadius=function(t){return e.centrePoint-t*e.boundarySpeed},e.getInnerBoundaryRadius=function(t){return e.centrePoint-t*e.boundarySpeed-e.innerBoundaryStart},e.getSecondsLeft=function(t){return Math.ceil((1-t/e.maxTime)*e.gameLength/1e3)},e.getExplosionRadius=function(e){return 12*e},e}},function(e,t){e.exports=function(){var e={},t={input:document.getElementById("nameInput"),playButton:document.getElementById("playButton"),startScreen:document.getElementById("startScreen"),message:document.getElementById("message"),leaderboard:document.getElementById("leaderboard"),leaderlist:document.getElementById("leaderlist")},n={threshold:35,inProgress:0,startX:0,startY:0},o={left:!1,right:!1,up:!1,down:!1};e.bindPlayButton=function(e){t.playButton.addEventListener("click",e),t.input.addEventListener("keypress",function(t){13===t.keyCode&&e.call()})},e.bindWindowResize=function(e,t){e(t),window.addEventListener("resize",function(){e(t)})};var r;e.userControlEvents={bindActions:function(e){r=e,a.bindActions(),i.bindActions()},unbindActions:function(){a.unbindActions(),i.unbindActions()}};var i={bindActions:function(){window.addEventListener("touchstart",this.touchStartHandler),window.addEventListener("touchmove",this.touchMoveHandler),window.addEventListener("touchend",this.touchEndHandler)},unbindActions:function(){window.removeEventListener("touchstart",this.touchStartHandler),window.removeEventListener("touchmove",this.touchMoveHandler),window.removeEventListener("touchend",this.touchEndHandler)},touchStartHandler:function(e){if(e.preventDefault(),1===e.touches.length){var t=e.touches[0];t.startX=t.screenX,t.startY=t.screenY}r(o)},touchMoveHandler:function(e){e.preventDefault();var t=e.touches[0].screenX-n.startX,i=e.touches[0].screenY-n.startY;t>n.threshold?o.right=!0:o.right=!1,t<-n.threshold?o.left=!0:o.left=!1,i>n.threshold?o.down=!0:o.down=!1,i<-n.threshold?o.up=!0:o.up=!1,r(o)},touchEndHandler:function(e){e.preventDefault(),0===e.touches.length&&(o={left:!1,right:!1,up:!1,down:!1}),r(o)}},a={bindActions:function(){window.addEventListener("keydown",this.keydownHandler),window.addEventListener("keyup",this.keyupHandler)},unbindActions:function(){window.removeEventListener("keydown",this.keydownHandler),window.removeEventListener("keyup",this.keyupHandler)},keydownHandler:function(e){if(!e.repeat){switch(e.keyCode){case 37:case 65:o.left=!0;break;case 38:case 87:o.up=!0;break;case 39:case 68:o.right=!0;break;case 40:case 83:o.down=!0}r(o)}},keyupHandler:function(e){switch(e.keyCode){case 37:case 65:o.left=!1;break;case 38:case 87:o.up=!1;break;case 39:case 68:o.right=!1;break;case 40:case 83:o.down=!1}r(o)}};return e.showStartScreen=function(){t.startScreen.addEventListener("animationend",function(){t.startScreen.className=""},!1),t.startScreen.className="",window.focus()},e.hideStartScreen=function(){t.startScreen.addEventListener("animationend",function(){t.startScreen.className="hidden"},!1),t.startScreen.className="animateHide",window.focus()},e.showStartMessage=function(e){t.message.innerHTML=e},e.updateLeaderboard=function(e,n){if(0===e.length)t.leaderboard.className="hidden";else{t.leaderboard.className="",t.leaderlist.innerHTML="";for(var o,r,i=0;i<e.length;i++)o=document.createElement("li"),r=e[i].name+" ("+e[i].score+")",e[i].id===n&&(o.className="you"),o.appendChild(document.createTextNode(r)),t.leaderlist.appendChild(o)}},e}},function(e,t,n){var o=n(5)();o.init()},function(e,t,n){e.exports=function(e){var t,o,r,i,a={},c=n(1)(),d="#fafafa",s="#1a1a1a",u="#5599BB",l="bold 20pt Source Sans Pro",f=200,h=document.getElementById(e),m=h.getContext("2d"),p=document.createElement("canvas"),w=p.getContext("2d"),g=!0,y={left:0,right:0,top:0,bottom:0,centreX:0,centreY:0};a.canvas=h,a.setTime=function(e){o=e},a.incTime=function(e){o+=e},a.currentFrame=function(e,n){m.setTransform(t,0,0,t,0,0),m.translate(-y.left,-y.top),S(),m.globalCompositeOperation="xor",m.font="200px Montserrat Alternates",m.textBaseline="middle",P(g,c.centrePoint),x(),m.globalCompositeOperation="source-over",b(),B(),v(e,n)};var v=function(e,t){m.font=l,m.textBaseline="alphabetic",m.textAlign="center",m.shadowBlur=1;for(var n,o,r=0;r<e.length;r++)n=e[r],n.id!==t.id&&(o=g===n.inner,R(n.pos.x,n.pos.y,n.name,o,!1));R(t.x,t.y,t.name,!0,!0),m.shadowBlur=0};a.clearA=function(){m.setTransform(1,0,0,1,0,0),m.clearRect(0,0,h.width,h.height)};var S=function(){m.clearRect(y.left,y.top,window.innerWidth,window.innerHeight)},b=function(){var e=y.left-(y.left+f+.5)%f,t=y.top-(y.top+f+.5)%f;e=(0|e)+.5,t=(0|t)+.5,m.strokeStyle="#aaa",m.lineWidth=1;var n;for(m.beginPath(),n=e;n<y.right;n+=f)m.moveTo(n,y.top),m.lineTo(n,y.bottom);for(n=t;n<y.bottom;n+=f)m.moveTo(y.left,n),m.lineTo(y.right,n);m.stroke()},x=function(){m.fillStyle=g?s:d,m.beginPath(),m.arc(c.centrePoint,c.centrePoint,c.getOuterBoundaryRadius(o),0,2*Math.PI),m.arc(c.centrePoint,c.centrePoint,c.getInnerBoundaryRadius(o),0,2*Math.PI,!0),m.fill()},P=function(){m.fillStyle=g?s:d,m.fillText(c.getSecondsLeft(o),c.centrePoint,c.centrePoint)},k=150,B=function(){var e=c.getExplosionRadius(o),t=c.getOuterBoundaryRadius(o),n=Math.max(e-k,0),r=Math.min(e,t);if(n<=t){var i=m.createRadialGradient(c.centrePoint,c.centrePoint,r,c.centrePoint,c.centrePoint,n);i.addColorStop(1,"transparent"),i.addColorStop(0,"#aaa"),m.fillStyle=i,m.beginPath(),m.arc(c.centrePoint,c.centrePoint,r,0,2*Math.PI,!0),m.arc(c.centrePoint,c.centrePoint,n,0,2*Math.PI,!1),m.closePath(),m.fill()}},E=function(e,t,n,o){void 0!==o&&(w.fillStyle=o),w.beginPath(),w.arc(e,t,n,0,2*Math.PI,!0),w.closePath(),w.fill()},L=c.playerRadius+1,A=function(){p.width=6*L*t,p.height=2*L*t,E(L,L,L-1,s),E(3*L,L,L-1,d),E(5*L,L,L-1,u)},R=function(e,t,n,o,r){var i=r?4*L:o?0:2*L;m.drawImage(p,i,0,2*L,2*L,e-L,t-L,2*L,2*L),m.fillStyle=r?u:o?s:d,m.shadowColor=r?"transparent":o?d:s,m.fillText(n,e,t-32)};return a.resize=function(e){var n=window.devicePixelRatio||1,o=m.webkitBackingStorePixelRatio||m.mozBackingStorePixelRatio||m.msBackingStorePixelRatio||m.oBackingStorePixelRatio||m.backingStorePixelRatio||1;t=n/o,r=window.innerWidth,i=window.innerHeight,h.width=r*t,h.height=i*t,h.style.width=r+"px",h.style.height=i+"px",A(),y.centreX=r/2,y.centreY=i/2,e.call()},a.swapColours=function(){g=!g;var e=g?d:s;document.body.style.backgroundColor=e},a.setView=function(e){y.left=e.x-y.centreX,y.top=e.y-y.centreY,y.right=e.x+y.centreX,y.bottom=e.y+y.centreY},a}},function(e,t,n){e.exports=function(){var e,t,o,r={},i=n(4)("canvas"),a=n(2)(),c=n(1)(),d={name:void 0,id:void 0},s=[];r.init=function(){a.bindPlayButton(r.begin),a.bindWindowResize(i.resize,function(){e?i.currentFrame(s,d):i.clearA()})},r.begin=function(){var e=/^\w*$/,t=document.getElementById("nameInput").value;if(e.test(t)){var n=window.navigator.platform.toUpperCase().indexOf("MAC")>=0;n&&(t+="IsADick"),d.name=t||"anon",r.server.connect()}else a.showStartMessage("nickname must be alphanumeric")};var u;return r.server={connect:function(){try{u=io("http://circles-nerdycouple.rhcloud.com:8000",{reconnection:!1}),a.showStartMessage("connecting..."),u.on("connect",function(){a.showStartMessage("connected"),d.id="/#"+u.id,u.emit("nick",d)}),u.on("ready",function(){r.startForRealz()}),u.on("update",function(e,t){s=e,i.setTime(t),r.setViewAndPlayer()}),u.on("endRound",function(e){a.updateLeaderboard(e),i.swapColours()}),u.on("kick",function(e){o=e}),u.on("ping",function(e){u.emit("pong",e)}),u.on("disconnect",function(){r.end()})}catch(e){e instanceof ReferenceError?a.showStartMessage("server is down :("):a.showStartMessage("I have no idea what went wrong ¯\\_(ツ)_/¯")}},update:function(e){u.emit("update",e)}},r.physics=function(){var e,n,o=window.performance.now(),r=o-t;e=r/c.tickLength;for(var a=0;a<s.length;a++)n=s[a],n.pos.x+=n.vel.x*e,n.pos.y+=n.vel.y*e,n.id===d.id&&(d.x=n.pos.x,d.y=n.pos.y);i.setView(d),i.incTime(e),t=o},r.startForRealz=function(){var n=function(){e=window.requestAnimationFrame(n),i.currentFrame(s,d),r.physics()};t=window.performance.now(),a.hideStartScreen(),a.userControlEvents.bindActions(r.server.update),n()},r.end=function(){window.cancelAnimationFrame(e),i.clearA(),a.showStartScreen(),a.userControlEvents.unbindActions(),a.showStartMessage(o),document.body.style.backgroundColor=i.white},r.setViewAndPlayer=function(){var e=s.find(function(e){return e.id===d.id});null!=e&&(d.x=e.pos.x,d.y=e.pos.y,i.setView(d))},r}},function(e,t){}]);