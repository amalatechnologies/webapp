(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{483:function(t,e,o){var content=o(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("2ed8f896",content,!0,{sourceMap:!1})},525:function(t,e,o){"use strict";o(483)},526:function(t,e,o){var n=o(10)(!1);n.push([t.i,"\n.done {\n  text-decoration: line-through;\n}\n",""]),t.exports=n},557:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n),c=o(54);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d={computed:{todos:function(){return this.$store.state.todos.list}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r()(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({addTodo:function(t){this.$store.commit("todos/add",t.target.value),t.target.value=""}},Object(c.c)({toggle:"todos/toggle"}))},f=d,y=(o(525),o(22)),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("ul",[t._l(t.todos,(function(o,n){return e("li",{key:n},[e("input",{attrs:{type:"checkbox"},domProps:{checked:o.done},on:{change:function(e){return t.toggle(o)}}}),t._v(" "),e("span",{class:{done:o.done}},[t._v(t._s(o.text))])])})),t._v(" "),e("li",[e("input",{attrs:{placeholder:"What needs to be done?"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)}}})])],2)}),[],!1,null,null,null);e.default=component.exports}}]);