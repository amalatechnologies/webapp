(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{487:function(t,e,n){"use strict";n.r(e);var m={props:{comment:Object,index:Number},name:"p_post_comment_tile.vue"},o=n(21),c=n(28),l=n.n(c),r=n(80),_=n(67),v=n(94),d=n(26),component=Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{key:t.index,attrs:{sm:"12",dense:"",to:"/post/"+t.comment.id,"three-line":""}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://i.pinimg.com/originals/96/90/ca/9690cabed5d0a12fa6bfbe4f2d17d65d.jpg"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-subtitle",[n("span",{staticClass:"text--primary font-weight-bold"},[t._v(t._s(t.comment.owner.first_name)+" "+t._s(t.comment.owner.last_name))]),t._v(" —\n      "),n("span",{staticClass:"text--caption font-weight-light"},[t._v(t._s(t._f("DateFormat")(t.comment.created_at)))])]),t._v(" "),n("v-list-item-subtitle",[n("p",{staticClass:"body-2 text-caption"},[t._v(t._s(t.comment.text_content))])])],1)],1)}),[],!1,null,"9bf00884",null);e.default=component.exports;l()(component,{VImg:r.a,VListItem:_.a,VListItemAvatar:v.a,VListItemContent:d.a,VListItemSubtitle:d.b})}}]);