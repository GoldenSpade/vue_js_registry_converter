(function(t){function e(e){for(var a,i,o=e[0],r=e[1],u=e[2],b=0,p=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},c=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue_js_registry_converter/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=r;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),s=Object(a["e"])("div",{class:"header"},[Object(a["e"])("div",{class:"container"},[Object(a["e"])("h1",{class:"header__title"},"Конвертер регистров")])],-1),c={class:"main"},i={class:"container"},o={class:"forms-content"},r=Object(a["e"])("div",{class:"forms-content__title"},[Object(a["e"])("span",null,"Конвертер регистров"),Object(a["d"])(" - простой инструмент, который поможет Вам избавиться от рутинной работы и сэкономить время. ")],-1),u={class:"forms-content__forms-wrap"},l={class:"statistics"},b=Object(a["d"])(" Количество символов с пробелами: "),p={class:"buttons"},j={class:"description"},d={class:"description__text"},O={class:"description__item"},f=Object(a["d"])(" - все буквы станут большими. "),h={class:"description__item"},v=Object(a["d"])(" - все буквы станут маленькими. "),m={class:"description__item"},C=Object(a["d"])(" - каждое слово будет написано с большой буквы. "),_={class:"description__item"},k=Object(a["d"])(" - должен начинаться со строчной буквы, а первая буква каждого последующего слова должна быть заглавной. Все слова при этом пишутся слитно между собой. "),y={class:"description__item"},D=Object(a["d"])(" - чтобы писать в стиле snake_case, нужно просто заменить пробелы знаками подчеркивания. Все слова при этом пишутся строчными буквами. "),g={class:"description__item"},T=Object(a["d"])(" - kebab-case похож на snake_case, только в нем пробелы заменяются на дефисы. Слова также пишутся строчными буквами. "),w={class:"description__item"},S=Object(a["d"])(" - В PascalCase каждое слово начинается с заглавной буквы (в отличие от camelCase, где первое слово начинается со строчной). "),U={class:"description__item"},P=Object(a["d"])(" - все слова пишутся заглавными буквами, а пробелы заменяются знаками подчеркивания. Например: "),L=Object(a["e"])("span",null,"UPPER_CASE_SNAKE_CASE.",-1),B={class:"description__item"},$=Object(a["d"])(" - выполнит транслитерацию кириллицы в латиницу. "),E=Object(a["e"])("li",{class:"description__item"},[Object(a["e"])("span",null,"Очистить поля"),Object(a["d"])(" - очистка поля ввода. ")],-1);function x(t,e,n,x,A,K){var I=Object(a["g"])("button-upper-case"),M=Object(a["g"])("button-lower-case"),Y=Object(a["g"])("button-every-word-to-upper-case"),z=Object(a["g"])("button-camel-case"),J=Object(a["g"])("button-snake-case"),N=Object(a["g"])("button-kebab-case"),R=Object(a["g"])("button-pascal-case"),V=Object(a["g"])("button-upper-case-snake"),Z=Object(a["g"])("button-convert-to-latin"),F=Object(a["g"])("button-cleare");return Object(a["f"])(),Object(a["c"])(a["a"],null,[s,Object(a["e"])("main",c,[Object(a["e"])("div",i,[Object(a["e"])("div",o,[r,Object(a["e"])("div",u,[Object(a["j"])(Object(a["e"])("textarea",{class:"forms-content__form",placeholder:"Введите текст","onUpdate:modelValue":e[1]||(e[1]=function(t){return A.inputData=t})},null,512),[[a["i"],A.inputData]])])]),Object(a["e"])("div",l,[b,Object(a["e"])("span",null,Object(a["h"])(A.inputData.length),1)]),Object(a["e"])("div",p,[Object(a["e"])(I,{onToUpperCase:K.upperCase},null,8,["onToUpperCase"]),Object(a["e"])(M,{onToLowerCase:K.lowerCase},null,8,["onToLowerCase"]),Object(a["e"])(Y,{onEveryToUpper:K.everyToUpperCase},null,8,["onEveryToUpper"]),Object(a["e"])(z,{onToCamelCase:K.camelCase},null,8,["onToCamelCase"]),Object(a["e"])(J,{onToSnakeCase:K.snakeCase},null,8,["onToSnakeCase"]),Object(a["e"])(N,{onToKebabCase:K.kebabCase},null,8,["onToKebabCase"]),Object(a["e"])(R,{onToPascalCase:K.pascalCase},null,8,["onToPascalCase"]),Object(a["e"])(V,{onToUpperCaseSnake:K.upperAndSnake},null,8,["onToUpperCaseSnake"]),Object(a["e"])(Z,{onToLatin:K.convertToLatin},null,8,["onToLatin"]),Object(a["e"])(F,{onClearInput:K.clearInput},null,8,["onClearInput"])]),Object(a["e"])("div",j,[Object(a["e"])("ul",d,[Object(a["e"])("li",O,[Object(a["e"])("span",{class:1===this.id?"active-item":""},"Верхний регистр",2),f]),Object(a["e"])("li",h,[Object(a["e"])("span",{class:2===this.id?"active-item":""},"Нижний регистр",2),v]),Object(a["e"])("li",m,[Object(a["e"])("span",{class:3===this.id?"active-item":""},"Каждое слово с заглавной буквы",2),C]),Object(a["e"])("li",_,[Object(a["e"])("span",{class:4===this.id?"active-item":""},"camelCase",2),k]),Object(a["e"])("li",y,[Object(a["e"])("span",{class:5===this.id?"active-item":""},"snake_case",2),D]),Object(a["e"])("li",g,[Object(a["e"])("span",{class:6===this.id?"active-item":""},"kebab-case",2),T]),Object(a["e"])("li",w,[Object(a["e"])("span",{class:7===this.id?"active-item":""},"PascalCase",2),S]),Object(a["e"])("li",U,[Object(a["e"])("span",{class:8===this.id?"active-item":""},"Upper case & Snake",2),P,L]),Object(a["e"])("li",B,[Object(a["e"])("span",{class:9===this.id?"active-item":""},"Конвертировать в латиницу",2),$]),E])])])])],64)}n("a15b"),n("d81d"),n("ac1f"),n("1276"),n("5319");function A(t,e,n,s,c,i){return Object(a["f"])(),Object(a["c"])("button",{class:"buttons__btn",onClick:e[1]||(e[1]=function(e){return t.$emit("to-upper-case")})}," Верхний регистр ")}var K={emits:["to-upper-case"]};K.render=A;var I=K;function M(t,e,n,s,c,i){return Object(a["f"])(),Object(a["c"])("button",{class:"buttons__btn",onClick:e[1]||(e[1]=function(e){return t.$emit("to-lower-case")})}," Нижний регистр ")}var Y={emits:["to-lower-case"]};Y.render=M;var z=Y;function J(t,e,n,s,c,i){return Object(a["f"])(),Object(a["c"])("button",{class:"buttons__btn",onClick:e[1]||(e[1]=function(e){return t.$emit("every-to-upper")})},"Каждое Слово С Заглавной Буквы")}var N={};N.render=J;var R=N;function V(t,e,n,s,c,i){return Object(a["f"])(),Object(a["c"])("button",{class:"buttons__btn",onClick:e[1]||(e[1]=function(e){return t.$emit("to-camel-case")})}," CamelСase ")}var Z={emits:["to-camel-case"]};Z.render=V;var F=Z;function G(t,e,n,s,c,i){return Object(a["f"])(),Object(a["c"])("button",{class:"buttons__btn",onClick:e[1]||(e[1]=function(e){return t.$emit("to-snake-case")})}," snake_case ")}var W={emits:["to-snake-case"]};W.render=G;var q=W;function H(t,e,n,s,c,i){return Object(a["f"])(),Object(a["c"])("button",{class:"buttons__btn",onClick:e[1]||(e[1]=function(e){return t.$emit("to-kebab-case")})}," kebab-case ")}var Q={emits:["to-kebab-case"]};Q.render=H;var X=Q;function tt(t,e,n,s,c,i){return Object(a["f"])(),Object(a["c"])("button",{class:"buttons__btn",onClick:e[1]||(e[1]=function(e){return t.$emit("to-pascal-case")})}," PascalCase ")}var et={emits:["to-pascal-case"]};et.render=tt;var nt=et;function at(t,e,n,s,c,i){return Object(a["f"])(),Object(a["c"])("button",{class:"buttons__btn",onClick:e[1]||(e[1]=function(e){return t.$emit("to-upper-case-snake")})}," Upper case & Snake ")}var st={emits:["to-upper-case-snake"]};st.render=at;var ct=st;function it(t,e,n,s,c,i){return Object(a["f"])(),Object(a["c"])("button",{class:"buttons__btn",onClick:e[1]||(e[1]=function(e){return t.$emit("to-latin")})}," Конвертировать в латиницу ")}var ot={emits:["to-latin"]};ot.render=it;var rt=ot;function ut(t,e,n,s,c,i){return Object(a["f"])(),Object(a["c"])("button",{class:"buttons__btn buttons__last-btn",onClick:e[1]||(e[1]=function(e){return t.$emit("clear-input")})}," Очистить поле ввода ")}var lt={emits:["clear-input"]};lt.render=ut;var bt=lt,pt={data:function(){return{inputData:"",id:0}},methods:{upperCase:function(){this.inputData=this.inputData.toUpperCase(),this.id=1},lowerCase:function(){this.inputData=this.inputData.toLowerCase(),this.id=2},everyToUpperCase:function(){this.inputData?(this.inputData=this.inputData.split(" ").map((function(t){return t[0].toUpperCase()+t.substr(1)})).join(" "),this.id=3):this.id=3},camelCase:function(){if(this.inputData){var t=this.inputData.split(" ");this.inputData=t.map((function(t){return t[0].toUpperCase()+t.substr(1)})).join(" ").replace(/ /g,""),this.id=4}else this.id=4},snakeCase:function(){this.inputData=this.inputData.toLowerCase().replace(/ /g,"_"),this.id=5},kebabCase:function(){this.inputData=this.inputData.toLowerCase().replace(/ /g,"-"),this.id=6},pascalCase:function(){this.inputData?(this.inputData=this.inputData.split(" ").map((function(t){return t[0].toUpperCase()+t.substr(1)})).join(""),this.id=7):this.id=7},upperAndSnake:function(){this.inputData=this.inputData.toUpperCase().replace(/ /g,"_"),this.id=8},convertToLatin:function(){/[a-z]/i.test(this.inputData)&&(this.inputData=""),this.inputData=this.inputData.split("").map((function(t){return"А"===t?"A":"а"===t?"a":"Б"===t?"B":"б"===t?"b":"В"===t?"V":"в"===t?"v":"Г"===t?"G":"г"===t?"g":"Д"===t?"D":"д"===t?"d":"Е"===t?"E":"е"===t?"e":"Ё"===t?"Yo":"ё"===t?"yo":"Ж"===t?"Zh":"ж"===t?"zh":"З"===t?"Z":"з"===t?"z":"И"===t?"I":"и"===t?"i":"Й"===t?"Y":"й"===t?"y":"К"===t?"K":"к"===t?"k":"Л"===t?"L":"л"===t?"l":"М"===t?"M":"м"===t?"m":"Н"===t?"N":"н"===t?"n":"О"===t?"O":"о"===t?"o":"П"===t?"P":"п"===t?"p":"Р"===t?"R":"р"===t?"r":"С"===t?"S":"с"===t?"s":"Т"===t?"T":"т"===t?"t":"У"===t?"U":"у"===t?"u":"Ф"===t?"F":"ф"===t?"f":"Х"===t?"Kh":"х"===t?"kh":"Ц"===t?"Ts":"ц"===t?"ts":"Ч"===t?"Ch":"ч"===t?"ch":"Ш"===t?"Sh":"ш"===t?"sh":"Щ"===t?"Sch":"щ"===t?"sch":"Ъ"===t||"ъ"===t?"":"Ы"===t?"Y":"ы"===t?"y":"Ь"===t||"ь"===t?"":"Э"===t?"E":"э"===t?"e":"Ю"===t?"Yu":"ю"===t?"yu":"Я"===t?"Ya":"я"===t?"ya":" "===t?" ":void 0})).join(""),this.id=9},clearInput:function(){this.inputData="",this.id=0}},components:{ButtonUpperCase:I,ButtonLowerCase:z,ButtonEveryWordToUpperCase:R,ButtonCamelCase:F,ButtonSnakeCase:q,ButtonKebabCase:X,ButtonPascalCase:nt,ButtonUpperCaseSnake:ct,ButtonConvertToLatin:rt,ButtonCleare:bt}};pt.render=x;var jt=pt;n("7046");Object(a["b"])(jt).mount("#app")},7046:function(t,e,n){}});
//# sourceMappingURL=app.6506fdbf.js.map