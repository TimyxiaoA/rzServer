(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9319a72"],{"13d5":function(t,e,n){"use strict";var r=n("23e7"),a=n("d58f").left,s=n("a640"),c=n("ae40"),o=s("reduce"),i=c("reduce",{1:0});r({target:"Array",proto:!0,forced:!o||!i},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},2506:function(t,e,n){"use strict";n.d(e,"h",(function(){return a})),n.d(e,"l",(function(){return s})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return o})),n.d(e,"i",(function(){return i})),n.d(e,"j",(function(){return u})),n.d(e,"g",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"p",(function(){return f})),n.d(e,"o",(function(){return l})),n.d(e,"c",(function(){return m})),n.d(e,"f",(function(){return v})),n.d(e,"d",(function(){return _})),n.d(e,"e",(function(){return h})),n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return g})),n.d(e,"q",(function(){return O}));n("99af");var r=n("b775");function a(t){return Object(r["a"])({url:"/user/process/instance/".concat(t.page,"/").concat(t.pageSize),method:"put",data:t})}function s(t){return Object(r["a"])({url:"/user/process/instance/getById/".concat(t)})}function c(t){return Object(r["a"])({url:"/approvals/flows/".concat(t)})}function o(t){return Object(r["a"])({url:"/approvals/setting",method:"put",data:t})}function i(t){return Object(r["a"])({url:"/user/process/instance/".concat(t)})}function u(t){return Object(r["a"])({url:"/user/process/instance/tasks/".concat(t)})}function p(t){return Object(r["a"])({url:"//user/process/buss/showBussImgById/".concat(t)})}function d(t){return Object(r["a"])({url:"/user/process/definition",params:t})}function f(t){return Object(r["a"])({url:"/user/process/suspend/".concat(t.processKey),params:t})}function l(t){return Object(r["a"])({url:"/user/process/startProcess",data:t,method:"post"})}function m(t){return Object(r["a"])({url:"/user/process_leave/startProcess",data:t,method:"post"})}function v(t){return Object(r["a"])({url:"/user/approvals/".concat(t.id,"/reject"),method:"put",data:t})}function _(t){return Object(r["a"])({url:"/user/approvals/".concat(t),method:"delete"})}function h(t){return Object(r["a"])({url:"/user/process/instance/commit",method:"put",data:t})}function b(t){return Object(r["a"])({url:"/user/process_dimission/startProcess",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/user/process_overtime/startProcess",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/sys/user/".concat(t.id),method:"put",data:t})}},"616f":function(t,e,n){t.exports=n.p+"static/img/img.0615818f.jpeg"},7538:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"quitApproval"},[r("div",{staticClass:"contLeft"},[r("h2",[t._v(t._s(t.information.user_name)+"申请请假")]),r("div",{staticClass:"topTit"},[r("img",{attrs:{src:n("616f"),alt:""}}),r("div",{staticClass:"info"},[r("p",{staticClass:"name"},[r("strong",[t._v(t._s(t.information.username))])]),r("p",[r("span",[t._v("部门："+t._s(t.information.departmentName))])]),r("p",[r("span",[t._v("入职时间： "+t._s(t._f("formatDate")(t.information.timeOfEntry)))])])])]),r("div",{staticClass:"content"},[t._m(0),r("p",[r("span",[t._v("请假类型：")]),t._v(" "+t._s(1==t.information.data.holidayType?"事假":"调休")+" ")]),t._m(1),r("p",[r("span",[t._v("开始时间：")]),t._v(" "+t._s(t._f("formatDate")(t.information.data.startTime))+" ")]),r("p",[r("span",[t._v("结束时间：")]),t._v(" "+t._s(t._f("formatDate")(t.information.data.endTime))+" ")]),r("p",[r("span",[t._v("请假时长：")]),t._v(" "+t._s(t.information.data.duration)+" ")]),r("p",[r("span",[t._v("申请事由：")]),t._v(" "+t._s(t.information.data.reason)+" ")])])]),r("div",{staticClass:"contRit"},[t._m(2),r("div",{staticClass:"Items"},t._l(t.taskInstanceOutList,(function(e,n){return r("li",{key:n},[r("div",{staticClass:"name",style:n==t.taskInstanceOutList.length-1?"border-right:none":""},[r("p",[t._v(t._s(t._f("formatDate")(e.handleTime)))])]),r("div",{staticClass:"act"},[r("strong",[t._v(t._s(e.handleUserName))]),0==n?r("span",[t._v("发起申请")]):"3"==e.handleType?r("span",[t._v("审批驳回")]):"4"==e.handleType?r("span",[t._v("已撤销")]):"1"==e.handleType?r("span",[t._v("未开始")]):"2"==e.handleType?r("span",[t._v("审批通过")]):r("span",[t._v("审批中")])])])})),0)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",[t._v("申请类型：")]),t._v("请假 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",[t._v("申请单位：")]),t._v(" 天 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topTit"},[n("strong",[t._v("审批记录")])])}],s=n("1da1"),c=(n("13d5"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("d3b7"),n("ace4"),n("96cf"),n("2506")),o={name:"UsersTableIndex",components:{},data:function(){return{approvalId:this.$route.params.id,information:{data:{}},taskInstanceOutList:[],imgs:""}},created:function(){this.getApprovalsDetail(),this.getApprovalsTaskDetail()},methods:{getApprovalsDetail:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["i"])(t.approvalId);case 2:t.information=e.sent,t.information.data=JSON.parse(t.information.procData);case 4:case"end":return e.stop()}}),e)})))()},getApprovalsTaskDetail:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["j"])(t.approvalId);case 2:t.taskInstanceOutList=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getReviewHistory:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["g"])(t);case 2:r=n.sent,e.imgs="data:image/png;base64,"+btoa(new Uint8Array(r.request.response).reduce((function(t,e){return t+String.fromCharCode(e)}),""));case 4:case"end":return n.stop()}}),n)})))()}}},i=o,u=n("2877"),p=Object(u["a"])(i,r,a,!1,null,null,null);e["default"]=p.exports}}]);