(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{507:function(t,a,i){},633:function(t,a,i){"use strict";var e=i(507);i.n(e).a},724:function(t,a,i){"use strict";i.r(a);i(135),i(136);var e={name:"hollow-two-circle",data:function(){return{width:300,height:100,radio:10,dashed:!0,position:"horizontal",distance:60,positions:["horizontal","vertical"],color1:"#00adb5",color2:"#eeeeee",shadow:!0}},computed:{style:function(){switch(this.position){case"horizontal":return".hollow-two-circles {\n  width: ".concat(this.width,"px;\n  height: ").concat(this.height,"px;\n  position: relative;\n  background: radial-gradient(circle at right top, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) top left / ").concat(this.distance,"px 51% no-repeat,\n    radial-gradient(circle at right bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) bottom left /").concat(this.distance,"px 51% no-repeat,\n    radial-gradient(circle at left top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) top right /").concat(this.width-this.distance,"px 51% no-repeat,\n    radial-gradient(circle at left bottom, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom right /").concat(this.width-this.distance,"px 51% no-repeat;\n   ").concat(this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":"","\n}\n\n").concat(this.dashed?".hollow-two-circles::after {\n  content: '';\n  height: ".concat(this.height-2*this.radio,"px;\n  border: 1px dashed #fff;\n  position: absolute;\n  left: ").concat(this.distance,"px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}"):"","\n");case"vertical":return".hollow-two-circles {\n  width: ".concat(this.width,"px;\n  height: ").concat(this.height,"px;\n  position: relative;\n  background: radial-gradient(circle at right bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) top right / 51% ").concat(this.distance,"px no-repeat,\n    radial-gradient(circle at left bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) top left / 51% ").concat(this.distance,"px no-repeat,\n    radial-gradient(circle at right top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom right / 51% ").concat(this.height-this.distance,"px no-repeat,\n    radial-gradient(circle at left top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom left / 51% ").concat(this.height-this.distance,"px no-repeat;\n   ").concat(this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":"","\n}\n\n").concat(this.dashed?".hollow-two-circles::after {\n  content: '';\n  width: ".concat(this.width-2*this.radio,"px;\n  border: 1px dashed #fff;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: ").concat(this.distance,"px;\n  margin: auto;\n}"):"","\n")}}},watch:{style:function(){this.setStyle(),this.setStyleToBody()}},methods:{setStyle:function(){this.$refs.css.innerHTML=Prism.highlight(this.style,Prism.languages.css)},setStyleToBody:function(){document.querySelector("#hollow-two-circles-style").innerHTML=this.style}},mounted:function(){var t=this,a=document.createElement("style");a.setAttribute("id","hollow-two-circles-style"),document.head.appendChild(a),setTimeout((function(){t.setStyle(),t.setStyleToBody()}))}},n=(i(633),i(10)),s=Object(n.a)(e,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"key-value"},[i("span",{staticClass:"key"},[t._v("位置：")]),t._v(" "),t._l(t.positions,(function(a,e){return i("el-radio",{key:e,attrs:{label:a},model:{value:t.position,callback:function(a){t.position=a},expression:"position"}})}))],2),t._v(" "),i("div",{staticClass:"key-value"},[i("span",{staticClass:"key"},[t._v("宽度：")]),t._v(" "),i("el-input-number",{attrs:{size:"mini",min:100,max:500,label:"宽度"},model:{value:t.width,callback:function(a){t.width=a},expression:"width"}})],1),t._v(" "),i("div",{staticClass:"key-value"},[i("span",{staticClass:"key"},[t._v("长度：")]),t._v(" "),i("el-input-number",{attrs:{size:"mini",min:50,max:500,label:"长度"},model:{value:t.height,callback:function(a){t.height=a},expression:"height"}})],1),t._v(" "),i("div",{staticClass:"key-value"},[i("span",{staticClass:"key"},[t._v("距离：")]),t._v(" "),i("el-input-number",{attrs:{size:"mini",min:40,max:200,label:"距离"},model:{value:t.distance,callback:function(a){t.distance=a},expression:"distance"}})],1),t._v(" "),i("div",{staticClass:"key-value"},[i("span",{staticClass:"key"},[t._v("半径：")]),t._v(" "),i("el-input-number",{attrs:{size:"mini",min:1,max:20,label:"半径"},model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}})],1),t._v(" "),i("div",{staticClass:"key-value"},[i("span",{staticClass:"key"},[t._v("虚线：")]),t._v(" "),i("el-switch",{attrs:{"active-color":"#00adb5"},model:{value:t.dashed,callback:function(a){t.dashed=a},expression:"dashed"}}),t._v(" "),i("span",{staticStyle:{width:"100px"}}),t._v(" "),i("span",{staticClass:"key"},[t._v("阴影：")]),t._v(" "),i("el-switch",{attrs:{"active-color":"#00adb5"},model:{value:t.shadow,callback:function(a){t.shadow=a},expression:"shadow"}})],1),t._v(" "),i("div",{staticClass:"language-css extra-class"},[i("pre",{staticClass:"language-css"},[i("code",{ref:"css"})])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warpper"},[a("div",{staticClass:"hollow-two-circles"})])}],!1,null,"297409b4",null);a.default=s.exports}}]);