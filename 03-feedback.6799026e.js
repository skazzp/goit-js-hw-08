var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function p(e,t,n){var o,i,r,a,u,f,c=0,l=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function h(e){return c=e,u=setTimeout(I,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-c>=r}function I(){var e=d();if(j(e))return S(e);u=setTimeout(I,function(e){var n=t-(e-f);return p?m(n,r-(e-c)):n}(e))}function S(e){return u=void 0,y&&o?b(e):(o=i=void 0,a)}function T(){var e=d(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(p)return u=setTimeout(I,t),b(f)}return void 0===u&&(u=setTimeout(I,t)),a}return t=v(t)||0,g(n)&&(l=!!n.leading,r=(p="maxWait"in n)?s(v(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},T.flush=function(){return void 0===u?a:S(d())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=i.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),b=document.querySelector('[name="email"]'),h=document.querySelector('[name="message"]'),j={emailInput:"",messageInput:""};try{let e=JSON.parse(localStorage.getItem("feedback-form-state"));b.value=e.emailInput,h.value=e.messageInput}catch(e){console.log(e.name),console.log(e.message)}y.addEventListener("input",t((function(e){console.log("123"),j.emailInput=b.value,j.messageInput=h.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.6799026e.js.map