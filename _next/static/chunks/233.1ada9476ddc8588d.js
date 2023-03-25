"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{7233:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var i=a(5893),s=a(799),r=a(2260),l=a.n(r),n=a(7294);let h={MAP_TIP_TOP:"maptiptop",MAP_TIP_CENTER:"maptipcenter",MAP_TIP_BOTTOM:"maptipbottom",CHEST:"maptipchest",CHARACTER:"character"};class o extends Phaser.Scene{constructor(){super({key:"Main",active:!0}),this.levelValue=1,this.moveInfo=null,this.makeTiles=()=>{this.tiles=this.add.group();let e=document.getElementById("mainContainer").getBoundingClientRect().height,t=Math.floor(e/32);this.tiles.add(this.add.image(32,16,h.MAP_TIP_TOP));for(let e=1;e<t-1;e++)this.tiles.add(this.add.image(32,16+32*e,h.MAP_TIP_CENTER));this.tiles.add(this.add.image(32,16+32*(t-1),h.MAP_TIP_BOTTOM))},this.destroyTiles=()=>{var e;null===(e=this.tiles)||void 0===e||e.destroy(!0,!0)},this.setLevelPosition=()=>{this.level.setPosition(this.character.x,this.character.y-34)},this.levelUp=()=>{this.levelValue<99&&(this.levelValue+=1,this.levelDom.firstChild.textContent="Lv ".concat(this.levelValue))},this.remake=()=>{this.destroyTiles(),this.makeTiles(),this.cameraMarginTop=document.getElementById("mainVisual").getBoundingClientRect().height-48},this.preload=()=>{this.load.image(h.MAP_TIP_TOP,"./phaser/top.png"),this.load.image(h.MAP_TIP_CENTER,"./phaser/center.png"),this.load.image(h.MAP_TIP_BOTTOM,"./phaser/bottom.png"),this.load.image(h.CHEST,"./phaser/chest.png"),this.load.spritesheet(h.CHARACTER,"./phaser/character.png",{frameWidth:32,frameHeight:32})},this.create=()=>{this.anims.create({key:"".concat(h.CHARACTER,"-walk-down"),frames:[{key:h.CHARACTER,frame:0},{key:h.CHARACTER,frame:1},{key:h.CHARACTER,frame:2},{key:h.CHARACTER,frame:1}],frameRate:7,repeat:-1}),this.anims.create({key:"".concat(h.CHARACTER,"-walk-up"),frames:[{key:h.CHARACTER,frame:9},{key:h.CHARACTER,frame:10},{key:h.CHARACTER,frame:11},{key:h.CHARACTER,frame:10}],frameRate:7,repeat:-1}),this.anims.create({key:"".concat(h.CHARACTER,"-idle-down"),frames:[{key:h.CHARACTER,frame:1}],frameRate:0,repeat:-1}),this.anims.create({key:"".concat(h.CHARACTER,"-idle-up"),frames:[{key:h.CHARACTER,frame:10}],frameRate:0,repeat:-1});let e=()=>{let e=document.getElementById("mainContainer").getBoundingClientRect().height,t=window.scrollY+window.innerHeight/2-this.cameraMarginTop;return t<32?32:t>e-32?e-32:t};this.character=this.add.sprite(32,e(),h.CHARACTER).setDepth(2),this.chest=this.add.image(32,e(),h.CHEST).setDepth(1);let t=document.createElement("p");t.style.lineHeight="1",t.style.width="100%",t.style.height="100%",t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center",t.innerText="Lv ".concat(this.levelValue),this.levelDom=document.createElement("div"),this.levelDom.style.width="60px",this.levelDom.style.height="24px",this.levelDom.style.fontFamily="PixelMplus10-Regular",this.levelDom.style.backgroundColor="#fff",this.levelDom.style.border="2px solid #000",this.levelDom.style.borderRadius="4px",this.levelDom.appendChild(t),this.level=this.add.dom(0,0,this.levelDom),this.setLevelPosition(),window.addEventListener("scroll",()=>{this.moveInfo={targetY:e()},this.chest.setY(e())},{passive:!0}),this.cameras.main.scrollY=window.scrollY-this.cameraMarginTop,window.addEventListener("scroll",()=>{this.cameras.main.scrollY=window.scrollY-this.cameraMarginTop},{passive:!0}),this.makeTiles(),this.character.play("".concat(h.CHARACTER,"-idle-down"),!0),document.getElementById("canvas").style.opacity="1"},this.update=()=>{if(this.moveInfo){let e=!1;this.character.y<this.moveInfo.targetY?(this.character.y+=3,this.character.play("".concat(h.CHARACTER,"-walk-down"),!0),this.character.y>=this.moveInfo.targetY&&(this.character.y=this.moveInfo.targetY,e=!0,this.character.play("".concat(h.CHARACTER,"-idle-down"),!0))):this.character.y>this.moveInfo.targetY&&(this.character.y-=3,this.character.play("".concat(h.CHARACTER,"-walk-up"),!0),this.character.y<=this.moveInfo.targetY&&(this.character.y=this.moveInfo.targetY,e=!0,this.character.play("".concat(h.CHARACTER,"-idle-up"),!0))),e&&(this.moveInfo=null,this.levelUp()),this.setLevelPosition()}},this.cameraMarginTop=document.getElementById("mainVisual").getBoundingClientRect().height-48,window.addEventListener("resize",()=>{this.remake()})}}let c={type:l().AUTO,parent:"canvas",transparent:!0,dom:{createContainer:!0},backgroundColor:"#000000",pixelArt:!0,scale:{mode:l().Scale.ScaleModes.RESIZE,width:64,height:window.innerHeight},scene:[o]};function m(){let e=(0,n.useRef)(null),t=(0,n.useRef)(!1),{languageKey:a}=(0,s.Qg)();return(0,n.useEffect)(()=>{t.current||(t.current=!0,e.current=new(l()).Game(c))},[]),(0,n.useEffect)(()=>{var t;let a=null===(t=e.current)||void 0===t?void 0:t.scene.getScene("Main");a&&setTimeout(()=>{a.remake()},100)},[a]),(0,i.jsx)(i.Fragment,{})}}}]);