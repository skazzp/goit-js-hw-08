!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var o,i,u,a,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(I,t),s?y(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function I(){var e=g();if(h(e))return O(e);f=setTimeout(I,function(e){var n=t-(e-c);return d?p(n,u-(e-l)):n}(e))}function O(e){return f=void 0,m&&o?y(e):(o=i=void 0,a)}function T(){var e=g(),n=h(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(I,t),y(c)}return void 0===f&&(f=setTimeout(I,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(j(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?a:O(g())},T}function b(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=a.test(e);return r||f.test(e)?c(e.slice(2),r?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),h=document.querySelector('[name="email"]'),I=document.querySelector('[name="message"]'),O={emailInput:"",messageInput:""};try{var T=JSON.parse(localStorage.getItem("feedback-form-state"));h.value=T.emailInput,I.value=T.messageInput}catch(e){console.log(e.name),console.log(e.message)}S.addEventListener("input",n((function(e){console.log("123"),O.emailInput=h.value,O.messageInput=I.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.c3b40218.js.map
