(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3],{553:function(t,e,n){"use strict";n.r(e);var r=n(120),l=n(358),o=n(357),c={props:["insert","delet","submit"]},d=n(52),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e(o.a,[e(l.a,{attrs:{cols:"12"}},[t.insert?e(r.a,{attrs:{"x-small":"",rounded:""},on:{click:function(e){return t.$emit("insert")}}},[t._v("insert")]):t._e(),t._v(" "),t.delet?e(r.a,{attrs:{"x-small":"",rounded:""},on:{click:function(e){return t.$emit("insert")}}},[t._v("delete")]):t._e(),t._v(" "),t.submit?e(r.a,{attrs:{"x-small":"",rounded:""},on:{click:function(e){return t.$emit("insert")}}},[t._v("submit")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},629:function(t,e,n){"use strict";n.r(e);var r=n(620),l={layout:"admin",data:function(){return{headers:[{text:"image",value:"image",sort:!1,align:"center"},{text:"name",value:"name",sort:!1,align:"center"},{text:"link",value:"link",sort:!1,align:"center"}]}},methods:{insert:function(){this.$router.push("/admin/services/insert")}}},o=n(52),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("AdminHeader",{attrs:{insert:!0,delet:!0},on:{insert:t.insert}}),t._v(" "),e(r.a,{attrs:{headers:t.headers}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminHeader:n(553).default})}}]);