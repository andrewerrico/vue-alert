function plugin(e,t){plugin.installed||(plugin.installed=!0,e.component("vue-alert",VueAlert),Object.defineProperties(e.prototype,{$alert:{get:function(){for(var e=this;e;){for(var t=0;t<e.$children.length;t++){var n=e.$children[t];if("vue-alert"===n.$options._componentTag)return n}e=e.$parent}return"production"!==process.env.NODE_ENV&&console.warn("Vue-alert component must be part of this component scope or any of the parents scope."),null}}}))}var _extends=Object.assign||function(e){for(var t=arguments,n=1;n<arguments.length;n++){var i=t[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},VueAlert={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transition}},[n("div",{staticClass:"alert",class:e.alertType},[n("p",[e._v(e._s(e.alertMessage))])])])},staticRenderFns:[],name:"vue-alert",data:function(){return{alertMessage:"",alertType:"",alertTransition:"",default:{message:"",type:"info",transition:"fade",delay:5e3}}},methods:{setDefault:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.message,n=void 0===t?this.default.message:t,i=e.type,s=void 0===i?this.default.type:i,a=e.delay,o=void 0===a?this.default.delay:a,r=e.transition,l=void 0===r?this.default.transition:r;return this.default.message=n,this.default.type=s,this.default.delay=o,this.default.transition=l,this},show:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.message,i=void 0===n?this.default.message:n,s=t.type,a=void 0===s?this.default.type:s,o=t.delay,r=void 0===o?this.default.delay:o,l=t.transition,u=void 0===l?this.default.transition:l;this.alertShow=!0,this.alertMessage=i,this.alertType="alert-"+a,this.alertTransition=u,this.alertTimeout&&clearTimeout(this.alertTimeout),r&&(this.alertTimeout=setTimeout(function(){e.show({delay:!1})},r))},hide:function(){this.alertShow=!1},danger:function(e){this.show(_extends({type:"danger"},e))},info:function(e){this.show(_extends({type:"info"},e))},success:function(e){this.show(_extends({type:"success"},e))},warning:function(e){this.show(_extends({type:"warning"},e))}}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(plugin),module.exports=plugin;
