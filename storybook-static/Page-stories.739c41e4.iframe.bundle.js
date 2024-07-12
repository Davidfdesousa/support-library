"use strict";(self.webpackChunksupport_library=self.webpackChunksupport_library||[]).push([[226],{"./stories/Page.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Page_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Header=__webpack_require__("./stories/Header.tsx");__webpack_require__("./stories/page.css");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Page=function(){var _React_useState=_sliced_to_array(react.useState(),2),user=_React_useState[0],setUser=_React_useState[1];return react.createElement("article",null,react.createElement(Header.Y,{user,onLogin:function(){return setUser({name:"Jane Doe"})},onLogout:function(){return setUser(void 0)},onCreateAccount:function(){return setUser({name:"Jane Doe"})}}),react.createElement("section",{className:"storybook-page"},react.createElement("h2",null,"Pages in Storybook"),react.createElement("p",null,"We recommend building UIs with a"," ",react.createElement("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},react.createElement("strong",null,"component-driven"))," ","process starting with atomic components and ending with pages."),react.createElement("p",null,"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),react.createElement("ul",null,react.createElement("li",null,'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'),react.createElement("li",null,"Assemble data in the page component from your services. You can mock these services out using Storybook.")),react.createElement("p",null,"Get a guided tutorial on component-driven development at"," ",react.createElement("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Storybook tutorials"),". Read more in the"," ",react.createElement("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),"."),react.createElement("div",{className:"tip-wrapper"},react.createElement("span",{className:"tip"},"Tip")," Adjust the width of the canvas with the"," ",react.createElement("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}))),"Viewports addon in the toolbar")))};function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}Page.__docgenInfo={description:"",methods:[],displayName:"Page"};const Page_stories={title:"Example/Page",component:Page,parameters:{layout:"fullscreen"}};var _ref,LoggedOut={},LoggedIn={play:(_ref=function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(param){var canvasElement,canvas,loginButton,logoutButton;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,canvas=(0,dist.ux)(canvasElement),loginButton=canvas.getByRole("button",{name:/Log in/i}),[4,(0,dist.E3)(loginButton).toBeInTheDocument()];case 1:return _state.sent(),[4,dist.Q4.click(loginButton)];case 2:return _state.sent(),[4,(0,dist.E3)(loginButton).not.toBeInTheDocument()];case 3:return _state.sent(),logoutButton=canvas.getByRole("button",{name:/Log out/i}),[4,(0,dist.E3)(logoutButton).toBeInTheDocument()];case 4:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})};LoggedOut.parameters={...LoggedOut.parameters,docs:{...LoggedOut.parameters?.docs,source:{originalSource:"{}",...LoggedOut.parameters?.docs?.source}}},LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await expect(loginButton).toBeInTheDocument();\n    await userEvent.click(loginButton);\n    await expect(loginButton).not.toBeInTheDocument();\n    const logoutButton = canvas.getByRole('button', {\n      name: /Log out/i\n    });\n    await expect(logoutButton).toBeInTheDocument();\n  }\n}",...LoggedIn.parameters?.docs?.source}}};const __namedExportsOrder=["LoggedOut","LoggedIn"]}}]);