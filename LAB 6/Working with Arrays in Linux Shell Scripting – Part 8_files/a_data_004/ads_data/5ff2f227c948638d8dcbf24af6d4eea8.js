(function(){'use strict';var h,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={ca:!0},ea={};try{ea.__proto__=da;ca=ea.ca;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function ha(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype}var l=this||self;function n(a,b,c){a=a.split(".");c=c||l;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ia(){}
function ka(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"array"==ka(a)}function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ma(a,b,c){return a.call.apply(a.bind,arguments)}function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=ma:r=na;return r.apply(null,arguments)}function oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var t=Date.now||function(){return+new Date};function u(a,b){function c(){}c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a};var pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},qa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};function ra(){return null};function sa(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function ta(a){var b={},c;for(c in a)b[c]=a[c];return b}var ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ua.length;f++)c=ua[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var wa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function xa(a,b){var c=0;a=wa(String(a)).split(".");b=wa(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=ya(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||ya(0==f[2].length,0==g[2].length)||ya(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c}function ya(a,b){return a<b?-1:a>b?1:0};function v(a,b){this.f=a===za&&b||"";this.g=Aa}v.prototype.j=!0;v.prototype.b=function(){return this.f.toString()};function Ba(a){if(a instanceof v&&a.constructor===v&&a.g===Aa)return a.f;ka(a);return"type_error:SafeUrl"}function Ca(a){var b=String(a.substr(0,4)).toLowerCase();0==("tel:"<b?-1:"tel:"==b?0:1)||(a="about:invalid#zClosurez");return new v(za,a)}var Da=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Ea(a){if(a instanceof v)return a;a="object"==typeof a&&a.j?a.b():String(a);Da.test(a)||(a="about:invalid#zClosurez");return new v(za,a)}var Aa={},za={};var y;a:{var Fa=l.navigator;if(Fa){var Ga=Fa.userAgent;if(Ga){y=Ga;break a}}y=""};function Ha(a,b){b=b instanceof v?b:Ea(b);a.href=Ba(b)};function Ia(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};function Ja(a){Ja[" "](a);return a}Ja[" "]=ia;function Ka(a,b){try{return Ja(a[b]),!0}catch(c){}return!1};var La=-1!=y.indexOf("Opera"),z=-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"),Ma=-1!=y.indexOf("Edge"),Na=-1!=y.indexOf("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&-1==y.indexOf("Edge"))&&!(-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"))&&-1==y.indexOf("Edge"),Oa=-1!=y.toLowerCase().indexOf("webkit")&&-1==y.indexOf("Edge");function Pa(){var a=l.document;return a?a.documentMode:void 0}var Qa;
a:{var Ra="",Sa=function(){var a=y;if(Na)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ma)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Oa)return/WebKit\/(\S+)/.exec(a);if(La)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Sa&&(Ra=Sa?Sa[1]:"");if(z){var Ta=Pa();if(null!=Ta&&Ta>parseFloat(Ra)){Qa=String(Ta);break a}}Qa=Ra}var Ua=Qa,Va={},Wa;Wa=l.document&&z?Pa():void 0;function A(){}var Xa="function"==typeof Uint8Array;function Ya(a,b,c){a.f=null;b||(b=[]);a.o=void 0;a.j=-1;a.b=b;a:{if(b=a.b.length){--b;var d=a.b[b];if(!(null===d||"object"!=typeof d||q(d)||Xa&&d instanceof Uint8Array)){a.h=b-a.j;a.g=d;break a}}a.h=Number.MAX_VALUE}a.l={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.h)d+=a.j,a.b[d]=a.b[d]||Za;else{var e=a.h+a.j;a.b[e]||(a.g=a.b[e]={});a.g[d]=a.g[d]||Za}}var Za=[];
function $a(a,b){if(b<a.h){b+=a.j;var c=a.b[b];return c===Za?a.b[b]=[]:c}if(a.g)return c=a.g[b],c===Za?a.g[b]=[]:c}function ab(a){a=$a(a,2);return null==a?0:a}function bb(a,b){a=$a(a,b);a=null==a?a:!!a;return null==a?!1:a}function B(a,b,c){a.f||(a.f={});if(!a.f[c]){var d=$a(a,c);d&&(a.f[c]=new b(d))}return a.f[c]}function cb(a){if(a.f)for(var b in a.f){var c=a.f[b];if(q(c))for(var d=0;d<c.length;d++)c[d]&&db(c[d]);else c&&db(c)}}function db(a){cb(a);return a.b}
A.prototype.toString=function(){cb(this);return this.b.toString()};function eb(a){Ya(this,a,fb)}u(eb,A);var fb=[3];function C(a){Ya(this,a,gb)}u(C,A);var gb=[17];function D(a){Ya(this,a,ib)}u(D,A);var ib=[27];function jb(a){Ya(this,a,kb)}u(jb,A);var kb=[8];var lb=document,nb=window;function ob(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};var pb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qb(a){return a?decodeURI(a):a}function rb(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}function sb(a,b){return b?a?a+"&"+b:b:a}function tb(a,b){if(!b)return a;a=rb(a);a[1]=sb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function ub(a,b,c){if(q(b))for(var d=0;d<b.length;d++)ub(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function vb(a){var b=[],c;for(c in a)ub(c,a[c],b);return b.join("&")}function wb(a,b){b=vb(b);return tb(a,b)}var xb=/#|$/;
function yb(a,b){var c=a.search(xb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
function Ab(a,b){a=rb(a);var c=a[1],d=[];c&&qa(c.split("&"),function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});a[1]=sb(d.join("&"),vb(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function Bb(){var a=Cb;try{return!!a&&null!=a.location.href&&Ka(a,"foo")}catch(b){return!1}};var Db=/^((market|itms|intent|itms-appss):\/\/)/i;function Eb(a,b){"about:invalid#zClosurez"===(a instanceof v?a:Ea(a)).b()&&b(String(a))}function Fb(a){var b=(Gb()?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/gen_204";return function(c){c=wb(b,{id:"unsafeurl",ctx:a,url:c});navigator.sendBeacon&&navigator.sendBeacon(c,"")}};function Gb(){var a=void 0===a?nb:a;return"http:"===a.location.protocol}var Hb=!!window.google_async_iframe_id,Cb=Hb&&window.parent||window;var Ib=null;function Jb(){var a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):t()}function Kb(){var a=void 0===a?l:a;return(a=a.performance)&&a.now?a.now():null};function Lb(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var E=l.performance,Mb=!!(E&&E.mark&&E.measure&&E.clearMarks),F=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=Mb){var b;if(null===Ib){Ib="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(Ib=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Ib;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function Nb(){var a=G;this.events=[];this.f=a||l;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=F()||(null!=b?b:1>Math.random())}function Ob(a){a&&E&&F()&&(E.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),E.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}
Nb.prototype.start=function(a,b){if(!this.b)return null;var c=Kb()||Jb();a=new Lb(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";E&&F()&&E.mark(b);return a};Nb.prototype.end=function(a){if(this.b&&"number"===typeof a.value){var b=Kb()||Jb();a.duration=b-a.value;b="goog_"+a.label+"_"+a.uniqueId+"_end";E&&F()&&E.mark(b);!this.b||2048<this.events.length||this.events.push(a)}};if(Hb&&!Bb()){var Pb="."+lb.domain;try{for(;2<Pb.split(".").length&&!Bb();)lb.domain=Pb=Pb.substr(Pb.indexOf(".")+1),Cb=window.parent}catch(a){}Bb()||(Cb=window)}var G=Cb,H=new Nb;function Qb(){G.google_measure_js_timing||(H.b=!1,H.events!=H.f.google_js_reporting_queue&&(F()&&qa(H.events,Ob),H.events.length=0))}"number"!==typeof G.google_srt&&(G.google_srt=Math.random());
if("complete"==G.document.readyState)Qb();else if(H.b){var Rb=function(){Qb()},Sb=G;Sb.addEventListener&&Sb.addEventListener("load",Rb,!1)};function I(){this.j=this.j;this.g=this.g}I.prototype.j=!1;I.prototype.X=function(){this.j||(this.j=!0,this.v())};I.prototype.v=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function Tb(a){a&&"function"==typeof a.X&&a.X()};var Ub,Vb,Wb,Xb;function Yb(){return l.navigator?l.navigator.userAgent:""}function J(a){return-1!=Yb().indexOf(a)}var Zb=J("(iPad")||J("(Macintosh")||J("(iPod")||J("(iPhone"),$b=J("Android"),ac=J("MSIE")||J("IEMobile")||J("Windows Phone");function bc(){void 0!==Wb||(Wb=J("afma-sdk-a")?!0:!1);return Wb}function cc(a){var b;void 0===Xb&&(Xb=bc()?(b=Yb().match(/afma\-sdk\-a\-v\.?([\d+\.]+)/))?b[1]:"":"");return(b=Xb)?0<=xa(b,a):!1};function K(a,b){this.type=a;this.b=this.target=b;this.Y=!0}K.prototype.f=function(){this.Y=!1};function M(a,b){this.messageName=a;this.parameters=b||{}}function dc(a,b){K.call(this,a.messageName,b);this.params=a.parameters||{}}u(dc,K);var ec;(ec=!z)||(ec=9<=Number(Wa));var fc=ec,gc;if(gc=z)gc=!(Object.prototype.hasOwnProperty.call(Va,"9")?Va["9"]:Va["9"]=0<=xa(Ua,"9"));var hc=gc,ic=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{l.addEventListener("test",ia,b),l.removeEventListener("test",ia,b)}catch(c){}return a}();function N(a,b){K.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.g=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;(b=a.relatedTarget)?Na&&(Ka(b,"nodeName")||(b=null)):"mouseover"==c?b=a.fromElement:"mouseout"==
c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||
0;this.pointerType="string"===typeof a.pointerType?a.pointerType:jc[a.pointerType]||"";this.g=a;a.defaultPrevented&&this.f()}}u(N,K);var jc={2:"touch",3:"pen",4:"mouse"};N.prototype.f=function(){N.D.f.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,hc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var O="closure_listenable_"+(1E6*Math.random()|0),kc=0;function lc(a,b,c,d,e){this.listener=a;this.b=null;this.src=b;this.type=c;this.capture=!!d;this.I=e;this.key=++kc;this.C=this.H=!1}function mc(a){a.C=!0;a.listener=null;a.b=null;a.src=null;a.I=null};function nc(a){this.src=a;this.b={};this.f=0}nc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.b[f];a||(a=this.b[f]=[],this.f++);var g=oc(a,b,d,e);-1<g?(b=a[g],c||(b.H=!1)):(b=new lc(b,this.src,f,!!d,e),b.H=c,a.push(b));return b};function pc(a,b,c,d,e){b=b.toString();if(b in a.b){var f=a.b[b];c=oc(f,c,d,e);-1<c&&(mc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.b[b],a.f--))}}
function qc(a,b){var c=b.type;if(c in a.b){var d=a.b[c],e=pa(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(mc(b),0==a.b[c].length&&(delete a.b[c],a.f--))}}function oc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.C&&f.listener==b&&f.capture==!!c&&f.I==d)return e}return-1};var rc="closure_lm_"+(1E6*Math.random()|0),sc={},tc=0;function uc(a,b,c,d,e){if(d&&d.once)return P(a,b,c,d,e);if(q(b)){for(var f=0;f<b.length;f++)uc(a,b[f],c,d,e);return null}c=vc(c);return a&&a[O]?a.b.add(String(b),c,!1,la(d)?!!d.capture:!!d,e):wc(a,b,c,!1,d,e)}
function wc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=la(e)?!!e.capture:!!e,p=xc(a);p||(a[rc]=p=new nc(a));c=p.add(b,c,d,g,f);if(c.b)return c;d=yc();c.b=d;d.src=a;d.listener=c;if(a.addEventListener)ic||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(zc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");tc++;return c}
function yc(){var a=Ac,b=fc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function P(a,b,c,d,e){if(q(b)){for(var f=0;f<b.length;f++)P(a,b[f],c,d,e);return null}c=vc(c);return a&&a[O]?a.b.add(String(b),c,!0,la(d)?!!d.capture:!!d,e):wc(a,b,c,!0,d,e)}
function Bc(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)Bc(a,b[f],c,d,e);else(d=la(d)?!!d.capture:!!d,c=vc(c),a&&a[O])?pc(a.b,String(b),c,d,e):a&&(a=xc(a))&&(b=a.b[b.toString()],a=-1,b&&(a=oc(b,c,d,e)),(c=-1<a?b[a]:null)&&Cc(c))}
function Cc(a){if("number"!==typeof a&&a&&!a.C){var b=a.src;if(b&&b[O])qc(b.b,a);else{var c=a.type,d=a.b;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(zc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);tc--;(c=xc(b))?(qc(c,a),0==c.f&&(c.src=null,b[rc]=null)):mc(a)}}}function zc(a){return a in sc?sc[a]:sc[a]="on"+a}
function Dc(a,b,c,d){var e=!0;if(a=xc(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.C&&(f=Ec(f,d),e=e&&!1!==f)}return e}function Ec(a,b){var c=a.listener,d=a.I||a.src;a.H&&Cc(a);return c.call(d,b)}
function Ac(a,b){if(a.C)return!0;if(!fc){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new N(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=Dc(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=Dc(d[e],a,!1,b),c=c&&f}return c}return Ec(a,
new N(b,this))}function xc(a){a=a[rc];return a instanceof nc?a:null}var Fc="__closure_events_fn_"+(1E9*Math.random()>>>0);function vc(a){if("function"==ka(a))return a;a[Fc]||(a[Fc]=function(b){return a.handleEvent(b)});return a[Fc]};function Q(a){I.call(this);this.f=a;this.b={}}u(Q,I);var Ic=[];function Jc(a){sa(a.b,function(b,c){this.b.hasOwnProperty(c)&&Cc(b)},a);a.b={}}Q.prototype.v=function(){Q.D.v.call(this);Jc(this)};Q.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function R(){I.call(this);this.b=new nc(this);this.A=this;this.l=null}u(R,I);R.prototype[O]=!0;R.prototype.addEventListener=function(a,b,c,d){uc(this,a,b,c,d)};R.prototype.removeEventListener=function(a,b,c,d){Bc(this,a,b,c,d)};
R.prototype.dispatchEvent=function(a){var b,c=this.l;if(c)for(b=[];c;c=c.l)b.push(c);c=this.A;var d=a.type||a;if("string"===typeof a)a=new K(a,c);else if(a instanceof K)a.target=a.target||c;else{var e=a;a=new K(d,c);va(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=a.b=b[f];e=Kc(g,d,!0,a)&&e}g=a.b=c;e=Kc(g,d,!0,a)&&e;e=Kc(g,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)g=a.b=b[f],e=Kc(g,d,!1,a)&&e;return e};
R.prototype.v=function(){R.D.v.call(this);if(this.b){var a=this.b,b=0,c;for(c in a.b){for(var d=a.b[c],e=0;e<d.length;e++)++b,mc(d[e]);delete a.b[c];a.f--}}this.l=null};function Kc(a,b,c,d){b=a.b.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.C&&g.capture==c){var p=g.listener,x=g.I||g.src;g.H&&qc(a.b,g);e=!1!==p.call(x,d)&&e}}return e&&0!=d.Y};function Lc(a,b){R.call(this);this.h=a||1;this.f=b||l;this.o=r(this.da,this);this.w=t()}u(Lc,R);h=Lc.prototype;h.B=!1;h.s=null;h.setInterval=function(a){this.h=a;this.s&&this.B?(this.stop(),this.start()):this.s&&this.stop()};h.da=function(){if(this.B){var a=t()-this.w;0<a&&a<.8*this.h?this.s=this.f.setTimeout(this.o,this.h-a):(this.s&&(this.f.clearTimeout(this.s),this.s=null),this.dispatchEvent("tick"),this.B&&(this.stop(),this.start()))}};
h.start=function(){this.B=!0;this.s||(this.s=this.f.setTimeout(this.o,this.h),this.w=t())};h.stop=function(){this.B=!1;this.s&&(this.f.clearTimeout(this.s),this.s=null)};h.v=function(){Lc.D.v.call(this);this.stop();delete this.f};function Mc(){if(window.googleJsEnvironment&&("rhino"==window.googleJsEnvironment.environment||"jscore"==window.googleJsEnvironment.environment))return new Nc;if(ac&&window.external&&"notify"in window.external)return new Oc;if($b&&window.googleAdsJsInterface&&"notify"in window.googleAdsJsInterface)try{return window.googleAdsJsInterface.notify("gmsg://mobileads.google.com/noop"),new Nc}catch(a){}else if(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.gadGMSGHandler)return new Pc;
return new Qc}function Rc(){Sc||(Sc=Mc());return Sc}var Sc=null;function Tc(){}u(Tc,I);function Uc(a){var b="gmsg://mobileads.google.com/"+a.messageName;a=ta(a.parameters);a["google.afma.Notify_dt"]=(new Date).getTime();var c={},d;for(d in a){var e=encodeURIComponent(String(d));c[e]=a[d]}return wb(b,c)}
function Vc(a,b){this.o=a;this.w=b||1;this.l=[];this.h=new Lc(this.w);a=this.A=new Q(this);b=this.h;var c=this.G,d="tick";q(d)||(d&&(Ic[0]=d.toString()),d=Ic);for(var e=0;e<d.length;e++){var f=uc(b,d[e],c||a.handleEvent,!1,a.f||a);if(!f)break;a.b[f.key]=f}}u(Vc,Tc);Vc.prototype.sendMessage=function(a){this.l.push(a);this.h.B||(a=this.l.shift(),this.o(a),this.h.start())};Vc.prototype.G=function(){var a=this.l.shift();a?this.o(a):this.h.stop()};function Oc(){}u(Oc,Tc);
Oc.prototype.sendMessage=function(a){a=Uc(a);window.external.notify(a)};function Qc(){Vc.call(this,this.F);this.b=[];this.f=0}u(Qc,Vc);Qc.prototype.F=function(a){var b=this.b[this.f];if(!b){var c=document;b="IFRAME";"application/xhtml+xml"===c.contentType&&(b=b.toLowerCase());b=c.createElement(b);b.id="afma-notify-"+(new Date).getTime();b.style.display="none";this.b[this.f]=b}this.f=(this.f+1)%25;a=Uc(a);b.src=a;b.parentNode||document.body.appendChild(b)};
Qc.prototype.v=function(){this.b.forEach(ob);this.b=[];Qc.D.v.call(this)};function Nc(){}u(Nc,Tc);Nc.prototype.sendMessage=function(a){a=Uc(a);window.googleAdsJsInterface.notify(a);window.googleAdsJsInterface.DEBUG&&console.log(a)};function Pc(){}u(Pc,Tc);Pc.prototype.sendMessage=function(a){a=Uc(a);window.webkit.messageHandlers.gadGMSGHandler.postMessage(a)};function Wc(){var a=this;this.g=[];this.f=window===window.top;this.j=!1;this.b=0;"undefined"!==typeof window.addEventListener&&window.addEventListener("message",function(b){var c=b.data;if((b=b.source)&&c){var d=a.g;if("arwebview_iframe_loaded"===c&&a.f)n("JavascriptWebViewBridge.incoming.postMessage",a.h.bind(a),l),-1===d.indexOf(b)&&d.push(b);else{var e=c.messageName;c=c.parameters;if(a.f)switch(e){case "mraid_loaded":!1===c.is_top_win&&(a.j=!0,l.AFMA_updateActiveView||n("AFMA_updateActiveView",
a.l.bind(a),l),-1===d.indexOf(b)&&(d.push(b),"undefined"!==typeof b.postMessage&&b.postMessage(new M("mraid_env_obj",window.MRAID_ENV),"*")));break;case "start_tracking_action":0==a.b&&window.AFMA_SendMessage("trackActiveViewUnit");a.b+=1;break;case "stop_tracking_action":--a.b,0==a.b&&(window.AFMA_SendMessage("untrackActiveViewUnit",{hashCode:c.hashCode}),window.AFMA_updateActiveView=ra)}else switch(e){case "mraid_env_obj":window.MRAID_ENV=c;break;case "update_activeview_action":window.AFMA_updateActiveView(c);
break;case "receive_message_action":window.AFMA_ReceiveMessage(c.messageName,c.parameters)}}}})}Wc.prototype.l=function(a){this.f&&Xc(this,new M("update_activeview_action",a))};Wc.prototype.h=function(a){this.f&&Xc(this,{name:"arwebview_message_forwarded",message:a})};function Xc(a,b){a.g.forEach(function(c){return c.postMessage(b,"*")})};function Yc(){R.call(this);this.h=Rc();this.h=Rc();var a=oa(Tb,this.h);this.j?a():(this.g||(this.g=[]),this.g.push(a));this.f={};this.o=new Wc}u(Yc,R);h=Yc.prototype;h.sendMessage=function(a,b){var c;"string"===typeof a?c=new M(a,b):a instanceof M&&(c=a);"loading"==document.readyState?(a=r(this.h.sendMessage,this.h,c),P(l,"DOMContentLoaded",a,!1,this)):this.h.sendMessage(c)};
h.receiveMessage=function(a,b){this.shouldForwardMessageToIframe()&&this.forwardMessage(new M("receive_message_action",new M(a,b)));"onshow"==a&&"loading"==document.readyState?(a=r(Zc,l,a,b),P(l,"DOMContentLoaded",a)):this.dispatchEvent(new dc(new M(a,b),this))};h.addObserver=function(a,b,c){c=r(c,b);var d=r(function(e){c(e.type,e.params)},b);this.b.add(String(a),d,!1,void 0,void 0);this.f[a]||(this.f[a]={});this.f[a][b]=d};
h.removeObserver=function(a,b){this.f[a]&&this.f[a][b]&&(pc(this.b,String(a),this.f[a][b],void 0,void 0),delete this.f[a][b])};h.shouldForwardMessageToIframe=function(){return this.o.j};h.forwardMessage=function(a){Xc(this.o,a)};function S(a,b){l.AFMA_Communicator?l.AFMA_Communicator.sendMessage(a,b):$c(a,b)}function $c(a,b){"loading"==document.readyState?(a=r($c,null,a,b),P(l,"DOMContentLoaded",a,!1)):(a=new M(a,b),Rc().sendMessage(a))}function Zc(a,b){l.AFMA_Communicator.receiveMessage(a,b)}
function ad(a,b,c,d){l.AFMA_Communicator.removeEventListener(a,b,c,d)}function T(a,b,c,d){l.AFMA_Communicator.addEventListener(a,b,c,d)}function bd(a,b,c){l.AFMA_Communicator.addObserver(a,b,c)}function cd(a,b){l.AFMA_Communicator.removeObserver(a,b)}l.AFMA_Communicator||(n("AFMA_AddEventListener",T,l),n("AFMA_RemoveEventListener",ad,l),n("AFMA_AddObserver",bd,l),n("AFMA_RemoveObserver",cd,l),n("AFMA_ReceiveMessage",Zc,l),n("AFMA_SendMessage",S,l),l.AFMA_Communicator=new Yc);function dd(a,b){this.f=a|0;this.b=b|0}function U(a){return 4294967296*a.b+(a.f>>>0)}h=dd.prototype;
h.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);var b=this.b>>21;if(0==b||-1==b&&(0!=this.f||-2097152!=this.b))return b=U(this),10==a?""+b:b.toString(a);b=14-(a>>2);var c=Math.pow(a,b),d=V(c,c/4294967296);c=W(this,d);d=Math.abs(U(this.add(X(ed(c,d)))));var e=10==a?""+d:d.toString(a);e.length<b&&(e="0000000000000".substr(e.length-b)+e);d=U(c);return(10==a?d:d.toString(a))+e};function fd(a){return 0==a.f&&0==a.b}function Y(a,b){return a.f==b.f&&a.b==b.b}
function gd(a,b){return a.b==b.b?a.f==b.f?0:a.f>>>0>b.f>>>0?1:-1:a.b>b.b?1:-1}function X(a){var b=~a.f+1|0;return V(b,~a.b+!b|0)}h.add=function(a){var b=this.b>>>16,c=this.b&65535,d=this.f>>>16,e=a.b>>>16,f=a.b&65535,g=a.f>>>16;a=(this.f&65535)+(a.f&65535);g=(a>>>16)+(d+g);d=g>>>16;d+=c+f;b=(d>>>16)+(b+e)&65535;return V((g&65535)<<16|a&65535,b<<16|d&65535)};
function ed(a,b){if(fd(a))return a;if(fd(b))return b;var c=a.b>>>16,d=a.b&65535,e=a.f>>>16;a=a.f&65535;var f=b.b>>>16,g=b.b&65535,p=b.f>>>16;b=b.f&65535;var x=a*b;var m=(x>>>16)+e*b;var k=m>>>16;m=(m&65535)+a*p;k+=m>>>16;k+=d*b;var w=k>>>16;k=(k&65535)+e*p;w+=k>>>16;k=(k&65535)+a*g;w=w+(k>>>16)+(c*b+d*p+e*g+a*f)&65535;return V((m&65535)<<16|x&65535,w<<16|k&65535)}
function W(a,b){if(fd(b))throw Error("division by zero");if(0>a.b){if(Y(a,Z)){if(Y(b,hd)||Y(b,id))return Z;if(Y(b,Z))return hd;var c=1;if(0==c)c=a;else{var d=a.b;c=32>c?V(a.f>>>c|d<<32-c,d>>c):V(d>>c-32,0<=d?0:-1)}c=W(c,b);d=1;if(0!=d){var e=c.f;c=32>d?V(e<<d,c.b<<d|e>>>32-d):V(0,e<<d-32)}if(Y(c,jd))return 0>b.b?hd:id;a=a.add(X(ed(b,c)));return c.add(W(a,b))}return 0>b.b?W(X(a),X(b)):X(W(X(a),b))}if(fd(a))return jd;if(0>b.b)return Y(b,Z)?jd:X(W(a,X(b)));for(d=jd;0<=gd(a,b);){c=Math.max(1,Math.floor(U(a)/
U(b)));e=Math.ceil(Math.log(c)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);for(var f=kd(c),g=ed(f,b);0>g.b||0<gd(g,a);)c-=e,f=kd(c),g=ed(f,b);fd(f)&&(f=hd);d=d.add(f);a=a.add(X(g))}return d}h.and=function(a){return V(this.f&a.f,this.b&a.b)};h.or=function(a){return V(this.f|a.f,this.b|a.b)};h.xor=function(a){return V(this.f^a.f,this.b^a.b)};function kd(a){return 0<a?0x7fffffffffffffff<=a?ld:new dd(a,a/4294967296):0>a?-9223372036854775808>=a?Z:X(new dd(-a,-a/4294967296)):jd}
function V(a,b){return new dd(a,b)}var jd=V(0,0),hd=V(1,0),id=V(-1,-1),ld=V(4294967295,2147483647),Z=V(0,2147483648);var md;n("google.afma.support.blockPageClosed",function(){S("delayPageClosed",{start:1})},void 0);n("google.afma.support.unblockPageClosed",function(){S("delayPageClosed",{stop:1})},void 0);n("google.afma.support.blockPageLoaded",function(){S("delayPageLoaded",{start:1})},void 0);function nd(){S("delayPageLoaded",{stop:1})}n("google.afma.support.unblockPageLoaded",nd,void 0);n("google.afma.support.cancelPageLoaded",function(){bc()&&!cc("9047000.0.0")?nd():S("delayPageLoaded",{cancel:1})},void 0);
n("google.afma.support.disableBackButton",function(a){S("backButton",{disabled:a})},void 0);n("google.afma.support.notifyRewardedVideoStart",function(){S("reward",{action:"video_start"})},void 0);n("google.afma.support.notifyRewardedVideoComplete",function(){S("reward",{action:"video_complete"})},void 0);n("google.afma.support.grantReward",function(a){var b={action:"grant"};a?(b.amount=a.amount,b.type=a.type):b.amount=0;S("reward",b)},void 0);
var od=["www.googleadservices.com","googleads.g.doubleclick.net","adclick.g.doubleclick.net","ad.doubleclick.net","www.google.com"];
function pd(a){if(a){var b=qb(a.match(pb)[5]||null),c=qb(a.match(pb)[3]||null);if(0>pa(od,c)||"/aclk"!=b&&"/pagead/aclk"!=b)return a;b=yb(a,"ai");c=yb(a,"ms");if(!/^[\s\xa0]*$/.test(null==c?"":String(c))||/^[\s\xa0]*$/.test(null==b?"":String(b)))return a;c=void 0;a:{if(window.googleAdsJsInterface&&"getClickSignals"in window.googleAdsJsInterface)try{c=window.googleAdsJsInterface.getClickSignals(b);break a}catch(d){}c=""}b=c;if(/^[\s\xa0]*$/.test(null==b?"":String(b)))return a;c=a.indexOf("&adurl=");
return 0>c?a:a.substring(0,c)+"&ms="+b+a.substring(c,a.length)}}function qd(a){if(a&&0==a.lastIndexOf("intent:",0)){var b=a.indexOf("#Intent;");if(!(0>b)){var c={id:a,url:a.substr(9,b-9)};a=a.substr(b+8).split(";");b="";for(var d=0;d<a.length;d++){var e=a[d].split("=");if(2==e.length)switch(e[0]){case "package":c.J=e[1];break;case "action":c.action=e[1];break;case "scheme":b=e[1]}}b&&(c.url=b+"://"+c.url);return c}}}
function rd(){var a;Zb?(void 0===Ub&&(Ub=(a=/CPU\s+(?:(?:i?OS)|(?:iPhone)|(?:iPhone\s+OS))\s+([0-9_|\.]+)/.exec(Yb()))&&2==a.length?a[1].replace(/_/g,"."):J("(Macintosh")?"13.0":""),a=0<=xa(Ub,9)):a=!1;return a}
n("google.afma.support.canOpenURLs",function(a,b,c,d){var e=c||function(){};c=d||500;var f=a instanceof Array?a:[a];if(rd()){a={};for(c=0;c<f.length;++c)a[f[c]]=!0;b("openableURLs",a)}else{a=f.join(",");var g=!1,p=function(x){ad("openableURLs",p);if(!g){g=!0;for(var m=ta(x.params),k=0;k<f.length;++k){var w=f[k],L=decodeURIComponent(w.replace(/\+/g," "));L=m[L];null!=L&&(m[w]=L)}b(x.type,m)}};T("openableURLs",p);S("canOpenURLs",{urls:a});setTimeout(function(){g||(g=!0,e())},c)}},void 0);
n("google.afma.support.canOpenIntents",function(a,b,c,d){function e(L){ad("openableIntents",e);if(!g){g=!0;var Gc=ta(L.params),Hc={},zb;for(zb in Gc)Hc[p[zb]]=Gc[zb];b(L.type,Hc)}}if(!bc())return!1;var f=c||function(){};c=d||500;var g=!1,p={};d=[];for(var x=0;x<a.length;++x){var m=a[x],k=Ia(m.id).toString();p[k]=m.id;k={id:k};m.url&&(k.u=m.url);if(m.url&&(0==m.url.lastIndexOf("intent:",0)||0==m.url.lastIndexOf("Intent#",0))){k.intent_url=m.url;delete k.u;var w=qd(m.url);w&&(w.url&&(k.u=w.url),w.J&&
(k.p=w.J),w.action&&(k.i=w.action))}m.mimeType&&(k.m=m.mimeType);m.J&&(k.p=m.J);m.action&&(k.i=m.action);d.push(k)}a={intents:d};T("openableIntents",e);S("canOpenIntents",{data:JSON.stringify(a)});setTimeout(function(){g||(g=!0,f())},c);return!0},void 0);n("google.afma.support.trackActiveViewUnit",function(){S("trackActiveViewUnit")},void 0);n("google.afma.support.untrackActiveViewUnit",function(){S("untrackActiveViewUnit")},void 0);
n("google.afma.support.sendInstrumentGmsg",function(a){S("instrument",a)},void 0);T("onshow",function(){});T("onhide",function(){});function sd(){this.b=new XMLHttpRequest}sd.prototype.get=function(a,b){if(this.b&&(0==this.b.readyState||4==this.b.readyState))try{this.b.onreadystatechange=r(this.f,this,b),this.b.open("GET",a,!0),this.b.send(null)}catch(c){b()}};sd.prototype.f=function(a){4==this.b.readyState&&a()};function td(a,b,c,d){this.N=a;this.$=b;this.O=null;this.K=c;this.R=d;this.f=this.G=this.h=this.g=this.j=!1;this.F=void 0;this.b=this.l=this.o=null;this.P=this.aa=this.V=this.A=this.w=this.L=this.T=this.M=this.W=0}td.prototype.Z=function(){this.w=t();this.j=!1;ud(this)};td.prototype.S=function(){try{this.b&&4==this.b.readyState&&this.g&&(this.A=t(),this.g=!1,this.b.responseText&&0<this.b.responseText.length&&(this.o="tel:"+this.b.responseText))}finally{ud(this)}};
td.prototype.ba=function(){this.L=t();this.f=!1;ud(this)};function ud(a){a.h||(a.j||a.g?a.f||vd(a):(a.f&&(a.f=!1,window.clearTimeout(a.F),a.F=void 0),vd(a)))}
function vd(a){if(!a.h){a.h=!0;a.G=!0;var b=0==a.w?0:a.w-a.M,c=0==a.A?0:a.A-a.T,d=0==a.L?0:a.L-a.W,e=a.l&&a.l.b?a.l.b.status:"noreq",f=a.b?a.b.status:"noreq",g=/&ctype=\d+/.exec(a.N);g=g?g[0]:"";a.V++;a.O=["//pagead2.googlesyndication.com/pagead/gen_204?id=ctc_metrics",g,"&dc="+a.P,"&ec=0","&rc="+a.V,"&ct=0","&ctc_num="+a.K,"&ctc_gvn="+a.o,"&ctc_cs_time="+b,"&ctc_gv_time="+c,"&ctc_to_time="+d,"&ctc_cs_status="+e,"&ctc_gv_status="+f].join("");(new sd).get(a.O,r(a.U,a));window.setTimeout(r(a.U,a),2E3)}}
td.prototype.U=function(){if(this.G)if(this.f=this.g=this.j=this.G=!1,null!=this.R)this.R(this.o||this.K);else{var a=window.top.location,b=Ca(this.o||this.K);Eb(b,Fb(607));Ha(a,b)}};n("ctc_bd",function(a,b,c,d){c=c||function(){var f=window.top.location,g=Ca(b);Eb(g,Fb(606));Ha(f,g)};var e=new sd;(void 0===d?0:d)?(e.get(a,ia),setTimeout(c,0)):e.get(a,c)},void 0);n("init_gvc",function(a,b,c,d){return new td(a,b,c,d)},void 0);
n("ctc_bd_gv",function(a){var b=t();a.j||a.g||a.f?a.P++:a.aa=b;var c=!1,d=!1,e=!1;a.j||(a.j=!0,a.h=!1,a.M=b,a.w=b,d=!0);a.g||null!=a.o||(a.g=!0,a.h=!1,a.T=b,a.A=b,e=!0);a.f||(a.f=!0,a.h=!1,a.W=b,c=!0);c&&(a.F=window.setTimeout(r(a.ba,a),2E3));d&&(a.l=new sd,a.l.get(a.N,r(a.Z,a)));if(e)try{a.b=new XMLHttpRequest,a.b.onreadystatechange=r(a.S,a),a.b.open("GET",a.$,!0),a.b.send(null)}catch(f){a.S()}},void 0);function wd(a){return Error("MysidiaJsError["+a+"] ")};function xd(){return function(a){a=wb("https://pagead2.googlesyndication.com/pagead/gen_204",{id:"unsafeurl",ctx:622,url:a});navigator.sendBeacon&&navigator.sendBeacon(a,"")}};var yd=NaN;function zd(){T("onshow",function(){yd=t()});T("onhide",function(){yd=NaN})};function Ad(a){a.addEventListener("CUSTOM_MOUSE_DOWN",function(){var b=yd;if(!isNaN(b)&&0<b){var c=parseInt(a.getAttribute("data-on-show-ts"),10);!isNaN(c)&&0<c||a.setAttribute("data-on-show-ts",b)}});a.addEventListener("CUSTOM_CLICK",function(b){b=b.target;var c=pd(b.href);if(!c)throw wd(62);-1<c.indexOf("[gw_fbsaeid]")||(c=c.replace("?","?fbs_aeid=[gw_fbsaeid]&"));if(-1<c.indexOf("[gw_fbsaeid]")){var d=U(Z);d=kd(d+Math.random()*(U(ld)-d));c=c.replace("[gw_fbsaeid]",d.toString());S("logScionEvent",
{eventType:0,eventId:d,eventName:"_ac"})}d=c;c=xd();d=d instanceof v||!Db.test(d)?d:new v(za,d);Eb(d,c);c=d instanceof v?d:Ea(d);b.href=Ba(c);c="true"===a.getAttribute("data-use-custom-tabs-in-sdk");b=b.href;c=void 0===c?!1:c;b=b.match(/^\/\//)?"http:"+b:b;md||(md=window.google_casm?new eb(window.google_casm):new eb);if(d=bb(md,4)||c)a:{if(void 0===Vb){if(Zb&&!J("Safari")){d=Vb=!0;break a}Vb=!1}d=Vb}if(d){c={id:"gmob-apps",event:"open-inline-browser"};if(.1>=Math.random()){d=Math.floor(2147483648*
Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^t()).toString(36);d=null!=d?"="+encodeURIComponent(String(d)):"";d=tb("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+d);c=Ab(d,c||{});try{if(window.googleJsEnvironment&&window.googleJsEnvironment.pinger&&window.googleJsEnvironment.pinger.pingUrl)window.googleJsEnvironment.pinger.pingUrl(c);else{d=window;d.google_image_requests||(d.google_image_requests=[]);var e=d.document.createElement("img");e.src=c;d.google_image_requests.push(e)}}catch(f){}}S("open",
{a:"inline_browser",u:b})}else e={a:"app",u:b},cc("8400000.0.0")&&va(e,{system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:c}),S("open",e)})};function Bd(){}Bd.prototype.f=function(){};function Cd(a,b){a=a.getElementsByTagName("META");for(var c=0;c<a.length;++c)if(a[c].getAttribute("name")===b)return a[c].getAttribute("content");return""}function Dd(a,b,c){for(var d=a.getElementsByTagName("META"),e=0;e<d.length;++e)if(d[e].getAttribute("name")===b){d[e].setAttribute("content",c);return}d=document.createElement("META");d.setAttribute("name",b);d.setAttribute("content",c);a.appendChild(d)};function Ed(a,b){this.f=a;this.b=b;a=Cd(b,"namespace");a||(a="ns-"+Math.random().toString(36).substr(2,5),Dd(b,"namespace",a))}Ed.prototype.dispatchEvent=function(a,b){a=null==b?new CustomEvent(a):new CustomEvent(a,{detail:b});this.b.dispatchEvent(a)};function Fd(){this.b={};this.f={};this.g={}}Fd.prototype.set=function(a,b){this.b[a]=b};Fd.prototype.get=function(a){return this.b[a]};function Gd(a,b){if(b){b=JSON.parse(b);for(var c in b)a.set(c,b[c])}};function Hd(a){this.context=a;this.b=new Fd}ha(Hd,Bd);function Id(a,b){this.f=a;this.b=b}function Jd(a){if(!mys.Engine)throw wd(2);var b=a.b.f,c=a.b.b;Gd(a.f.b,Cd(c,"runtime_data"));var d=Cd(c,"render_config");if(!d)throw wd(35);var e=new jb(d?JSON.parse(d):null),f=mys.Engine.create(b,c,db(e)),g=0;c.addEventListener("browserRender",function(){++g;if(1==g)a.b.dispatchEvent("overallStart"),Kd(a,e),f.enable().then(function(){a.b.dispatchEvent("overallQuiet")});else{var p=c.clientWidth,x=c.clientHeight;p&&x&&f.enable(p,x)}})}
function Kd(a,b){if(!(2==ab(b)||B(B(b,D,1),C,10)&&bb(B(B(b,D,1),C,10),16))){var c=a.b.b;a.f.f(c);c.addEventListener("browserStart",function(){if(B(B(b,D,1),C,10)&&bb(B(B(b,D,1),C,10),15)){var d=a.f.b;for(var e in d.g)d.b.hasOwnProperty(e)||d.set(e,JSON.stringify(d.g[e]));for(var f in d.f)d.b.hasOwnProperty(f)||d.set(f,JSON.stringify(d.f[f]));(d=(d=JSON.stringify(d.b))&&"{}"!=d?d:"")&&Dd(c,"runtime_data",d)}});c.addEventListener("browserReady",function(){});c.addEventListener("browserQuiet",function(){})}}
;function Ld(a){Hd.call(this,a)}ha(Ld,Hd);Ld.prototype.f=function(a){1==(parseInt(this.b.get("user_agent_type"),10)||0)&&(zd(),Ad(a))};function Md(){Ld.apply(this,arguments)}ha(Md,Ld);function Nd(){Md.apply(this,arguments)}ha(Nd,Md);(function(a){n("mys.design.init",function(b,c){b=new Ed(b,c);c=a(b);Jd(new Id(c,b))},void 0)})(function(a){return new Nd(a)});}).call(this);
