(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-403f9692"],{"0333":function(t,e,n){"use strict";n("7c29")},"0e8f":function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return o}));var a=n("b775");function r(){return Object(a["a"])({method:"GET",url:"/company/department"})}function c(t){return Object(a["a"])({method:"DELETE",url:"/company/department/".concat(t)})}function i(t){return Object(a["a"])({method:"POST",url:"/company/department",data:t})}function s(t){return Object(a["a"])({method:"GET",url:"/company/department/".concat(t)})}function o(t){return Object(a["a"])({method:"PUT",url:"/company/department/".concat(t.id),data:t})}},1401:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"i",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"h",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"d",(function(){return p})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return h}));n("99af");var a=n("b775");function r(t){return Object(a["a"])({url:"/social_securitys/historys/".concat(t.month),params:t})}function c(t){return Object(a["a"])({url:"/social_securitys/historys/".concat(t.year,"/list"),data:t})}function i(t){return Object(a["a"])({url:"/social_securitys/historys/".concat(t.yearMonth,"/newReport"),method:"put",data:t})}function s(t){return Object(a["a"])({url:"/social_securitys/historys/archiveDetail/".concat(t.userId,"/").concat(t.yearMonth),data:t})}function o(t){return Object(a["a"])({url:"/social_securitys/list",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/social_securitys/historys/".concat(t.yearMonth,"/archive"),method:"post",data:t})}function l(t){return Object(a["a"])({url:"/social_securitys/".concat(t.userId),method:"put",data:t})}function p(t){return Object(a["a"])({url:"/social_securitys/".concat(t)})}function d(t){return Object(a["a"])({url:"/social_securitys/payment_item/".concat(t)})}function h(){return Object(a["a"])({url:"/social_securitys/settings"})}},2934:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("b775");function r(){return Object(a["a"])({url:"/sys/city"})}},"4aca":function(t,e,n){"use strict";n("d71c")},"7c29":function(t,e,n){},d71c:function(t,e,n){},eae0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"dashboard-container"},[n("div",{staticClass:"app-container"},[n("page-tools",{attrs:{"show-before":!0},scopedSlots:t._u([{key:"before",fn:function(){return[t._v(" 本月"+t._s(t.tips.dateRange)+"：社保在缴 "+t._s(t.tips.socialSecurityCount)+" 公积金在缴 "+t._s(t.tips.providentFundCount)+" 增员 "+t._s(t.tips.newsCount)+" 减员 "+t._s(t.tips.reducesCount)+" 入职 "+t._s(t.tips.worksCount)+" 离职 "+t._s(t.tips.leavesCount)+" ")]},proxy:!0},{key:"after",fn:function(){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.$router.push("/social_securitys/historicalArchiving")}}},[t._v("历史归档")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.$router.push("/social_securitys/monthStatement?yearMonth="+t.yearMonth)}}},[t._v(t._s(t.yearMonth)+"报表")])]},proxy:!0}])}),n("social-tool"),n("el-card",{staticClass:"hr-block"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"default-sort":{prop:"date",order:"descending"}}},[n("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),n("el-table-column",{attrs:{prop:"username",label:"姓名",sortable:""}}),n("el-table-column",{attrs:{prop:"mobile",label:"手机",sortable:""}}),n("el-table-column",{attrs:{prop:"workNumber",label:"工号",sortable:""}}),n("el-table-column",{attrs:{prop:"departmentName",label:"部门",sortable:"",width:"180"}}),n("el-table-column",{attrs:{prop:"timeOfEntry",label:"入职时间",sortable:""}}),n("el-table-column",{attrs:{prop:"leaveTime",label:"离职时间",sortable:""}}),n("el-table-column",{attrs:{prop:"participatingInTheCity",label:"社保城市",width:"180"}}),n("el-table-column",{attrs:{prop:"providentFundCity",label:"公积金城市",width:"180"}}),n("el-table-column",{attrs:{prop:"socialSecurityBase",label:"社保基数"}}),n("el-table-column",{attrs:{prop:"providentFundBase",label:"公积金基数"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(n){return t.$router.push("/social_securitys/detail/"+e.row.id)}}},[t._v("查看详情")])]}}])})],1),n("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",align:"middle",justify:"center"}},[n("el-pagination",{attrs:{total:t.page.total,"current-page":t.page.page,"page-size":t.page.pageSize,layout:"prev, pager, next"},on:{"current-change":t.pageChange}})],1)],1)],1)])},r=[],c=n("5530"),i=n("1da1"),s=(n("96cf"),n("1401")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cont-top-box"},[n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:"部门"}},[n("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.departmentChecks,callback:function(e){t.departmentChecks=e},expression:"departmentChecks"}},t._l(t.departmentList,(function(e){return n("el-checkbox",{key:e.id,attrs:{label:e.id},on:{change:t.checkChange}},[t._v(t._s(e.name))])})),1)],1),n("el-form-item",{attrs:{label:"社保城市"}},[n("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.socialSecurityChecks,callback:function(e){t.socialSecurityChecks=e},expression:"socialSecurityChecks"}},t._l(t.cityList,(function(e){return n("el-checkbox",{key:e.id,attrs:{label:e.id},on:{change:t.checkChange}},[t._v(t._s(e.name))])})),1)],1),n("el-form-item",{attrs:{label:"公积金城市"}},[n("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.providentFundChecks,callback:function(e){t.providentFundChecks=e},expression:"providentFundChecks"}},t._l(t.cityList,(function(e){return n("el-checkbox",{key:e.id,attrs:{label:e.id},on:{change:t.checkChange}},[t._v(t._s(e.name))])})),1)],1)],1)],1)},u=[],l=n("2934"),p=n("0e8f"),d={name:"SocialTool",data:function(){return{tips:{},keyword:"",departmentChecks:[],socialSecurityChecks:[],providentFundChecks:[],cityList:[],departmentList:[]}},created:function(){this.getCityList(),this.getDepartments()},methods:{getCityList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["a"])();case 2:t.cityList=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getDepartments:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["e"])();case 2:n=e.sent,a=n.depts,t.departmentList=a;case 5:case"end":return e.stop()}}),e)})))()},checkChange:function(){var t={departmentChecks:this.departmentChecks,socialSecurityChecks:this.socialSecurityChecks,providentFundChecks:this.providentFundChecks};this.$parent.changeSelectParams&&this.$parent.changeSelectParams(t)}}},h=d,m=(n("0333"),n("2877")),f=Object(m["a"])(h,o,u,!1,null,"21948f37",null),b=f.exports,y={name:"SocialTableIndex",components:{SocialTool:b},data:function(){return{list:[],yearMonth:"",page:{page:1,pageSize:10,total:0},selectParams:{},tips:{},loading:!1}},created:function(){this.getSocialList(),this.getSettings()},methods:{getSettings:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["g"])();case 2:n=e.sent,a=n.dataMonth,t.yearMonth=a;case 5:case"end":return e.stop()}}),e)})))()},goDetail:function(t,e,n){this.$router.push({path:"detail"})},getSocialList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s["h"])(Object(c["a"])(Object(c["a"])({},t.page),t.selectParams));case 3:n=e.sent,a=n.rows,r=n.total,t.list=a,t.page.total=r,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()},changeSelectParams:function(t){this.selectParams.departmentChecks=t.departmentChecks,this.selectParams.providentFundChecks=t.providentFundChecks,this.selectParams.socialSecurityChecks=t.socialSecurityChecks,this.page.page=1,this.getSocialList()},pageChange:function(t){this.page.page=t,this.getSocialList()},handleExport:function(){}}},g=y,k=(n("4aca"),Object(m["a"])(g,a,r,!1,null,"30d17fe2",null));e["default"]=k.exports}}]);