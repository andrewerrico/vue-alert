"use strict";function plugin(e){plugin.installed||(plugin.installed=!0,e.component("vue-alert",VueAlert),Object.defineProperties(e.prototype,{$alert:{get:function(){for(var e=this;e;){for(var t=0;t<e.$children.length;t++){var r=e.$children[t];if("vue-alert"===r.$options._componentTag)return r}e=e.$parent}return"production"!==process.env.NODE_ENV&&console.warn("Vue-alert component must be part of this component scope or any of the parents scope."),null}}}))}var _extends=Object.assign||function(e){for(var t=arguments,r=1;r<arguments.length;r++){var n=t[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),r=" .fade-enter-active, .fade-leave-active { transition: opacity .3s } .fade-enter, .fade-leave-to { opacity: 0 } .smooth { transition: all 0.5s ease; } .alert { padding: 15px; border: 1px solid transparent; border-radius: 4px; } .alert-info { color: #31708f; background-color: #d9edf7; border-color: #bce8f1; } .alert-success { color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6; } .alert-warning { color: #8a6d3b; background-color: #fcf8e3; border-color: #faebcc; } .alert-danger { color: #a94442; background-color: #f2dede; border-color: #ebccd1; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=r:t.appendChild(document.createTextNode(r)),e.appendChild(t)}}();var VueAlert={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:e.alertTransition,mode:"out-in"}},[e.alertShow?r("div",{key:e.triggerTransition,staticClass:"vue-alert alert",class:[e.alertType,e.alertTransition]},[r("p",[e._v(e._s(e.alertMessage))])]):e._e()])},staticRenderFns:[],name:"vue-alert",data:function(){return{alertForceRender:!1,alertMessage:"",alertType:"",alertTransition:"",alertShow:!0,triggerTransition:!0,default:{duration:5e3,forceRender:!0,message:"",type:"hide",transition:"fade"}}},methods:{clearDefault:function(){this.default.type="hide"},setDefault:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.message,r=void 0===t?this.default.message:t,n=e.type,o=void 0===n?this.default.type:n,i=e.duration,a=void 0===i?this.default.duration:i,s=e.transition,d=void 0===s?this.default.transition:s,l=e.forceRender,u=void 0===l?this.default.forceRender:l;return this.default.message=r,this.default.type=o,this.default.duration=a,this.default.transition=d,this.default.forceRender=u,this},show:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.message,n=void 0===r?this.default.message:r,o=t.type,i=void 0===o?this.default.type:o,a=t.duration,s=void 0===a?this.default.duration:a,d=t.transition,l=void 0===d?this.default.transition:d,u=t.forceRender,c=void 0===u?this.default.forceRender:u;this.alertShow=!0,this.alertMessage=n,this.alertType="alert-"+i,this.alertTransition=l,this.alertForceRender=c,this.alertTimeout&&clearTimeout(this.alertTimeout),s&&(this.alertTimeout=setTimeout(function(){"hide"==e.default.type?e.hide():e.show({duration:!1})},s)),this.alertForceRender&&(this.triggerTransition=!this.triggerTransition)},hide:function(){this.alertShow=!1,this.alertTimeout&&clearTimeout(this.alertTimeout)},danger:function(e){this.show(_extends({type:"danger"},e))},info:function(e){this.show(_extends({type:"info"},e))},success:function(e){this.show(_extends({type:"success"},e))},warning:function(e){this.show(_extends({type:"warning"},e))}}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(plugin),module.exports=plugin;
