(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e5d85c9"],{"0ccb":function(e,t,n){var r=n("50c4"),a=n("1148"),o=n("1d80"),i=Math.ceil,s=function(e){return function(t,n,s){var c,u,l=String(o(t)),d=l.length,f=void 0===s?" ":String(s),p=r(n);return p<=d||""==f?l:(c=p-d,u=a.call(f,i(c/f.length)),u.length>c&&(u=u.slice(0,c)),e?l+u:u+l)}};e.exports={start:s(!1),end:s(!0)}},"0e8f":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return c}));var r=n("b775");function a(){return Object(r["a"])({method:"GET",url:"/company/department"})}function o(e){return Object(r["a"])({method:"DELETE",url:"/company/department/".concat(e)})}function i(e){return Object(r["a"])({method:"POST",url:"/company/department",data:e})}function s(e){return Object(r["a"])({method:"GET",url:"/company/department/".concat(e)})}function c(e){return Object(r["a"])({method:"PUT",url:"/company/department/".concat(e.id),data:e})}},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),o=n("825a"),i=n("1d80"),s=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,m=Math.min,h=4294967295,g=!f((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),o=void 0===n?h:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,o);var s,c,u,l=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,g=new RegExp(e.source,f+"g");while(s=d.call(g,r)){if(c=g.lastIndex,c>m&&(l.push(r.slice(m,s.index)),s.length>1&&s.index<r.length&&p.apply(l,s.slice(1)),u=s[0].length,m=c,l.length>=o))break;g.lastIndex===s.index&&g.lastIndex++}return m===r.length?!u&&g.test("")||l.push(""):l.push(r.slice(m)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,n):r.call(String(a),t,n)},function(e,a){var i=n(r,e,this,a,r!==t);if(i.done)return i.value;var d=o(e),f=String(this),p=s(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),w=new p(g?d:"^(?:"+d.source+")",v),x=void 0===a?h:a>>>0;if(0===x)return[];if(0===f.length)return null===l(w,f)?[f]:[];var y=0,j=0,O=[];while(j<f.length){w.lastIndex=g?j:0;var D,k=l(w,g?f:f.slice(j));if(null===k||(D=m(u(w.lastIndex+(g?0:j)),f.length))===y)j=c(f,j,b);else{if(O.push(f.slice(y,j)),O.length===x)return O;for(var R=1;R<=k.length-1;R++)if(O.push(k[R]),O.length===x)return O;j=y=D}}return O.push(f.slice(y)),O}]}),!g)},"4d90":function(e,t,n){"use strict";var r=n("23e7"),a=n("0ccb").start,o=n("9a0c");r({target:"String",proto:!0,forced:o},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},6823:function(e,t,n){},"7d37":function(e,t,n){"use strict";n("d4fe")},"8f00":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n("b775");function a(){return Object(r["a"])({method:"GET",url:"/sys/user/simple"})}function o(e){return Object(r["a"])({method:"GET",url:"/sys/user",params:e})}function i(e){return Object(r["a"])({method:"POST",url:"/sys/user",data:e})}function s(e){return Object(r["a"])({method:"DELETE",url:"/sys/user/".concat(e)})}function c(e){return Object(r["a"])({url:"/sys/user/batch",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/sys/user/".concat(e.id),method:"PUT",data:e})}function l(e){return Object(r["a"])({url:"/employees/".concat(e,"/personalInfo")})}function d(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"PUT",data:e})}function f(e){return Object(r["a"])({url:"/employees/".concat(e,"/jobs")})}function p(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"PUT",data:e})}function m(e){return Object(r["a"])({url:"/sys/user/assignRoles",method:"PUT",data:e})}},"9a0c":function(e,t,n){var r=n("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},d4fe:function(e,t,n){},e06c:function(e,t,n){"use strict";n("6823")},ed08:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("53ca"),n("5319"),n("ac1f"),n("4d63"),n("25f0"),n("d3b7"),n("4d90"),n("1276"),n("159b");function r(e,t){var n=[];return e.forEach((function(a){if(a.pid===t){var o=r(e,a.id);o.length&&(a.children=o),n.push(a)}})),n}},fb3b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-container"},[n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"tree-card"},[n("tree-tools",{attrs:{"tree-node":e.company,"is-root":!0},on:{addDepts:e.addDepts}}),n("el-tree",{attrs:{data:e.departs,props:e.defaultProps,"default-expand-all":""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return n("tree-tools",{attrs:{"tree-node":r},on:{addDepts:e.addDepts,editDepts:e.editDepts,delDepts:e.getDepartments}})}}])})],1),n("add-dept",{ref:"addDeptsRef",attrs:{"show-dialog":e.showDialog,"tree-node":e.node},on:{"update:showDialog":function(t){e.showDialog=t},"update:show-dialog":function(t){e.showDialog=t},addDepts:e.getDepartments}})],1)])},a=[],o=n("1da1"),i=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticStyle:{height:"40px",width:"100%"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-col",[n("span",[e._v(e._s(e.treeNode.name)+" ")])]),n("el-col",{attrs:{span:4}},[n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-col",[e._v(e._s(e.treeNode.manager))]),n("el-col",[n("el-dropdown",{on:{command:e.operateDepts}},[n("span",{staticClass:"el-dropdown-link"},[e._v(" 操作"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"add"}},[e._v("添加子部门")]),e.isRoot?e._e():n("el-dropdown-item",{attrs:{command:"edit"}},[e._v("编辑部门")]),e.isRoot?e._e():n("el-dropdown-item",{attrs:{command:"del"}},[e._v("删除部门")])],1)],1)],1)],1)],1)],1)}),s=[],c=n("0e8f"),u={props:{treeNode:{type:Object,required:!0},isRoot:{type:Boolean,default:!1}},methods:{operateDepts:function(e){var t=this;"add"===e?this.$emit("addDepts",this.treeNode):"edit"===e?this.$emit("editDepts",this.treeNode):this.$confirm("此操作将删除该部门, 是否继续?","提示",{type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["b"])(t.treeNode.id);case 2:t.$emit("delDepts"),t.$message.success("删除部门成功");case 4:case"end":return e.stop()}}),e)})))).catch((function(){t.$message.info("已取消删除操作")}))}}},l=u,d=n("2877"),f=Object(d["a"])(l,i,s,!1,null,"7a342777",null),p=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:e.showTitle,visible:e.showDialog},on:{close:e.btnCancel}},[n("el-form",{ref:"deptForm",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"部门编码",prop:"code"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),n("el-form-item",{attrs:{label:"部门负责人",prop:"manager"}},[n("el-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择"},model:{value:e.form.manager,callback:function(t){e.$set(e.form,"manager",t)},expression:"form.manager"}},e._l(e.peoples,(function(e){return n("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1),n("el-form-item",{attrs:{label:"部门介绍",prop:"introduce"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",row:3,placeholder:"1-300个字符"},model:{value:e.form.introduce,callback:function(t){e.$set(e.form,"introduce",t)},expression:"form.introduce"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOk}},[e._v("确 定")])],1)],1)},h=[],g=n("5530"),b=(n("4de4"),n("b0c0"),n("8f00")),v={props:{showDialog:{type:Boolean,default:!1},treeNode:{type:Object,default:null}},data:function(){var e=this,t=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,r,a){var o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["e"])();case 2:o=t.sent,i=o.depts,s=!1,s=e.form.id?i.filter((function(t){return t.pid===e.treeNode.pid&&t.id!==e.treeNode.id})).some((function(e){return e.name===r})):i.filter((function(t){return t.pid===e.treeNode.id})).some((function(e){return e.name===r})),s?a(new Error("当前部门下已存在".concat(r,"这个子部门了"))):a();case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),n=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,r,a){var o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["e"])();case 2:o=t.sent,i=o.depts,s=!1,s=e.form.id?i.filter((function(t){return t.code!==e.treeNode.code})).some((function(e){return e.code===r&&r})):i.some((function(e){return e.code===r&&r})),s?a(new Error("当前组织架构下已存在".concat(r,"这个部门编码了"))):a();case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();return{form:{name:"",code:"",manager:"",introduce:""},rules:{name:[{required:!0,message:"部门名称不能为空",trigger:"blur"},{min:1,max:50,message:"部门名称长度为 1~50 个字符",trigger:"blur"},{validator:t,trigger:"blur"}],code:[{required:!0,message:"部门编码不能为空",trigger:"blur"},{min:1,max:50,message:"部门编码长度为 1~50 个字符",trigger:"blur"},{validator:n,trigger:"blur"}],nanager:[{required:!0,message:"部门负责人不能为空",trigger:"blur"}],introduce:[{required:!0,message:"部门介绍不能为空",trigger:"blur"},{min:1,max:300,message:"部门介绍长度为 1~300 个字符",trigger:"blur"}]},peoples:[],loading:!1}},computed:{showTitle:function(){return this.form.id?"编辑部门":"新增部门"}},methods:{getEmployeeSimple:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["e"])();case 2:e.peoples=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getDepartDetail:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["d"])(e.treeNode.id);case 2:e.form=t.sent;case 3:case"end":return t.stop()}}),t)})))()},btnOk:function(){var e=this;this.$refs.deptForm.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=14;break}if(e.loading=!0,!e.form.id){t.next=8;break}return t.next=5,Object(c["c"])(e.form);case 5:e.$message.success("修改部门成功"),t.next=11;break;case 8:return t.next=10,Object(c["a"])(Object(g["a"])(Object(g["a"])({},e.form),{},{pid:e.treeNode.id}));case 10:e.$message.success("添加子部门成功");case 11:e.$emit("update:showDialog",!1),//! 关闭弹层时会触发 dialog的 @close="btnCancel" 事件
e.loading=!1,e.$emit("addDepts");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},btnCancel:function(){this.$refs.deptForm.resetFields(),this.form={name:"",code:"",manager:"",introduce:""},this.$emit("update:showDialog",!1)}}},w=v,x=(n("e06c"),Object(d["a"])(w,m,h,!1,null,"22642d3a",null)),y=x.exports,j=n("ed08"),O={components:{TreeTools:p,AddDept:y},data:function(){return{company:{},departs:[],defaultProps:{label:"name"},showDialog:!1,node:null}},created:function(){this.getDepartments()},methods:{getDepartments:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["e"])();case 2:n=t.sent,e.company={name:n.companyName,manager:"负责人",id:""},e.departs=Object(j["a"])(n.depts,"");case 5:case"end":return t.stop()}}),t)})))()},addDepts:function(e){this.showDialog=!0,this.node=e,this.$refs.addDeptsRef.getEmployeeSimple()},editDepts:function(e){var t=this;this.showDialog=!0,this.node=e,//! 调用子组件的方法  props传参是异步的
this.$nextTick((function(){t.$refs.addDeptsRef.getDepartDetail()}))}}},D=O,k=(n("7d37"),Object(d["a"])(D,r,a,!1,null,null,null));t["default"]=k.exports}}]);