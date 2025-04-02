/*! For license information please see main.ee12de63.js.LICENSE.txt */
(()=>{var e={49:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:S.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function L(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===i?"."+T(l,0):i,w(a)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),L(a,t,o,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+T(s=e[u],u);l+=L(s,t,o,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=L(s=s.value,t,o,c=i+T(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function _(e,t,n){if(null==e)return e;var r=[],o=0;return L(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},z={transition:null},D={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:z,ReactCurrentOwner:S};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:_,forEach:function(e,t,n){_(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return _(e,(function(){t++})),t},toArray:function(e){return _(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=x,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=M,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)k.call(t,u)&&!E.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},119:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(345)},340:(e,t,n)=>{"use strict";e.exports=n(761)},345:(e,t,n)=>{"use strict";var r=n(950),o=n(340);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},f={};function m(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(f,e)||!d.call(h,e)&&(p.test(e)?f[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),j=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),A=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var O,N=Object.assign;function I(e){if(void 0===O)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return"\n"+O+e}var $=!1;function F(e,t){if(!e||$)return"";$=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var o=u.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(1!==a||1!==s)do{if(a--,0>--s||o[a]!==i[s]){var l="\n"+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{$=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function V(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case E:return"StrictMode";case L:return"Suspense";case _:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function J(e,t){Q(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ie(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(he).forEach((function(e){fe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var ve=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ee=null;function Ce(e){if(e=bo(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function Pe(e){Se?Ee?Ee.push(e):Ee=[e]:Se=e}function je(){if(Se){var e=Se,t=Ee;if(Ee=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Te(e,t){return e(t)}function Le(){}var _e=!1;function Re(e,t,n){if(_e)return e(t,n);_e=!0;try{return Te(e,t,n)}finally{_e=!1,(null!==Se||null!==Ee)&&(Le(),je())}}function Ae(e,t){var n=e.stateNode;if(null===n)return null;var r=ko(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var ze=!1;if(c)try{var De={};Object.defineProperty(De,"passive",{get:function(){ze=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(ce){ze=!1}function Me(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Oe=!1,Ne=null,Ie=!1,$e=null,Fe={onError:function(e){Oe=!0,Ne=e}};function Ve(e,t,n,r,o,i,a,s,l){Oe=!1,Ne=null,Me.apply(Fe,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Be(e)!==e)throw Error(i(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return We(o),e;if(a===r)return We(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,qe=o.unstable_cancelCallback,Ge=o.unstable_shouldYield,Xe=o.unstable_requestPaint,Qe=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~o;0!==s?r=dt(s):0!==(i&=a)&&(r=dt(i))}else 0!==(a=n&~o)?r=dt(a):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,Et,Ct,Pt=!1,jt=[],Tt=null,Lt=null,_t=null,Rt=new Map,At=new Map,zt=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Rt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(t.pointerId)}}function Ot(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=bo(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Nt(e){var t=xo(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Ct(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bo(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function $t(e,t,n){It(e)&&n.delete(t)}function Ft(){Pt=!1,null!==Tt&&It(Tt)&&(Tt=null),null!==Lt&&It(Lt)&&(Lt=null),null!==_t&&It(_t)&&(_t=null),Rt.forEach($t),At.forEach($t)}function Vt(e,t){e.blockedOn===t&&(e.blockedOn=null,Pt||(Pt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ft)))}function Bt(e){function t(t){return Vt(t,e)}if(0<jt.length){Vt(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Vt(Tt,e),null!==Lt&&Vt(Lt,e),null!==_t&&Vt(_t,e),Rt.forEach(t),At.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Nt(n),null===n.blockedOn&&zt.shift()}var Ut=b.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,n,r){var o=xt,i=Ut.transition;Ut.transition=null;try{xt=1,Kt(e,t,n,r)}finally{xt=o,Ut.transition=i}}function Yt(e,t,n,r){var o=xt,i=Ut.transition;Ut.transition=null;try{xt=4,Kt(e,t,n,r)}finally{xt=o,Ut.transition=i}}function Kt(e,t,n,r){if(Wt){var o=Gt(e,t,n,r);if(null===o)Wr(e,t,r,qt,n),Mt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Tt=Ot(Tt,e,t,n,r,o),!0;case"dragenter":return Lt=Ot(Lt,e,t,n,r,o),!0;case"mouseover":return _t=Ot(_t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Rt.set(i,Ot(Rt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,At.set(i,Ot(At.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Mt(e,r),4&t&&-1<Dt.indexOf(e)){for(;null!==o;){var i=bo(o);if(null!==i&&wt(i),null===(i=Gt(e,t,n,r))&&Wr(e,t,r,qt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var qt=null;function Gt(e,t,n,r){if(qt=null,null!==(e=xo(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=N({},un,{view:0,detail:0}),pn=on(dn),hn=N({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),fn=on(hn),mn=on(N({},hn,{dataTransfer:0})),gn=on(N({},dn,{relatedTarget:0})),vn=on(N({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=N({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=on(yn),bn=on(N({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return En}var Pn=N({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=on(Pn),Tn=on(N({},hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ln=on(N({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),_n=on(N({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=N({},hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),An=on(Rn),zn=[9,13,27,32],Dn=c&&"CompositionEvent"in window,Mn=null;c&&"documentMode"in document&&(Mn=document.documentMode);var On=c&&"TextEvent"in window&&!Mn,Nn=c&&(!Dn||Mn&&8<Mn&&11>=Mn),In=String.fromCharCode(32),$n=!1;function Fn(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Hn(e,t,n,r){Pe(r),0<(t=Yr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function qn(e){Ir(e,0)}function Gn(e){if(K(wo(e)))return e}function Xn(e,t){if("change"===e)return t}var Qn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Kn=Yn=null)}function nr(e){if("value"===e.propertyName&&Gn(Kn)){var t=[];Hn(t,Kn,e,we(e)),Re(qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Kn)}function ir(e,t){if("click"===e)return Gn(t)}function ar(e,t){if("input"===e||"change"===e)return Gn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!sr(e[o],t[o]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=q((e=t.contentWindow).document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&hr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cr(n,i);var a=cr(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==q(r)||("selectionStart"in(r=gr)&&hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},Er={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return Sr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Pr=Cr("animationend"),jr=Cr("animationiteration"),Tr=Cr("animationstart"),Lr=Cr("transitionend"),_r=new Map,Rr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){_r.set(e,t),l(t,[e])}for(var zr=0;zr<Rr.length;zr++){var Dr=Rr[zr];Ar(Dr.toLowerCase(),"on"+(Dr[0].toUpperCase()+Dr.slice(1)))}Ar(Pr,"onAnimationEnd"),Ar(jr,"onAnimationIteration"),Ar(Tr,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Lr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Or=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Nr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,s,l,u){if(Ve.apply(this,arguments),Oe){if(!Oe)throw Error(i(198));var c=Ne;Oe=!1,Ne=null,Ie||(Ie=!0,$e=c)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Nr(o,s,u),i=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Nr(o,s,u),i=l}}}if(Ie)throw e=$e,Ie=!1,$e=null,e}function $r(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Ur(t,e,2,!1),n.add(r))}function Fr(e,t,n){var r=0;t&&(r|=4),Ur(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Vr]){e[Vr]=!0,a.forEach((function(t){"selectionchange"!==t&&(Or.has(t)||Fr(t,!1,e),Fr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Vr]||(t[Vr]=!0,Fr("selectionchange",!1,t))}}function Ur(e,t,n,r){switch(Xt(t)){case 1:var o=Ht;break;case 4:o=Yt;break;default:o=Kt}n=o.bind(null,t,n,e),o=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=xo(s)))return;if(5===(l=a.tag)||6===l){r=i=a;continue e}s=s.parentNode}}r=r.return}Re((function(){var r=i,o=we(n),a=[];e:{var s=_r.get(e);if(void 0!==s){var l=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=jn;break;case"focusin":u="focus",l=gn;break;case"focusout":u="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Ln;break;case Pr:case jr:case Tr:l=vn;break;case Lr:l=_n;break;case"scroll":l=pn;break;case"wheel":l=An;break;case"copy":case"cut":case"paste":l=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tn}var c=0!==(4&t),d=!c&&"scroll"===e,p=c?null!==s?s+"Capture":null:s;c=[];for(var h,f=r;null!==f;){var m=(h=f).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==p&&(null!=(m=Ae(f,p))&&c.push(Hr(f,m,h)))),d)break;f=f.return}0<c.length&&(s=new l(s,u,null,n,o),a.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(u=n.relatedTarget||n.fromElement)||!xo(u)&&!u[mo])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?xo(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=fn,m="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tn,m="onPointerLeave",p="onPointerEnter",f="pointer"),d=null==l?s:wo(l),h=null==u?s:wo(u),(s=new c(m,f+"leave",l,n,o)).target=d,s.relatedTarget=h,m=null,xo(o)===r&&((c=new c(p,f+"enter",u,n,o)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(p=u,f=0,h=c=l;h;h=Kr(h))f++;for(h=0,m=p;m;m=Kr(m))h++;for(;0<f-h;)c=Kr(c),f--;for(;0<h-f;)p=Kr(p),h--;for(;f--;){if(c===p||null!==p&&c===p.alternate)break e;c=Kr(c),p=Kr(p)}c=null}else c=null;null!==l&&qr(a,s,l,c,!1),null!==u&&null!==d&&qr(a,d,u,c,!0)}if("select"===(l=(s=r?wo(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Xn;else if(Wn(s))if(Qn)g=ar;else{g=or;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ir);switch(g&&(g=g(e,r))?Hn(a,g,n,o):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?wo(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(a,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,o)}var y;if(Dn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Bn?Fn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Nn&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Bn&&(y=en()):(Jt="value"in(Qt=o)?Qt.value:Qt.textContent,Bn=!0)),0<(v=Yr(r,x)).length&&(x=new bn(x,e,null,n,o),a.push({event:x,listeners:v}),y?x.data=y:null!==(y=Vn(n))&&(x.data=y))),(y=On?function(e,t){switch(e){case"compositionend":return Vn(t);case"keypress":return 32!==t.which?null:($n=!0,In);case"textInput":return(e=t.data)===In&&$n?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Dn&&Fn(e,t)?(e=en(),Zt=Jt=Qt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(o=new bn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=y))}Ir(a,t)}))}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Ae(e,n))&&r.unshift(Hr(e,i,o)),null!=(i=Ae(e,t))&&r.push(Hr(e,i,o))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function qr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,o?null!=(l=Ae(n,i))&&a.unshift(Hr(n,l,s)):o||null!=(l=Ae(n,i))&&a.push(Hr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Gr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Qr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Xr,"")}function Jr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(i(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(so)}:ro;function so(e){setTimeout((function(){throw e}))}function lo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Bt(t)}function uo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function co(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),ho="__reactFiber$"+po,fo="__reactProps$"+po,mo="__reactContainer$"+po,go="__reactEvents$"+po,vo="__reactListeners$"+po,yo="__reactHandles$"+po;function xo(e){var t=e[ho];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[ho]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=co(e);null!==e;){if(n=e[ho])return n;e=co(e)}return t}n=(e=n).parentNode}return null}function bo(e){return!(e=e[ho]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ko(e){return e[fo]||null}var So=[],Eo=-1;function Co(e){return{current:e}}function Po(e){0>Eo||(e.current=So[Eo],So[Eo]=null,Eo--)}function jo(e,t){Eo++,So[Eo]=e.current,e.current=t}var To={},Lo=Co(To),_o=Co(!1),Ro=To;function Ao(e,t){var n=e.type.contextTypes;if(!n)return To;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Do(){Po(_o),Po(Lo)}function Mo(e,t,n){if(Lo.current!==To)throw Error(i(168));jo(Lo,t),jo(_o,n)}function Oo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,U(e)||"Unknown",o));return N({},n,r)}function No(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||To,Ro=Lo.current,jo(Lo,e),jo(_o,_o.current),!0}function Io(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Oo(e,t,Ro),r.__reactInternalMemoizedMergedChildContext=e,Po(_o),Po(Lo),jo(Lo,e)):Po(_o),jo(_o,n)}var $o=null,Fo=!1,Vo=!1;function Bo(e){null===$o?$o=[e]:$o.push(e)}function Uo(){if(!Vo&&null!==$o){Vo=!0;var e=0,t=xt;try{var n=$o;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}$o=null,Fo=!1}catch(o){throw null!==$o&&($o=$o.slice(e+1)),Ke(Ze,Uo),o}finally{xt=t,Vo=!1}}return null}var Wo=[],Ho=0,Yo=null,Ko=0,qo=[],Go=0,Xo=null,Qo=1,Jo="";function Zo(e,t){Wo[Ho++]=Ko,Wo[Ho++]=Yo,Yo=e,Ko=t}function ei(e,t,n){qo[Go++]=Qo,qo[Go++]=Jo,qo[Go++]=Xo,Xo=e;var r=Qo;e=Jo;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Qo=1<<32-at(t)+o|n<<o|r,Jo=i+e}else Qo=1<<i|n<<o|r,Jo=e}function ti(e){null!==e.return&&(Zo(e,1),ei(e,1,0))}function ni(e){for(;e===Yo;)Yo=Wo[--Ho],Wo[Ho]=null,Ko=Wo[--Ho],Wo[Ho]=null;for(;e===Xo;)Xo=qo[--Go],qo[Go]=null,Jo=qo[--Go],qo[Go]=null,Qo=qo[--Go],qo[Go]=null}var ri=null,oi=null,ii=!1,ai=null;function si(e,t){var n=Ru(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=uo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Xo?{id:Qo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ru(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ui(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ii){var t=oi;if(t){var n=t;if(!li(e,t)){if(ui(e))throw Error(i(418));t=uo(n.nextSibling);var r=ri;t&&li(e,t)?si(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ui(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function pi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ui(e))throw hi(),Error(i(418));for(;t;)si(e,t),t=uo(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=uo(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?uo(e.stateNode.nextSibling):null;return!0}function hi(){for(var e=oi;e;)e=uo(e.nextSibling)}function fi(){oi=ri=null,ii=!1}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=b.ReactCurrentBatchConfig;function vi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xi(e){return(0,e._init)(e._payload)}function bi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=zu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Nu(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===A&&xi(i)===t.type)?((r=o(t,n.props)).ref=vi(e,t,n),r.return=e,r):((r=Du(n.type,n.key,n.props,null,e.mode,r)).ref=vi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Mu(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Nu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Du(t.type,t.key,t.props,null,e.mode,n)).ref=vi(e,null,t),n.return=e,n;case k:return(t=Iu(t,e.mode,n)).return=e,t;case A:return p(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=Mu(t,e.mode,n,null)).return=e,t;yi(e,t)}return null}function h(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?u(e,t,n,r):null;case k:return n.key===o?c(e,t,n,r):null;case A:return h(e,t,(o=n._init)(n._payload),r)}if(te(n)||M(n))return null!==o?null:d(e,t,n,r,null);yi(e,n)}return null}function f(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case A:return f(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||M(r))return d(t,e=e.get(n)||null,r,o,null);yi(t,r)}return null}function m(o,i,s,l){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(o,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),i=a(v,i,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===s.length)return n(o,d),ii&&Zo(o,m),u;if(null===d){for(;m<s.length;m++)null!==(d=p(o,s[m],l))&&(i=a(d,i,m),null===c?u=d:c.sibling=d,c=d);return ii&&Zo(o,m),u}for(d=r(o,d);m<s.length;m++)null!==(g=f(d,o,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=a(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(o,e)})),ii&&Zo(o,m),u}function g(o,s,l,u){var c=M(l);if("function"!==typeof c)throw Error(i(150));if(null==(l=c.call(l)))throw Error(i(151));for(var d=c=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var x=h(o,m,y.value,u);if(null===x){null===m&&(m=v);break}e&&m&&null===x.alternate&&t(o,m),s=a(x,s,g),null===d?c=x:d.sibling=x,d=x,m=v}if(y.done)return n(o,m),ii&&Zo(o,g),c;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(o,y.value,u))&&(s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return ii&&Zo(o,g),c}for(m=r(o,m);!y.done;g++,y=l.next())null!==(y=f(m,o,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(o,e)})),ii&&Zo(o,g),c}return function e(r,i,a,l){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=i;null!==c;){if(c.key===u){if((u=a.type)===S){if(7===c.tag){n(r,c.sibling),(i=o(c,a.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===A&&xi(u)===c.type){n(r,c.sibling),(i=o(c,a.props)).ref=vi(r,c,a),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===S?((i=Mu(a.props.children,r.mode,l,a.key)).return=r,r=i):((l=Du(a.type,a.key,a.props,null,r.mode,l)).ref=vi(r,i,a),l.return=r,r=l)}return s(r);case k:e:{for(c=a.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Iu(a,r.mode,l)).return=r,r=i}return s(r);case A:return e(r,i,(c=a._init)(a._payload),l)}if(te(a))return m(r,i,a,l);if(M(a))return g(r,i,a,l);yi(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=Nu(a,r.mode,l)).return=r,r=i),s(r)):n(r,i)}}var wi=bi(!0),ki=bi(!1),Si=Co(null),Ei=null,Ci=null,Pi=null;function ji(){Pi=Ci=Ei=null}function Ti(e){var t=Si.current;Po(Si),e._currentValue=t}function Li(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _i(e,t){Ei=e,Pi=Ci=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xs=!0),e.firstContext=null)}function Ri(e){var t=e._currentValue;if(Pi!==e)if(e={context:e,memoizedValue:t,next:null},null===Ci){if(null===Ei)throw Error(i(308));Ci=e,Ei.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var Ai=null;function zi(e){null===Ai?Ai=[e]:Ai.push(e)}function Di(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,zi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mi(e,r)}function Mi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Oi=!1;function Ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ii(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $i(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Tl)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mi(e,n)}return null===(o=r.interleaved)?(t.next=t,zi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mi(e,n)}function Vi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Bi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var o=e.updateQueue;Oi=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?i=u:a.next=u,a=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,c=u=l=null,s=i;;){var p=s.lane,h=s.eventTime;if((r&p)===p){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(p=t,h=n,m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(h,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=m.payload)?f.call(h,d,p):f)||void 0===p)break e;d=N({},d,p);break e;case 2:Oi=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,a|=p;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(p=s).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===c&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Ol|=a,e.lanes=a,e.memoizedState=d}}function Wi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var Hi={},Yi=Co(Hi),Ki=Co(Hi),qi=Co(Hi);function Gi(e){if(e===Hi)throw Error(i(174));return e}function Xi(e,t){switch(jo(qi,t),jo(Ki,e),jo(Yi,Hi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Po(Yi),jo(Yi,t)}function Qi(){Po(Yi),Po(Ki),Po(qi)}function Ji(e){Gi(qi.current);var t=Gi(Yi.current),n=le(t,e.type);t!==n&&(jo(Ki,e),jo(Yi,n))}function Zi(e){Ki.current===e&&(Po(Yi),Po(Ki))}var ea=Co(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var oa=b.ReactCurrentDispatcher,ia=b.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ua=null,ca=!1,da=!1,pa=0,ha=0;function fa(){throw Error(i(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,o,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=null===e||null===e.memoizedState?Za:es,e=n(r,o),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(i(301));a+=1,ua=la=null,t.updateQueue=null,oa.current=ts,e=n(r,o)}while(da)}if(oa.current=Ja,t=null!==la&&null!==la.next,aa=0,ua=la=sa=null,ca=!1,t)throw Error(i(300));return e}function va(){var e=0!==pa;return pa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ua?sa.memoizedState=ua=e:ua=ua.next=e,ua}function xa(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ua?sa.memoizedState:ua.next;if(null!==t)ua=t,la=e;else{if(null===e)throw Error(i(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ua?sa.memoizedState=ua=e:ua=ua.next=e}return ua}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=xa(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=la,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var l=s=null,u=null,c=a;do{var d=c.lane;if((aa&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=p,s=r):u=u.next=p,sa.lanes|=d,Ol|=d}c=c.next}while(null!==c&&c!==a);null===u?s=r:u.next=l,sr(r,t.memoizedState)||(xs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,sa.lanes|=a,Ol|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=xa(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var s=o=o.next;do{a=e(a,s.action),s=s.next}while(s!==o);sr(a,t.memoizedState)||(xs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sa(){}function Ea(e,t){var n=sa,r=xa(),o=t(),a=!sr(r.memoizedState,o);if(a&&(r.memoizedState=o,xs=!0),r=r.queue,Oa(ja.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ua&&1&ua.memoizedState.tag){if(n.flags|=2048,Ra(9,Pa.bind(null,n,r,o,t),void 0,null),null===Ll)throw Error(i(349));0!==(30&aa)||Ca(n,t,o)}return o}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Pa(e,t,n,r){t.value=n,t.getSnapshot=r,Ta(t)&&La(e)}function ja(e,t,n){return n((function(){Ta(t)&&La(e)}))}function Ta(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function La(e){var t=Mi(e,1);null!==t&&nu(t,e,1,-1)}function _a(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=qa.bind(null,sa,e),[t.memoizedState,e]}function Ra(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Aa(){return xa().memoizedState}function za(e,t,n,r){var o=ya();sa.flags|=e,o.memoizedState=Ra(1|t,n,void 0,void 0===r?null:r)}function Da(e,t,n,r){var o=xa();r=void 0===r?null:r;var i=void 0;if(null!==la){var a=la.memoizedState;if(i=a.destroy,null!==r&&ma(r,a.deps))return void(o.memoizedState=Ra(t,n,i,r))}sa.flags|=e,o.memoizedState=Ra(1|t,n,i,r)}function Ma(e,t){return za(8390656,8,e,t)}function Oa(e,t){return Da(2048,8,e,t)}function Na(e,t){return Da(4,2,e,t)}function Ia(e,t){return Da(4,4,e,t)}function $a(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fa(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Da(4,4,$a.bind(null,t,e),n)}function Va(){}function Ba(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ua(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,xs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,Ol|=n,e.baseState=!0),t)}function Ha(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{xt=n,ia.transition=r}}function Ya(){return xa().memoizedState}function Ka(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ga(e))Xa(t,n);else if(null!==(n=Di(e,t,n,r))){nu(n,e,r,eu()),Qa(n,t,r)}}function qa(e,t,n){var r=tu(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ga(e))Xa(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(o.next=o,zi(t)):(o.next=l.next,l.next=o),void(t.interleaved=o)}}catch(u){}null!==(n=Di(e,t,o,r))&&(nu(n,e,r,o=eu()),Qa(n,t,r))}}function Ga(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Xa(e,t){da=ca=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Ja={readContext:Ri,useCallback:fa,useContext:fa,useEffect:fa,useImperativeHandle:fa,useInsertionEffect:fa,useLayoutEffect:fa,useMemo:fa,useReducer:fa,useRef:fa,useState:fa,useDebugValue:fa,useDeferredValue:fa,useTransition:fa,useMutableSource:fa,useSyncExternalStore:fa,useId:fa,unstable_isNewReconciler:!1},Za={readContext:Ri,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:Ri,useEffect:Ma,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,za(4194308,4,$a.bind(null,t,e),n)},useLayoutEffect:function(e,t){return za(4194308,4,e,t)},useInsertionEffect:function(e,t){return za(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:_a,useDebugValue:Va,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=_a(!1),t=e[0];return e=Ha.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,o=ya();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Ll)throw Error(i(349));0!==(30&aa)||Ca(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Ma(ja.bind(null,r,a,e),[e]),r.flags|=2048,Ra(9,Pa.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=Ll.identifierPrefix;if(ii){var n=Jo;t=":"+t+"R"+(n=(Qo&~(1<<32-at(Qo)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ha++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ri,useCallback:Ba,useContext:Ri,useEffect:Oa,useImperativeHandle:Fa,useInsertionEffect:Na,useLayoutEffect:Ia,useMemo:Ua,useReducer:wa,useRef:Aa,useState:function(){return wa(ba)},useDebugValue:Va,useDeferredValue:function(e){return Wa(xa(),la.memoizedState,e)},useTransition:function(){return[wa(ba)[0],xa().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Ea,useId:Ya,unstable_isNewReconciler:!1},ts={readContext:Ri,useCallback:Ba,useContext:Ri,useEffect:Oa,useImperativeHandle:Fa,useInsertionEffect:Na,useLayoutEffect:Ia,useMemo:Ua,useReducer:ka,useRef:Aa,useState:function(){return ka(ba)},useDebugValue:Va,useDeferredValue:function(e){var t=xa();return null===la?t.memoizedState=e:Wa(t,la.memoizedState,e)},useTransition:function(){return[ka(ba)[0],xa().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Ea,useId:Ya,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:N({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var os={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),i=$i(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,o))&&(nu(t,e,o,r),Vi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),i=$i(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,o))&&(nu(t,e,o,r),Vi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),o=$i(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Fi(e,o,r))&&(nu(t,e,r,n),Vi(t,e,r))}};function is(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(o,i))}function as(e,t,n){var r=!1,o=To,i=t.contextType;return"object"===typeof i&&null!==i?i=Ri(i):(o=zo(t)?Ro:Lo.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ao(e,o):To),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=os,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&os.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ni(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Ri(i):(i=zo(t)?Ro:Lo.current,o.context=Ao(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rs(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&os.enqueueReplaceState(o,o.state,null),Ui(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function us(e,t){try{var n="",r=t;do{n+=V(r),r=r.return}while(r);var o=n}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function cs(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,n){(n=$i(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Hl=r),ds(0,t)},n}function fs(e,t,n){(n=$i(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ds(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Yl?Yl=new Set([this]):Yl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=$i(-1,1)).tag=2,Fi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ys=b.ReactCurrentOwner,xs=!1;function bs(e,t,n,r){t.child=null===e?ki(t,null,n,r):wi(t,e.child,n,r)}function ws(e,t,n,r,o){n=n.render;var i=t.ref;return _i(t,o),r=ga(e,t,n,r,i,o),n=va(),null===e||xs?(ii&&n&&ti(t),t.flags|=1,bs(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ws(e,t,o))}function ks(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Au(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Du(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ss(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return Ws(e,t,o)}return t.flags|=1,(e=zu(i,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(lr(i,r)&&e.ref===t.ref){if(xs=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,Ws(e,t,o);0!==(131072&e.flags)&&(xs=!0)}}return Ps(e,t,n,r,o)}function Es(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},jo(zl,Al),Al|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,jo(zl,Al),Al|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,jo(zl,Al),Al|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,jo(zl,Al),Al|=r;return bs(e,t,o,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ps(e,t,n,r,o){var i=zo(n)?Ro:Lo.current;return i=Ao(t,i),_i(t,o),n=ga(e,t,n,r,i,o),r=va(),null===e||xs?(ii&&r&&ti(t),t.flags|=1,bs(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ws(e,t,o))}function js(e,t,n,r,o){if(zo(n)){var i=!0;No(t)}else i=!1;if(_i(t,o),null===t.stateNode)Us(e,t),as(t,n,r),ls(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ri(u):u=Ao(t,u=zo(n)?Ro:Lo.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==u)&&ss(t,a,r,u),Oi=!1;var p=t.memoizedState;a.state=p,Ui(t,r,a,o),l=t.memoizedState,s!==r||p!==l||_o.current||Oi?("function"===typeof c&&(rs(t,n,c,r),l=t.memoizedState),(s=Oi||is(t,n,s,r,p,l,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ii(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ns(t.type,s),a.props=u,d=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ri(l):l=Ao(t,l=zo(n)?Ro:Lo.current);var h=n.getDerivedStateFromProps;(c="function"===typeof h||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,a,r,l),Oi=!1,p=t.memoizedState,a.state=p,Ui(t,r,a,o);var f=t.memoizedState;s!==d||p!==f||_o.current||Oi?("function"===typeof h&&(rs(t,n,h,r),f=t.memoizedState),(u=Oi||is(t,n,u,r,p,f,l)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ts(e,t,n,r,i,o)}function Ts(e,t,n,r,o,i){Cs(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&Io(t,n,!1),Ws(e,t,i);r=t.stateNode,ys.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,s,i)):bs(e,t,s,i),t.memoizedState=r.state,o&&Io(t,n,!0),t.child}function Ls(e){var t=e.stateNode;t.pendingContext?Mo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Mo(0,t.context,!1),Xi(e,t.containerInfo)}function _s(e,t,n,r,o){return fi(),mi(o),t.flags|=256,bs(e,t,n,r),t.child}var Rs,As,zs,Ds,Ms={dehydrated:null,treeContext:null,retryLane:0};function Os(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ns(e,t,n){var r,o=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),jo(ea,1&a),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&o)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Ou(l,o,0,null),e=Mu(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Os(n),t.memoizedState=Ms,e):Is(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,s){if(n)return 256&t.flags?(t.flags&=-257,$s(e,t,s,r=cs(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Ou({mode:"visible",children:r.children},o,0,null),(a=Mu(a,o,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wi(t,e.child,null,s),t.child.memoizedState=Os(s),t.memoizedState=Ms,a);if(0===(1&t.mode))return $s(e,t,s,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var l=r.dgst;return r=l,$s(e,t,s,r=cs(a=Error(i(419)),r,void 0))}if(l=0!==(s&e.childLanes),xs||l){if(null!==(r=Ll)){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|s))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Mi(e,o),nu(r,e,o,-1))}return mu(),$s(e,t,s,r=cs(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=ju.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=uo(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(qo[Go++]=Qo,qo[Go++]=Jo,qo[Go++]=Xo,Qo=e.id,Jo=e.overflow,Xo=t),t=Is(t,r.children),t.flags|=4096,t)}(e,t,l,o,r,a,n);if(s){s=o.fallback,l=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:o.children};return 0===(1&l)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=zu(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=zu(r,s):(s=Mu(s,l,n,null)).flags|=2,s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=null===(l=e.child.memoizedState)?Os(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ms,o}return e=(s=e.child).sibling,o=zu(s,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Is(e,t){return(t=Ou({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function $s(e,t,n,r){return null!==r&&mi(r),wi(t,e.child,null,n),(e=Is(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Li(e.return,t,n)}function Vs(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Bs(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fs(e,n,t);else if(19===e.tag)Fs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(jo(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vs(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ta(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vs(t,!0,n,null,i);break;case"together":Vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ol|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=zu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=zu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hs(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ys(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ys(t),null;case 1:case 17:return zo(t.type)&&Do(),Ys(t),null;case 3:return r=t.stateNode,Qi(),Po(_o),Po(Lo),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(pi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(au(ai),ai=null))),As(e,t),Ys(t),null;case 5:Zi(t);var o=Gi(qi.current);if(n=t.type,null!==e&&null!=t.stateNode)zs(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Ys(t),null}if(e=Gi(Yi.current),pi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ho]=t,r[fo]=a,e=0!==(1&t.mode),n){case"dialog":$r("cancel",r),$r("close",r);break;case"iframe":case"object":case"embed":$r("load",r);break;case"video":case"audio":for(o=0;o<Mr.length;o++)$r(Mr[o],r);break;case"source":$r("error",r);break;case"img":case"image":case"link":$r("error",r),$r("load",r);break;case"details":$r("toggle",r);break;case"input":X(r,a),$r("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},$r("invalid",r);break;case"textarea":oe(r,a),$r("invalid",r)}for(var l in ye(n,a),o=null,a)if(a.hasOwnProperty(l)){var u=a[l];"children"===l?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),o=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),o=["children",""+u]):s.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&$r("scroll",r)}switch(n){case"input":Y(r),Z(r,a,!0);break;case"textarea":Y(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ho]=t,e[fo]=r,Rs(e,t,!1,!1),t.stateNode=e;e:{switch(l=xe(n,r),n){case"dialog":$r("cancel",e),$r("close",e),o=r;break;case"iframe":case"object":case"embed":$r("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mr.length;o++)$r(Mr[o],e);o=r;break;case"source":$r("error",e),o=r;break;case"img":case"image":case"link":$r("error",e),$r("load",e),o=r;break;case"details":$r("toggle",e),o=r;break;case"input":X(e,r),o=G(e,r),$r("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=N({},r,{value:void 0}),$r("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),$r("invalid",e)}for(a in ye(n,o),u=o)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?ge(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&pe(e,c):"number"===typeof c&&pe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=c&&"onScroll"===a&&$r("scroll",e):null!=c&&x(e,a,c,l))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ys(t),null;case 6:if(e&&null!=t.stateNode)Ds(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Gi(qi.current),Gi(Yi.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ho]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ho]=t,t.stateNode=r}return Ys(t),null;case 13:if(Po(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))hi(),fi(),t.flags|=98560,a=!1;else if(a=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[ho]=t}else fi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ys(t),a=!1}else null!==ai&&(au(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Dl&&(Dl=3):mu())),null!==t.updateQueue&&(t.flags|=4),Ys(t),null);case 4:return Qi(),As(e,t),null===e&&Br(t.stateNode.containerInfo),Ys(t),null;case 10:return Ti(t.type._context),Ys(t),null;case 19:if(Po(ea),null===(a=t.memoizedState))return Ys(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Hs(a,!1);else{if(0!==Dl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Hs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return jo(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Qe()>Bl&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!ii)return Ys(t),null}else 2*Qe()-a.renderingStartTime>Bl&&1073741824!==n&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Qe(),t.sibling=null,n=ea.current,jo(ea,r?1&n|2:1&n),t):(Ys(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Al)&&(Ys(t),6&t.subtreeFlags&&(t.flags|=8192)):Ys(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function qs(e,t){switch(ni(t),t.tag){case 1:return zo(t.type)&&Do(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qi(),Po(_o),Po(Lo),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Po(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));fi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Po(ea),null;case 4:return Qi(),null;case 10:return Ti(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Rs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},As=function(){},zs=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Gi(Yi.current);var i,a=null;switch(n){case"input":o=G(e,o),r=G(e,r),a=[];break;case"select":o=N({},o,{value:void 0}),r=N({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ye(n,r),n=null,o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var l=o[c];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(s.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=o?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(i in l)!l.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&l[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(s.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&$r("scroll",e),a||l===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Ds=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gs=!1,Xs=!1,Qs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&el(t,n,i)}o=o.next}while(o!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ol(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function il(e){var t=e.alternate;null!==t&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ho],delete t[fo],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}var cl=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(s){}switch(n.tag){case 5:Xs||Zs(n,t);case 6:var r=cl,o=dl;cl=null,pl(e,t,n),dl=o,null!==(cl=r)&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cl.removeChild(n.stateNode));break;case 18:null!==cl&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?lo(e.parentNode,n):1===e.nodeType&&lo(e,n),Bt(e)):lo(cl,n.stateNode));break;case 4:r=cl,o=dl,cl=n.stateNode.containerInfo,dl=!0,pl(e,t,n),cl=r,dl=o;break;case 0:case 11:case 14:case 15:if(!Xs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&el(n,t,a),o=o.next}while(o!==r)}pl(e,t,n);break;case 1:if(!Xs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Eu(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Xs=(r=Xs)||null!==n.memoizedState,pl(e,t,n),Xs=r):pl(e,t,n);break;default:pl(e,t,n)}}function fl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Qs),t.forEach((function(t){var r=Tu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:cl=l.stateNode,dl=!1;break e;case 3:case 4:cl=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===cl)throw Error(i(160));hl(a,s,o),cl=null,dl=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(c){Eu(o,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Eu(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:ml(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(ml(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===a.type&&null!=a.name&&Q(o,a),xe(l,s);var c=xe(l,a);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];"style"===d?ge(o,p):"dangerouslySetInnerHTML"===d?de(o,p):"children"===d?pe(o,p):x(o,d,p,c)}switch(l){case"input":J(o,a);break;case"textarea":ie(o,a);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var f=a.value;null!=f?ne(o,!!a.multiple,f,!1):h!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[fo]=a}catch(g){Eu(e,e.return,g)}}break;case 6:if(ml(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){Eu(e,e.return,g)}}break;case 3:if(ml(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:ml(t,e),vl(e);break;case 13:ml(t,e),vl(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Vl=Qe())),4&r&&fl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Xs=(c=Xs)||d,ml(t,e),Xs=c):ml(t,e),vl(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(p=Js=d;null!==Js;){switch(f=(h=Js).child,h.tag){case 0:case 11:case 14:case 15:nl(4,h,h.return);break;case 1:Zs(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:Zs(h,h.return);break;case 22:if(null!==h.memoizedState){wl(p);continue}}null!==f?(f.return=h,Js=f):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,c?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(u=p.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,l.style.display=me("display",s))}catch(g){Eu(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),vl(e),4&r&&fl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(pe(o,""),r.flags&=-33),ul(e,sl(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(i(161))}}catch(s){Eu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Js=e,xl(e,t,n)}function xl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var o=Js,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Gs;if(!a){var s=o.alternate,l=null!==s&&null!==s.memoizedState||Xs;s=Gs;var u=Xs;if(Gs=a,(Xs=l)&&!u)for(Js=o;null!==Js;)l=(a=Js).child,22===a.tag&&null!==a.memoizedState?kl(o):null!==l?(l.return=a,Js=l):kl(o);for(;null!==i;)Js=i,xl(i,t,n),i=i.sibling;Js=o,Gs=s,Xs=u}bl(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Js=i):bl(e)}}function bl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xs)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Wi(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wi(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Bt(p)}}}break;default:throw Error(i(163))}Xs||512&t.flags&&ol(t)}catch(h){Eu(t,t.return,h)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Eu(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(l){Eu(t,o,l)}}var i=t.return;try{ol(t)}catch(l){Eu(t,i,l)}break;case 5:var a=t.return;try{ol(t)}catch(l){Eu(t,a,l)}}}catch(l){Eu(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,El=Math.ceil,Cl=b.ReactCurrentDispatcher,Pl=b.ReactCurrentOwner,jl=b.ReactCurrentBatchConfig,Tl=0,Ll=null,_l=null,Rl=0,Al=0,zl=Co(0),Dl=0,Ml=null,Ol=0,Nl=0,Il=0,$l=null,Fl=null,Vl=0,Bl=1/0,Ul=null,Wl=!1,Hl=null,Yl=null,Kl=!1,ql=null,Gl=0,Xl=0,Ql=null,Jl=-1,Zl=0;function eu(){return 0!==(6&Tl)?Qe():-1!==Jl?Jl:Jl=Qe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Tl)&&0!==Rl?Rl&-Rl:null!==gi.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nu(e,t,n,r){if(50<Xl)throw Xl=0,Ql=null,Error(i(185));vt(e,n,r),0!==(2&Tl)&&e===Ll||(e===Ll&&(0===(2&Tl)&&(Nl|=n),4===Dl&&su(e,Rl)),ru(e,r),1===n&&0===Tl&&0===(1&t.mode)&&(Bl=Qe()+500,Fo&&Uo()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),s=1<<a,l=o[a];-1===l?0!==(s&n)&&0===(s&r)||(o[a]=ht(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=pt(e,e===Ll?Rl:0);if(0===r)null!==n&&qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&qe(n),1===t)0===e.tag?function(e){Fo=!0,Bo(e)}(lu.bind(null,e)):Bo(lu.bind(null,e)),ao((function(){0===(6&Tl)&&Uo()})),n=null;else{switch(bt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Lu(n,ou.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ou(e,t){if(Jl=-1,Zl=0,0!==(6&Tl))throw Error(i(327));var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var r=pt(e,e===Ll?Rl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var o=Tl;Tl|=2;var a=fu();for(Ll===e&&Rl===t||(Ul=null,Bl=Qe()+500,pu(e,t));;)try{yu();break}catch(l){hu(e,l)}ji(),Cl.current=a,Tl=o,null!==_l?t=0:(Ll=null,Rl=0,t=Dl)}if(0!==t){if(2===t&&(0!==(o=ft(e))&&(r=o,t=iu(e,o))),1===t)throw n=Ml,pu(e,0),su(e,r),ru(e,Qe()),n;if(6===t)su(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!sr(i(),o))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gu(e,r))&&(0!==(a=ft(e))&&(r=a,t=iu(e,a))),1===t))throw n=Ml,pu(e,0),su(e,r),ru(e,Qe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wu(e,Fl,Ul);break;case 3:if(su(e,r),(130023424&r)===r&&10<(t=Vl+500-Qe())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wu.bind(null,e,Fl,Ul),t);break}wu(e,Fl,Ul);break;case 4:if(su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>o&&(o=s),r&=~a}if(r=o,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*El(r/1960))-r)){e.timeoutHandle=ro(wu.bind(null,e,Fl,Ul),r);break}wu(e,Fl,Ul);break;default:throw Error(i(329))}}}return ru(e,Qe()),e.callbackNode===n?ou.bind(null,e):null}function iu(e,t){var n=$l;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Fl,Fl=n,null!==t&&au(t)),e}function au(e){null===Fl?Fl=e:Fl.push.apply(Fl,e)}function su(e,t){for(t&=~Il,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lu(e){if(0!==(6&Tl))throw Error(i(327));ku();var t=pt(e,0);if(0===(1&t))return ru(e,Qe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ft(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=Ml,pu(e,0),su(e,t),ru(e,Qe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Fl,Ul),ru(e,Qe()),null}function uu(e,t){var n=Tl;Tl|=1;try{return e(t)}finally{0===(Tl=n)&&(Bl=Qe()+500,Fo&&Uo())}}function cu(e){null!==ql&&0===ql.tag&&0===(6&Tl)&&ku();var t=Tl;Tl|=1;var n=jl.transition,r=xt;try{if(jl.transition=null,xt=1,e)return e()}finally{xt=r,jl.transition=n,0===(6&(Tl=t))&&Uo()}}function du(){Al=zl.current,Po(zl)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==_l)for(n=_l.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Do();break;case 3:Qi(),Po(_o),Po(Lo),ra();break;case 5:Zi(r);break;case 4:Qi();break;case 13:case 19:Po(ea);break;case 10:Ti(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ll=e,_l=e=zu(e.current,null),Rl=Al=t,Dl=0,Ml=null,Il=Nl=Ol=0,Fl=$l=null,null!==Ai){for(t=0;t<Ai.length;t++)if(null!==(r=(n=Ai[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}Ai=null}return e}function hu(e,t){for(;;){var n=_l;try{if(ji(),oa.current=Ja,ca){for(var r=sa.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ca=!1}if(aa=0,ua=la=sa=null,da=!1,pa=0,Pl.current=null,null===n||null===n.return){Dl=1,Ml=t,_l=null;break}e:{var a=e,s=n.return,l=n,u=t;if(t=Rl,l.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=gs(s);if(null!==f){f.flags&=-257,vs(f,s,l,0,t),1&f.mode&&ms(a,c,t),u=c;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ms(a,c,t),mu();break e}u=Error(i(426))}else if(ii&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),mi(us(u,l));break e}}a=u=us(u,l),4!==Dl&&(Dl=2),null===$l?$l=[a]:$l.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Bi(a,hs(0,u,t));break e;case 1:l=u;var y=a.type,x=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Yl||!Yl.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t,Bi(a,fs(a,l,t));break e}}a=a.return}while(null!==a)}bu(n)}catch(b){t=b,_l===n&&null!==n&&(_l=n=n.return);continue}break}}function fu(){var e=Cl.current;return Cl.current=Ja,null===e?Ja:e}function mu(){0!==Dl&&3!==Dl&&2!==Dl||(Dl=4),null===Ll||0===(268435455&Ol)&&0===(268435455&Nl)||su(Ll,Rl)}function gu(e,t){var n=Tl;Tl|=2;var r=fu();for(Ll===e&&Rl===t||(Ul=null,pu(e,t));;)try{vu();break}catch(o){hu(e,o)}if(ji(),Tl=n,Cl.current=r,null!==_l)throw Error(i(261));return Ll=null,Rl=0,Dl}function vu(){for(;null!==_l;)xu(_l)}function yu(){for(;null!==_l&&!Ge();)xu(_l)}function xu(e){var t=Sl(e.alternate,e,Al);e.memoizedProps=e.pendingProps,null===t?bu(e):_l=t,Pl.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ks(n,t,Al)))return void(_l=n)}else{if(null!==(n=qs(n,t)))return n.flags&=32767,void(_l=n);if(null===e)return Dl=6,void(_l=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(_l=t);_l=t=e}while(null!==t);0===Dl&&(Dl=5)}function wu(e,t,n){var r=xt,o=jl.transition;try{jl.transition=null,xt=1,function(e,t,n,r){do{ku()}while(null!==ql);if(0!==(6&Tl))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Ll&&(_l=Ll=null,Rl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Kl||(Kl=!0,Lu(tt,(function(){return ku(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=jl.transition,jl.transition=null;var s=xt;xt=1;var l=Tl;Tl|=4,Pl.current=null,function(e,t){if(eo=Wt,hr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||0!==o&&3!==p.nodeType||(l=s+o),p!==a||0!==r&&3!==p.nodeType||(u=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++c===o&&(l=s),h===a&&++d===r&&(u=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Wt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(i(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=tl,tl=!1}(e,n),gl(n,e),fr(to),Wt=!!eo,to=eo=null,e.current=n,yl(n,e,o),Xe(),Tl=l,xt=s,jl.transition=a}else e.current=n;if(Kl&&(Kl=!1,ql=e,Gl=o),a=e.pendingLanes,0===a&&(Yl=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Wl)throw Wl=!1,e=Hl,Hl=null,e;0!==(1&Gl)&&0!==e.tag&&ku(),a=e.pendingLanes,0!==(1&a)?e===Ql?Xl++:(Xl=0,Ql=e):Xl=0,Uo()}(e,t,n,r)}finally{jl.transition=o,xt=r}return null}function ku(){if(null!==ql){var e=bt(Gl),t=jl.transition,n=xt;try{if(jl.transition=null,xt=16>e?16:e,null===ql)var r=!1;else{if(e=ql,ql=null,Gl=0,0!==(6&Tl))throw Error(i(331));var o=Tl;for(Tl|=4,Js=e.current;null!==Js;){var a=Js,s=a.child;if(0!==(16&Js.flags)){var l=a.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Js=c;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var p=d.child;if(null!==p)p.return=d,Js=p;else for(;null!==Js;){var h=(d=Js).sibling,f=d.return;if(il(d),d===c){Js=null;break}if(null!==h){h.return=f,Js=h;break}Js=f}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Js=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Js=s;else e:for(;null!==Js;){if(0!==(2048&(a=Js).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Js=y;break e}Js=a.return}}var x=e.current;for(Js=x;null!==Js;){var b=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Js=b;else e:for(s=x;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){Eu(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Tl=o,Uo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(k){}r=!0}return r}finally{xt=n,jl.transition=t}}return!1}function Su(e,t,n){e=Fi(e,t=hs(0,t=us(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Yl||!Yl.has(r))){t=Fi(t,e=fs(t,e=us(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ll===e&&(Rl&n)===n&&(4===Dl||3===Dl&&(130023424&Rl)===Rl&&500>Qe()-Vl?pu(e,0):Il|=n),ru(e,t)}function Pu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Mi(e,t))&&(vt(e,t,n),ru(e,n))}function ju(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Pu(e,n)}function Tu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Pu(e,n)}function Lu(e,t){return Ke(e,t)}function _u(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ru(e,t,n,r){return new _u(e,t,n,r)}function Au(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zu(e,t){var n=e.alternate;return null===n?((n=Ru(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Du(e,t,n,r,o,a){var s=2;if(r=e,"function"===typeof e)Au(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Mu(n.children,o,a,t);case E:s=8,o|=8;break;case C:return(e=Ru(12,n,t,2|o)).elementType=C,e.lanes=a,e;case L:return(e=Ru(13,n,t,o)).elementType=L,e.lanes=a,e;case _:return(e=Ru(19,n,t,o)).elementType=_,e.lanes=a,e;case z:return Ou(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case P:s=10;break e;case j:s=9;break e;case T:s=11;break e;case R:s=14;break e;case A:s=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Ru(s,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function Mu(e,t,n,r){return(e=Ru(7,e,r,t)).lanes=n,e}function Ou(e,t,n,r){return(e=Ru(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Nu(e,t,n){return(e=Ru(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Ru(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $u(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Fu(e,t,n,r,o,i,a,s,l){return e=new $u(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Ru(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ni(i),e}function Vu(e){if(!e)return To;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(zo(n))return Oo(e,n,t)}return t}function Bu(e,t,n,r,o,i,a,s,l){return(e=Fu(n,r,!0,e,0,i,0,s,l)).context=Vu(null),n=e.current,(i=$i(r=eu(),o=tu(n))).callback=void 0!==t&&null!==t?t:null,Fi(n,i,o),e.current.lanes=o,vt(e,o,r),ru(e,r),e}function Uu(e,t,n,r){var o=t.current,i=eu(),a=tu(o);return n=Vu(n),null===t.context?t.context=n:t.pendingContext=n,(t=$i(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fi(o,t,a))&&(nu(e,o,a,i),Vi(e,o,a)),a}function Wu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yu(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||_o.current)xs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xs=!1,function(e,t,n){switch(t.tag){case 3:Ls(t),fi();break;case 5:Ji(t);break;case 1:zo(t.type)&&No(t);break;case 4:Xi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;jo(Si,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(jo(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ns(e,t,n):(jo(ea,1&ea.current),null!==(e=Ws(e,t,n))?e.sibling:null);jo(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bs(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),jo(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Es(e,t,n)}return Ws(e,t,n)}(e,t,n);xs=0!==(131072&e.flags)}else xs=!1,ii&&0!==(1048576&t.flags)&&ei(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Us(e,t),e=t.pendingProps;var o=Ao(t,Lo.current);_i(t,n),o=ga(null,t,r,e,o,n);var a=va();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zo(r)?(a=!0,No(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Ni(t),o.updater=os,t.stateNode=o,o._reactInternals=t,ls(t,r,e,n),t=Ts(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),bs(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Au(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===R)return 14}return 2}(r),e=ns(r,e),o){case 0:t=Ps(null,t,r,e,n);break e;case 1:t=js(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Ps(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 1:return r=t.type,o=t.pendingProps,js(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 3:e:{if(Ls(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Ii(e,t),Ui(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=_s(e,t,r,n,o=us(Error(i(423)),t));break e}if(r!==o){t=_s(e,t,r,n,o=us(Error(i(424)),t));break e}for(oi=uo(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=ki(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fi(),r===o){t=Ws(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Ji(t),null===e&&ci(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,s=o.children,no(r,o)?s=null:null!==a&&no(r,a)&&(t.flags|=32),Cs(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&ci(t),null;case 13:return Ns(e,t,n);case 4:return Xi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,ws(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,jo(Si,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===o.children&&!_o.current){t=Ws(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var u=l.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=$i(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Li(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(i(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Li(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}bs(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_i(t,n),r=r(o=Ri(o)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return o=ns(r=t.type,t.pendingProps),ks(e,t,r,o=ns(r.type,o),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ns(r,o),Us(e,t),t.tag=1,zo(r)?(e=!0,No(t)):e=!1,_i(t,n),as(t,r,o),ls(t,r,o,n),Ts(null,t,r,!0,e,n);case 19:return Bs(e,t,n);case 22:return Es(e,t,n)}throw Error(i(156,t.tag))};var Ku="function"===typeof reportError?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}function Gu(e){this._internalRoot=e}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var s=o;o=function(){var e=Wu(a);s.call(e)}}Uu(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=Wu(a);i.call(e)}}var a=Bu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=a,e[mo]=a.current,Br(8===e.nodeType?e.parentNode:e),cu(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var s=r;r=function(){var e=Wu(l);s.call(e)}}var l=Fu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=l,e[mo]=l.current,Br(8===e.nodeType?e.parentNode:e),cu((function(){Uu(t,l,n,r)})),l}(n,t,e,o,r);return Wu(a)}Gu.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Uu(e,t,null,null)},Gu.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Uu(null,e,null,null)})),t[mo]=null}},Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Nt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Qe()),0===(6&Tl)&&(Bl=Qe()+500,Uo()))}break;case 13:cu((function(){var t=Mi(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Yu(e,1)}},kt=function(e){if(13===e.tag){var t=Mi(e,134217728);if(null!==t)nu(t,e,134217728,eu());Yu(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=Mi(e,t);if(null!==n)nu(n,e,t,eu());Yu(e,t)}},Et=function(){return xt},Ct=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ko(r);if(!o)throw Error(i(90));K(r),J(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=uu,Le=cu;var ec={usingClientEntryPoint:!1,Events:[bo,wo,ko,Pe,je,uu]},tc={findFiberByHostInstance:xo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{ot=rc.inject(nc),it=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xu(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xu(e))throw Error(i(299));var n=!1,r="",o=Ku;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Fu(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Br(8===e.nodeType?e.parentNode:e),new qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Qu(t))throw Error(i(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xu(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",s=Ku;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Bu(t,null,e,1,null!=n?n:null,o,0,a,s),e[mo]=t.current,Br(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Gu(t)},t.render=function(e,t,n){if(!Qu(t))throw Error(i(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Qu(e))throw Error(i(40));return!!e._reactRootContainer&&(cu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},352:(e,t,n)=>{"use strict";var r=n(119);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},403:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},414:(e,t,n)=>{"use strict";e.exports=n(654)},599:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function u(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},654:(e,t,n)=>{"use strict";var r=n(950),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},761:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>i(l,n))u<o&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<o&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,b(e),!m)if(null!==r(u))m=!0,z(k);else{var t=r(c);null!==t&&D(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,y(P),P=-1),f=!0;var i=h;try{for(b(n),p=r(u);null!==p&&(!(p.expirationTime>n)||e&&!L());){var a=p.callback;if("function"===typeof a){p.callback=null,h=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(u)&&o(u),b(n)}else o(u);p=r(u)}if(null!==p)var l=!0;else{var d=r(c);null!==d&&D(w,d.startTime-n),l=!1}return l}finally{p=null,h=i,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,E=!1,C=null,P=-1,j=5,T=-1;function L(){return!(t.unstable_now()-T<j)}function _(){if(null!==C){var e=t.unstable_now();T=e;var n=!0;try{n=C(!0,e)}finally{n?S():(E=!1,C=null)}}else E=!1}if("function"===typeof x)S=function(){x(_)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,A=R.port2;R.port1.onmessage=_,S=function(){A.postMessage(null)}}else S=function(){v(_,0)};function z(e){C=e,E||(E=!0,S())}function D(e,n){P=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,z(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(y(P),P=-1):g=!0,D(w,i-a))):(e.sortIndex=s,n(u,e),m||f||(m=!0,z(k))),e},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},950:(e,t,n)=>{"use strict";e.exports=n(49)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".93f4ef18.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="portfolio-website:";n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/Portfolio/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],s=r[1],l=r[2],u=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)l(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(950),t=n(352);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.create;function o(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var i=n(403),a=n.n(i),s="-ms-",l="-moz-",u="-webkit-",c="comm",d="rule",p="decl",h="@keyframes",f=Math.abs,m=String.fromCharCode,g=Object.assign;function v(e){return e.trim()}function y(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,n){return e.replace(t,n)}function b(e,t,n){return e.indexOf(t,n)}function w(e,t){return 0|e.charCodeAt(t)}function k(e,t,n){return e.slice(t,n)}function S(e){return e.length}function E(e){return e.length}function C(e,t){return t.push(e),e}function P(e,t){return e.filter((function(e){return!y(e,t)}))}var j=1,T=1,L=0,_=0,R=0,A="";function z(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:j,column:T,length:a,return:"",siblings:s}}function D(e,t){return g(z("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function M(e){for(;e.root;)e=D(e.root,{children:[e]});C(e,e.siblings)}function O(){return R=_>0?w(A,--_):0,T--,10===R&&(T=1,j--),R}function N(){return R=_<L?w(A,_++):0,T++,10===R&&(T=1,j++),R}function I(){return w(A,_)}function $(){return _}function F(e,t){return k(A,e,t)}function V(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return j=T=1,L=S(A=e),_=0,[]}function U(e){return A="",e}function W(e){return v(F(_-1,K(91===e?e+2:40===e?e+1:e)))}function H(e){for(;(R=I())&&R<33;)N();return V(e)>2||V(R)>3?"":" "}function Y(e,t){for(;--t&&N()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return F(e,$()+(t<6&&32==I()&&32==N()))}function K(e){for(;N();)switch(R){case e:return _;case 34:case 39:34!==e&&39!==e&&K(R);break;case 40:41===e&&K(e);break;case 92:N()}return _}function q(e,t){for(;N()&&e+R!==57&&(e+R!==84||47!==I()););return"/*"+F(t,_-1)+"*"+m(47===e?e:N())}function G(e){for(;!V(I());)N();return F(e,_)}function X(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Q(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case c:return"";case h:return e.return=e.value+"{"+X(e.children,r)+"}";case d:if(!S(e.value=e.props.join(",")))return""}return S(n=X(e.children,r))?e.return=e.value+"{"+n+"}":""}function J(e,t,n){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+l+e+s+e+e;case 5936:switch(w(e,t+11)){case 114:return u+e+s+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+s+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+s+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+s+e+e;case 6165:return u+e+s+"flex-"+e+e;case 5187:return u+e+x(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+s+"flex-$1$2")+e;case 5443:return u+e+s+"flex-item-"+x(e,/flex-|-self/g,"")+(y(e,/flex-|baseline/)?"":s+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return u+e+s+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+s+x(e,"shrink","negative")+e;case 5292:return u+e+s+x(e,"basis","preferred-size")+e;case 6060:return u+"box-"+x(e,"-grow","")+u+e+s+x(e,"grow","positive")+e;case 4554:return u+x(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+s+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!y(e,/flex-|baseline/))return s+"grid-column-align"+k(e,t)+e;break;case 2592:case 3360:return s+x(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,y(e.props,/grid-\w+-end/)}))?~b(e+(n=n[t].value),"span",0)?e:s+x(e,"-start","")+e+s+"grid-row-span:"+(~b(n,"span",0)?y(n,/\d+/):+y(n,/\d+/)-+y(e,/\d+/))+";":s+x(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return y(e.props,/grid-\w+-start/)}))?e:s+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+l+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~b(e,"stretch",0)?J(x(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,l){return s+n+":"+r+l+(o?s+n+"-span:"+(i?a:+a-+r)+l:"")+e}));case 4949:if(121===w(e,t+6))return x(e,":",":"+u)+e;break;case 6444:switch(w(e,45===w(e,14)?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===w(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+s+"$2box$3")+e;case 100:return x(e,":",":"+s)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function Z(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case p:return void(e.return=J(e.value,e.length,n));case h:return X([D(e,{value:x(e.value,"@","@"+u)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(y(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":M(D(e,{props:[x(t,/:(read-\w+)/,":-moz-$1")]})),M(D(e,{props:[t]})),g(e,{props:P(n,r)});break;case"::placeholder":M(D(e,{props:[x(t,/:(plac\w+)/,":"+u+"input-$1")]})),M(D(e,{props:[x(t,/:(plac\w+)/,":-moz-$1")]})),M(D(e,{props:[x(t,/:(plac\w+)/,s+"input-$1")]})),M(D(e,{props:[t]})),g(e,{props:P(n,r)})}return""}))}}function ee(e){return U(te("",null,null,null,[""],e=B(e),0,[0],e))}function te(e,t,n,r,o,i,a,s,l){for(var u=0,c=0,d=a,p=0,h=0,g=0,v=1,y=1,k=1,E=0,P="",j=o,T=i,L=r,_=P;y;)switch(g=E,E=N()){case 40:if(108!=g&&58==w(_,d-1)){-1!=b(_+=x(W(E),"&","&\f"),"&\f",f(u?s[u-1]:0))&&(k=-1);break}case 34:case 39:case 91:_+=W(E);break;case 9:case 10:case 13:case 32:_+=H(g);break;case 92:_+=Y($()-1,7);continue;case 47:switch(I()){case 42:case 47:C(re(q(N(),$()),t,n,l),l);break;default:_+="/"}break;case 123*v:s[u++]=S(_)*k;case 125*v:case 59:case 0:switch(E){case 0:case 125:y=0;case 59+c:-1==k&&(_=x(_,/\f/g,"")),h>0&&S(_)-d&&C(h>32?oe(_+";",r,n,d-1,l):oe(x(_," ","")+";",r,n,d-2,l),l);break;case 59:_+=";";default:if(C(L=ne(_,t,n,u,c,o,s,P,j=[],T=[],d,i),i),123===E)if(0===c)te(_,t,L,L,j,i,d,s,T);else switch(99===p&&110===w(_,3)?100:p){case 100:case 108:case 109:case 115:te(e,L,L,r&&C(ne(e,L,L,0,0,o,s,P,o,j=[],d,T),T),o,T,d,s,r?j:T);break;default:te(_,L,L,L,[""],T,0,s,T)}}u=c=h=0,v=k=1,P=_="",d=a;break;case 58:d=1+S(_),h=g;default:if(v<1)if(123==E)--v;else if(125==E&&0==v++&&125==O())continue;switch(_+=m(E),E*v){case 38:k=c>0?1:(_+="\f",-1);break;case 44:s[u++]=(S(_)-1)*k,k=1;break;case 64:45===I()&&(_+=W(N())),p=I(),c=d=S(P=_+=G($())),E++;break;case 45:45===g&&2==S(_)&&(v=0)}}return i}function ne(e,t,n,r,o,i,a,s,l,u,c,p){for(var h=o-1,m=0===o?i:[""],g=E(m),y=0,b=0,w=0;y<r;++y)for(var S=0,C=k(e,h+1,h=f(b=a[y])),P=e;S<g;++S)(P=v(b>0?m[S]+" "+C:x(C,/&\f/g,m[S])))&&(l[w++]=P);return z(e,t,n,0===o?d:s,l,u,c,p)}function re(e,t,n,r){return z(e,t,n,c,m(R),k(e,2,-2),0,r)}function oe(e,t,n,r,o){return z(e,t,n,p,k(e,0,r),k(e,r+1,-1),r,o)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ae="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",se="active",le="data-styled-version",ue="6.1.16",ce="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),he={},fe=(new Set,Object.freeze([])),me=Object.freeze({});function ge(e,t,n){return void 0===n&&(n=me),e.theme!==n.theme&&e.theme||t||n.theme}var ve=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ye=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xe=/(^-|-$)/g;function be(e){return e.replace(ye,"-").replace(xe,"")}var we=/(a)(d)/gi,ke=function(e){return String.fromCharCode(e+(e>25?39:97))};function Se(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ke(t%52)+n;return(ke(t%52)+n).replace(we,"$1-$2")}var Ee,Ce=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Pe=function(e){return Ce(5381,e)};function je(e){return Se(Pe(e)>>>0)}function Te(e){return e.displayName||e.name||"Component"}function Le(e){return"string"==typeof e&&!0}var _e="function"==typeof Symbol&&Symbol.for,Re=_e?Symbol.for("react.memo"):60115,Ae=_e?Symbol.for("react.forward_ref"):60112,ze={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},De={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oe=((Ee={})[Ae]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ee[Re]=Me,Ee);function Ne(e){return("type"in(t=e)&&t.type.$$typeof)===Re?Me:"$$typeof"in e?Oe[e.$$typeof]:ze;var t}var Ie=Object.defineProperty,$e=Object.getOwnPropertyNames,Fe=Object.getOwnPropertySymbols,Ve=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,Ue=Object.prototype;function We(e,t,n){if("string"!=typeof t){if(Ue){var r=Be(t);r&&r!==Ue&&We(e,r,n)}var o=$e(t);Fe&&(o=o.concat(Fe(t)));for(var i=Ne(e),a=Ne(t),s=0;s<o.length;++s){var l=o[s];if(!(l in De||n&&n[l]||a&&l in a||i&&l in i)){var u=Ve(t,l);try{Ie(e,l,u)}catch(e){}}}}return e}function He(e){return"function"==typeof e}function Ye(e){return"object"==typeof e&&"styledComponentId"in e}function Ke(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qe(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ge(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xe(e,t,n){if(void 0===n&&(n=!1),!n&&!Ge(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xe(e[r],t[r]);else if(Ge(t))for(var r in t)e[r]=Xe(e[r],t[r]);return e}function Qe(e,t){Object.defineProperty(e,"toString",{value:t})}function Je(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Je(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(ce);return t},e}(),et=new Map,tt=new Map,nt=1,rt=function(e){if(et.has(e))return et.get(e);for(;tt.has(nt);)nt++;var t=nt++;return et.set(e,t),tt.set(t,e),t},ot=function(e,t){nt=t+1,et.set(e,t),tt.set(t,e)},it="style[".concat(ae,"][").concat(le,'="').concat(ue,'"]'),at=new RegExp("^".concat(ae,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),st=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},lt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ce),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(at);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(ot(c,u),st(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}},ut=function(e){for(var t=document.querySelectorAll(it),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(ae)!==se&&(lt(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function ct(){return n.nc}var dt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ae,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(ae,se),r.setAttribute(le,ue);var a=ct();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},pt=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Je(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ht=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ft=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),mt=de,gt={isServer:!de,useCSSOMInjection:!pe},vt=function(){function e(e,t,n){void 0===e&&(e=me),void 0===t&&(t={});var o=this;this.options=r(r({},gt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&mt&&(mt=!1,ut(this)),Qe(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return tt.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(ae,".g").concat(n,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(ce)},i=0;i<n;i++)o(i);return r}(o)}))}return e.registerId=function(e){return rt(e)},e.prototype.rehydrate=function(){!this.server&&de&&ut(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ft(n):t?new pt(n):new ht(n)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(rt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yt=/&/g,xt=/^\s*\/\/.*$/gm;function bt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=bt(e.children,t)),e}))}function wt(e){var t,n,r,o=void 0===e?me:e,i=o.options,a=void 0===i?me:i,s=o.plugins,l=void 0===s?fe:s,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(yt,n).replace(r,u))})),a.prefix&&c.push(Z),c.push(Q);var p=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(xt,""),u=ee(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(u=bt(u,a.namespace));var d,p=[];return X(u,function(e){var t=E(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}(c.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return p.hash=l.length?l.reduce((function(e,t){return t.name||Je(15),Ce(e,t.name)}),5381).toString():"",p}var kt=new vt,St=wt(),Et=e.createContext({shouldForwardProp:void 0,styleSheet:kt,stylis:St}),Ct=(Et.Consumer,e.createContext(void 0));function Pt(){return(0,e.useContext)(Et)}function jt(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],o=n[1],i=Pt().styleSheet,s=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),l=(0,e.useMemo)((function(){return wt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){a()(r,t.stylisPlugins)||o(t.stylisPlugins)}),[t.stylisPlugins]);var u=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:l}}),[t.shouldForwardProp,s,l]);return e.createElement(Et.Provider,{value:u},e.createElement(Ct.Provider,{value:l},t.children))}var Tt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=St);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Qe(this,(function(){throw Je(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=St),this.name+e.hash},e}(),Lt=function(e){return e>="A"&&e<="Z"};function _t(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Lt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Rt=function(e){return null==e||!1===e||""===e},At=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Rt(a)&&(Array.isArray(a)&&a.isCss||He(a)?r.push("".concat(_t(i),":"),a,";"):Ge(a)?r.push.apply(r,o(o(["".concat(i," {")],At(a),!1),["}"],!1)):r.push("".concat(_t(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ie||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zt(e,t,n,r){return Rt(e)?[]:Ye(e)?[".".concat(e.styledComponentId)]:He(e)?!He(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:zt(e(t),t,n,r):e instanceof Tt?n?(e.inject(n,r),[e.getName(r)]):[e]:Ge(e)?At(e):Array.isArray(e)?Array.prototype.concat.apply(fe,e.map((function(e){return zt(e,t,n,r)}))):[e.toString()];var o}function Dt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(He(n)&&!Ye(n))return!1}return!0}var Mt=Pe(ue),Ot=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Dt(e),this.componentId=t,this.baseHash=Ce(Mt,t),this.baseStyle=n,vt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ke(r,this.staticRulesId);else{var o=qe(zt(this.rules,e,t,n)),i=Se(Ce(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=Ke(r,i),this.staticRulesId=i}else{for(var s=Ce(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=qe(zt(c,e,t,n));s=Ce(s,d+u),l+=d}}if(l){var p=Se(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=Ke(r,p)}}return r},e}(),Nt=e.createContext(void 0);Nt.Consumer;function It(t){var n=e.useContext(Nt),o=(0,e.useMemo)((function(){return function(e,t){if(!e)throw Je(14);if(He(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Je(8);return t?r(r({},t),e):e}(t.theme,n)}),[t.theme,n]);return t.children?e.createElement(Nt.Provider,{value:o},t.children):null}var $t={};new Set;function Ft(t,n,o){var i=Ye(t),a=t,s=!Le(t),l=n.attrs,u=void 0===l?fe:l,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":be(e);$t[n]=($t[n]||0)+1;var r="".concat(n,"-").concat(je(ue+n+$t[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,p=n.displayName,h=void 0===p?function(e){return Le(e)?"styled.".concat(e):"Styled(".concat(Te(e),")")}(t):p,f=n.displayName&&n.componentId?"".concat(be(n.displayName),"-").concat(n.componentId):n.componentId||d,m=i&&a.attrs?a.attrs.concat(u).filter(Boolean):u,g=n.shouldForwardProp;if(i&&a.shouldForwardProp){var v=a.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;g=function(e,t){return v(e,t)&&y(e,t)}}else g=v}var x=new Ot(o,f,i?a.componentStyle:void 0);function b(t,n){return function(t,n,o){var i=t.attrs,a=t.componentStyle,s=t.defaultProps,l=t.foldedComponentIds,u=t.styledComponentId,c=t.target,d=e.useContext(Nt),p=Pt(),h=t.shouldForwardProp||p.shouldForwardProp,f=ge(n,d,s)||me,m=function(e,t,n){for(var o,i=r(r({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var s=He(o=e[a])?o(i):o;for(var l in s)i[l]="className"===l?Ke(i[l],s[l]):"style"===l?r(r({},i[l]),s[l]):s[l]}return t.className&&(i.className=Ke(i.className,t.className)),i}(i,n,f),g=m.as||c,v={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===f||("forwardedAs"===y?v.as=m.forwardedAs:h&&!h(y,g)||(v[y]=m[y]));var x=function(e,t){var n=Pt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,m),b=Ke(l,u);return x&&(b+=" "+x),m.className&&(b+=" "+m.className),v[Le(g)&&!ve.has(g)?"class":"className"]=b,o&&(v.ref=o),(0,e.createElement)(g,v)}(w,t,n)}b.displayName=h;var w=e.forwardRef(b);return w.attrs=m,w.componentStyle=x,w.displayName=h,w.shouldForwardProp=g,w.foldedComponentIds=i?Ke(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=f,w.target=i?a.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Xe(e,o[r],!0);return e}({},a.defaultProps,e):e}}),Qe(w,(function(){return".".concat(w.styledComponentId)})),s&&We(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Vt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Bt=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(He(e)||Ge(e))return Bt(zt(Vt(fe,o([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?zt(r):Bt(zt(Vt(r,t)))}function Wt(e,t,n){if(void 0===n&&(n=me),!t)throw Je(1,t);var i=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Ut.apply(void 0,o([r],i,!1)))};return i.attrs=function(o){return Wt(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return Wt(e,t,r(r({},n),o))},i}var Ht=function(e){return Wt(Ft,e)},Yt=Ht;ve.forEach((function(e){Yt[e]=Ht(e)}));var Kt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Dt(e),vt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(qe(zt(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&vt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ct(),r=qe([n&&'nonce="'.concat(n,'"'),"".concat(ae,'="true"'),"".concat(le,'="').concat(ue,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Je(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Je(2);var o=t.instance.toString();if(!o)return[];var i=((n={})[ae]="",n[le]=ue,n.dangerouslySetInnerHTML={__html:o},n),a=ct();return a&&(i.nonce=a),[e.createElement("style",r({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new vt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Je(2);return e.createElement(jt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Je(3)}})(),"__sc-".concat(ae,"__");const qt=(function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var a=Ut.apply(void 0,o([t],n,!1)),s="sc-global-".concat(je(JSON.stringify(a))),l=new Kt(a,s),u=function(t){var n=Pt(),r=e.useContext(Nt),o=e.useRef(n.styleSheet.allocateGSInstance(s)).current;return n.styleSheet.server&&c(o,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return c(o,t,n.styleSheet,r,n.stylis),function(){return l.removeStyles(o,n.styleSheet)}}),[o,t,n.styleSheet,r,n.stylis]),null};function c(e,t,n,o,i){if(l.isStatic)l.renderStyles(e,he,n,i);else{var a=r(r({},t),{theme:ge(t,o,u.defaultProps)});l.renderStyles(e,a,n,i)}}return e.memo(u)})`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Fira+Code:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${e=>e.theme.colors.background};
    color: ${e=>e.theme.colors.textSecondary};
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  canvas {
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${e=>e.theme.colors.textPrimary};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    position: relative;
  }

  button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ::selection {
    background-color: ${e=>e.theme.colors.accent}33;
    color: ${e=>e.theme.colors.textPrimary};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.colors.backgroundDarker};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.backgroundLight};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.colors.accent};
  }

  .section {
    padding: 100px 0;
    position: relative;
    background-color: transparent;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    overflow: hidden;
    width: 100%;
  }

  .section-divider {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 0;
    padding: 0;
    border: none;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes buttonHover {
    to {
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
      transform: translateY(-5px);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .fade-in {
    animation: fadeIn 0.8s ease forwards;
  }

  .fade-in-left {
    animation: fadeInLeft 0.8s ease forwards;
  }

  .fade-in-right {
    animation: fadeInRight 0.8s ease forwards;
  }

  .float {
    animation: float 5s ease-in-out infinite;
  }

  .rotate {
    animation: rotate 10s linear infinite;
  }

  .pulse {
    animation: pulse 2.5s ease infinite;
  }

  .gradient-text {
    background: ${e=>e.theme.colors.gradient};
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientFlow 3s ease infinite;
    display: inline-block;
  }

  .shimmer {
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0) 0%, 
      ${e=>e.theme.colors.accent}15 50%, 
      rgba(255, 255, 255, 0) 100%);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }

  .reveal-text {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: ${e=>e.theme.colors.background};
      animation: revealText 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
      transform-origin: right;
    }
    
    @keyframes revealText {
      from {
        transform: scaleX(1);
      }
      to {
        transform: scaleX(0);
      }
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes borderFadeIn {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 60px;
      opacity: 1;
    }
  }
  
  /* Animation classes for intersection observer */
  .hidden {
    opacity: 0;
    transform: translateY(30px);
  }
  
  .show {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease;
  }
  
  .show-slow {
    transition-delay: 0.15s;
  }
  
  .show-slower {
    transition-delay: 0.3s;
  }
`,Gt={colors:{background:"#ffffff",backgroundLight:"#f5f5f5",backgroundDarker:"#000000",textPrimary:"#333333",textSecondary:"#666666",accent:"#1a1a1a",accentSecondary:"#444444",accentTertiary:"#888888",hero:{accent:"#3a86ff",gradient:"linear-gradient(135deg, #3a86ff 0%, #0043a3 100%)"},about:{accent:"#ff595e",highlight:"rgba(255, 89, 94, 0.1)"},skills:{accent:"#ffca3a",highlight:"rgba(255, 202, 58, 0.1)"},projects:{accent:"#8ac926",highlight:"rgba(138, 201, 38, 0.1)"},contact:{accent:"#e63946",highlight:"rgba(230, 57, 70, 0.1)"},gradient:"linear-gradient(90deg, #333333 0%, #555555 100%)",codeHighlight:"#333333",success:"#4CAF50",warning:"#FFC107",error:"#ff4444",info:"#2196F3"},fonts:{main:"'Poppins', sans-serif",code:"'JetBrains Mono', monospace"},breakpoints:{xs:"screen and (max-width: 480px)",sm:"screen and (max-width: 640px)",md:"screen and (max-width: 768px)",lg:"screen and (max-width: 1024px)",xl:"screen and (max-width: 1280px)"},transitions:{fast:"0.2s ease-in-out",medium:"0.3s ease-in-out",slow:"0.5s ease-in-out"}},Xt=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Qt=(0,e.createContext)({}),Jt=(0,e.createContext)(null),Zt="undefined"!==typeof document,en=Zt?e.useLayoutEffect:e.useEffect,tn=(0,e.createContext)({strict:!1}),nn=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),rn="data-"+nn("framerAppearId");function on(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function an(e){return"string"===typeof e||Array.isArray(e)}function sn(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const ln=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],un=["initial",...ln];function cn(e){return sn(e.animate)||un.some((t=>an(e[t])))}function dn(e){return Boolean(cn(e)||e.variants)}function pn(t){const{initial:n,animate:r}=function(e,t){if(cn(e)){const{initial:t,animate:n}=e;return{initial:!1===t||an(t)?t:void 0,animate:an(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Qt));return(0,e.useMemo)((()=>({initial:n,animate:r})),[hn(n),hn(r)])}function hn(e){return Array.isArray(e)?e.join(" "):e}const fn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},mn={};for(const n in fn)mn[n]={isEnabled:e=>fn[n].some((t=>!!e[t]))};const gn=(0,e.createContext)({}),vn=(0,e.createContext)({}),yn=Symbol.for("motionComponentSymbol");function xn(t){let{preloadedFeatures:n,createVisualElement:r,useRender:o,useVisualState:i,Component:a}=t;n&&function(e){for(const t in e)mn[t]={...mn[t],...e[t]}}(n);const s=(0,e.forwardRef)((function(t,s){let l;const u={...(0,e.useContext)(Xt),...t,layoutId:bn(t)},{isStatic:c}=u,d=pn(t),p=i(t,c);if(!c&&Zt){d.visualElement=function(t,n,r,o){const{visualElement:i}=(0,e.useContext)(Qt),a=(0,e.useContext)(tn),s=(0,e.useContext)(Jt),l=(0,e.useContext)(Xt).reducedMotion,u=(0,e.useRef)();o=o||a.renderer,!u.current&&o&&(u.current=o(t,{visualState:n,parent:i,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const c=u.current;(0,e.useInsertionEffect)((()=>{c&&c.update(r,s)}));const d=(0,e.useRef)(Boolean(r[rn]&&!window.HandoffComplete));return en((()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())})),(0,e.useEffect)((()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))})),c}(a,p,u,r);const t=(0,e.useContext)(vn),o=(0,e.useContext)(tn).strict;d.visualElement&&(l=d.visualElement.loadFeatures(u,o,n,t))}return e.createElement(Qt.Provider,{value:d},l&&d.visualElement?e.createElement(l,{visualElement:d.visualElement,...u}):null,o(a,t,function(t,n,r){return(0,e.useCallback)((e=>{e&&t.mount&&t.mount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):on(r)&&(r.current=e))}),[n])}(p,d.visualElement,s),p,c,d.visualElement))}));return s[yn]=a,s}function bn(t){let{layoutId:n}=t;const r=(0,e.useContext)(gn).id;return r&&void 0!==n?r+"-"+n:n}function wn(e){function t(t){return xn(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const kn=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Sn(e){return"string"===typeof e&&!e.includes("-")&&!!(kn.indexOf(e)>-1||/[A-Z]/.test(e))}const En={};const Cn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Pn=new Set(Cn);function jn(e,t){let{layout:n,layoutId:r}=t;return Pn.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!En[e]||"opacity"===e)}const Tn=e=>Boolean(e&&e.getVelocity),Ln={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_n=Cn.length;const Rn=e=>t=>"string"===typeof t&&t.startsWith(e),An=Rn("--"),zn=Rn("var(--"),Dn=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Mn=(e,t,n)=>Math.min(Math.max(n,e),t),On={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Nn={...On,transform:e=>Mn(0,1,e)},In={...On,default:1},$n=e=>Math.round(1e5*e)/1e5,Fn=/(-)?([\d]*\.?[\d])+/g,Vn=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Bn=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Un(e){return"string"===typeof e}const Wn=e=>({test:t=>Un(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Hn=Wn("deg"),Yn=Wn("%"),Kn=Wn("px"),qn=Wn("vh"),Gn=Wn("vw"),Xn={...Yn,parse:e=>Yn.parse(e)/100,transform:e=>Yn.transform(100*e)},Qn={...On,transform:Math.round},Jn={borderWidth:Kn,borderTopWidth:Kn,borderRightWidth:Kn,borderBottomWidth:Kn,borderLeftWidth:Kn,borderRadius:Kn,radius:Kn,borderTopLeftRadius:Kn,borderTopRightRadius:Kn,borderBottomRightRadius:Kn,borderBottomLeftRadius:Kn,width:Kn,maxWidth:Kn,height:Kn,maxHeight:Kn,size:Kn,top:Kn,right:Kn,bottom:Kn,left:Kn,padding:Kn,paddingTop:Kn,paddingRight:Kn,paddingBottom:Kn,paddingLeft:Kn,margin:Kn,marginTop:Kn,marginRight:Kn,marginBottom:Kn,marginLeft:Kn,rotate:Hn,rotateX:Hn,rotateY:Hn,rotateZ:Hn,scale:In,scaleX:In,scaleY:In,scaleZ:In,skew:Hn,skewX:Hn,skewY:Hn,distance:Kn,translateX:Kn,translateY:Kn,translateZ:Kn,x:Kn,y:Kn,z:Kn,perspective:Kn,transformPerspective:Kn,opacity:Nn,originX:Xn,originY:Xn,originZ:Kn,zIndex:Qn,fillOpacity:Nn,strokeOpacity:Nn,numOctaves:Qn};function Zn(e,t,n,r){const{style:o,vars:i,transform:a,transformOrigin:s}=e;let l=!1,u=!1,c=!0;for(const d in t){const e=t[d];if(An(d)){i[d]=e;continue}const n=Jn[d],r=Dn(e,n);if(Pn.has(d)){if(l=!0,a[d]=r,!c)continue;e!==(n.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,s[d]=r):o[d]=r}if(t.transform||(l||r?o.transform=function(e,t,n,r){let{enableHardwareAcceleration:o=!0,allowTransformNone:i=!0}=t,a="";for(let s=0;s<_n;s++){const t=Cn[s];void 0!==e[t]&&(a+=`${Ln[t]||t}(${e[t]}) `)}return o&&!e.z&&(a+="translateZ(0)"),a=a.trim(),r?a=r(e,n?"":a):i&&n&&(a="none"),a}(e.transform,n,c,r):o.transform&&(o.transform="none")),u){const{originX:e="50%",originY:t="50%",originZ:n=0}=s;o.transformOrigin=`${e} ${t} ${n}`}}const er=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function tr(e,t,n){for(const r in t)Tn(t[r])||jn(r,n)||(e[r]=t[r])}function nr(t,n,r){const o={};return tr(o,t.style||{},t),Object.assign(o,function(t,n,r){let{transformTemplate:o}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Zn(e,n,{enableHardwareAcceleration:!r},o),Object.assign({},e.vars,e.style)}),[n])}(t,n,r)),t.transformValues?t.transformValues(o):o}function rr(e,t,n){const r={},o=nr(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const or=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ir(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||or.has(e)}let ar=e=>!ir(e);try{(sr=require("@emotion/is-prop-valid").default)&&(ar=e=>e.startsWith("on")?!ir(e):sr(e))}catch(Af){}var sr;function lr(e,t,n){return"string"===typeof e?e:Kn.transform(t+n*e)}const ur={offset:"stroke-dashoffset",array:"stroke-dasharray"},cr={offset:"strokeDashoffset",array:"strokeDasharray"};function dr(e,t,n,r,o){let{attrX:i,attrY:a,attrScale:s,originX:l,originY:u,pathLength:c,pathSpacing:d=1,pathOffset:p=0,...h}=t;if(Zn(e,h,n,o),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:f,style:m,dimensions:g}=e;f.transform&&(g&&(m.transform=f.transform),delete f.transform),g&&(void 0!==l||void 0!==u||m.transform)&&(m.transformOrigin=function(e,t,n){return`${lr(t,e.x,e.width)} ${lr(n,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==u?u:.5)),void 0!==i&&(f.x=i),void 0!==a&&(f.y=a),void 0!==s&&(f.scale=s),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const i=o?ur:cr;e[i.offset]=Kn.transform(-r);const a=Kn.transform(t),s=Kn.transform(n);e[i.array]=`${a} ${s}`}(f,c,d,p,!1)}const pr=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),hr=e=>"string"===typeof e&&"svg"===e.toLowerCase();function fr(t,n,r,o){const i=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return dr(e,n,{enableHardwareAcceleration:!1},hr(o),t.transformTemplate),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};tr(e,t.style,t),i.style={...e,...i.style}}return i}function mr(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,o,i,a)=>{let{latestValues:s}=i;const l=(Sn(n)?fr:rr)(r,s,a,n),u=function(e,t,n){const r={};for(const o in e)"values"===o&&"object"===typeof e.values||(ar(o)||!0===n&&ir(o)||!t&&!ir(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}(r,"string"===typeof n,t),c={...u,...l,ref:o},{children:d}=r,p=(0,e.useMemo)((()=>Tn(d)?d.get():d),[d]);return(0,e.createElement)(n,{...c,children:p})}}function gr(e,t,n,r){let{style:o,vars:i}=t;Object.assign(e.style,o,r&&r.getProjectionStyles(n));for(const a in i)e.style.setProperty(a,i[a])}const vr=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function yr(e,t,n,r){gr(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(vr.has(o)?o:nn(o),t.attrs[o])}function xr(e,t){const{style:n}=e,r={};for(const o in n)(Tn(n[o])||t.style&&Tn(t.style[o])||jn(o,e))&&(r[o]=n[o]);return r}function br(e,t){const n=xr(e,t);for(const r in e)if(Tn(e[r])||Tn(t[r])){n[-1!==Cn.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return n}function wr(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,o)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,o)),t}function kr(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}const Sr=e=>Array.isArray(e),Er=e=>Sr(e)?e[e.length-1]||0:e;function Cr(e){const t=Tn(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Pr=t=>(n,r)=>{const o=(0,e.useContext)(Qt),i=(0,e.useContext)(Jt),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:o,createRenderState:i,onMount:a}=e;const s={latestValues:jr(t,n,r,o),renderState:i()};return a&&(s.mount=e=>a(t,e,s)),s}(t,n,o,i);return r?a():kr(a)};function jr(e,t,n,r){const o={},i=r(e,{});for(const p in i)o[p]=Cr(i[p]);let{initial:a,animate:s}=e;const l=cn(e),u=dn(e);t&&u&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let c=!!n&&!1===n.initial;c=c||!1===a;const d=c?s:a;if(d&&"boolean"!==typeof d&&!sn(d)){(Array.isArray(d)?d:[d]).forEach((t=>{const n=wr(e,t);if(!n)return;const{transitionEnd:r,transition:i,...a}=n;for(const e in a){let t=a[e];if(Array.isArray(t)){t=t[c?t.length-1:0]}null!==t&&(o[e]=t)}for(const e in r)o[e]=r[e]}))}return o}const Tr=e=>e;class Lr{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const _r=["prepare","read","update","preRender","render","postRender"];const{schedule:Rr,cancel:Ar,state:zr,steps:Dr}=function(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=_r.reduce(((e,t)=>(e[t]=function(e){let t=new Lr,n=new Lr,r=0,o=!1,i=!1;const a=new WeakSet,s={schedule:function(e){const i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&o,s=i?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),s.add(e)&&i&&o&&(r=t.order.length),e},cancel:e=>{n.remove(e),a.delete(e)},process:l=>{if(o)i=!0;else{if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let n=0;n<r;n++){const r=t.order[n];r(l),a.has(r)&&(s.schedule(r),e())}o=!1,i&&(i=!1,s.process(l))}}};return s}((()=>n=!0)),e)),{}),a=e=>i[e].process(o),s=()=>{const i=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(i-o.timestamp,40),1),o.timestamp=i,o.isProcessing=!0,_r.forEach(a),o.isProcessing=!1,n&&t&&(r=!1,e(s))},l=_r.reduce(((t,a)=>{const l=i[a];return t[a]=function(t){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,o.isProcessing||e(s)),l.schedule(t,i,a)},t}),{});return{schedule:l,cancel:e=>_r.forEach((t=>i[t].cancel(e))),state:o,steps:i}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:Tr,!0),Mr={useVisualState:Pr({scrapeMotionValuesFromProps:br,createRenderState:pr,onMount:(e,t,n)=>{let{renderState:r,latestValues:o}=n;Rr.read((()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){r.dimensions={x:0,y:0,width:0,height:0}}})),Rr.render((()=>{dr(r,o,{enableHardwareAcceleration:!1},hr(t.tagName),e.transformTemplate),yr(t,r)}))}})},Or={useVisualState:Pr({scrapeMotionValuesFromProps:xr,createRenderState:er})};function Nr(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Ir=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function $r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function Fr(e,t,n,r){return Nr(e,t,(e=>t=>Ir(t)&&e(t,$r(t)))(n),r)}const Vr=(e,t)=>n=>t(e(n)),Br=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Vr)};function Ur(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const Wr=Ur("dragHorizontal"),Hr=Ur("dragVertical");function Yr(e){let t=!1;if("y"===e)t=Hr();else if("x"===e)t=Wr();else{const e=Wr(),n=Hr();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function Kr(){const e=Yr(!0);return!e||(e(),!1)}class qr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Gr(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return Fr(e.current,n,((n,o)=>{if("touch"===n.pointerType||Kr())return;const i=e.getProps();e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",t),i[r]&&Rr.update((()=>i[r](n,o)))}),{passive:!e.getProps()[r]})}const Xr=(e,t)=>!!t&&(e===t||Xr(e,t.parentElement));function Qr(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,$r(n))}const Jr=new WeakMap,Zr=new WeakMap,eo=e=>{const t=Jr.get(e.target);t&&t(e)},to=e=>{e.forEach(eo)};function no(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Zr.has(r)||Zr.set(r,{});const o=Zr.get(r),i=JSON.stringify(n);return o[i]||(o[i]=new IntersectionObserver(to,{root:t,...n})),o[i]}(t);return Jr.set(e,n),r.observe(e),()=>{Jr.delete(e),r.unobserve(e)}}const ro={some:0,all:1};const oo={inView:{Feature:class extends qr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:o}=e,i={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:ro[r]};return no(this.node.current,i,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,o&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),i=t?n:r;i&&i(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends qr{constructor(){super(...arguments),this.removeStartListeners=Tr,this.removeEndListeners=Tr,this.removeAccessibleListeners=Tr,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=Fr(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:o}=this.node.getProps();Rr.update((()=>{o||Xr(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)}))}),{passive:!(n.onTap||n.onPointerUp)}),o=Fr(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Br(r,o),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=Nr(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=Nr(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&Qr("up",((e,t)=>{const{onTap:n}=this.node.getProps();n&&Rr.update((()=>n(e,t)))}))})),Qr("down",((e,t)=>{this.startPress(e,t)}))})),t=Nr(this.node.current,"blur",(()=>{this.isPressing&&Qr("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=Br(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&Rr.update((()=>n(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Kr()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&Rr.update((()=>n(e,t)))}mount(){const e=this.node.getProps(),t=Fr(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=Nr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Br(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends qr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Br(Nr(this.node.current,"focus",(()=>this.onFocus())),Nr(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends qr{mount(){this.unmount=Br(Gr(this.node,!0),Gr(this.node,!1))}unmount(){}}}};function io(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function ao(e,t,n){const r=e.getProps();return wr(r,t,void 0!==n?n:r.custom,function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.get())),t}(e),function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.getVelocity())),t}(e))}let so=Tr,lo=Tr;const uo=e=>1e3*e,co=e=>e/1e3,po=!1,ho=e=>Array.isArray(e)&&"number"===typeof e[0];function fo(e){return Boolean(!e||"string"===typeof e&&go[e]||ho(e)||Array.isArray(e)&&e.every(fo))}const mo=e=>{let[t,n,r,o]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${o})`},go={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:mo([0,.65,.55,1]),circOut:mo([.55,0,1,.45]),backIn:mo([.31,.01,.66,-.59]),backOut:mo([.33,1.53,.69,.99])};function vo(e){if(e)return ho(e)?mo(e):Array.isArray(e)?e.map(vo):go[e]}const yo=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function xo(e,t,n,r){if(e===t&&n===r)return Tr;const o=t=>function(e,t,n,r,o){let i,a,s=0;do{a=t+(n-t)/2,i=yo(a,r,o)-e,i>0?n=a:t=a}while(Math.abs(i)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:yo(o(e),t,r)}const bo=xo(.42,0,1,1),wo=xo(0,0,.58,1),ko=xo(.42,0,.58,1),So=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Eo=e=>t=>1-e(1-t),Co=e=>1-Math.sin(Math.acos(e)),Po=Eo(Co),jo=So(Co),To=xo(.33,1.53,.69,.99),Lo=Eo(To),_o=So(Lo),Ro={linear:Tr,easeIn:bo,easeInOut:ko,easeOut:wo,circIn:Co,circInOut:jo,circOut:Po,backIn:Lo,backInOut:_o,backOut:To,anticipate:e=>(e*=2)<1?.5*Lo(e):.5*(2-Math.pow(2,-10*(e-1)))},Ao=e=>{if(Array.isArray(e)){lo(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,o]=e;return xo(t,n,r,o)}return"string"===typeof e?(lo(void 0!==Ro[e],`Invalid easing type '${e}'`),Ro[e]):e},zo=(e,t)=>n=>Boolean(Un(n)&&Bn.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Do=(e,t,n)=>r=>{if(!Un(r))return r;const[o,i,a,s]=r.match(Fn);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},Mo={...On,transform:e=>Math.round((e=>Mn(0,255,e))(e))},Oo={test:zo("rgb","red"),parse:Do("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:o=1}=e;return"rgba("+Mo.transform(t)+", "+Mo.transform(n)+", "+Mo.transform(r)+", "+$n(Nn.transform(o))+")"}};const No={test:zo("#"),parse:function(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}},transform:Oo.transform},Io={test:zo("hsl","hue"),parse:Do("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:o=1}=e;return"hsla("+Math.round(t)+", "+Yn.transform($n(n))+", "+Yn.transform($n(r))+", "+$n(Nn.transform(o))+")"}},$o={test:e=>Oo.test(e)||No.test(e)||Io.test(e),parse:e=>Oo.test(e)?Oo.parse(e):Io.test(e)?Io.parse(e):No.parse(e),transform:e=>Un(e)?e:e.hasOwnProperty("red")?Oo.transform(e):Io.transform(e)},Fo=(e,t,n)=>-n*e+n*t+e;function Vo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}const Bo=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},Uo=[No,Oo,Io];function Wo(e){const t=(e=>Uo.find((t=>t.test(e))))(e);lo(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===Io&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:o}=e;t/=360,n/=100,r/=100;let i=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,o=2*r-e;i=Vo(o,e,t+1/3),a=Vo(o,e,t),s=Vo(o,e,t-1/3)}else i=a=s=r;return{red:Math.round(255*i),green:Math.round(255*a),blue:Math.round(255*s),alpha:o}}(n)),n}const Ho=(e,t)=>{const n=Wo(e),r=Wo(t),o={...n};return e=>(o.red=Bo(n.red,r.red,e),o.green=Bo(n.green,r.green,e),o.blue=Bo(n.blue,r.blue,e),o.alpha=Fo(n.alpha,r.alpha,e),Oo.transform(o))};const Yo={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:Tr},Ko={regex:Vn,countKey:"Colors",token:"${c}",parse:$o.parse},qo={regex:Fn,countKey:"Numbers",token:"${n}",parse:On.parse};function Go(e,t){let{regex:n,countKey:r,token:o,parse:i}=t;const a=e.tokenised.match(n);a&&(e["num"+r]=a.length,e.tokenised=e.tokenised.replace(n,o),e.values.push(...a.map(i)))}function Xo(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Go(n,Yo),Go(n,Ko),Go(n,qo),n}function Qo(e){return Xo(e).values}function Jo(e){const{values:t,numColors:n,numVars:r,tokenised:o}=Xo(e),i=t.length;return e=>{let t=o;for(let o=0;o<i;o++)t=o<r?t.replace(Yo.token,e[o]):o<r+n?t.replace(Ko.token,$o.transform(e[o])):t.replace(qo.token,$n(e[o]));return t}}const Zo=e=>"number"===typeof e?0:e;const ei={test:function(e){var t,n;return isNaN(e)&&Un(e)&&((null===(t=e.match(Fn))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(Vn))||void 0===n?void 0:n.length)||0)>0},parse:Qo,createTransformer:Jo,getAnimatableNone:function(e){const t=Qo(e);return Jo(e)(t.map(Zo))}},ti=(e,t)=>n=>`${n>0?t:e}`;function ni(e,t){return"number"===typeof e?n=>Fo(e,t,n):$o.test(e)?Ho(e,t):e.startsWith("var(")?ti(e,t):ii(e,t)}const ri=(e,t)=>{const n=[...e],r=n.length,o=e.map(((e,n)=>ni(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=o[t](e);return n}},oi=(e,t)=>{const n={...e,...t},r={};for(const o in n)void 0!==e[o]&&void 0!==t[o]&&(r[o]=ni(e[o],t[o]));return e=>{for(const t in r)n[t]=r[t](e);return n}},ii=(e,t)=>{const n=ei.createTransformer(t),r=Xo(e),o=Xo(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?Br(ri(r.values,o.values),n):(so(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),ti(e,t))},ai=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},si=(e,t)=>n=>Fo(e,t,n);function li(e,t,n){const r=[],o=n||function(e){return"number"===typeof e?si:"string"===typeof e?$o.test(e)?Ho:ii:Array.isArray(e)?ri:"object"===typeof e?oi:si}(e[0]),i=e.length-1;for(let a=0;a<i;a++){let n=o(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||Tr:t;n=Br(e,n)}r.push(n)}return r}function ui(e,t){let{clamp:n=!0,ease:r,mixer:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=e.length;if(lo(i===t.length,"Both input and output ranges must be the same length"),1===i)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=li(t,r,o),s=a.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=ai(e[n],e[n+1],t);return a[n](r)};return n?t=>l(Mn(e[0],e[i-1],t)):l}function ci(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=ai(0,t,r);e.push(Fo(n,1,o))}}(t,e.length-1),t}function di(e){let{duration:t=300,keyframes:n,times:r,ease:o="easeInOut"}=e;const i=(e=>Array.isArray(e)&&"number"!==typeof e[0])(o)?o.map(Ao):Ao(o),a={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:ci(n),t),l=ui(s,n,{ease:Array.isArray(i)?i:(u=n,c=i,u.map((()=>c||ko)).splice(0,u.length-1))});var u,c;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}function pi(e,t){return t?e*(1e3/t):0}function hi(e,t,n){const r=Math.max(t-5,0);return pi(n-e(r),t-r)}const fi=.001;function mi(e){let t,n,{duration:r=800,bounce:o=.25,velocity:i=0,mass:a=1}=e;so(r<=uo(10),"Spring duration must be 10 seconds or less");let s=1-o;s=Mn(.05,1,s),r=Mn(.01,10,co(r)),s<1?(t=e=>{const t=e*s,n=t*r,o=t-i,a=vi(e,s),l=Math.exp(-n);return fi-o/a*l},n=e=>{const n=e*s*r,o=n*i+i,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),u=vi(Math.pow(e,2),s);return(-t(e)+fi>0?-1:1)*((o-a)*l)/u}):(t=e=>Math.exp(-e*r)*((e-i)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(i-e)));const l=function(e,t,n){let r=n;for(let o=1;o<gi;o++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=uo(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}const gi=12;function vi(e,t){return e*Math.sqrt(1-t*t)}const yi=["duration","bounce"],xi=["stiffness","damping","mass"];function bi(e,t){return t.some((t=>void 0!==e[t]))}function wi(e){let{keyframes:t,restDelta:n,restSpeed:r,...o}=e;const i=t[0],a=t[t.length-1],s={done:!1,value:i},{stiffness:l,damping:u,mass:c,duration:d,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!bi(e,xi)&&bi(e,yi)){const n=mi(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...o,velocity:-co(o.velocity||0)}),f=p||0,m=u/(2*Math.sqrt(l*c)),g=a-i,v=co(Math.sqrt(l/c)),y=Math.abs(g)<5;let x;if(r||(r=y?.01:2),n||(n=y?.005:.5),m<1){const e=vi(v,m);x=t=>{const n=Math.exp(-m*v*t);return a-n*((f+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)x=e=>a-Math.exp(-v*e)*(g+(f+v*g)*e);else{const e=v*Math.sqrt(m*m-1);x=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((f+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:h&&d||null,next:e=>{const t=x(e);if(h)s.done=e>=d;else{let o=f;0!==e&&(o=m<1?hi(x,e,t):0);const i=Math.abs(o)<=r,l=Math.abs(a-t)<=n;s.done=i&&l}return s.value=s.done?a:t,s}}}function ki(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:o=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:u,restDelta:c=.5,restSpeed:d}=e;const p=t[0],h={done:!1,value:p},f=e=>void 0===l?u:void 0===u||Math.abs(l-e)<Math.abs(u-e)?l:u;let m=r*n;const g=p+m,v=void 0===s?g:s(g);v!==g&&(m=v-p);const y=e=>-m*Math.exp(-e/o),x=e=>v+y(e),b=e=>{const t=y(e),n=x(e);h.done=Math.abs(t)<=c,h.value=h.done?v:n};let w,k;const S=e=>{(e=>void 0!==l&&e<l||void 0!==u&&e>u)(h.value)&&(w=e,k=wi({keyframes:[h.value,f(h.value)],velocity:hi(x,e,h.value),damping:i,stiffness:a,restDelta:c,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,b(e),S(e)),void 0!==w&&e>w?k.next(e-w):(!t&&b(e),h)}}}const Si=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>Rr.update(t,!0),stop:()=>Ar(t),now:()=>zr.isProcessing?zr.timestamp:performance.now()}};function Ei(e){let t=0;let n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const Ci={decay:ki,inertia:ki,tween:di,keyframes:di,spring:wi};function Pi(e){let t,n,{autoplay:r=!0,delay:o=0,driver:i=Si,keyframes:a,type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:c="loop",onPlay:d,onStop:p,onComplete:h,onUpdate:f,...m}=e,g=1,v=!1;const y=()=>{n=new Promise((e=>{t=e}))};let x;y();const b=Ci[s]||di;let w;b!==di&&"number"!==typeof a[0]&&(w=ui([0,100],a,{clamp:!1}),a=[0,100]);const k=b({...m,keyframes:a});let S;"mirror"===c&&(S=b({...m,keyframes:[...a].reverse(),velocity:-(m.velocity||0)}));let E="idle",C=null,P=null,j=null;null===k.calculatedDuration&&l&&(k.calculatedDuration=Ei(k));const{calculatedDuration:T}=k;let L=1/0,_=1/0;null!==T&&(L=T+u,_=L*(l+1)-u);let R=0;const A=e=>{if(null===P)return;g>0&&(P=Math.min(P,e)),g<0&&(P=Math.min(e-_/g,P)),R=null!==C?C:Math.round(e-P)*g;const t=R-o*(g>=0?1:-1),n=g>=0?t<0:t>_;R=Math.max(t,0),"finished"===E&&null===C&&(R=_);let r=R,i=k;if(l){const e=Math.min(R,_)/L;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===c?(n=1-n,u&&(n-=u/L)):"mirror"===c&&(i=S)),r=Mn(0,1,n)*L}const s=n?{done:!1,value:a[0]}:i.next(r);w&&(s.value=w(s.value));let{done:d}=s;n||null===T||(d=g>=0?R>=_:R<=0);const p=null===C&&("finished"===E||"running"===E&&d);return f&&f(s.value),p&&M(),s},z=()=>{x&&x.stop(),x=void 0},D=()=>{E="idle",z(),t(),y(),P=j=null},M=()=>{E="finished",h&&h(),z(),t()},O=()=>{if(v)return;x||(x=i(A));const e=x.now();d&&d(),null!==C?P=e-C:P&&"finished"!==E||(P=e),"finished"===E&&y(),j=P,C=null,E="running",x.start()};r&&O();const N={then:(e,t)=>n.then(e,t),get time(){return co(R)},set time(e){e=uo(e),R=e,null===C&&x&&0!==g?P=x.now()-e/g:C=e},get duration(){const e=null===k.calculatedDuration?Ei(k):k.calculatedDuration;return co(e)},get speed(){return g},set speed(e){e!==g&&x&&(g=e,N.time=co(R))},get state(){return E},play:O,pause:()=>{E="paused",C=R},stop:()=>{v=!0,"idle"!==E&&(E="idle",p&&p(),D())},cancel:()=>{null!==j&&A(j),D()},complete:()=>{E="finished"},sample:e=>(P=0,A(e))};return N}const ji=function(e){let t;return()=>(void 0===t&&(t=e()),t)}((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),Ti=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function Li(e,t,n){let{onUpdate:r,onComplete:o,...i}=n;if(!(ji()&&Ti.has(t)&&!i.repeatDelay&&"mirror"!==i.repeatType&&0!==i.damping&&"inertia"!==i.type))return!1;let a,s,l=!1,u=!1;const c=()=>{s=new Promise((e=>{a=e}))};c();let{keyframes:d,duration:p=300,ease:h,times:f}=i;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!fo(t.ease))(t,i)){const e=Pi({...i,repeat:0,delay:0});let t={done:!1,value:d[0]};const n=[];let r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;f=void 0,d=n,p=r-10,h="linear"}const m=function(e,t,n){let{delay:r=0,duration:o,repeat:i=0,repeatType:a="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const u={[t]:n};l&&(u.offset=l);const c=vo(s);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:o,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:i+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,d,{...i,duration:p,ease:h,times:f}),g=()=>{u=!1,m.cancel()},v=()=>{u=!0,Rr.update(g),a(),c()};m.onfinish=()=>{u||(e.set(function(e,t){let{repeat:n,repeatType:r="loop"}=t;return e[n&&"loop"!==r&&n%2===1?0:e.length-1]}(d,i)),o&&o(),v())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(m.timeline=e,m.onfinish=null,Tr),get time(){return co(m.currentTime||0)},set time(e){m.currentTime=uo(e)},get speed(){return m.playbackRate},set speed(e){m.playbackRate=e},get duration(){return co(p)},play:()=>{l||(m.play(),Ar(g))},pause:()=>m.pause(),stop:()=>{if(l=!0,"idle"===m.playState)return;const{currentTime:t}=m;if(t){const n=Pi({...i,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}v()},complete:()=>{u||m.finish()},cancel:v}}const _i={type:"spring",stiffness:500,damping:25,restSpeed:10},Ri={type:"keyframes",duration:.8},Ai={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},zi=(e,t)=>{let{keyframes:n}=t;return n.length>2?Ri:Pn.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:_i:Ai},Di=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!ei.test(t)&&"0"!==t||t.startsWith("url("))),Mi=new Set(["brightness","contrast","saturate","opacity"]);function Oi(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Fn)||[];if(!r)return e;const o=n.replace(r,"");let i=Mi.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const Ni=/([a-z-]*)\(.*?\)/g,Ii={...ei,getAnimatableNone:e=>{const t=e.match(Ni);return t?t.map(Oi).join(" "):e}},$i={...Jn,color:$o,backgroundColor:$o,outlineColor:$o,fill:$o,stroke:$o,borderColor:$o,borderTopColor:$o,borderRightColor:$o,borderBottomColor:$o,borderLeftColor:$o,filter:Ii,WebkitFilter:Ii},Fi=e=>$i[e];function Vi(e,t){let n=Fi(e);return n!==Ii&&(n=ei),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Bi=e=>/^0[^.\s]+$/.test(e);function Ui(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||Bi(e):void 0}function Wi(e,t){return e[t]||e.default||e}const Hi=!1,Yi=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o=>{const i=Wi(r,e)||{},a=i.delay||r.delay||0;let{elapsed:s=0}=r;s-=uo(a);const l=function(e,t,n,r){const o=Di(t,n);let i;i=Array.isArray(n)?[...n]:[null,n];const a=void 0!==r.from?r.from:e.get();let s;const l=[];for(let u=0;u<i.length;u++)null===i[u]&&(i[u]=0===u?a:i[u-1]),Ui(i[u])&&l.push(u),"string"===typeof i[u]&&"none"!==i[u]&&"0"!==i[u]&&(s=i[u]);if(o&&l.length&&s)for(let u=0;u<l.length;u++)i[l[u]]=Vi(t,s);return i}(t,e,n,i),u=l[0],c=l[l.length-1],d=Di(e,u),p=Di(e,c);so(d===p,`You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-s,onUpdate:e=>{t.set(e),i.onUpdate&&i.onUpdate(e)},onComplete:()=>{o(),i.onComplete&&i.onComplete()}};if(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:o,staggerDirection:i,repeat:a,repeatType:s,repeatDelay:l,from:u,elapsed:c,...d}=e;return!!Object.keys(d).length}(i)||(h={...h,...zi(e,h)}),h.duration&&(h.duration=uo(h.duration)),h.repeatDelay&&(h.repeatDelay=uo(h.repeatDelay)),!d||!p||po||!1===i.type||Hi)return function(e){let{keyframes:t,delay:n,onUpdate:r,onComplete:o}=e;const i=()=>(r&&r(t[t.length-1]),o&&o(),{time:0,speed:1,duration:0,play:Tr,pause:Tr,stop:Tr,then:e=>(e(),Promise.resolve()),cancel:Tr,complete:Tr});return n?Pi({keyframes:[0,1],duration:0,delay:n,onComplete:i}):i()}(po?{...h,delay:0}:h);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const n=Li(t,e,h);if(n)return n}return Pi(h)}};function Ki(e){return Boolean(Tn(e)&&e.add)}const qi=e=>/^\-?\d*\.?\d+$/.test(e);function Gi(e,t){-1===e.indexOf(t)&&e.push(t)}function Xi(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Qi{constructor(){this.subscriptions=[]}add(e){return Gi(this.subscriptions,e),()=>Xi(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let o=0;o<r;o++){const r=this.subscriptions[o];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ji={current:void 0};class Zi{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:r,timestamp:o}=zr;t.lastUpdated!==o&&(t.timeDelta=r,t.lastUpdated=o,Rr.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>Rr.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Qi);const n=this.events[e].add(t);return"change"===e?()=>{n(),Rr.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ji.current&&Ji.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?pi(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ea(e,t){return new Zi(e,t)}const ta=e=>t=>t.test(e),na=[On,Kn,Yn,Hn,Gn,qn,{test:e=>"auto"===e,parse:e=>e}],ra=e=>na.find(ta(e)),oa=[...na,$o,ei],ia=e=>oa.find(ta(e));function aa(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ea(n))}function sa(e,t){const n=ao(e,t);let{transitionEnd:r={},transition:o={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const a in i){aa(e,a,Er(i[a]))}}function la(e,t){if(!t)return;return(t[e]||t.default||t).from}function ua(e,t){let{protectedKeys:n,needsAnimating:r}=e;const o=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,o}function ca(e,t){const n=e.get();if(!Array.isArray(t))return n!==t;for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}function da(e,t){let{delay:n=0,transitionOverride:r,type:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:i=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(i=r);const u=[],c=o&&e.animationState&&e.animationState.getState()[o];for(const d in s){const t=e.getValue(d),r=s[d];if(!t||void 0===r||c&&ua(c,d))continue;const o={delay:n,elapsed:0,...Wi(i||{},d)};if(window.HandoffAppearAnimations){const n=e.getProps()[rn];if(n){const e=window.HandoffAppearAnimations(n,d,t,Rr);null!==e&&(o.elapsed=e,o.isHandoff=!0)}}let a=!o.isHandoff&&!ca(t,r);if("spring"===o.type&&(t.getVelocity()||o.velocity)&&(a=!1),t.animation&&(a=!1),a)continue;t.start(Yi(d,t,r,e.shouldReduceMotion&&Pn.has(d)?{type:!1}:o));const p=t.animation;Ki(l)&&(l.add(d),p.then((()=>l.remove(d)))),u.push(p)}return a&&Promise.all(u).then((()=>{a&&sa(e,a)})),u}function pa(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=ao(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(da(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:a,staggerDirection:s}=o;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*r,l=1===o?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(ha).forEach(((e,r)=>{e.notify("AnimationStart",t),a.push(pa(e,t,{...i,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(a)}(e,t,i+r,a,s,n)}:()=>Promise.resolve(),{when:s}=o;if(s){const[e,t]="beforeChildren"===s?[i,a]:[a,i];return e().then((()=>t()))}return Promise.all([i(),a(n.delay)])}function ha(e,t){return e.sortNodePosition(t)}const fa=[...ln].reverse(),ma=ln.length;function ga(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const o=t.map((t=>pa(e,t,r)));n=Promise.all(o)}else if("string"===typeof t)n=pa(e,t,r);else{const o="function"===typeof t?ao(e,t,r.custom):t;n=Promise.all(da(e,o,r))}return n.then((()=>e.notify("AnimationComplete",t)))}(e,n,r)})))}function va(e){let t=ga(e);const n={animate:xa(!0),whileInView:xa(),whileHover:xa(),whileTap:xa(),whileDrag:xa(),whileFocus:xa(),exit:xa()};let r=!0;const o=(t,n)=>{const r=ao(e,n);if(r){const{transition:e,transitionEnd:n,...o}=r;t={...t,...o,...n}}return t};function i(i,a){const s=e.getProps(),l=e.getVariantContext(!0)||{},u=[],c=new Set;let d={},p=1/0;for(let t=0;t<ma;t++){const h=fa[t],f=n[h],m=void 0!==s[h]?s[h]:l[h],g=an(m),v=h===a?f.isActive:null;!1===v&&(p=t);let y=m===l[h]&&m!==s[h]&&g;if(y&&r&&e.manuallyAnimateOnMount&&(y=!1),f.protectedKeys={...d},!f.isActive&&null===v||!m&&!f.prevProp||sn(m)||"boolean"===typeof m)continue;let x=ya(f.prevProp,m)||h===a&&f.isActive&&!y&&g||t>p&&g,b=!1;const w=Array.isArray(m)?m:[m];let k=w.reduce(o,{});!1===v&&(k={});const{prevResolvedValues:S={}}=f,E={...S,...k},C=e=>{x=!0,c.has(e)&&(b=!0,c.delete(e)),f.needsAnimating[e]=!0};for(const e in E){const t=k[e],n=S[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Sr(t)&&Sr(n)?!io(t,n):t!==n,r?void 0!==t?C(e):c.add(e):void 0!==t&&c.has(e)?C(e):f.protectedKeys[e]=!0}f.prevProp=m,f.prevResolvedValues=k,f.isActive&&(d={...d,...k}),r&&e.blockInitialAnimation&&(x=!1),!x||y&&!b||u.push(...w.map((e=>({animation:e,options:{type:h,...i}}))))}if(c.size){const t={};c.forEach((n=>{const r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)})),u.push({animation:t})}let h=Boolean(u.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),r=!1,h?t(u):Promise.resolve()}return{animateChanges:i,setActive:function(t,r,o){var a;if(n[t].isActive===r)return Promise.resolve();null===(a=e.variantChildren)||void 0===a||a.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)})),n[t].isActive=r;const s=i(o,t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}function ya(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!io(t,e)}function xa(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let ba=0;const wa={animation:{Feature:class extends qr{constructor(e){super(e),e.animationState||(e.animationState=va(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),sn(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends qr{constructor(){super(...arguments),this.id=ba++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e,{custom:null!==n&&void 0!==n?n:this.node.getProps().custom});t&&!e&&o.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},ka=(e,t)=>Math.abs(e-t);class Sa{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Pa(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=ka(e.x,t.x),r=ka(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:o}=zr;this.history.push({...r,timestamp:o});const{onStart:i,onMove:a}=this.handlers;t||(i&&i(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Ea(t,this.transformPagePoint),Rr.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:o}=this.handlers;if(this.dragSnapToOrigin&&o&&o(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const i=Pa("pointercancel"===e.type?this.lastMoveEventInfo:Ea(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,i),r&&r(e,i)},!Ir(e))return;this.dragSnapToOrigin=o,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const i=Ea($r(e),this.transformPagePoint),{point:a}=i,{timestamp:s}=zr;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Pa(i,this.history)),this.removeListeners=Br(Fr(this.contextWindow,"pointermove",this.handlePointerMove),Fr(this.contextWindow,"pointerup",this.handlePointerUp),Fr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ar(this.updatePoint)}}function Ea(e,t){return t?{point:t(e.point)}:e}function Ca(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Pa(e,t){let{point:n}=e;return{point:n,delta:Ca(n,Ta(t)),offset:Ca(n,ja(t)),velocity:La(t,.1)}}function ja(e){return e[0]}function Ta(e){return e[e.length-1]}function La(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=Ta(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>uo(t)));)n--;if(!r)return{x:0,y:0};const i=co(o.timestamp-r.timestamp);if(0===i)return{x:0,y:0};const a={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function _a(e){return e.max-e.min}function Ra(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=n}function Aa(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=Fo(t.min,t.max,e.origin),e.scale=_a(n)/_a(t),(Ra(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Fo(n.min,n.max,e.origin)-e.originPoint,(Ra(e.translate)||isNaN(e.translate))&&(e.translate=0)}function za(e,t,n,r){Aa(e.x,t.x,n.x,r?r.originX:void 0),Aa(e.y,t.y,n.y,r?r.originY:void 0)}function Da(e,t,n){e.min=n.min+t.min,e.max=e.min+_a(t)}function Ma(e,t,n){e.min=t.min-n.min,e.max=e.min+_a(t)}function Oa(e,t,n){Ma(e.x,t.x,n.x),Ma(e.y,t.y,n.y)}function Na(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function Ia(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const $a=.35;function Fa(e,t,n){return{min:Va(e,t),max:Va(e,n)}}function Va(e,t){return"number"===typeof e?e:e[t]||0}function Ba(e){return[e("x"),e("y")]}function Ua(e){let{top:t,left:n,right:r,bottom:o}=e;return{x:{min:n,max:r},y:{min:t,max:o}}}function Wa(e){return void 0===e||1===e}function Ha(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Wa(t)||!Wa(n)||!Wa(r)}function Ya(e){return Ha(e)||Ka(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Ka(e){return qa(e.x)||qa(e.y)}function qa(e){return e&&"0%"!==e}function Ga(e,t,n){return n+t*(e-n)}function Xa(e,t,n,r,o){return void 0!==o&&(e=Ga(e,o,r)),Ga(e,n,r)+t}function Qa(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;e.min=Xa(e.min,t,n,r,o),e.max=Xa(e.max,t,n,r,o)}function Ja(e,t){let{x:n,y:r}=t;Qa(e.x,n.translate,n.scale,n.originPoint),Qa(e.y,r.translate,r.scale,r.originPoint)}function Za(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function es(e,t){e.min=e.min+t,e.max=e.max+t}function ts(e,t,n){let[r,o,i]=n;const a=void 0!==t[i]?t[i]:.5,s=Fo(e.min,e.max,a);Qa(e,t[r],t[o],s,t.scale)}const ns=["x","scaleX","originX"],rs=["y","scaleY","originY"];function os(e,t){ts(e.x,t,ns),ts(e.y,t,rs)}function is(e,t){return Ua(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const as=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},ss=new WeakMap;class ls{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new Sa(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor($r(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:o}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Yr(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ba((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Yn.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=_a(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),o&&Rr.update((()=>o(e,t)),!1,!0);const{animationState:i}=this.visualElement;i&&i.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:o,onDrag:i}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&o&&o(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),i&&i(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>Ba((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:as(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:o}=this.getProps();o&&Rr.update((()=>o(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!us(e,r,this.currentDirection))return;const o=this.getAxisMotionValue(e);let i=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(i=function(e,t,n){let{min:r,max:o}=t;return void 0!==r&&e<r?e=n?Fo(r,e,n.min):Math.max(e,r):void 0!==o&&e>o&&(e=n?Fo(o,e,n.max):Math.min(e,o)),e}(i,this.constraints[e],this.elastic[e])),o.set(i)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,o=this.constraints;t&&on(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:o,right:i}=t;return{x:Na(e.x,r,i),y:Na(e.y,n,o)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$a;return!1===e?e=0:!0===e&&(e=$a),{x:Fa(e,"left","right"),y:Fa(e,"top","bottom")}}(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ba((e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!on(e))return!1;const n=e.current;lo(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=function(e,t,n){const r=is(e,n),{scroll:o}=t;return o&&(es(r.x,o.offset.x),es(r.y,o.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let i=function(e,t){return{x:Ia(e.x,t.x),y:Ia(e.y,t.y)}}(r.layout.layoutBox,o);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(i));this.hasMutatedConstraints=!!e,e&&(i=Ua(e))}return i}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:o,dragSnapToOrigin:i,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=Ba((a=>{if(!us(a,t,this.currentDirection))return;let l=s&&s[a]||{};i&&(l={min:0,max:0});const u=r?200:1e6,c=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:u,bounceDamping:c,timeConstant:750,restDelta:1,restSpeed:10,...o,...l};return this.startAxisValueAnimation(a,d)}));return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(Yi(e,n,0,t))}stopAnimation(){Ba((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){Ba((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Ba((t=>{const{drag:n}=this.getProps();if(!us(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:i}=r.layout.layoutBox[t];o.set(e[t]-Fo(n,i,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!on(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ba((e=>{const t=this.getAxisMotionValue(e);if(t){const n=t.get();r[e]=function(e,t){let n=.5;const r=_a(e),o=_a(t);return o>r?n=ai(t.min,t.max-r,e.min):r>o&&(n=ai(e.min,e.max-o,t.min)),Mn(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Ba((t=>{if(!us(t,e,null))return;const n=this.getAxisMotionValue(t),{min:o,max:i}=this.constraints[t];n.set(Fo(o,i,r[t]))}))}addListeners(){if(!this.visualElement.current)return;ss.set(this.visualElement,this);const e=Fr(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();on(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();const o=Nr(window,"resize",(()=>this.scalePositionWithinConstraints())),i=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(Ba((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{o(),e(),r(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:i=$a,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:o,dragElastic:i,dragMomentum:a}}}function us(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const cs=e=>(t,n)=>{e&&Rr.update((()=>e(t,n)))};const ds={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ps(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const hs={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Kn.test(e))return e;e=parseFloat(e)}return`${ps(e,t.target.x)}% ${ps(e,t.target.y)}%`}},fs={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const o=e,i=ei.parse(e);if(i.length>5)return o;const a=ei.createTransformer(e),s="number"!==typeof i[0]?1:0,l=r.x.scale*n.x,u=r.y.scale*n.y;i[0+s]/=l,i[1+s]/=u;const c=Fo(l,u,.5);return"number"===typeof i[2+s]&&(i[2+s]/=c),"number"===typeof i[3+s]&&(i[3+s]/=c),a(i)}};class ms extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:o}=e;var i;i=vs,Object.assign(En,i),o&&(t.group&&t.group.add(o),n&&n.register&&r&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",(()=>{this.safeToRemove()})),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ds.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:o}=this.props,i=n.projection;return i?(i.isPresent=o,r||e.layoutDependency!==t||void 0===t?i.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?i.promote():i.relegate()||Rr.postRender((()=>{const e=i.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function gs(t){const[n,r]=function(){const t=(0,e.useContext)(Jt);if(null===t)return[!0,null];const{isPresent:n,onExitComplete:r,register:o}=t,i=(0,e.useId)();return(0,e.useEffect)((()=>o(i)),[]),!n&&r?[!1,()=>r&&r(i)]:[!0]}(),o=(0,e.useContext)(gn);return e.createElement(ms,{...t,layoutGroup:o,switchLayoutGroup:(0,e.useContext)(vn),isPresent:n,safeToRemove:r})}const vs={borderRadius:{...hs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hs,borderTopRightRadius:hs,borderBottomLeftRadius:hs,borderBottomRightRadius:hs,boxShadow:fs},ys=["TopLeft","TopRight","BottomLeft","BottomRight"],xs=ys.length,bs=e=>"string"===typeof e?parseFloat(e):e,ws=e=>"number"===typeof e||Kn.test(e);function ks(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Ss=Cs(0,.5,Po),Es=Cs(.5,.95,Tr);function Cs(e,t,n){return r=>r<e?0:r>t?1:n(ai(e,t,r))}function Ps(e,t){e.min=t.min,e.max=t.max}function js(e,t){Ps(e.x,t.x),Ps(e.y,t.y)}function Ts(e,t,n,r,o){return e=Ga(e-=t,1/n,r),void 0!==o&&(e=Ga(e,1/o,r)),e}function Ls(e,t,n,r,o){let[i,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Yn.test(t)&&(t=parseFloat(t),t=Fo(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=Fo(i.min,i.max,r);e===i&&(s-=t),e.min=Ts(e.min,t,n,s,o),e.max=Ts(e.max,t,n,s,o)}(e,t[i],t[a],t[s],t.scale,r,o)}const _s=["x","scaleX","originX"],Rs=["y","scaleY","originY"];function As(e,t,n,r){Ls(e.x,t,_s,n?n.x:void 0,r?r.x:void 0),Ls(e.y,t,Rs,n?n.y:void 0,r?r.y:void 0)}function zs(e){return 0===e.translate&&1===e.scale}function Ds(e){return zs(e.x)&&zs(e.y)}function Ms(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Os(e){return _a(e.x)/_a(e.y)}class Ns{constructor(){this.members=[]}add(e){Gi(this.members,e),e.scheduleRender()}remove(e){if(Xi(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Is(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y;if((o||i)&&(r=`translate3d(${o}px, ${i}px, 0) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:e,rotateX:t,rotateY:o}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),o&&(r+=`rotateY(${o}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return 1===a&&1===s||(r+=`scale(${a}, ${s})`),r||"none"}const $s=(e,t)=>e.depth-t.depth;class Fs{constructor(){this.children=[],this.isDirty=!1}add(e){Gi(this.children,e),this.isDirty=!0}remove(e){Xi(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort($s),this.isDirty=!1,this.children.forEach(e)}}const Vs=["","X","Y","Z"],Bs={visibility:"hidden"};let Us=0;const Ws={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Hs(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:o,resetTransform:i}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=Us++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ws.totalNodes=Ws.resolvedTargetDeltas=Ws.recalculatedProjection=0,this.nodes.forEach(qs),this.nodes.forEach(tl),this.nodes.forEach(nl),this.nodes.forEach(Gs),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(Ws)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new Fs)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Qi),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:o,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(i||o)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=performance.now(),r=o=>{let{timestamp:i}=o;const a=i-n;a>=t&&(Ar(r),e(a-t))};return Rr.read(r,!0),()=>Ar(r)}(r,250),ds.hasAnimatedSinceResize&&(ds.hasAnimatedSinceResize=!1,this.nodes.forEach(el))}))}o&&this.root.registerSharedNode(o,this),!1!==this.options.animate&&a&&(o||i)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:o}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const i=this.options.transition||a.getDefaultTransition()||ll,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),u=!this.targetLayout||!Ms(this.targetLayout,o)||r,c=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||c||n&&(u||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,c);const e={...Wi(i,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||el(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=o}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ar(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rl),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let o=0;o<this.path.length;o++){const e=this.path[o];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Qs);this.isUpdating||this.nodes.forEach(Js),this.isUpdating=!1,this.nodes.forEach(Zs),this.nodes.forEach(Ys),this.nodes.forEach(Ks),this.clearAllSnapshots();const e=performance.now();zr.delta=Mn(0,1e3/60,e-zr.timestamp),zr.timestamp=e,zr.isProcessing=!0,Dr.update.process(zr),Dr.preRender.process(zr),Dr.render.process(zr),zr.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>this.update())))}clearAllSnapshots(){this.nodes.forEach(Xs),this.sharedNodes.forEach(ol)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Rr.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Rr.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:o(this.instance),offset:r(this.instance)})}resetTransform(){if(!i)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!Ds(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,o=r!==this.prevTransformTemplateValue;e&&(t||Ya(this.latestValues)||o)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),dl((r=n).x),dl(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(es(t.x,n.offset.x),es(t.y,n.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};js(t,e);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:o,options:i}=r;if(r!==this.root&&o&&i.layoutScroll){if(o.isRoot){js(t,e);const{scroll:n}=this.root;n&&(es(t.x,-n.offset.x),es(t.y,-n.offset.y))}es(t.x,o.offset.x),es(t.y,o.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};js(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&os(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Ya(e.latestValues)&&os(n,e.latestValues)}return Ya(this.latestValues)&&os(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};js(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Ya(e.latestValues))continue;Ha(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};js(r,e.measurePageBox()),As(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Ya(this.latestValues)&&As(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==zr.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:o,layoutId:i}=this.options;if(this.layout&&(o||i)){if(this.resolvedRelativeTargetAt=zr.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Oa(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),js(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,s=this.relativeTarget,l=this.relativeParent.target,Da(a.x,s.x,l.x),Da(a.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):js(this.target,this.layout.layoutBox),Ja(this.target,this.targetDelta)):js(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Oa(this.relativeTargetOrigin,this.target,e.target),js(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ws.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Ha(this.parent.latestValues)&&!Ka(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===zr.timestamp&&(r=!1),r)return;const{layout:o,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!o&&!i)return;js(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const o=n.length;if(!o)return;let i,a;t.x=t.y=1;for(let s=0;s<o;s++){i=n[s],a=i.projectionDelta;const o=i.instance;o&&o.style&&"contents"===o.style.display||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&os(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Ja(e,a)),r&&Ya(i.latestValues)&&os(e,i.latestValues))}t.x=Za(t.x),t.y=Za(t.y)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const u=this.projectionTransform;za(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=Is(this.projectionDelta,this.treeScale),this.projectionTransform===u&&this.treeScale.x===a&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),Ws.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},o={...this.latestValues},i={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,c=Boolean(s&&!u&&!0===this.options.crossfade&&!this.path.some(sl));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;il(i.x,e.x,n),il(i.y,e.y,n),this.setTargetDelta(i),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Oa(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){al(e.x,t.x,n.x,r),al(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),js(d,this.relativeTarget)),s&&(this.animationValues=o,function(e,t,n,r,o,i){o?(e.opacity=Fo(0,void 0!==n.opacity?n.opacity:1,Ss(r)),e.opacityExit=Fo(void 0!==t.opacity?t.opacity:1,0,Es(r))):i&&(e.opacity=Fo(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let a=0;a<xs;a++){const o=`border${ys[a]}Radius`;let i=ks(t,o),s=ks(n,o);void 0===i&&void 0===s||(i||(i=0),s||(s=0),0===i||0===s||ws(i)===ws(s)?(e[o]=Math.max(Fo(bs(i),bs(s),r),0),(Yn.test(s)||Yn.test(i))&&(e[o]+="%")):e[o]=s)}(t.rotate||n.rotate)&&(e.rotate=Fo(t.rotate||0,n.rotate||0,r))}(o,r,this.latestValues,n,c,u)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ar(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Rr.update((()=>{ds.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=Tn(e)?e:ea(e);return r.start(Yi("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:o}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&pl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=_a(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=_a(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}js(t,n),os(t,o),za(this.projectionDeltaWithTransform,this.layoutCorrected,t,o)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Ns);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;const r={};for(let o=0;o<Vs.length;o++){const t="rotate"+Vs[o];n[t]&&(r[t]=n[t],e.setStaticValue(t,0))}e.render();for(const o in r)e.setStaticValue(o,r[o]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Bs;const r={visibility:""},o=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=Cr(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=o?o(this.latestValues,""):"none",r;const i=this.getLead();if(!this.projectionDelta||!this.layout||!i.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=Cr(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!Ya(this.latestValues)&&(t.transform=o?o({},""):"none",this.hasProjected=!1),t}const a=i.animationValues||i.latestValues;this.applyTransformsToTarget(),r.transform=Is(this.projectionDeltaWithTransform,this.treeScale,a),o&&(r.transform=o(a,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,i.animationValues?r.opacity=i===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:r.opacity=i===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0;for(const u in En){if(void 0===a[u])continue;const{correct:e,applyTo:t}=En[u],n="none"===r.transform?a[u]:e(a[u],i);if(t){const e=t.length;for(let o=0;o<e;o++)r[t[o]]=n}else r[u]=n}return this.options.layoutId&&(r.pointerEvents=i===this?Cr(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(Qs),this.root.sharedNodes.clear()}}}function Ys(e){e.updateLayout()}function Ks(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:o}=e.options,i=n.source!==e.layout.source;"size"===o?Ba((e=>{const r=i?n.measuredBox[e]:n.layoutBox[e],o=_a(r);r.min=t[e].min,r.max=r.min+o})):pl(o,n.layoutBox,t)&&Ba((r=>{const o=i?n.measuredBox[r]:n.layoutBox[r],a=_a(t[r]);o.max=o.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};za(a,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};i?za(s,e.applyTransform(r,!0),n.measuredBox):za(s,t,n.layoutBox);const l=!Ds(a);let u=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:o,layout:i}=r;if(o&&i){const a={x:{min:0,max:0},y:{min:0,max:0}};Oa(a,n.layoutBox,o.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Oa(s,t,i.layoutBox),Ms(a,s)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function qs(e){Ws.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Gs(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Xs(e){e.clearSnapshot()}function Qs(e){e.clearMeasurements()}function Js(e){e.isLayoutDirty=!1}function Zs(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function el(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function tl(e){e.resolveTargetDelta()}function nl(e){e.calcProjection()}function rl(e){e.resetRotation()}function ol(e){e.removeLeadSnapshot()}function il(e,t,n){e.translate=Fo(t.translate,0,n),e.scale=Fo(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function al(e,t,n,r){e.min=Fo(t.min,n.min,r),e.max=Fo(t.max,n.max,r)}function sl(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const ll={duration:.45,ease:[.4,0,.1,1]},ul=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),cl=ul("applewebkit/")&&!ul("chrome/")?Math.round:Tr;function dl(e){e.min=cl(e.min),e.max=cl(e.max)}function pl(e,t,n){return"position"===e||"preserve-aspect"===e&&!Ra(Os(t),Os(n),.2)}const hl=Hs({attachResizeListener:(e,t)=>Nr(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fl={current:void 0},ml=Hs({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!fl.current){const e=new hl({});e.mount(window),e.setOptions({layoutScroll:!0}),fl.current=e}return fl.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),gl={pan:{Feature:class extends qr{constructor(){super(...arguments),this.removePointerDownListener=Tr}onPointerDown(e){this.session=new Sa(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:as(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:cs(e),onStart:cs(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&Rr.update((()=>r(e,t)))}}}mount(){this.removePointerDownListener=Fr(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends qr{constructor(e){super(e),this.removeGroupControls=Tr,this.removeListeners=Tr,this.controls=new ls(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Tr}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:ml,MeasureLayout:gs}},vl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function yl(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;lo(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,o]=function(e){const t=vl.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const e=i.trim();return qi(e)?parseFloat(e):e}return zn(o)?yl(o,t,n+1):o}const xl=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),bl=e=>xl.has(e),wl=e=>e===On||e===Kn,kl=(e,t)=>parseFloat(e.split(", ")[t]),Sl=(e,t)=>(n,r)=>{let{transform:o}=r;if("none"===o||!o)return 0;const i=o.match(/^matrix3d\((.+)\)$/);if(i)return kl(i[1],t);{const t=o.match(/^matrix\((.+)\)$/);return t?kl(t[1],e):0}},El=new Set(["x","y","z"]),Cl=Cn.filter((e=>!El.has(e)));const Pl={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:o="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(o)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:o="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(o)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:Sl(4,13),y:Sl(5,14)};Pl.translateX=Pl.x,Pl.translateY=Pl.y;const jl=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},r={...r};const o=Object.keys(t).filter(bl);let i=[],a=!1;const s=[];if(o.forEach((o=>{const l=e.getValue(o);if(!e.hasValue(o))return;let u=n[o],c=ra(u);const d=t[o];let p;if(Sr(d)){const e=d.length,t=null===d[0]?1:0;u=d[t],c=ra(u);for(let n=t;n<e&&null!==d[n];n++)p?lo(ra(d[n])===p,"All keyframes must be of the same type"):(p=ra(d[n]),lo(p===c||wl(c)&&wl(p),"Keyframes must be of the same dimension as the current value"))}else p=ra(d);if(c!==p)if(wl(c)&&wl(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof d?t[o]=parseFloat(d):Array.isArray(d)&&p===Kn&&(t[o]=d.map(parseFloat))}else(null===c||void 0===c?void 0:c.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===u||0===d)?0===u?l.set(p.transform(u)):t[o]=c.transform(d):(a||(i=function(e){const t=[];return Cl.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t.length&&e.render(),t}(e),a=!0),s.push(o),r[o]=void 0!==r[o]?r[o]:t[o],l.jump(d))})),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,o=((e,t,n)=>{const r=t.measureViewportBox(),o=t.current,i=getComputedStyle(o),{display:a}=i,s={};"none"===a&&t.setStaticValue("display",e.display||"block"),n.forEach((e=>{s[e]=Pl[e](r,i)})),t.render();const l=t.measureViewportBox();return n.forEach((n=>{const r=t.getValue(n);r&&r.jump(s[n]),e[n]=Pl[n](l,i)})),e})(t,e,s);return i.length&&i.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),e.render(),Zt&&null!==n&&window.scrollTo({top:n}),{target:o,transitionEnd:r}}return{target:t,transitionEnd:r}};function Tl(e,t,n,r){return(e=>Object.keys(e).some(bl))(t)?jl(e,t,n,r):{target:t,transitionEnd:r}}const Ll=(e,t,n,r)=>{const o=function(e,t,n){let{...r}=t;const o=e.current;if(!(o instanceof Element))return{target:r,transitionEnd:n};n&&(n={...n}),e.values.forEach((e=>{const t=e.get();if(!zn(t))return;const n=yl(t,o);n&&e.set(n)}));for(const i in r){const e=r[i];if(!zn(e))continue;const t=yl(e,o);t&&(r[i]=t,n||(n={}),void 0===n[i]&&(n[i]=e))}return{target:r,transitionEnd:n}}(e,t,r);return Tl(e,t=o.target,n,r=o.transitionEnd)},_l={current:null},Rl={current:!1};const Al=new WeakMap,zl=Object.keys(mn),Dl=zl.length,Ml=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Ol=un.length;class Nl{constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:i}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Rr.render(this.render,!1,!0);const{latestValues:s,renderState:l}=i;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.isControllingVariants=cn(n),this.isVariantNode=dn(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const e=c[d];void 0!==s[d]&&Tn(e)&&(e.set(s[d],!1),Ki(u)&&u.add(d))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,Al.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Rl.current||function(){if(Rl.current=!0,Zt)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>_l.current=e.matches;e.addListener(t),t()}else _l.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||_l.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Al.delete(this.current),this.projection&&this.projection.unmount(),Ar(this.notifyUpdate),Ar(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const n=Pn.has(e),r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&Rr.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)})),o=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{r(),o()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,n,r){let o,i,{children:a,...s}=e;for(let l=0;l<Dl;l++){const e=zl[l],{isEnabled:t,Feature:n,ProjectionNode:r,MeasureLayout:a}=mn[e];r&&(o=r),t(s)&&(!this.features[e]&&n&&(this.features[e]=new n(this)),a&&(i=a))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:n,dragConstraints:i,layoutScroll:a,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(n)||i&&on(i),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:r,layoutScroll:a,layoutRoot:l})}return i}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Ml.length;n++){const t=Ml[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){const{willChange:r}=t;for(const o in t){const i=t[o],a=n[o];if(Tn(i))e.addValue(o,i),Ki(r)&&r.add(o);else if(Tn(a))e.addValue(o,ea(i,{owner:e})),Ki(r)&&r.remove(o);else if(a!==i)if(e.hasValue(o)){const t=e.getValue(o);!t.hasAnimated&&t.set(i)}else{const t=e.getStaticValue(o);e.addValue(o,ea(void 0!==t?t:i,{owner:e}))}}for(const o in n)void 0===t[o]&&e.removeValue(o);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<Ol;t++){const n=un[t],r=this.props[n];(an(r)||!1===r)&&(e[n]=r)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=ea(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props,r="string"===typeof n||"object"===typeof n?null===(t=wr(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;const o=this.getBaseTargetFromProps(this.props,e);return void 0===o||Tn(o)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:o}on(e,t){return this.events[e]||(this.events[e]=new Qi),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Il extends Nl{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}makeTargetAnimatableFromInstance(e,t,n){let{transition:r,transitionEnd:o,...i}=e,{transformValues:a}=t,s=function(e,t,n){const r={};for(const o in e){const e=la(o,t);if(void 0!==e)r[o]=e;else{const e=n.getValue(o);e&&(r[o]=e.get())}}return r}(i,r||{},this);if(a&&(o&&(o=a(o)),i&&(i=a(i)),s&&(s=a(s))),n){!function(e,t,n){var r,o;const i=Object.keys(t).filter((t=>!e.hasValue(t))),a=i.length;if(a)for(let s=0;s<a;s++){const a=i[s],l=t[a];let u=null;Array.isArray(l)&&(u=l[0]),null===u&&(u=null!==(o=null!==(r=n[a])&&void 0!==r?r:e.readValue(a))&&void 0!==o?o:t[a]),void 0!==u&&null!==u&&("string"===typeof u&&(qi(u)||Bi(u))?u=parseFloat(u):!ia(u)&&ei.test(l)&&(u=Vi(a,l)),e.addValue(a,ea(u,{owner:e})),void 0===n[a]&&(n[a]=u),null!==u&&e.setBaseTarget(a,u))}}(this,i,s);const e=Ll(this,i,s,o);o=e.transitionEnd,i=e.target}return{transition:r,transitionEnd:o,...i}}}class $l extends Il{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(Pn.has(t)){const e=Fi(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),o=(An(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof o?o.trim():o}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return is(e,n)}build(e,t,n,r){Zn(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return xr(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Tn(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}renderInstance(e,t,n,r){gr(e,t,n,r)}}class Fl extends Il{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Pn.has(t)){const e=Fi(t);return e&&e.default||0}return t=vr.has(t)?t:nn(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return br(e,t)}build(e,t,n,r){dr(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){yr(e,t,0,r)}mount(e){this.isSVGTag=hr(e.tagName),super.mount(e)}}const Vl=(e,t)=>Sn(e)?new Fl(t,{enableHardwareAcceleration:!1}):new $l(t,{enableHardwareAcceleration:!0}),Bl={...wa,...oo,...gl,...{layout:{ProjectionNode:ml,MeasureLayout:gs}}},Ul=wn(((e,t)=>function(e,t,n,r){let{forwardMotionProps:o=!1}=t;return{...Sn(e)?Mr:Or,preloadedFeatures:n,useRender:mr(o),createVisualElement:r,Component:e}}(e,t,Bl,Vl)));function Wl(){const t=(0,e.useRef)(!1);return en((()=>(t.current=!0,()=>{t.current=!1})),[]),t}class Hl extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Yl(t){let{children:n,isPresent:r}=t;const o=(0,e.useId)(),i=(0,e.useRef)(null),a=(0,e.useRef)({width:0,height:0,top:0,left:0});return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:s}=a.current;if(r||!i.current||!e||!t)return;i.current.dataset.motionPopId=o;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${o}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[r]),e.createElement(Hl,{isPresent:r,childRef:i,sizeRef:a},e.cloneElement(n,{ref:i}))}const Kl=t=>{let{children:n,initial:r,isPresent:o,onExitComplete:i,custom:a,presenceAffectsLayout:s,mode:l}=t;const u=kr(ql),c=(0,e.useId)(),d=(0,e.useMemo)((()=>({id:c,initial:r,isPresent:o,custom:a,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;i&&i()},register:e=>(u.set(e,!1),()=>u.delete(e))})),s?void 0:[o]);return(0,e.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[o]),e.useEffect((()=>{!o&&!u.size&&i&&i()}),[o]),"popLayout"===l&&(n=e.createElement(Yl,{isPresent:o},n)),e.createElement(Jt.Provider,{value:d},n)};function ql(){return new Map}const Gl=e=>e.key||"";const Xl=t=>{let{children:n,custom:r,initial:o=!0,onExitComplete:i,exitBeforeEnter:a,presenceAffectsLayout:s=!0,mode:l="sync"}=t;lo(!a,"Replace exitBeforeEnter with mode='wait'");const u=(0,e.useContext)(gn).forceRender||function(){const t=Wl(),[n,r]=(0,e.useState)(0),o=(0,e.useCallback)((()=>{t.current&&r(n+1)}),[n]);return[(0,e.useCallback)((()=>Rr.postRender(o)),[o]),n]}()[0],c=Wl(),d=function(t){const n=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&n.push(t)})),n}(n);let p=d;const h=(0,e.useRef)(new Map).current,f=(0,e.useRef)(p),m=(0,e.useRef)(new Map).current,g=(0,e.useRef)(!0);var v;if(en((()=>{g.current=!1,function(e,t){e.forEach((e=>{const n=Gl(e);t.set(n,e)}))}(d,m),f.current=p})),v=()=>{g.current=!0,m.clear(),h.clear()},(0,e.useEffect)((()=>()=>v()),[]),g.current)return e.createElement(e.Fragment,null,p.map((t=>e.createElement(Kl,{key:Gl(t),isPresent:!0,initial:!!o&&void 0,presenceAffectsLayout:s,mode:l},t))));p=[...p];const y=f.current.map(Gl),x=d.map(Gl),b=y.length;for(let e=0;e<b;e++){const t=y[e];-1!==x.indexOf(t)||h.has(t)||h.set(t,void 0)}return"wait"===l&&h.size&&(p=[]),h.forEach(((t,n)=>{if(-1!==x.indexOf(n))return;const o=m.get(n);if(!o)return;const a=y.indexOf(n);let g=t;if(!g){const t=()=>{h.delete(n);const e=Array.from(m.keys()).filter((e=>!x.includes(e)));if(e.forEach((e=>m.delete(e))),f.current=d.filter((t=>{const r=Gl(t);return r===n||e.includes(r)})),!h.size){if(!1===c.current)return;u(),i&&i()}};g=e.createElement(Kl,{key:Gl(o),isPresent:!1,onExitComplete:t,custom:r,presenceAffectsLayout:s,mode:l},o),h.set(n,g)}p.splice(a,0,g)})),p=p.map((t=>{const n=t.key;return h.has(n)?t:e.createElement(Kl,{key:Gl(t),isPresent:!0,presenceAffectsLayout:s,mode:l},t)})),e.createElement(e.Fragment,null,h.size?p:p.map((t=>(0,e.cloneElement)(t))))};var Ql={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jl=e.createContext&&e.createContext(Ql),Zl=function(){return Zl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Zl.apply(this,arguments)},eu=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function tu(t){return t&&t.map((function(t,n){return e.createElement(t.tag,Zl({key:n},t.attr),tu(t.child))}))}function nu(t){return function(n){return e.createElement(ru,Zl({attr:Zl({},t.attr)},n),tu(t.child))}}function ru(t){var n=function(n){var r,o=t.attr,i=t.size,a=t.title,s=eu(t,["attr","size","title"]),l=i||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",Zl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,s,{className:r,style:Zl(Zl({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&e.createElement("title",null,a),t.children)};return void 0!==Jl?e.createElement(Jl.Consumer,null,(function(e){return n(e)})):n(Ql)}function ou(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"}}]})(e)}var iu=n(414);const au=Yt(Ul.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  z-index: 9999;
  flex-direction: column;
`,su=Yt.div`
  text-align: center;
`,lu=Yt(Ul.h2)`
  font-size: 24px;
  color: #ffffff;
  margin-top: 30px;
  font-family: ${e=>e.theme.fonts.code};
  letter-spacing: 3px;
`,uu=Yt(Ul.div)`
  width: 200px;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 15px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`,cu=Yt(Ul.div)`
  height: 100%;
  background: linear-gradient(90deg, #ffffff, #e0e0e0, #cccccc);
  border-radius: 4px;
`,du=Yt(Ul.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
`,pu={initial:{scale:1,opacity:.8},animate:{scale:[1,1.1,1],opacity:[.8,1,.8],transition:{duration:2,repeat:1/0,ease:"easeInOut"}}},hu={initial:{width:0},animate:{width:"100%",transition:{duration:3,ease:"easeInOut"}}},fu=t=>{let{setLoading:n}=t;return(0,e.useEffect)((()=>{const e=setTimeout((()=>{"function"===typeof n&&n(!1)}),3500);return()=>{clearTimeout(e)}}),[n]),(0,iu.jsx)(Xl,{children:(0,iu.jsx)(au,{initial:{opacity:1},exit:{opacity:0,transition:{duration:.5}},children:(0,iu.jsxs)(su,{children:[(0,iu.jsx)(du,{variants:pu,initial:"initial",animate:"animate",children:(0,iu.jsx)(ou,{size:40,color:"#ffffff"})}),(0,iu.jsx)(lu,{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{delay:.3}},children:"LOADING"}),(0,iu.jsx)(uu,{children:(0,iu.jsx)(cu,{variants:hu,initial:"initial",animate:"animate"})})]})})})};n(599);var mu="popstate";function gu(){return Su((function(e,t){let{pathname:n="/",search:r="",hash:o=""}=ku(e.location.hash.substring(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),bu("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:wu(t))}),(function(e,t){yu("/"===e.pathname.charAt(0),`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}),arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function vu(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function yu(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function xu(e,t){return{usr:e.state,key:e.key,idx:t}}function bu(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?ku(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function wu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function ku(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Su(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s="POP",l=null,u=c();function c(){return(a.state||{idx:null}).idx}function d(){s="POP";let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:h.location,delta:t})}function p(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:wu(e);return n=n.replace(/ $/,"%20"),vu(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==u&&(u=0,a.replaceState({...a.state,idx:u},""));let h={get action(){return s},get location(){return e(o,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(mu,d),l=e,()=>{o.removeEventListener(mu,d),l=null}},createHref:e=>t(o,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s="PUSH";let r=bu(h.location,e,t);n&&n(r,e),u=c()+1;let d=xu(r,u),p=h.createHref(r);try{a.pushState(d,"",p)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;o.location.assign(p)}i&&l&&l({action:s,location:h.location,delta:1})},replace:function(e,t){s="REPLACE";let r=bu(h.location,e,t);n&&n(r,e),u=c();let o=xu(r,u),d=h.createHref(r);a.replaceState(o,"",d),i&&l&&l({action:s,location:h.location,delta:0})},go:e=>a.go(e)};return h}new WeakMap;function Eu(e,t){return Cu(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function Cu(e,t,n,r){let o=$u(("string"===typeof t?ku(t):t).pathname||"/",n);if(null==o)return null;let i=Pu(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=Iu(o);a=Ou(i[s],e,r)}return a}function Pu(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(vu(a.relativePath.startsWith(r),`Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),a.relativePath=a.relativePath.slice(r.length));let s=Wu([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(vu(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),Pu(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:Mu(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of ju(e.path))o(e,t,n);else o(e,t)})),t}function ju(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=ju(r.join("/")),s=[];return s.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var Tu=/^:[\w-]+$/,Lu=3,_u=2,Ru=1,Au=10,zu=-2,Du=e=>"*"===e;function Mu(e,t){let n=e.split("/"),r=n.length;return n.some(Du)&&(r+=zu),t&&(r+=_u),n.filter((e=>!Du(e))).reduce(((e,t)=>e+(Tu.test(t)?Lu:""===t?Ru:Au)),r)}function Ou(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=Nu({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=Nu({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:Wu([i,c.pathname]),pathnameBase:Hu(Wu([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=Wu([i,c.pathnameBase]))}return a}function Nu(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];yu("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=s[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:a,pattern:e}}function Iu(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return yu(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function $u(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Fu(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vu(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function Bu(e){let t=Vu(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function Uu(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=ku(e):(r={...e},vu(!r.pathname||!r.pathname.includes("?"),Fu("?","pathname","search",r)),vu(!r.pathname||!r.pathname.includes("#"),Fu("#","pathname","hash",r)),vu(!r.search||!r.search.includes("#"),Fu("#","search","hash",r)));let i,a=""===e||""===r.pathname,s=a?"/":r.pathname;if(null==s)i=n;else{let e=t.length-1;if(!o&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:o=""}="string"===typeof e?ku(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:Yu(r),hash:Ku(o)}}(r,i),u=s&&"/"!==s&&s.endsWith("/"),c=(a||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}var Wu=e=>e.join("/").replace(/\/\/+/g,"/"),Hu=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yu=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Ku=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function qu(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var Gu=["POST","PUT","PATCH","DELETE"],Xu=(new Set(Gu),["GET",...Gu]);new Set(Xu),Symbol("ResetLoaderData");var Qu=e.createContext(null);Qu.displayName="DataRouter";var Ju=e.createContext(null);Ju.displayName="DataRouterState";var Zu=e.createContext({isTransitioning:!1});Zu.displayName="ViewTransition";var ec=e.createContext(new Map);ec.displayName="Fetchers";var tc=e.createContext(null);tc.displayName="Await";var nc=e.createContext(null);nc.displayName="Navigation";var rc=e.createContext(null);rc.displayName="Location";var oc=e.createContext({outlet:null,matches:[],isDataRoute:!1});oc.displayName="Route";var ic=e.createContext(null);ic.displayName="RouteError";function ac(){return null!=e.useContext(rc)}function sc(){return vu(ac(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(rc).location}var lc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function uc(t){e.useContext(nc).static||e.useLayoutEffect(t)}function cc(){let{isDataRoute:t}=e.useContext(oc);return t?function(){let{router:t}=xc("useNavigate"),n=wc("useNavigate"),r=e.useRef(!1);uc((()=>{r.current=!0}));let o=e.useCallback((async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};yu(r.current,lc),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...o}))}),[t,n]);return o}():function(){vu(ac(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(Qu),{basename:n,navigator:r}=e.useContext(nc),{matches:o}=e.useContext(oc),{pathname:i}=sc(),a=JSON.stringify(Bu(o)),s=e.useRef(!1);uc((()=>{s.current=!0}));let l=e.useCallback((function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(yu(s.current,lc),!s.current)return;if("number"===typeof e)return void r.go(e);let l=Uu(e,JSON.parse(a),i,"path"===o.relative);null==t&&"/"!==n&&(l.pathname="/"===l.pathname?n:Wu([n,l.pathname])),(o.replace?r.replace:r.push)(l,o.state,o)}),[n,r,a,i,t]);return l}()}e.createContext(null);function dc(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(oc),{pathname:o}=sc(),i=JSON.stringify(Bu(r));return e.useMemo((()=>Uu(t,JSON.parse(i),o,"path"===n)),[t,i,o,n])}function pc(t,n,r,o){vu(ac(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:a}=e.useContext(nc),{matches:s}=e.useContext(oc),l=s[s.length-1],u=l?l.params:{},c=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let e=p&&p.path||"";Ec(c,!p||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let h,f=sc();if(n){let e="string"===typeof n?ku(n):n;vu("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),h=e}else h=f;let m=h.pathname||"/",g=m;if("/"!==d){let e=d.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let v=!a&&r&&r.matches&&r.matches.length>0?r.matches:Eu(t,{pathname:g});yu(p||null!=v,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),yu(null==v||void 0!==v[v.length-1].route.element||void 0!==v[v.length-1].route.Component||void 0!==v[v.length-1].route.lazy,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=vc(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:Wu([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:Wu([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,r,o);return n&&y?e.createElement(rc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},y):y}function hc(){let t=kc(),n=qu(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o},a={padding:"2px 4px",backgroundColor:o},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:a},"ErrorBoundary")," or"," ",e.createElement("code",{style:a},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:i},r):null,s)}var fc=e.createElement(hc,null),mc=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(oc.Provider,{value:this.props.routeContext},e.createElement(ic.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gc(t){let{routeContext:n,match:r,children:o}=t,i=e.useContext(Qu);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(oc.Provider,{value:n},o)}function vc(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let o=t,i=r?.errors;if(null!=i){let e=o.findIndex((e=>e.route.id&&void 0!==i?.[e.route.id]));vu(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let a=!1,s=-1;if(r)for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:n}=r,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||i){a=!0,o=s>=0?o.slice(0,s+1):[o[0]];break}}}return o.reduceRight(((t,l,u)=>{let c,d=!1,p=null,h=null;r&&(c=i&&l.route.id?i[l.route.id]:void 0,p=l.route.errorElement||fc,a&&(s<0&&0===u?(Ec("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,h=null):s===u&&(d=!0,h=l.route.hydrateFallbackElement||null)));let f=n.concat(o.slice(0,u+1)),m=()=>{let n;return n=c?p:d?h:l.route.Component?e.createElement(l.route.Component,null):l.route.element?l.route.element:t,e.createElement(gc,{match:l,routeContext:{outlet:t,matches:f,isDataRoute:null!=r},children:n})};return r&&(l.route.ErrorBoundary||l.route.errorElement||0===u)?e.createElement(mc,{location:r.location,revalidation:r.revalidation,component:p,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()}),null)}function yc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xc(t){let n=e.useContext(Qu);return vu(n,yc(t)),n}function bc(t){let n=e.useContext(Ju);return vu(n,yc(t)),n}function wc(t){let n=function(t){let n=e.useContext(oc);return vu(n,yc(t)),n}(t),r=n.matches[n.matches.length-1];return vu(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function kc(){let t=e.useContext(ic),n=bc("useRouteError"),r=wc("useRouteError");return void 0!==t?t:n.errors?.[r]}var Sc={};function Ec(e,t,n){t||Sc[e]||(Sc[e]=!0,yu(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return pc(t,void 0,r,n)}));function Cc(e){vu(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Pc(t){let{basename:n="/",children:r=null,location:o,navigationType:i="POP",navigator:a,static:s=!1}=t;vu(!ac(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=n.replace(/^\/*/,"/"),u=e.useMemo((()=>({basename:l,navigator:a,static:s,future:{}})),[l,a,s]);"string"===typeof o&&(o=ku(o));let{pathname:c="/",search:d="",hash:p="",state:h=null,key:f="default"}=o,m=e.useMemo((()=>{let e=$u(c,l);return null==e?null:{location:{pathname:e,search:d,hash:p,state:h,key:f},navigationType:i}}),[l,c,d,p,h,f,i]);return yu(null!=m,`<Router basename="${l}"> is not able to match the URL "${c}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),null==m?null:e.createElement(nc.Provider,{value:u},e.createElement(rc.Provider,{children:r,value:m}))}function jc(e){let{children:t,location:n}=e;return pc(Tc(t),n)}e.Component;function Tc(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,o)=>{if(!e.isValidElement(t))return;let i=[...n,o];if(t.type===e.Fragment)return void r.push.apply(r,Tc(t.props.children,i));vu(t.type===Cc,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),vu(!t.props.index||!t.props.children,"An index route cannot have child routes.");let a={id:t.props.id||i.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(a.children=Tc(t.props.children,i)),r.push(a)})),r}var Lc="get",_c="application/x-www-form-urlencoded";function Rc(e){return null!=e&&"string"===typeof e.tagName}var Ac=null;var zc=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dc(e){return null==e||zc.has(e)?e:(yu(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_c}"`),null)}function Mc(e,t){let n,r,o,i,a;if(Rc(s=e)&&"form"===s.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?$u(a,t):null,n=e.getAttribute("method")||Lc,o=Dc(e.getAttribute("enctype"))||_c,i=new FormData(e)}else if(function(e){return Rc(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Rc(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?$u(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Lc,o=Dc(e.getAttribute("formenctype"))||Dc(a.getAttribute("enctype"))||_c,i=new FormData(a,e),!function(){if(null===Ac)try{new FormData(document.createElement("form"),0),Ac=!1}catch(e){Ac=!0}return Ac}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(Rc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Lc,r=null,o=_c,a=e}var s;return i&&"text/plain"===o&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}function Oc(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Nc(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Ic(e){return null!=e&&"string"===typeof e.page}function $c(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Fc(e,t,n,r,o,i){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter(((e,t)=>a(e,t)||s(e,t))):"data"===i?t.filter(((t,i)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,i)||s(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Vc(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o})).flat(1),[...new Set(r)];var r}function Bc(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,o)=>{if(t&&!Ic(o)&&"script"===o.as&&o.href&&r.has(o.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(o));return n.has(i)||(n.add(i),e.push({key:i,link:o})),e}),[])}function Uc(e){return{__html:e}}Symbol("SingleFetchRedirect");function Wc(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===$u(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function Hc(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let o,i=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(qu(n))return e.createElement(Yc,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),i);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Yc,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),i)}function Yc(t){let{title:n,renderScripts:r,isOutsideRemixApp:o,children:i}=t,{routeModules:a}=Qc();return a.root?.Layout&&!o?i:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,r?e.createElement(od,null):null)))}function Kc(e){return!0===e}function qc(){let t=e.useContext(Qu);return Oc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Gc(){let t=e.useContext(Ju);return Oc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Xc=e.createContext(void 0);function Qc(){let t=e.useContext(Xc);return Oc(t,"You must render this element inside a <HydratedRouter> element"),t}function Jc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Zc(e,t,n){if(n&&!rd)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function ed(t){let{page:n,...r}=t,{router:o}=qc(),i=e.useMemo((()=>Eu(o.routes,n,o.basename)),[o.routes,n,o.basename]);return i?e.createElement(nd,{page:n,matches:i,...r}):null}function td(t){let{manifest:n,routeModules:r}=Qc(),[o,i]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await Nc(r,n);return e.links?e.links():[]}return[]})));return Bc(r.flat(1).filter($c).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||i(t)})),()=>{e=!0}}),[t,n,r]),o}function nd(t){let{page:n,matches:r,...o}=t,i=sc(),{manifest:a,routeModules:s}=Qc(),{basename:l}=qc(),{loaderData:u,matches:c}=Gc(),d=e.useMemo((()=>Fc(n,r,c,a,i,"data")),[n,r,c,a,i]),p=e.useMemo((()=>Fc(n,r,c,a,i,"assets")),[n,r,c,a,i]),h=e.useMemo((()=>{if(n===i.pathname+i.search+i.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=a.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in u&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let o=Wc(n,l);return t&&e.size>0&&o.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[o.pathname+o.search]}),[l,u,i,a,d,r,n,s]),f=e.useMemo((()=>Vc(p,a)),[p,a]),m=td(p);return e.createElement(e.Fragment,null,h.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...o}))),f.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...o}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Xc.displayName="FrameworkContext";var rd=!1;function od(t){let{manifest:n,serverHandoffString:r,isSpaMode:o,ssr:i,renderMeta:a}=Qc(),{router:s,static:l,staticContext:u}=qc(),{matches:c}=Gc(),d=Kc(i);a&&(a.didRenderScripts=!0);let p=Zc(c,null,o);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let o=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${p.map(((e,t)=>{let r=`route${t}`,o=n.routes[e.route.id];Oc(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:a,clientMiddlewareModule:s,hydrateFallbackModule:l,module:u}=o,c=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:u,varName:`${r}_main`}];return 1===c.length?`import * as ${r} from ${JSON.stringify(u)};`:[c.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${c.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(r.pop();r.length>0;)o.push(`/${r.join("/")}`),r.pop();o.forEach((e=>{let r=Eu(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let i=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:i}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Uc(o),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Uc(i),type:"module",async:!0}))}),[]),f=rd?[]:n.entry.imports.concat(Vc(p,n,{includeHydrateFallback:!0}));return rd?null:e.createElement(e.Fragment,null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin}),[...new Set(m)].map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin}))),h);var m}function id(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var ad="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{ad&&(window.__reactRouterVersion="7.4.1")}catch(zf){}function sd(t){let{basename:n,children:r,window:o}=t,i=e.useRef();null==i.current&&(i.current=gu({window:o,v5Compat:!0}));let a=i.current,[s,l]=e.useState({action:a.action,location:a.location}),u=e.useCallback((t=>{e.startTransition((()=>l(t)))}),[l]);return e.useLayoutEffect((()=>a.listen(u)),[a,u]),e.createElement(Pc,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:a})}var ld=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ud=e.forwardRef((function(t,n){let r,{onClick:o,discover:i="render",prefetch:a="none",relative:s,reloadDocument:l,replace:u,state:c,target:d,to:p,preventScrollReset:h,viewTransition:f,...m}=t,{basename:g}=e.useContext(nc),v="string"===typeof p&&ld.test(p),y=!1;if("string"===typeof p&&v&&(r=p,ad))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=$u(t.pathname,g);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:y=!0}catch(zf){yu(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let x=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};vu(ac(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=e.useContext(nc),{hash:i,pathname:a,search:s}=dc(t,{relative:n}),l=a;return"/"!==r&&(l="/"===a?r:Wu([r,a])),o.createHref({pathname:l,search:s,hash:i})}(p,{relative:s}),[b,w,k]=function(t,n){let r=e.useContext(Xc),[o,i]=e.useState(!1),[a,s]=e.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=n,h=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(o){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[o]);let f=()=>{i(!0)},m=()=>{i(!1),s(!1)};return r?"intent"!==t?[a,h,{}]:[a,h,{onFocus:Jc(l,f),onBlur:Jc(u,m),onMouseEnter:Jc(c,f),onMouseLeave:Jc(d,m),onTouchStart:Jc(p,f)}]:[!1,h,{}]}(a,m),S=function(t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=cc(),u=sc(),c=dc(t,{relative:a});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:wu(u)===wu(c);l(t,{replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:s})}}),[u,l,c,r,o,n,t,i,a,s])}(p,{replace:u,state:c,target:d,preventScrollReset:h,relative:s,viewTransition:f});let E=e.createElement("a",{...m,...k,href:r||x,onClick:y||l?o:function(e){o&&o(e),e.defaultPrevented||S(e)},ref:id(n,w),target:d,"data-discover":v||"render"!==i?void 0:"true"});return b&&!v?e.createElement(e.Fragment,null,E,e.createElement(ed,{page:x})):E}));ud.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:l,viewTransition:u,children:c,...d}=t,p=dc(l,{relative:d.relative}),h=sc(),f=e.useContext(Ju),{navigator:m,basename:g}=e.useContext(nc),v=null!=f&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(Zu);vu(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=pd("useViewTransitionState"),i=dc(t,{relative:n.relative});if(!r.isTransitioning)return!1;let a=$u(r.currentLocation.pathname,o)||r.currentLocation.pathname,s=$u(r.nextLocation.pathname,o)||r.nextLocation.pathname;return null!=Nu(i.pathname,s)||null!=Nu(i.pathname,a)}(p)&&!0===u,y=m.encodeLocation?m.encodeLocation(p).pathname:p.pathname,x=h.pathname,b=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;o||(x=x.toLowerCase(),b=b?b.toLowerCase():null,y=y.toLowerCase()),b&&g&&(b=$u(b,g)||b);const w="/"!==y&&y.endsWith("/")?y.length-1:y.length;let k,S=x===y||!a&&x.startsWith(y)&&"/"===x.charAt(w),E=null!=b&&(b===y||!a&&b.startsWith(y)&&"/"===b.charAt(y.length)),C={isActive:S,isPending:E,isTransitioning:v},P=S?r:void 0;k="function"===typeof i?i(C):[i,S?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let j="function"===typeof s?s(C):s;return e.createElement(ud,{...d,"aria-current":P,className:k,ref:n,style:j,to:l,viewTransition:u},"function"===typeof c?c(C):c)})).displayName="NavLink";var cd=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:o,navigate:i,reloadDocument:a,replace:s,state:l,method:u=Lc,action:c,onSubmit:d,relative:p,preventScrollReset:h,viewTransition:f,...m}=t,g=md(),v=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(nc),o=e.useContext(oc);vu(o,"useFormAction must be used inside a RouteContext");let[i]=o.matches.slice(-1),a={...dc(t||".",{relative:n})},s=sc();if(null==t){a.search=s.search;let e=new URLSearchParams(a.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();a.search=n?`?${n}`:""}}t&&"."!==t||!i.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(a.pathname="/"===a.pathname?r:Wu([r,a.pathname]));return wu(a)}(c,{relative:p}),y="get"===u.toLowerCase()?"get":"post",x="string"===typeof c&&ld.test(c);return e.createElement("form",{ref:n,method:y,action:v,onSubmit:a?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||u;g(t||e.currentTarget,{fetcherKey:o,method:n,navigate:i,replace:s,state:l,relative:p,preventScrollReset:h,viewTransition:f})},...m,"data-discover":x||"render"!==r?void 0:"true"})}));function dd(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pd(t){let n=e.useContext(Qu);return vu(n,dd(t)),n}cd.displayName="Form";var hd=0,fd=()=>`__${String(++hd)}__`;function md(){let{router:t}=pd("useSubmit"),{basename:n}=e.useContext(nc),r=wc("useRouteId");return e.useCallback((async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:a,encType:s,formData:l,body:u}=Mc(e,n);if(!1===o.navigate){let e=o.fetcherKey||fd();await t.fetch(e,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,flushSync:o.flushSync})}else await t.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})}),[t,n,r])}new TextEncoder;function gd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(e)}function vd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(e)}function yd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(e)}function xd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function bd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(e)}function wd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(e)}function kd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(e)}function Sd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(e)}function Ed(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(e)}function Cd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function Pd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(e)}function jd(e){return nu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}const Td=Yt.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${e=>e.theme.colors.backgroundDarker};
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  width: 100%;
  max-width: 100vw;

  &.scrolled {
    height: 60px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0 20px;
  }
`,Ld=Yt.a`
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`,_d=Yt.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media ${e=>e.theme.breakpoints.md} {
    display: none;
  }
`,Rd=Yt.li`
  margin: 0 15px;
`,Ad=Yt.a`
  color: #cccccc;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  padding: 5px 0;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`,zd=Yt.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  
  @media ${e=>e.theme.breakpoints.md} {
    display: none;
  }
`,Dd=Yt.a`
  color: #cccccc;
  font-size: 1.2rem;
  margin-left: 15px;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`,Md=Yt.div`
  display: none;
  
  @media ${e=>e.theme.breakpoints.md} {
    display: block;
    position: absolute;
    right: 20px;
    cursor: pointer;
    z-index: 1001;
  }
`,Od=Yt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${e=>{let{isOpen:t}=e;return t?"0":"-100vh"}};
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${e=>e.theme.colors.backgroundDarker};
  transition: top 0.3s ease-in-out;
  z-index: 999;
  opacity: ${e=>{let{isOpen:t}=e;return t?"1":"0"}};
  overflow-x: hidden;
  pointer-events: ${e=>{let{isOpen:t}=e;return t?"auto":"none"}};
`,Nd=Yt.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
`,Id=Yt.li`
  margin: 20px 0;
  transform: translateY(${e=>{let{isOpen:t}=e;return t?"0":"20px"}});
  opacity: ${e=>{let{isOpen:t}=e;return t?"1":"0"}};
  transition: all 0.4s ease;
  transition-delay: ${e=>{let{index:t}=e;return.1*t+"s"}};
`,$d=Yt.a`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  display: inline-block;
  width: auto;
  
  &:hover {
    color: ${e=>e.theme.colors.textPrimary};
  }
`,Fd=Yt.div`
  width: 30px;
  height: 3px;
  background-color: ${e=>{let{isOpen:t}=e;return t?"transparent":"#ffffff"}};
  transition: all 0.3s ease;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #ffffff;
    transition: all 0.3s ease;
  }
  
  &:before {
    transform: ${e=>{let{isOpen:t}=e;return t?"rotate(45deg)":"translateY(-10px)"}};
  }
  
  &:after {
    transform: ${e=>{let{isOpen:t}=e;return t?"rotate(-45deg)":"translateY(10px)"}};
  }
`,Vd=Yt.div`
  display: flex;
  margin-top: 40px;
`,Bd=Yt.a`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1.5rem;
  margin: 0 15px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${e=>e.theme.colors.textPrimary};
  }
`,Ud=()=>{const[t,n]=(0,e.useState)(!1),[r,o]=(0,e.useState)(!1);(0,e.useEffect)((()=>{const e=()=>{window.scrollY>50?o(!0):o(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const i=(e,t)=>{e.preventDefault();const r=document.querySelector(t);n(!1),document.body.style.overflow="auto",document.activeElement&&document.activeElement.blur(),r?setTimeout((()=>{window.scrollTo({top:r.offsetTop-70,behavior:"smooth"})}),100):console.log(`Element with selector ${t} not found.`)};return(0,iu.jsxs)(Td,{className:r?"scrolled":"",children:[(0,iu.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,iu.jsx)(Ld,{href:"#",children:"Portfolio"})}),(0,iu.jsxs)("div",{style:{display:"flex"},children:[(0,iu.jsxs)(_d,{children:[(0,iu.jsx)(Rd,{children:(0,iu.jsx)(Ad,{href:"#about",children:"about"})}),(0,iu.jsx)(Rd,{children:(0,iu.jsx)(Ad,{href:"#skills",children:"skills"})}),(0,iu.jsx)(Rd,{children:(0,iu.jsx)(Ad,{href:"#projects",children:"projects"})}),(0,iu.jsx)(Rd,{children:(0,iu.jsx)(Ad,{href:"#contact",children:"contact"})})]}),(0,iu.jsxs)(zd,{children:[(0,iu.jsx)(Dd,{href:"https://mail.google.com/mail/?view=cm&fs=1&to=yasirkhandps7@gmail.com",target:"_blank",rel:"noopener noreferrer",children:(0,iu.jsx)(Cd,{})}),(0,iu.jsx)(Dd,{href:"https://www.linkedin.com/in/yasirkhan71/",target:"_blank",rel:"noopener noreferrer",children:(0,iu.jsx)(Ed,{})}),(0,iu.jsx)(Dd,{href:"https://github.com/Yasir-Khan-7",target:"_blank",rel:"noopener noreferrer",children:(0,iu.jsx)(kd,{})})]})]}),(0,iu.jsx)(Md,{onClick:()=>{n(!t),document.body.style.overflow=t?"auto":"hidden"},children:(0,iu.jsx)(Fd,{isOpen:t})}),(0,iu.jsxs)(Od,{isOpen:t,children:[(0,iu.jsxs)(Nd,{children:[(0,iu.jsx)(Id,{isOpen:t,index:0,children:(0,iu.jsx)($d,{href:"#about",onClick:e=>i(e,"#about"),children:"about"})}),(0,iu.jsx)(Id,{isOpen:t,index:1,children:(0,iu.jsx)($d,{href:"#skills",onClick:e=>i(e,"#skills"),children:"skills"})}),(0,iu.jsx)(Id,{isOpen:t,index:2,children:(0,iu.jsx)($d,{href:"#projects",onClick:e=>i(e,"#projects"),children:"projects"})}),(0,iu.jsx)(Id,{isOpen:t,index:3,children:(0,iu.jsx)($d,{href:"#contact",onClick:e=>i(e,"#contact"),children:"contact"})})]}),(0,iu.jsxs)(Vd,{children:[(0,iu.jsx)(Bd,{href:"https://mail.google.com/mail/?view=cm&fs=1&to=yasirkhandps7@gmail.com",target:"_blank",rel:"noopener noreferrer",children:(0,iu.jsx)(Cd,{})}),(0,iu.jsx)(Bd,{href:"https://www.linkedin.com/in/yasirkhan71/",target:"_blank",rel:"noopener noreferrer",children:(0,iu.jsx)(Ed,{})}),(0,iu.jsx)(Bd,{href:"https://github.com/Yasir-Khan-7",target:"_blank",rel:"noopener noreferrer",children:(0,iu.jsx)(kd,{})})]})]})]})},Wd=Yt.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 150px;
    height: 100%;
    background-color: ${e=>{switch(e.section){case"hero":return e.theme.colors.hero.accent;case"about":return e.theme.colors.about.accent;case"skills":return e.theme.colors.skills.accent;case"projects":return e.theme.colors.projects.accent;case"contact":return e.theme.colors.contact.accent;default:return"#e0e0e0"}}};
    transform: translateX(-50%);
    box-shadow: 0 0 8px ${e=>{switch(e.section){case"hero":return"rgba(58, 134, 255, 0.6)";case"about":return"rgba(255, 89, 94, 0.6)";case"skills":return"rgba(255, 202, 58, 0.6)";case"projects":return"rgba(138, 201, 38, 0.6)";case"contact":return"rgba(230, 57, 70, 0.6)";default:return"rgba(0, 0, 0, 0.1)"}}};
    opacity: 0.8;
  }
`,Hd=e=>{let{section:t}=e;return(0,iu.jsx)(Wd,{section:t})},Yd=Yt.section`
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 1;
  background: ${e=>e.theme.colors.background};
  overflow: hidden;
  max-width: 100vw;
`,Kd=Yt.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 80px 50px 0;
  width: 100%;
  
  @media ${e=>e.theme.breakpoints.md} {
    padding: 80px 30px 0;
  }
  
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 80px 20px 0;
  }
`,qd=Yt.h1`
  color: ${e=>e.theme.colors.hero.accent};
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-in-out;
  position: relative;
  
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`,Gd=Yt.h2`
  color: ${e=>e.theme.colors.textPrimary};
  font-size: 4.2rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
  animation: fadeInUp 1s ease-in-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
  
  .highlight {
    display: inline-block;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2em;
      bottom: 0.1em;
      left: 0;
      background-color: ${e=>e.theme.colors.hero.accent};
      opacity: 0.3;
      z-index: -1;
    }
  }
  
  @media ${e=>e.theme.breakpoints.md} {
    font-size: 3.4rem;
  }
  
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 2.4rem;
  }
`,Xd=Yt.h3`
  color: ${e=>e.theme.colors.textPrimary};
  font-size: 3.8rem;
  font-weight: 700;
  margin: 10px 0 20px;
  line-height: 1.1;
  animation: fadeInUp 1s ease-in-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
  
  @media ${e=>e.theme.breakpoints.md} {
    font-size: 3.2rem;
  }
  
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 2.2rem;
  }
`,Qd=Yt.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1.2rem;
  max-width: 600px;
  margin: 20px 0 30px;
  line-height: 1.6;
  animation: fadeInUp 1s ease-in-out;
  animation-delay: 0.4s;
  animation-fill-mode: both;
  
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`,Jd=Yt.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  animation: fadeInUp 1s ease-in-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
  
  @media ${e=>e.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 15px;
  }
`,Zd=Yt.a`
  display: inline-flex;
  align-items: center;
  color: ${e=>e.theme.colors.hero.accent};
  font-weight: 500;
  text-decoration: none;
  padding: 12px 20px;
  border: 2px solid ${e=>e.theme.colors.hero.accent};
  border-radius: 4px;
  margin-right: 15px;
  transition: all 0.3s ease;
  
  svg {
    margin-left: 8px;
  }
  
  &:hover {
    background-color: rgba(58, 134, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(58, 134, 255, 0.2);
  }
  
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 10px 16px;
    font-size: 14px;
  }
`,ep=Yt.a`
  display: inline-flex;
  align-items: center;
  background: ${e=>e.theme.colors.hero.gradient};
  color: white;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  svg {
    margin-left: 8px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(58, 134, 255, 0.3);
    filter: brightness(1.05);
  }
  
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 10px 16px;
    font-size: 14px;
  }
`,tp=Yt.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 1.5s ease-in-out infinite alternate;
  cursor: pointer;
  
  span {
    color: ${e=>e.theme.colors.hero.accent};
    margin-bottom: 10px;
    font-size: 0.9rem;
    opacity: 0.8;
  }
  
  &::after {
    content: "";
    width: 2px;
    height: 40px;
    background-color: ${e=>e.theme.colors.hero.accent};
    animation: scrollDown 1.5s ease-in-out infinite;
  }
  
  @keyframes scrollDown {
    0% {
      height: 0;
      opacity: 0;
    }
    50% {
      height: 40px;
      opacity: 1;
    }
    100% {
      height: 0;
      opacity: 0;
      transform: translateY(20px);
    }
  }
`,np=Yt.div`
  position: absolute;
  right: 8%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 5rem;
  font-weight: 700;
  font-family: ${e=>e.theme.fonts.code};
  color: #1a1a1a;
  animation: float 6s ease-in-out infinite;
  user-select: none;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    color: #000000;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    animation-play-state: paused;
  }
  
  @keyframes float {
    0% {
      transform: translateY(-50%) translateX(0) rotate(0deg) scale(1);
    }
    25% {
      transform: translateY(-53%) translateX(-5px) rotate(-1deg) scale(1.03);
    }
    50% {
      transform: translateY(-50%) translateX(-8px) rotate(0deg) scale(1);
    }
    75% {
      transform: translateY(-47%) translateX(-5px) rotate(1deg) scale(0.97);
    }
    100% {
      transform: translateY(-50%) translateX(0) rotate(0deg) scale(1);
    }
  }
  
  @media ${e=>e.theme.breakpoints.md} {
    font-size: 4rem;
    right: 5%;
  }
  
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 3rem;
    right: 10%;
    opacity: 0.5;
  }
  
  @media (max-width: 480px) {
    display: none; /* Hide completely on very small screens */
  }
`,rp=(Yt.div`
  // Add appropriate styles for HeroSocialIcons
`,Yt.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  animation: fadeInUp 1s ease-in-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
  
  @media ${e=>e.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 15px;
  }
`,Yt.a`
  display: inline-flex;
  align-items: center;
  background: ${e=>e.theme.colors.hero.gradient};
  color: white;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  svg {
    margin-left: 8px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(58, 134, 255, 0.3);
    filter: brightness(1.05);
  }
  
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 10px 16px;
    font-size: 14px;
  }
`,()=>{const t=(0,e.useRef)(null),n=(0,e.useRef)(null),[r,o]=(0,e.useState)(!1);return(0,iu.jsxs)(iu.Fragment,{children:[(0,iu.jsxs)(Yd,{id:"hero",ref:t,children:[(0,iu.jsxs)(Kd,{children:[(0,iu.jsx)(qd,{children:"Hello, I'm"}),(0,iu.jsx)(Gd,{children:(0,iu.jsx)("span",{className:"highlight",children:"Python Developer"})}),(0,iu.jsx)(Xd,{children:"& Data Analyst"}),(0,iu.jsx)(Qd,{children:"Turning complex data into actionable insights and developing intelligent applications that make an impact. Passionate about creating seamless automation systems that transform how businesses operate."}),(0,iu.jsxs)(Jd,{children:[(0,iu.jsx)(Zd,{href:"#projects",children:"View My Work"}),(0,iu.jsx)(ep,{href:"#contact",className:"contact-cta-button",onClick:e=>{e.preventDefault();const t=document.getElementById("contact");t&&window.scrollTo({top:t.offsetTop-70,behavior:"smooth"})},children:"Get In Touch"})]})]}),(0,iu.jsx)(np,{ref:n,onClick:()=>{o(!0),n.current&&(n.current.style.transform="translateY(-50%) scale(1.2)",n.current.style.color="#000000",setTimeout((()=>{n.current&&(n.current.style.transform="translateY(-50%) scale(1)",o(!1))}),300))},style:{animationPlayState:r?"paused":"running"},children:"</>"}),(0,iu.jsx)(tp,{onClick:()=>{const e=document.getElementById("about");e&&e.scrollIntoView({behavior:"smooth"})},children:(0,iu.jsx)("span",{children:"Scroll"})})]}),(0,iu.jsx)(Hd,{section:"hero"})]})}),op=Yt.section`
  padding: 100px 10% 150px;
  position: relative;
  background: ${e=>e.theme.colors.background};
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  
  @media screen and (max-width: 768px) {
    padding: 80px 5% 100px;
  }
`,ip=Yt.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 60px;
  margin-top: 30px;
  width: 100%;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    margin-top: 0;
  }
`,ap=Yt.div`
  flex: 1;
  z-index: 2;
  max-width: 100%;
`,sp=Yt.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${e=>e.theme.colors.textPrimary};
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: ${e=>e.theme.colors.about.accent};
    bottom: -12px;
    left: 0;
    animation: borderFadeIn 1s ease forwards;
    animation-play-state: paused;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 25px;
  }
`,lp=(Yt.div`
  background-color: ${e=>e.theme.colors.about.highlight};
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`,Yt.p`
  font-size: 18px;
  line-height: 1.8;
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.textSecondary};
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    color: ${e=>e.theme.colors.about.accent};
    font-weight: 600;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`),up=Yt.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0;
  max-width: 400px;
  margin-right: 20px;
  transform: translateY(0);
  
  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 300px;
    align-self: center;
    margin-right: 0;
    margin-top: 0;
    transform: none;
  }
  
  @media screen and (max-width: 480px) {
    max-width: 250px;
  }
`,cp=Yt.div`
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background: url('${"/Portfolio"}/images/profile/profile_pic.jpeg') no-repeat center center;
  background-size: cover;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 320px;
  }
  
  @media screen and (max-width: 480px) {
    width: 220px;
    height: 280px;
  }
`,dp=Yt.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${e=>e.theme.colors.textPrimary};
  margin-bottom: 20px;
`,pp=Yt.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 10px 50px;
  padding: 0;
  margin: 20px 0 0;
  overflow: hidden;
  list-style: none;
`,hp=Yt.li`
  position: relative;
  font-size: 16px;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 10px;
  padding-left: 20px;
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${e=>e.theme.colors.about.accent};
  }
`,fp=Yt(Ul.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, ${e=>e.theme.colors.about.highlight} 0%, transparent 70%);
  filter: blur(80px);
  z-index: 0;
`,mp=()=>{const t=(0,e.useRef)(null),n=(0,e.useRef)(null);return(0,e.useEffect)((()=>{const e=new IntersectionObserver((e=>{const[t]=e;t.isIntersecting&&(t.target.querySelectorAll(".animate-on-scroll").forEach((e=>{e.classList.add("show")})),n.current&&(n.current.style.animationPlayState="running"))}),{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}}),[]),(0,iu.jsxs)(iu.Fragment,{children:[(0,iu.jsxs)(op,{id:"about",ref:t,children:[(0,iu.jsx)(fp,{initial:{x:"-50vw",y:"20vh"},animate:{x:"-40vw",y:"20vh"},transition:{repeat:1/0,duration:15,repeatType:"reverse"}}),(0,iu.jsxs)(ip,{children:[(0,iu.jsxs)(ap,{children:[(0,iu.jsx)(sp,{ref:n,children:"About Me"}),(0,iu.jsx)(lp,{className:"animate-on-scroll hidden",children:"Hi there! I'm a passionate final year software engineering student with a focus on creating exceptional digital experiences and innovative solutions. I enjoy building elegant, data-driven applications and intelligent systems using modern technologies."}),(0,iu.jsxs)(lp,{className:"animate-on-scroll hidden",children:["My journey in software development started with a curiosity about how technology can solve real-world problems. This curiosity evolved into a passion for creating impactful solutions across various domains including ",(0,iu.jsx)("strong",{children:"industrial automation"}),", ",(0,iu.jsx)("strong",{children:"data analysis"}),", and ",(0,iu.jsx)("strong",{children:"artificial intelligence"}),"."]}),(0,iu.jsxs)(lp,{className:"animate-on-scroll hidden",children:["My current focus is on developing AI-powered applications, creating intuitive data visualizations, and building data-driven systems. I am actively seeking opportunities in the fields of ",(0,iu.jsx)("strong",{children:"artificial intelligence"}),", ",(0,iu.jsx)("strong",{children:"Python development"}),", and ",(0,iu.jsx)("strong",{children:"data analytics"})," where I can leverage my technical skills to create innovative solutions that drive meaningful impact."]}),(0,iu.jsx)(dp,{className:"animate-on-scroll hidden",children:"My core competencies include:"}),(0,iu.jsxs)(pp,{className:"animate-on-scroll hidden",children:[(0,iu.jsx)(hp,{children:"AI-Driven Software Development"}),(0,iu.jsx)(hp,{children:"Natural Language Processing"}),(0,iu.jsx)(hp,{children:"Business Intelligence & Analytics"}),(0,iu.jsx)(hp,{children:"Database Management"}),(0,iu.jsx)(hp,{children:"Industrial Automation"}),(0,iu.jsx)(hp,{children:"Data Pipeline Engineering"}),(0,iu.jsx)(hp,{children:"Frontend Web Solutions"}),(0,iu.jsx)(hp,{children:"Data Visualization"})]})]}),(0,iu.jsx)(up,{className:"animate-on-scroll hidden",children:(0,iu.jsx)(cp,{})})]})]}),(0,iu.jsx)(Hd,{section:"about"})]})},gp=Yt.section`
  padding: 150px 10%;
  position: relative;
  background: ${e=>e.theme.colors.background};
  --primary-color: #2c5282; /* Dark blue */
  --primary-light: rgba(44, 82, 130, 0.1);
  --accent-color: #2b6cb0; /* Medium blue */
  --hover-color: #1e4e8c; /* Darker blue for hover states */
  
  @media screen and (max-width: 768px) {
    padding: 100px 5%;
  }
`,vp=Yt.h2`
  font-size: 42px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 60px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
    bottom: -15px;
    left: 0;
    animation: borderFadeIn 1s ease forwards;
    animation-play-state: paused;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`,yp=Yt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,xp=Yt.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
  margin-bottom: 80px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`,bp=Yt.div`
  display: flex;
  flex-direction: column;
`,wp=Yt.h3`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
`,kp=Yt.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px 10px;
`,Sp=Yt(Ul.div)`
  background-color: ${e=>{let{active:t}=e;return t?"var(--primary-light)":"#ffffff"}};
  border: 1px solid ${e=>{let{active:t}=e;return t?"var(--accent-color)":"#e0e0e0"}};
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
    border-color: var(--primary-color);
  }
`,Ep=Yt.h4`
  font-size: 16px;
  color: ${e=>{let{active:t}=e;return t?"var(--primary-color)":"#333333"}};
  margin-bottom: 8px;
  font-weight: ${e=>{let{active:t}=e;return t?"600":"500"}};
`,Cp=Yt.div`
  width: 100%;
  height: 5px;
  background-color: #edf2f7;
  border-radius: 3px;
  overflow: hidden;
  
  &:after {
    content: '';
    display: block;
    width: ${e=>{let{level:t}=e;return`${t}%`}};
    height: 100%;
    background-color: var(--accent-color);
    transition: width 1s ease-in-out;
  }
`,Pp=(Yt.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`,Yt(Ul.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--primary-light) 0%, transparent 70%);
  filter: blur(80px);
  z-index: 0;
  right: -150px;
  top: 20%;
`),jp=(Yt.div`
  background-color: #f8fafc;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -20px;
    right: -20px;
    background: linear-gradient(90deg, var(--primary-color) 0%, var(--primary-light) 100%);
    width: 150px;
    height: 150px;
    opacity: 0.2;
    border-radius: 50%;
  }
`,Yt.button`
  font-size: 16px;
  padding: 12px 20px;
  background-color: ${e=>{let{active:t}=e;return t?"var(--primary-light)":"transparent"}};
  border: 1px solid ${e=>{let{active:t}=e;return t?"var(--primary-color)":"#e0e0e0"}};
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
  }
  
  &:focus {
    outline: none;
  }
  
  color: ${e=>{let{active:t}=e;return t?"var(--primary-color)":"#333333"}};
  font-weight: ${e=>{let{active:t}=e;return t?"600":"400"}};
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`,Yt.div`
  margin-top: 60px;
  width: 100%;
`),Tp=Yt.h3`
  font-size: 28px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
`,Lp=Yt.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    border-color: var(--primary-light);
  }
`,_p=Yt.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,Rp=Yt.img`
  width: 100px;
  height: auto;
  object-fit: contain;
  margin-right: 25px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    margin-right: 0;
  }
`,Ap=Yt.div`
  flex: 1;
`,zp=Yt.h4`
  font-size: 22px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 5px;
`,Dp=Yt.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 5px;
`,Mp=Yt.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 0;
`,Op=Yt.div`
  margin-top: 20px;
`,Np=Yt.h5`
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 15px;
`,Ip=Yt.ul`
  padding-left: 20px;
  margin-bottom: 20px;
`,$p=Yt.li`
  font-size: 15px;
  color: #555555;
  margin-bottom: 8px;
  position: relative;
  
  &::before {
    content: '▸';
    color: var(--primary-color);
    position: absolute;
    left: -20px;
    font-size: 16px;
    font-weight: 600;
  }
`,Fp=Yt.a`
  display: inline-block;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  transition: color 0.2s ease;
  
  &:hover {
    text-decoration: underline;
    color: var(--hover-color);
  }
`,Vp=()=>{const t=(0,e.useRef)(null),n=(0,e.useRef)(null);(0,e.useEffect)((()=>{const e=new IntersectionObserver((e=>{const[t]=e;t.isIntersecting&&(n.current&&(n.current.style.animationPlayState="running"),t.target.querySelectorAll(".animate-on-scroll").forEach((e=>{e.classList.add("show")})))}),{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}}),[]);return(0,iu.jsxs)(iu.Fragment,{children:[(0,iu.jsxs)(gp,{id:"skills",ref:t,children:[(0,iu.jsx)(Pp,{initial:{x:"-10vw",y:"30vh"},animate:{x:"-15vw",y:"30vh"},transition:{repeat:1/0,duration:15,repeatType:"reverse"}}),(0,iu.jsx)(vp,{ref:n,children:"Skills & Experience"}),(0,iu.jsxs)(yp,{className:"animate-on-scroll hidden",children:[(0,iu.jsxs)(xp,{children:[(0,iu.jsxs)(bp,{children:[(0,iu.jsxs)(wp,{children:[(0,iu.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,iu.jsx)("path",{d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"AI & Data Technologies"]}),(0,iu.jsx)(kp,{children:[{name:"Python",level:90,active:!0},{name:"LLM & Generative AI",level:85,active:!0},{name:"Data Analysis",level:80,active:!0},{name:"PowerBI",level:75,active:!1}].map(((e,t)=>(0,iu.jsxs)(Sp,{active:e.active,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.05*t},children:[(0,iu.jsx)(Ep,{active:e.active,children:e.name}),(0,iu.jsx)(Cp,{level:e.level})]},t)))})]}),(0,iu.jsxs)(bp,{children:[(0,iu.jsxs)(wp,{children:[(0,iu.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,iu.jsx)("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",stroke:"currentColor",strokeWidth:"2"}),(0,iu.jsx)("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",stroke:"currentColor",strokeWidth:"2"}),(0,iu.jsx)("path",{d:"M6 6H6.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,iu.jsx)("path",{d:"M6 18H6.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),"Development & Automation"]}),(0,iu.jsx)(kp,{children:[{name:"MySQL",level:80,active:!0},{name:"Industrial Automation",level:85,active:!0},{name:"ETL Pipeline Development",level:75,active:!0},{name:"HTML, CSS & JavaScript",level:70,active:!1}].map(((e,t)=>(0,iu.jsxs)(Sp,{active:e.active,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.05*t+.15},children:[(0,iu.jsx)(Ep,{active:e.active,children:e.name}),(0,iu.jsx)(Cp,{level:e.level})]},t)))})]})]}),(0,iu.jsxs)(jp,{className:"animate-on-scroll hidden",children:[(0,iu.jsxs)(Tp,{children:[(0,iu.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,iu.jsx)("path",{d:"M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,iu.jsx)("path",{d:"M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Professional Experience"]}),(0,iu.jsxs)(Lp,{children:[(0,iu.jsxs)(_p,{children:[(0,iu.jsx)(Rp,{src:"/Portfolio/images/experience/dataventiv_logo.png",alt:"Dataventiv Logo"}),(0,iu.jsxs)(Ap,{children:[(0,iu.jsx)(zp,{children:"Dataventiv"}),(0,iu.jsx)(Dp,{children:"Python Developer \u2192 Data Engineer"}),(0,iu.jsx)(Mp,{children:"June 21, 2024 - January 2025"})]})]}),(0,iu.jsxs)(Op,{children:[(0,iu.jsx)(Np,{children:"Career Progression:"}),(0,iu.jsx)("p",{children:(0,iu.jsx)("strong",{children:"Started as Python Developer Intern (June - September 2024)"})}),(0,iu.jsxs)(Ip,{children:[(0,iu.jsx)($p,{children:"Developed Python-based data simulator for Modbus TCP/IP communication with industrial devices"}),(0,iu.jsx)($p,{children:"Designed and implemented SCADA screens for industrial automation projects"}),(0,iu.jsx)($p,{children:"Built human-machine interfaces using Ignition Inductive Automation platform"}),(0,iu.jsx)($p,{children:"Implemented class-based programming with proper documentation"})]}),(0,iu.jsx)("p",{children:(0,iu.jsx)("strong",{children:"Promoted to Data Engineer (October 2024 - January 2025)"})}),(0,iu.jsxs)(Ip,{children:[(0,iu.jsx)($p,{children:"Developed GUI applications for Kepware and Canary configuration generators"}),(0,iu.jsx)($p,{children:"Built data pipelines using Apache Spark, Kafka, and Airflow"}),(0,iu.jsx)($p,{children:"Containerized applications using Docker for deployment and scalability"}),(0,iu.jsx)($p,{children:"Designed Kubernetes-based deployment architecture"}),(0,iu.jsx)($p,{children:"Worked with Linux-based systems on Raspberry Pi 4 for engineering applications"})]}),(0,iu.jsx)("p",{children:"Built comprehensive data collection and monitoring systems for industrial clients, progressing from simulation development to full data engineering pipeline implementation."}),(0,iu.jsx)(Fp,{href:"https://dataventiv.com",target:"_blank",rel:"noopener noreferrer",children:"Visit Company Website"})]})]}),(0,iu.jsxs)(Lp,{children:[(0,iu.jsxs)(_p,{children:[(0,iu.jsx)(Rp,{src:"/Portfolio/images/experience/sysbi_technology_logo.png",alt:"Sysbi Solutions Logo"}),(0,iu.jsxs)(Ap,{children:[(0,iu.jsx)(zp,{children:"Sysbi Solutions Pvt Ltd"}),(0,iu.jsx)(Dp,{children:"Frontend Developer Internee"}),(0,iu.jsx)(Mp,{children:"July 10, 2023 - August 10, 2023"})]})]}),(0,iu.jsxs)(Op,{children:[(0,iu.jsx)(Np,{children:"Key Roles & Responsibilities:"}),(0,iu.jsxs)(Ip,{children:[(0,iu.jsx)($p,{children:"Writing efficient codes"}),(0,iu.jsx)($p,{children:"Creating applications using HTML, CSS and JavaScript"}),(0,iu.jsx)($p,{children:"Server side validation using PHP"}),(0,iu.jsx)($p,{children:"Interactive behavior using jQuery"}),(0,iu.jsx)($p,{children:"Maintaining software documentation"}),(0,iu.jsx)($p,{children:"Maintaining a good behavior and coordination within a team"}),(0,iu.jsx)($p,{children:"Building responsive UI components with React JS"})]}),(0,iu.jsx)("p",{children:"Showed initiative necessary for long-term success within the organization, demonstrated excellent skills while remaining focused on overall duties and project requirements."}),(0,iu.jsx)(Fp,{href:"https://sysbitechies.uk",target:"_blank",rel:"noopener noreferrer",children:"Visit Company Website"})]})]})]})]})]}),(0,iu.jsx)(Hd,{section:"skills"})]})},Bp="/Portfolio",Up=[{id:1,title:"IESA \u2013 Intelligent Energy Scenario Analysis",shortDescription:"Advanced energy planning tool for data-driven decision-making with AI-powered insights",fullDescription:"IESA is an advanced energy planning tool designed to support data-driven decision-making for energy planners and input entry operators. By leveraging AI, machine learning, and advanced data processing techniques, IESA empowers users to analyze energy trends, generate predictive insights, and streamline planning workflows. Key features include personalized AI-driven recommendations, prediction engine using advanced regression models, dynamic scenario analysis, simplified data planning & input, and automated PDF reporting.",images:[`${Bp}/images/projects/iesa/iesa_1.png`,`${Bp}/images/projects/iesa/iesa_2.png`,`${Bp}/images/projects/iesa/iesa_3.png`,`${Bp}/images/projects/iesa/iesa_4.png`,`${Bp}/images/projects/iesa/iesa_5.png`,`${Bp}/images/projects/iesa/iesa_6.png`,`${Bp}/images/projects/iesa/iesa_7.png`],image:`${Bp}/images/projects/iesa/iesa_1.png`,technologies:["Python","Machine Learning","Streamlit","MySQL","LLM","Smol-agents"],githubLink:"https://github.com/Yasir-Khan-7/IESA",liveLink:"https://iesa.streamlit.app/",featured:!0},{id:2,title:"SynthGen AI - Synthetic Data Generator",shortDescription:"Privacy-preserving synthetic data generation tool that maintains statistical properties",fullDescription:"SynthGen AI is a powerful synthetic data generation tool that creates high-quality synthetic datasets while preserving the statistical properties of your original data. It allows users to generate synthetic data without exposing sensitive information while maintaining distributions, correlations, and relationships between variables. The application provides intuitive visualizations to compare original and synthetic data through histograms, box plots, and scatter plots, with export options for downloading generated data in CSV or Excel formats. SynthGen AI leverages Large Language Models (specifically Llama 3.3 70B through Groq) to analyze dataset structures, identify statistical relationships, and generate synthetic records that maintain the same distributions and correlations while preserving data types and value ranges.",images:[`${Bp}/images/projects/synthgen-ai/synthgen_1.png`,`${Bp}/images/projects/synthgen-ai/synthgen_2.png`,`${Bp}/images/projects/synthgen-ai/synthgen_3.png`,`${Bp}/images/projects/synthgen-ai/synthgen_4.png`],image:`${Bp}/images/projects/synthgen-ai/synthgen_1.png`,technologies:["Python","Streamlit","Groq LLM","Llama 3.3 70B","Pydantic AI","Data Science"],githubLink:"https://github.com/example/synthgen-ai",liveLink:"https://synthgen-ai.streamlit.app",featured:!0},{id:3,title:"AI-FinTrack - Personal Finance Manager",shortDescription:"Comprehensive personal finance tracking app with AI-powered financial advice",fullDescription:"AI-FinTrack is a comprehensive personal finance tracking application that helps users manage their finances, track transactions, visualize spending patterns, and get AI-powered financial advice. Key features include transaction management (add, delete, categorize), financial dashboard with visual analytics, income and expense tracking with categorization, monthly and yearly financial summaries, savings rate calculation, and an AI-powered financial assistant that provides personalized advice by analyzing your transaction history. The application is built with React and TypeScript with Material-UI for a modern interface, uses Supabase for authentication and data storage, and integrates with Groq SDK for AI language model functionality.",images:[`${Bp}/images/projects/ai-fintrack/fintrack_3.png`,`${Bp}/images/projects/ai-fintrack/fintrack_4.png`,`${Bp}/images/projects/ai-fintrack/fintrack_5.png`,`${Bp}/images/projects/ai-fintrack/fintrack_6.png`],image:`${Bp}/images/projects/ai-fintrack/fintrack_3.png`,technologies:["React","TypeScript","Material-UI","Supabase","Chart.js","Groq SDK","AI"],githubLink:"https://github.com/example/ai-fintrack",liveLink:"https://ai-fintrack-demo.netlify.app",featured:!0},{id:4,title:"AI SchemaGen - PDF to XML Converter",shortDescription:"AI-powered tool that converts PDFs into structured XML format with precision",fullDescription:"AI SchemaGen is a lightweight AI-powered tool that converts PDFs into structured XML files using Large Language Models (LLMs) and smol-agents. It automates document parsing, ensuring accurate extraction and formatting of data into valid XML schemas. Built with Python and Streamlit, it provides an intuitive interface for users to process documents efficiently.",images:[`${Bp}/images/projects/ai_schemagen/pdf_xml_1.png`,`${Bp}/images/projects/ai_schemagen/pdf_xml_2.png`,`${Bp}/images/projects/ai_schemagen/pdf_xml_3.png`],image:`${Bp}/images/projects/ai_schemagen/pdf_xml_1.png`,technologies:["Python","Streamlit","LLM","Smol-agents","AI"],githubLink:"https://github.com/Yasir-Khan-7/AI-SchemaGen",liveLink:"https://ai-schemagen.streamlit.app/",featured:!0},{id:5,title:"E-commerce Sales Dashboard",shortDescription:"Interactive Power BI dashboard showcasing e-commerce sales analytics with ETL transformations",fullDescription:"A comprehensive Power BI dashboard that visualizes e-commerce sales data through dynamic and interactive visualizations. The project includes ETL transformations on CSV data, creating a seamless data pipeline from raw data to insightful visualizations. Key features include sales performance metrics, customer analytics, product performance tracking, and trend analysis. The dashboard provides actionable insights for business decision-making through intuitive charts, graphs, and KPIs.",images:[`${Bp}/images/projects/madhav_ecommerce_sales_dashboard/dashboard_1.png`],image:`${Bp}/images/projects/madhav_ecommerce_sales_dashboard/dashboard_1.png`,technologies:["Power BI","ETL","Data Visualization","Sales Analytics","Business Intelligence"],githubLink:null,liveLink:"https://app.powerbi.com/view?r=eyJrIjoiNzA0ZDA0OGItMzVkMy00ODc1LThhZmYtOGRkNDE2ZjFhNzJhIiwidCI6ImM4OTM2N2ViLWFlYTEtNDM4YS1hNWYzLTY0ODdhNjAzYjMzYSIsImMiOjl9",featured:!0}],Wp=Yt.section`
  padding: 150px 10%;
  position: relative;
  background: ${e=>e.theme.colors.background};
  
  /* Custom Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
  
  @media screen and (max-width: 768px) {
    padding: 100px 5%;
  }
`,Hp=Yt.h2`
  font-size: 42px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 60px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: ${e=>e.theme.colors.projects.accent};
    bottom: -15px;
    left: 0;
    animation: borderFadeIn 1s ease forwards;
    animation-play-state: paused;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`,Yp=Yt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 40px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Kp=Yt.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
  }
`,qp=Yt.div`
  height: 240px;
  overflow: hidden;
  background-color: #f8f8f8;
  cursor: pointer;
  position: relative;
`,Gp=Yt.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${qp}:hover & {
    transform: scale(1.08);
  }
`,Xp=Yt.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  
  ${qp}:hover & {
    opacity: 1;
  }
`,Qp=Yt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #333;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 600;
  transform: translateY(20px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  
  svg {
    margin-right: 8px;
    font-size: 18px;
  }
  
  ${Xp}:hover & {
    transform: translateY(0);
  }
  
  &:hover {
    background: #f8f8f8;
    transform: translateY(-2px);
  }
`,Jp=Yt.div`
  padding: 30px;
  background: linear-gradient(to bottom right, #ffffff, #fcfcfc);
`,Zp=Yt.h3`
  font-size: 24px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 15px;
  line-height: 1.3;
`,eh=Yt.p`
  font-size: 16px;
  color: #555555;
  line-height: 1.6;
  margin-bottom: 25px;
`,th=Yt.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0;
  gap: 12px;
`,nh=Yt.li`
  font-size: 14px;
  color: #666666;
  padding: 0;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  transition: all 0.2s ease;
  background: none;
  
  &:hover {
    color: #4a86e8;
  }
  
  &::before {
    content: '▸';
    color: #4a86e8;
    margin-right: 8px;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
  }
`,rh=Yt.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`,oh=Yt.a`
  font-size: 20px;
  color: #555555;
  transition: all 0.3s ease;
  padding: 8px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #ff4444;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: #333;
    
    &::after {
      width: 100%;
    }
  }
`,ih=(Yt.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${e=>e.theme.colors.projects.accent};
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 4px;
  text-transform: uppercase;
  z-index: 2;
`,Yt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`),ah=Yt.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border: 2px solid #434343;
`,sh=Yt.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 25px;
  border-radius: 8px;
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`,lh=Yt.div`
  position: relative;
  width: 100%;
  height: 400px;
  
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,uh=Yt.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 25px;
  object-fit: cover;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
  }
`,ch=Yt.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: rotate(90deg);
  }
`,dh=Yt.h2`
  font-size: 30px;
  font-weight: 700;
  color: #222;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40%;
    height: 3px;
    background: linear-gradient(to right, #4a86e8, transparent);
    border-radius: 2px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
`,ph=Yt.p`
  font-size: 15px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 25px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.5;
  }
`,hh=Yt.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
  font-size: 24px;
  opacity: 1; /* Always visible by default */
  
  /* Only apply hover opacity change on desktop */
  @media (min-width: 769px) {
    opacity: 0.7;
    
    ${lh}:hover & {
      opacity: 1;
    }
    
    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
  
  &:focus {
    outline: none;
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
  
  @media screen and (max-width: 768px) {
    opacity: 1 !important; /* Force visibility on mobile */
    width: 45px;
    height: 45px;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`,fh=Yt.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 10;
  
  @media screen and (max-width: 768px) {
    bottom: 30px;
  }
`,mh=Yt.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${e=>e.active?"white":"rgba(255, 255, 255, 0.5)"};
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: white;
  }
  
  &:focus {
    outline: none;
  }
  
  @media screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
    margin: 0 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: ${e=>e.active?"white":"rgba(255, 255, 255, 0.3)"};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`,gh=Yt.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  color: #888;
  font-size: 24px;
  font-weight: 500;
  border-radius: 8px;
  margin-bottom: 25px;
`,vh=Yt.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto 0;
  padding: 15px 35px;
  background: transparent;
  color: #333;
  border: 2px solid #333;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #333;
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    
    &::before {
      width: 100%;
    }
  }
  
  &::after {
    content: '→';
    margin-left: 10px;
    font-size: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(5px);
  }
  
  @media screen and (max-width: 768px) {
    padding: 12px 30px;
    font-size: 15px;
  }
`,yh=(Yt.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`,Yt.button`
  padding: 8px 20px;
  background: ${e=>e.active?e.theme.colors.projects.accent:"#f5f5f5"};
  color: ${e=>e.active?"white":"#333"};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?e.theme.colors.projects.accentHover:"#e5e5e5"};
    transform: translateY(-1px);
  }
`,()=>{const t=cc(),[n,r]=(0,e.useState)(null),[o,i]=(0,e.useState)(0),[a,s]=(0,e.useState)({}),l=(0,e.useRef)(null),u=(0,e.useRef)(null),c=(0,e.useRef)({}),d=Up.slice(0,4);(0,e.useEffect)((()=>{const e=new IntersectionObserver((e=>{const[t]=e;if(t.isIntersecting){u.current&&(u.current.style.animationPlayState="running");t.target.querySelectorAll(".project-item").forEach(((e,t)=>{setTimeout((()=>{e.classList.add("show")}),100*t)}))}}),{threshold:.1});return l.current&&e.observe(l.current),()=>{l.current&&e.unobserve(l.current)}}),[]),(0,e.useEffect)((()=>{const e={};Up.forEach((t=>{e[t.id]=0})),s(e)}),[]);(0,e.useEffect)((()=>()=>{Object.keys(c.current).forEach((e=>{c.current[e]&&clearInterval(c.current[e])}))}),[]);const p=()=>{r(null),i(0)};return(0,iu.jsxs)(iu.Fragment,{children:[(0,iu.jsxs)(Wp,{id:"projects",ref:l,children:[(0,iu.jsx)(Hp,{ref:u,children:"My Projects"}),(0,iu.jsx)(Yp,{children:d.map((e=>(0,iu.jsxs)(Kp,{className:"project-item",onMouseEnter:()=>{return t=e.id,c.current[t]&&clearInterval(c.current[t]),void(c.current[t]=setInterval((()=>{s((e=>{const n=Up.find((e=>e.id===t));if(!n||!n.images||n.images.length<=1)return e;const r={...e};return r[t]=(e[t]+1)%n.images.length,r}))}),2e3));var t},onMouseLeave:()=>{return t=e.id,void(c.current[t]&&(clearInterval(c.current[t]),c.current[t]=null));var t},children:[(0,iu.jsxs)(qp,{children:[(0,iu.jsx)(Gp,{src:e.images[a[e.id]||0],alt:e.title,onError:e=>{e.target.style.display="none"}}),(0,iu.jsx)(Xp,{children:(0,iu.jsxs)(Qp,{onClick:()=>(e=>{r(e),i(0)})(e),children:[(0,iu.jsx)(wd,{})," View Project"]})})]}),(0,iu.jsxs)(Jp,{children:[(0,iu.jsx)(Zp,{children:e.title}),(0,iu.jsx)(eh,{children:e.shortDescription}),(0,iu.jsx)(th,{children:e.technologies.map(((e,t)=>(0,iu.jsx)(nh,{children:e},t)))}),(0,iu.jsxs)(rh,{children:[e.githubLink&&(0,iu.jsx)(oh,{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:(0,iu.jsx)(kd,{})}),(0,iu.jsx)(oh,{href:e.liveLink,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:(0,iu.jsx)(bd,{})})]})]})]},e.id)))}),Up.length>4&&(0,iu.jsx)(vh,{onClick:()=>{t("/projects"),window.scrollTo(0,0)},children:"View All Projects"}),n&&(0,iu.jsx)(ih,{onClick:p,children:(0,iu.jsxs)(ah,{onClick:e=>e.stopPropagation(),children:[(0,iu.jsx)(ch,{onClick:p,children:"\xd7"}),(0,iu.jsx)(dh,{children:n.title}),(0,iu.jsx)(sh,{children:n.images&&n.images.length>0?(0,iu.jsxs)(lh,{children:[(0,iu.jsx)(uh,{src:n.images[o],alt:`${n.title} - Screenshot ${o+1}`,onError:e=>{console.error(`Failed to load modal image for ${n.title}`),e.target.style.display="none",e.target.nextElementSibling&&(e.target.nextElementSibling.style.display="flex")}}),n.images.length>1&&(0,iu.jsxs)(iu.Fragment,{children:[(0,iu.jsx)(hh,{className:"prev",onClick:e=>{e.stopPropagation(),n&&n.images&&i((e=>0===e?n.images.length-1:e-1))},children:(0,iu.jsx)(yd,{})}),(0,iu.jsx)(hh,{className:"next",onClick:e=>{e.stopPropagation(),n&&n.images&&i((e=>e===n.images.length-1?0:e+1))},children:(0,iu.jsx)(xd,{})}),(0,iu.jsx)(fh,{children:n.images.map(((e,t)=>(0,iu.jsx)(mh,{active:t===o,onClick:e=>((e,t)=>{t.stopPropagation(),i(e)})(t,e)},t)))})]})]}):(0,iu.jsx)(gh,{children:n.title})}),(0,iu.jsx)(ph,{children:n.fullDescription}),(0,iu.jsx)(th,{children:n.technologies.map(((e,t)=>(0,iu.jsx)(nh,{children:e},t)))}),(0,iu.jsxs)(rh,{children:[n.githubLink&&(0,iu.jsx)(oh,{href:n.githubLink,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:(0,iu.jsx)(kd,{})}),(0,iu.jsx)(oh,{href:n.liveLink,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:(0,iu.jsx)(bd,{})})]})]})})]}),(0,iu.jsx)(Hd,{section:"projects"})]})}),xh=Yt.section`
  padding: 150px 10%;
  position: relative;
  overflow: hidden;
  background: ${e=>e.theme.colors.background};
  
  @media screen and (max-width: 768px) {
    padding: 100px 5%;
  }
`,bh=Yt.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`,wh=Yt.h2`
  font-size: 42px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: ${e=>e.theme.colors.contact.accent};
    bottom: -15px;
    left: 0;
    animation: borderFadeIn 1s ease forwards;
    animation-play-state: paused;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`,kh=Yt.h3`
  font-size: 24px;
  font-weight: 400;
  color: ${e=>e.theme.colors.contact.accent};
  margin-bottom: 30px;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`,Sh=Yt.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`,Eh=Yt.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`,Ch=Yt.div`
  position: relative;
  margin-bottom: 30px;
`,Ph=Yt.input`
  width: 100%;
  padding: 15px;
  background-color: white;
  border: 1px solid #e0e0e0;
  color: #000000;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${e=>e.theme.colors.contact.accent};
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.contact.highlight};
  }
`,jh=Yt.textarea`
  width: 100%;
  padding: 15px;
  background-color: white;
  border: 1px solid #e0e0e0;
  color: #000000;
  border-radius: 5px;
  font-size: 16px;
  min-height: 150px;
  outline: none;
  transition: all 0.3s ease;
  resize: vertical;
  
  &:focus {
    border-color: ${e=>e.theme.colors.contact.accent};
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.contact.highlight};
  }
`,Th=Yt.label`
  position: absolute;
  left: 15px;
  top: 15px;
  font-size: 16px;
  color: #666666;
  pointer-events: none;
  transition: all 0.3s ease;
  
  ${Ph}:focus ~ &,
  ${Ph}:not(:placeholder-shown) ~ &,
  ${jh}:focus ~ &,
  ${jh}:not(:placeholder-shown) ~ & {
    top: -10px;
    left: 10px;
    font-size: 12px;
    padding: 0 5px;
    background-color: white;
    color: ${e=>e.theme.colors.contact.accent};
  }
`,Lh=Yt(Ul.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: ${e=>e.theme.colors.contact.accent};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  margin-top: 20px;
  width: auto;
  min-width: 180px;
  
  svg {
    margin-left: 10px;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px ${e=>e.theme.colors.contact.highlight};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 15px;
  }
`,_h=(Yt(Ul.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.contact.highlight};
  border: 1px solid ${e=>e.theme.colors.contact.accent};
  border-radius: 8px;
  padding: 30px;
  margin-top: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  svg {
    font-size: 40px;
    color: ${e=>e.theme.colors.contact.accent};
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    color: #000000;
    text-align: center;
  }
`,Yt(Ul.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
`),Rh=Yt(Ul.div)`
  background-color: #fff8f8;
  border-radius: 12px;
  border-left: 5px solid ${e=>e.theme.colors.contact.accent};
  padding: 30px 40px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  
  svg {
    font-size: 50px;
    color: ${e=>e.theme.colors.contact.accent};
    margin-bottom: 20px;
  }
  
  h4 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
  }
  
  p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 25px;
  }
`,Ah=Yt.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #333;
  }
`,zh=Yt(Ul.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff0f0;
  border: 1px solid #e74c3c;
  border-radius: 8px;
  padding: 30px;
  margin-top: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  svg {
    font-size: 40px;
    color: #e74c3c;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    color: #000000;
    text-align: center;
  }
`,Dh=Yt(Ul.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, ${e=>e.theme.colors.contact.highlight} 0%, transparent 70%);
  filter: blur(100px);
  z-index: 0;
`,Mh=Yt.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: ${e=>e.theme.colors.contact.accent};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px ${e=>e.theme.colors.contact.highlight};
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`,Oh=()=>{const[t,n]=(0,e.useState)({name:"",email:"",subject:"",message:""}),[r,o]=(0,e.useState)(!1),[i,a]=(0,e.useState)(!1),[s,l]=(0,e.useState)(null),u=(0,e.useRef)(null),c=(0,e.useRef)(null);(0,e.useRef)();(0,e.useEffect)((()=>{const e=new IntersectionObserver((e=>{const[t]=e;t.isIntersecting&&(c.current&&(c.current.style.animationPlayState="running"),t.target.querySelectorAll(".animate-on-scroll").forEach(((e,t)=>{setTimeout((()=>{e.classList.add("show")}),200*t)})))}),{threshold:.2});return u.current&&e.observe(u.current),()=>{u.current&&e.unobserve(u.current)}}),[]);const d=e=>{const{name:t,value:r}=e.target;n((e=>({...e,[t]:r})))};return(0,iu.jsxs)(iu.Fragment,{children:[(0,iu.jsxs)(xh,{id:"contact",ref:u,children:[(0,iu.jsx)(Dh,{initial:{x:"80vw",y:"30vh"},animate:{x:"70vw",y:"30vh"},transition:{repeat:1/0,duration:15,repeatType:"reverse"}}),(0,iu.jsxs)(bh,{children:[(0,iu.jsx)(wh,{ref:c,children:"Get In Touch"}),(0,iu.jsx)(kh,{className:"animate-on-scroll hidden",children:"Let's build something amazing together"}),(0,iu.jsx)(Sh,{className:"animate-on-scroll hidden",children:"I'm currently available for freelance work and open to new opportunities. Whether you have a project in mind or just want to say hello, I'd love to hear from you!"}),(0,iu.jsx)(Mh,{className:"animate-on-scroll hidden",onClick:()=>{const e=document.getElementById("contact");e&&window.scrollTo({top:e.offsetTop-70,behavior:"smooth"})},style:{display:"none"},children:"Contact Me Now"}),(0,iu.jsxs)(Eh,{className:"animate-on-scroll hidden",onSubmit:e=>{e.preventDefault(),o(!0),l(null);const t=e.target,r=new FormData(t);fetch("https://formspree.io/f/mwplnrda",{method:"POST",body:r,headers:{Accept:"application/json"}}).then((e=>{if(!e.ok)return e.json().then((e=>{throw new Error(e.error||"Form submission failed")}));o(!1),a(!0),n({name:"",email:"",subject:"",message:""}),setTimeout((()=>{a(!1)}),6e3)})).catch((e=>{console.error("Error submitting form:",e),o(!1),l(e.message||"Failed to send your message. Please try again later."),setTimeout((()=>{l(null)}),6e3)}))},method:"POST",children:[(0,iu.jsxs)(Ch,{children:[(0,iu.jsx)(Ph,{type:"text",name:"name",placeholder:" ",value:t.name,onChange:d,required:!0}),(0,iu.jsx)(Th,{children:"Your Name"})]}),(0,iu.jsxs)(Ch,{children:[(0,iu.jsx)(Ph,{type:"email",name:"email",placeholder:" ",value:t.email,onChange:d,required:!0}),(0,iu.jsx)(Th,{children:"Your Email"})]}),(0,iu.jsxs)(Ch,{children:[(0,iu.jsx)(Ph,{type:"text",name:"subject",placeholder:" ",value:t.subject,onChange:d,required:!0}),(0,iu.jsx)(Th,{children:"Subject"})]}),(0,iu.jsxs)(Ch,{children:[(0,iu.jsx)(jh,{name:"message",placeholder:" ",value:t.message,onChange:d,required:!0}),(0,iu.jsx)(Th,{children:"Your Message"})]}),(0,iu.jsx)(Ph,{type:"hidden",name:"_replyto",value:t.email}),(0,iu.jsx)(Ph,{type:"hidden",name:"_subject",value:t.subject||"New message from your portfolio website"}),(0,iu.jsxs)(Lh,{type:"submit",disabled:r,whileTap:{scale:.95},children:[r?"Sending...":"Send Message",!r&&(0,iu.jsx)(Pd,{})]})]}),s&&(0,iu.jsxs)(zh,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[(0,iu.jsx)(gd,{}),(0,iu.jsx)("p",{children:s})]})]})]}),i&&(0,iu.jsx)(_h,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,iu.jsxs)(Rh,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{type:"spring",damping:12},children:[(0,iu.jsx)(Ah,{onClick:()=>{a(!1)},children:"\xd7"}),(0,iu.jsx)(vd,{}),(0,iu.jsx)("h4",{children:"Message Sent!"}),(0,iu.jsx)("p",{children:"Thank you for your message! I'll get back to you as soon as possible."})]})}),(0,iu.jsx)(Hd,{section:"contact"})]})};function Nh(e){return nu({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function Ih(e){return nu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}const $h=Yt.footer`
  background-color: ${e=>e.theme.colors.backgroundDarker};
  color: white;
  padding: 40px 0;
  border-top: 1px solid #333333;
`,Fh=Yt.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`,Vh=Yt.a`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 24px;
  margin: 0 15px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${e=>e.theme.colors.textPrimary};
    transform: translateY(-3px);
  }
`,Bh=Yt.p`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 14px;
  text-align: center;
`,Uh=Yt.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`,Wh=Yt.a`
  color: ${e=>e.theme.colors.textSecondary};
  margin: 0 15px;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${e=>e.theme.colors.textPrimary};
  }
`,Hh=()=>(0,iu.jsxs)($h,{children:[(0,iu.jsxs)(Uh,{children:[(0,iu.jsx)(Wh,{href:"#about",children:"about"}),(0,iu.jsx)(Wh,{href:"#skills",children:"skills"}),(0,iu.jsx)(Wh,{href:"#projects",children:"projects"}),(0,iu.jsx)(Wh,{href:"#contact",children:"contact"})]}),(0,iu.jsxs)(Fh,{children:[(0,iu.jsx)(Vh,{href:"https://mail.google.com/mail/?view=cm&fs=1&to=yasirkhandps7@gmail.com",target:"_blank",rel:"noopener noreferrer",children:(0,iu.jsx)(Cd,{})}),(0,iu.jsx)(Vh,{href:"https://www.linkedin.com/in/yasirkhan71/",target:"_blank",rel:"noopener noreferrer",children:(0,iu.jsx)(Ih,{})}),(0,iu.jsx)(Vh,{href:"https://github.com/Yasir-Khan-7",target:"_blank",rel:"noopener noreferrer",children:(0,iu.jsx)(Nh,{})})]}),(0,iu.jsxs)(Bh,{children:["\xa9 ",(new Date).getFullYear()," Yasir Khan. All rights reserved."]})]}),Yh=()=>(0,iu.jsxs)(iu.Fragment,{children:[(0,iu.jsx)(Ud,{}),(0,iu.jsx)(rp,{}),(0,iu.jsx)(mp,{}),(0,iu.jsx)(Vp,{}),(0,iu.jsx)(yh,{}),(0,iu.jsx)(Oh,{}),(0,iu.jsx)(Hh,{})]}),Kh=Yt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`,qh=Yt.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border: 2px solid #434343;
  -webkit-overflow-scrolling: touch;
  
  @media screen and (max-width: 768px) {
    padding: 20px;
    max-height: 85vh;
    width: 95%;
  }
`,Gh=Yt.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 25px;
  border-radius: 8px;
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`,Xh=Yt.div`
  position: relative;
  width: 100%;
  height: 400px;
  
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,Qh=Yt.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 25px;
  object-fit: cover;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
  }
`,Jh=Yt.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
  font-size: 24px;
  opacity: 1; /* Always visible by default */
  
  /* Only apply hover opacity change on desktop */
  @media (min-width: 769px) {
    opacity: 0.7;
    
    ${Xh}:hover & {
      opacity: 1;
    }
    
    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
  
  &:focus {
    outline: none;
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
  
  @media screen and (max-width: 768px) {
    opacity: 1 !important; /* Force visibility on mobile */
    width: 45px;
    height: 45px;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`,Zh=Yt.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 10;
  
  @media screen and (max-width: 768px) {
    bottom: 30px;
  }
`,ef=Yt.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${e=>e.active?"white":"rgba(255, 255, 255, 0.5)"};
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: white;
  }
  
  &:focus {
    outline: none;
  }
  
  @media screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
    margin: 0 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: ${e=>e.active?"white":"rgba(255, 255, 255, 0.3)"};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`,tf=Yt.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: rotate(90deg);
  }
`,nf=(Yt.div`
  padding: 35px;
  background: white;
`,Yt.h2`
  font-size: 30px;
  font-weight: 700;
  color: #222;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40%;
    height: 3px;
    background: linear-gradient(to right, #4a86e8, transparent);
    border-radius: 2px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
`),rf=Yt.p`
  font-size: 15px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 25px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.5;
  }
`,of=Yt.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 25px;
  list-style: none;
  padding: 0;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    gap: 8px;
  }
`,af=Yt.li`
  font-size: 14px;
  color: #666666;
  padding: 0;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  transition: all 0.2s ease;
  background: none;
  
  &:hover {
    color: #4a86e8;
  }
  
  &::before {
    content: '▸';
    color: #4a86e8;
    margin-right: 8px;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
  }
`,sf=Yt.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;
  
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`,lf=Yt.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  background: #f5f5f5;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e5e5e5;
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 18px;
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
  }
`,uf=t=>{let{project:n,onClose:r}=t;const[o,i]=(0,e.useState)(0);if(!n)return null;return(0,iu.jsx)(Kh,{onClick:r,children:(0,iu.jsxs)(qh,{onClick:e=>{e.stopPropagation()},children:[(0,iu.jsx)(tf,{onClick:r,children:(0,iu.jsx)(jd,{})}),(0,iu.jsx)(nf,{children:n.title}),(0,iu.jsx)(Gh,{children:(0,iu.jsxs)(Xh,{children:[(0,iu.jsx)(Qh,{src:n.images[o],alt:`${n.title} - Image ${o+1}`}),n.images.length>1&&(0,iu.jsxs)(iu.Fragment,{children:[(0,iu.jsx)(Jh,{className:"prev",onClick:e=>{e.stopPropagation(),i((e=>0===e?n.images.length-1:e-1))},children:(0,iu.jsx)(yd,{})}),(0,iu.jsx)(Jh,{className:"next",onClick:e=>{e.stopPropagation(),i((e=>e===n.images.length-1?0:e+1))},children:(0,iu.jsx)(xd,{})}),(0,iu.jsx)(Zh,{children:n.images.map(((e,t)=>(0,iu.jsx)(ef,{active:t===o,onClick:e=>((e,t)=>{t.stopPropagation(),i(e)})(t,e)},t)))})]})]})}),(0,iu.jsx)(rf,{children:n.fullDescription}),(0,iu.jsx)(of,{children:n.technologies.map(((e,t)=>(0,iu.jsx)(af,{children:e},t)))}),(0,iu.jsxs)(sf,{children:[n.githubLink&&(0,iu.jsxs)(lf,{href:n.githubLink,target:"_blank",rel:"noopener noreferrer",children:[(0,iu.jsx)(kd,{})," GitHub"]}),(0,iu.jsxs)(lf,{href:n.liveLink,target:"_blank",rel:"noopener noreferrer",children:[(0,iu.jsx)(bd,{})," Live Demo"]})]})]})})},cf=Yt.div`
  padding: 80px 10% 100px;
  min-height: 100vh;
  background: ${e=>e.theme.colors.background};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
  }
  
  @media screen and (max-width: 768px) {
    padding: 60px 5% 80px;
  }
`,df=Yt.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background: #ffffff;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 100;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #333;
  }
  
  svg {
    font-size: 24px;
  }
  
  @media screen and (max-width: 768px) {
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    
    svg {
      font-size: 20px;
    }
  }
`,pf=Yt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`,hf=Yt.h1`
  font-size: 40px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, ${e=>e.theme.colors.projects.accent}, ${e=>e.theme.colors.projects.accentHover});
    border-radius: 2px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 25px;
  }
`,ff=Yt.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`,mf=Yt.button`
  padding: 12px 30px;
  background: transparent;
  color: #333;
  border: none;
  border-radius: 0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ff4444;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover, &.active {
    color: #333;
    
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  &.active {
    font-weight: 600;
  }
`,gf=Yt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 10px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,vf=Yt.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
    pointer-events: none;
    z-index: 3;
  }
`,yf=Yt.div`
  height: 200px;
  overflow: hidden;
  background-color: #f8f8f8;
  cursor: pointer;
  position: relative;
`,xf=Yt.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${yf}:hover & {
    transform: scale(1.08);
  }
`,bf=Yt.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  
  ${yf}:hover & {
    opacity: 1;
  }
`,wf=Yt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  transform: translateY(20px);
  transition: all 0.4s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  
  svg {
    margin-right: 8px;
    font-size: 18px;
  }
  
  ${bf}:hover & {
    transform: translateY(0);
  }
  
  &:hover {
    background: #ffffff;
    transform: translateY(-2px);
  }
`,kf=Yt.div`
  padding: 20px;
  background: linear-gradient(to bottom right, #ffffff, #fcfcfc);
`,Sf=Yt.h3`
  font-size: 20px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 12px;
  line-height: 1.3;
`,Ef=Yt.p`
  font-size: 14px;
  color: #555555;
  line-height: 1.5;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,Cf=Yt.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
  gap: 8px;
`,Pf=Yt.li`
  font-size: 14px;
  color: #666666;
  padding: 0;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  transition: all 0.2s ease;
  background: none;
  
  &:hover {
    color: #4a86e8;
  }
  
  &::before {
    content: '▸';
    color: #4a86e8;
    margin-right: 8px;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
  }
`,jf=Yt.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`,Tf=Yt.a`
  font-size: 20px;
  color: #555555;
  transition: all 0.3s ease;
  padding: 8px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #ff4444;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: #333;
    
    &::after {
      width: 100%;
    }
  }
`,Lf=()=>{const[t,n]=(0,e.useState)("all"),[r,o]=(0,e.useState)(null),i=cc(),[a,s]=(0,e.useState)(!1);(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]);const l={AI:["Machine Learning","LLM","AI","Groq LLM","Llama 3.3 70B","Pydantic AI"],Data:["Data Science","ETL","Data Visualization","Sales Analytics","Business Intelligence"],"Industrial Automation":["Python","Streamlit","MySQL","Smol-agents"]},u="all"===t?Up:Up.filter((e=>e.technologies&&e.technologies.some((e=>l[t]&&l[t].includes(e)))));return(0,iu.jsxs)(cf,{children:[(0,iu.jsx)(df,{onClick:()=>i("/"),title:"Back to Home",children:(0,iu.jsx)(Sd,{})}),(0,iu.jsxs)(pf,{children:[(0,iu.jsx)(hf,{children:"All Projects"}),(0,iu.jsxs)(ff,{children:[(0,iu.jsx)(mf,{className:"all"===t?"active":"",onClick:()=>n("all"),children:"All"}),["AI","Data","Industrial Automation"].map((e=>(0,iu.jsx)(mf,{className:t===e?"active":"",onClick:()=>n(e),children:e},e)))]})]}),(0,iu.jsx)(gf,{children:u.map((e=>(0,iu.jsxs)(vf,{onClick:()=>(e=>{o(e),s(!0)})(e),children:[(0,iu.jsxs)(yf,{children:[(0,iu.jsx)(xf,{src:e.image,alt:e.title,onError:e=>{e.target.style.display="none"}}),(0,iu.jsx)(bf,{children:(0,iu.jsxs)(wf,{children:[(0,iu.jsx)(wd,{})," View Project"]})})]}),(0,iu.jsxs)(kf,{children:[(0,iu.jsx)(Sf,{children:e.title}),(0,iu.jsx)(Ef,{children:e.shortDescription}),(0,iu.jsx)(Cf,{children:e.technologies.map(((e,t)=>(0,iu.jsx)(Pf,{children:e},t)))}),(0,iu.jsxs)(jf,{children:[e.githubLink&&(0,iu.jsx)(Tf,{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:(0,iu.jsx)(kd,{})}),(0,iu.jsx)(Tf,{href:e.liveLink,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:(0,iu.jsx)(bd,{})})]})]})]},e.id)))}),a&&r&&(0,iu.jsx)(uf,{project:r,onClose:()=>{s(!1),o(null)}})]})};const _f=function(){const[t,n]=(0,e.useState)(!0),[r,o]=(0,e.useState)(0);return(0,e.useEffect)((()=>{const e=()=>{const e=document.documentElement.scrollHeight-window.innerHeight,t=window.scrollY/e;o(t)};window.addEventListener("scroll",e);return t||(()=>{document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href"),n=document.querySelector(t);n&&setTimeout((()=>{window.scrollTo({top:n.offsetTop-70,behavior:"smooth"})}),50)}))}));if(window.matchMedia("(max-width: 768px)").matches){document.querySelectorAll(".contact-cta-button").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=document.getElementById("contact");t&&window.scrollTo({top:t.offsetTop-70,behavior:"smooth"})}))}))}const e=document.querySelectorAll(".section");window.addEventListener("scroll",(()=>{const t=window.scrollY;e.forEach((e=>{if(!e)return;const n=e.offsetTop,r=e.offsetHeight,o=t-(n+r/2),i=e.querySelector(".section-content");i&&(i.style.transform=`translateY(${.15*o}px)`)}))}))})(),()=>{window.removeEventListener("scroll",e)}}),[t]),(0,iu.jsxs)(It,{theme:Gt,children:[(0,iu.jsx)(qt,{}),t?(0,iu.jsx)(fu,{setLoading:n}):(0,iu.jsx)(sd,{children:(0,iu.jsxs)(jc,{children:[(0,iu.jsx)(Cc,{path:"/",element:(0,iu.jsx)(Yh,{})}),(0,iu.jsx)(Cc,{path:"/projects",element:(0,iu.jsx)(Lf,{})})]})})]})},Rf=e=>{e&&e instanceof Function&&n.e(206).then(n.bind(n,206)).then((t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:i,getTTFB:a}=t;n(e),r(e),o(e),i(e),a(e)}))};t.createRoot(document.getElementById("root")).render((0,iu.jsx)(e.StrictMode,{children:(0,iu.jsx)(_f,{})})),Rf()})()})();