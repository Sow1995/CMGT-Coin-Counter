(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(e,n,a){"use strict";a.r(n);var t={name:"Index",data:function(){return{name:null,isLoading:!1,errors:null}},props:{prevNames:String,error:String},created:function(){null!==this.prevNames&&(this.name=this.prevNames)},methods:{submitForm:function(){this.isLoading=!0;var e=new FormData;e.append("name",this.name),this.$inertia.post("/fetch",e)}},updated:function(){this.errors=this.error,null!==this.errors&&(this.isLoading=!1)}},s=(a(24),a(1)),i=Object(s.a)(t,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"text-center text-white"},[a("h1",{staticClass:"text-5xl"},[e._v("CMGT Coins")]),e._v(" "),a("p",{staticClass:"text-2xl"},[e._v("Hoeveel heb jij er?")]),e._v(" "),a("form",{staticClass:"relative text-gray-600 mt-4",on:{submit:function(n){return n.preventDefault(),e.submitForm(n)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"h-10 px-5 pr-10 rounded-full w-full text-sm focus:outline-none",class:e.isLoading?"bg-gray-300":"bg-white",attrs:{type:"search",name:"name",placeholder:"Jouw naam",disabled:e.isLoading},domProps:{value:e.name},on:{change:function(n){e.errors=null},input:function(n){n.target.composing||(e.name=n.target.value)}}}),e._v(" "),a("button",{staticClass:"absolute right-0 top-0 mt-3 mr-4 focus:outline-none",attrs:{type:"submit"}},[e.isLoading?e._e():a("svg",{staticClass:"h-4 w-4 fill-current",staticStyle:{"enable-background":"new 0 0 56.966 56.966"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 56.966 56.966","xml:space":"preserve",width:"512px",height:"512px"}},[a("path",{attrs:{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"}})]),e._v(" "),e.isLoading?a("div",{staticClass:"sk-circle h-4 w-4"},[a("div",{staticClass:"sk-circle1 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle2 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle3 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle4 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle5 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle6 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle7 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle8 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle9 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle10 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle11 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle12 sk-child"})]):e._e()])]),e._v(" "),e._m(0),e._v(" "),e.errors?a("p",{staticClass:"text-red-500 mt-4"},[e._v(e._s(e.errors))]):e._e()])}),[function(){var e=this.$createElement,n=this._self._c||e;return n("p",{staticClass:"text-sm mt-4"},[this._v("Voer de door jou gebruikte naam in, deze is hoofdlettergevoelig. "),n("br"),this._v("\n        Je kan ook meerdere namen opgeven door naam||naam in te voeren.\n    ")])}],!1,null,"0e713752",null);n.default=i.exports},24:function(e,n,a){"use strict";var t=a(4);a.n(t).a},25:function(e,n,a){(e.exports=a(6)(!1)).push([e.i,".sk-circle[data-v-0e713752] {\n  position: relative;\n}\n.sk-circle .sk-child[data-v-0e713752] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.sk-circle .sk-child[data-v-0e713752]:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay-data-v-0e713752 1.2s infinite ease-in-out both;\n  animation: sk-circleBounceDelay-data-v-0e713752 1.2s infinite ease-in-out both;\n}\n.sk-circle .sk-circle2[data-v-0e713752] {\n  transform: rotate(30deg);\n}\n.sk-circle .sk-circle3[data-v-0e713752] {\n  transform: rotate(60deg);\n}\n.sk-circle .sk-circle4[data-v-0e713752] {\n  transform: rotate(90deg);\n}\n.sk-circle .sk-circle5[data-v-0e713752] {\n  transform: rotate(120deg);\n}\n.sk-circle .sk-circle6[data-v-0e713752] {\n  transform: rotate(150deg);\n}\n.sk-circle .sk-circle7[data-v-0e713752] {\n  transform: rotate(180deg);\n}\n.sk-circle .sk-circle8[data-v-0e713752] {\n  transform: rotate(210deg);\n}\n.sk-circle .sk-circle9[data-v-0e713752] {\n  transform: rotate(240deg);\n}\n.sk-circle .sk-circle10[data-v-0e713752] {\n  transform: rotate(270deg);\n}\n.sk-circle .sk-circle11[data-v-0e713752] {\n  transform: rotate(300deg);\n}\n.sk-circle .sk-circle12[data-v-0e713752] {\n  transform: rotate(330deg);\n}\n.sk-circle .sk-circle2[data-v-0e713752]:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.sk-circle .sk-circle3[data-v-0e713752]:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.sk-circle .sk-circle4[data-v-0e713752]:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.sk-circle .sk-circle5[data-v-0e713752]:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.sk-circle .sk-circle6[data-v-0e713752]:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.sk-circle .sk-circle7[data-v-0e713752]:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.sk-circle .sk-circle8[data-v-0e713752]:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.sk-circle .sk-circle9[data-v-0e713752]:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.sk-circle .sk-circle10[data-v-0e713752]:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.sk-circle .sk-circle11[data-v-0e713752]:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.sk-circle .sk-circle12[data-v-0e713752]:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n@-webkit-keyframes sk-circleBounceDelay-data-v-0e713752 {\n0%, 80%, 100% {\n    transform: scale(0);\n}\n40% {\n    transform: scale(1);\n}\n}\n@keyframes sk-circleBounceDelay-data-v-0e713752 {\n0%, 80%, 100% {\n    transform: scale(0);\n}\n40% {\n    transform: scale(1);\n}\n}\n",""])},4:function(e,n,a){var t=a(25);"string"==typeof t&&(t=[[e.i,t,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(7)(t,s);t.locals&&(e.exports=t.locals)}}]);