(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],[,function(_,e,a){"use strict";a(19);var t=a(0);e.a=function(_){return Object(t.jsx)("button",{onClick:function(e){return _.click&&_.click(_.label)},className:"\n      btn\n      ".concat(_.operation?"operation":"","\n      ").concat(_.double?"double":"","\n      ").concat(_.triple?"triple":"","\n  "),children:_.label})}},,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12),D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_components_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),_components_Display__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),_Calculator_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(22),_Calculator_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_9__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__),initialState={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},Calculator=function(_Component){Object(D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_Component);var _super=Object(D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator);function Calculator(){var _;Object(D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,Calculator);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return(_=_super.call.apply(_super,[this].concat(a))).state=Object(D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState),_}return Object(D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,[{key:"clearMemory",value:function(){this.setState(Object(D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState))}},{key:"setOperation",value:function setOperation(operation){if(0===this.state.current)this.setState({operation:operation,current:1,clearDisplay:!0});else{var equals="="===operation,currentOperation=this.state.operation,values=Object(D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);try{values[0]=eval("".concat(values[0]," ").concat(currentOperation," ").concat(values[1]))}catch(_unused){values[0]=this.state.values[0]}values[1]=0,this.setState({displayValue:values[0],operation:equals?null:operation,current:equals?0:1,clearDisplay:!equals,values:values})}}},{key:"addDigit",value:function(_){if("."!==_||!this.state.displayValue.includes(".")){var e=("0"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+_;if(this.setState({displayValue:e,clearDisplay:!1}),"."!==_){var a=this.state.current,t=parseFloat(e),r=Object(D_Matheus_Codelab_Cursos_cod3r_Web_moderno_exercicios_js_React_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);r[a]=t,this.setState({values:r}),console.log(r)}}}},{key:"render",value:function(){var _=this,e=function(e){return _.addDigit(e)},a=function(e){return _.setOperation(e)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Display__WEBPACK_IMPORTED_MODULE_8__.a,{value:this.state.displayValue}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"AC",click:function(){return _.clearMemory()},triple:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"/",click:a,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"7",click:e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"8",click:e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"9",click:e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"*",click:a,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"4",click:e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"5",click:e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"6",click:e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"-",click:a,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"1",click:e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"2",click:e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"3",click:e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"+",click:a,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"0",click:e,double:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:".",click:e}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.a,{label:"=",click:a,operation:!0})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=Calculator},,,function(_,e,a){"use strict";a(21);var t=a(0);e.a=function(_){return Object(t.jsx)("div",{className:"display",children:_.value})}},,,,,,,function(_,e,a){},function(_,e,a){},function(_,e,a){},,function(_,e,a){},function(_,e,a){},function(_,e,a){"use strict";a.r(e);var t=a(2),r=a.n(t),c=a(6),s=a.n(c),o=(a(17),a(18),a(7)),l=a(0);var n=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Calculadora"}),Object(l.jsx)(o.a,{})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(n,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.77f312c0.chunk.js.map