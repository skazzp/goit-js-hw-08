var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,u,f,l=0,c=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,u=setTimeout(j,t),c?y(e):a}function I(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-l>=i}function j(){var e=d();if(I(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return p?m(n,i-(e-l)):n}(e))}function O(e){return u=void 0,b&&o?y(e):(o=r=void 0,a)}function T(){var e=d(),n=I(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(p)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=v(t)||0,g(n)&&(c=!!n.leading,i=(p="maxWait"in n)?s(v(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},T.flush=function(){return void 0===u?a:O(d())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),y=document.querySelector('[name="email"]'),S=document.querySelector('[name="message"]'),I={emailInput:"",messageInput:""};if(null!=localStorage.getItem("feedback-form-state")){let e=JSON.parse(localStorage.getItem("feedback-form-state"));y.value=e.emailInput,S.value=e.messageInput}b.addEventListener("input",t((function(e){I.emailInput=y.value,I.messageInput=S.value,localStorage.setItem("feedback-form-state",JSON.stringify(I))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),null!=localStorage.getItem("feedback-form-state")&&console.log(JSON.parse(localStorage.getItem("feedback-form-state")));localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.48f73543.js.map