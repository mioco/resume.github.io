!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){const o=viewer.offsetWidth,n=viewer.offsetHeight,i=new THREE.PerspectiveCamera(45,o/n,.1,1e3);i.position.set(10,1,10),i.lookAt(0,1.5,0);const s=new THREE.Scene;s.background=new THREE.Color(2236962);const r=new THREE.OrbitControls(i),a=new THREE.Clock;let c;const l=new THREE.WebGLRenderer;l.setPixelRatio(window.devicePixelRatio),l.setSize(o,n),viewer.appendChild(l.domElement),requestAnimationFrame(function e(){performance.now();i.lookAt(0,1.5,0),r.update(),function(){const e=a.getDelta();r.update(),c&&c.update(e),l.render(s,i)}(),requestAnimationFrame(e)});const p=new THREE.HemisphereLight(16777215,16777215,.6);p.color.setHSL(.6,1,.6),p.groundColor.setHSL(.095,1,.75),p.position.set(0,50,0),s.add(p),hemiLightHelper=new THREE.HemisphereLightHelper(p,10),s.add(hemiLightHelper);const u=new THREE.DirectionalLight(16777215,1);u.color.setHSL(.1,1,.95),u.position.set(-1,1.75,1),u.position.multiplyScalar(30),s.add(u);const d="AIzaSyDA-gZYybzoSjtuF9WhphZ89mcvXNUKqC0";!function(e){const t=`https://poly.googleapis.com/v1/assets/${e}/?key=${d}`,o=new XMLHttpRequest;o.open("GET",t,!0),o.addEventListener("load",function(t){const o=JSON.parse(t.target.response);asset_name.textContent=o.displayName,asset_author.textContent=o.authorName,asset_name_url.href=`https://poly.google.com/view/${e}`;const n=o.formats.find(e=>"GLTF"===e.formatType);if(void 0!==n){const e=n.root.url;(new THREE.LegacyGLTFLoader).load(e,function(e){s.add(e.scene)})}}),o.send(null)}("2AoABqMjQih"),(new THREE.JSONLoader).load("src/assets/sittingBox.js",function(e){const t=new THREE.MeshPhongMaterial({color:0,specular:16777215,shininess:50,morphTargets:!0,side:THREE.DoubleSide,flatShading:!0}),o=new THREE.Mesh(e,t);(c=new THREE.AnimationMixer(o)).clipAction(e.animations[0]).setDuration(10).play();o.scale.set(.7,.7,.7),o.position.set(4.5,-.3,5.5),s.add(o)})}]);