(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{"00c0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("q-card",{directives:[{name:"show",rawName:"v-show",value:!t.fab,expression:"!fab"}],style:{width:t.width,height:t.height},attrs:{flat:""}},[e("q-card-section",[e("q-bar",{staticClass:"bg-white q-mb-sm shadow-1 "},[e("div",{staticStyle:{"font-size":"12px",width:"100%"}},[t._v(t._s(t.$t("scan.scan_goods_label"))+": "+t._s(t.goods_scan))])]),e("q-btn-group",{attrs:{push:""}},[e("q-btn",{attrs:{label:t.$t("refresh")},on:{click:function(a){return t.reFresh()}}}),e("q-btn",{attrs:{color:"purple",label:t.$t("stock.view_stocklist.cyclecountresult")}})],1)],1),e("q-scroll-area",{ref:"scrollArea",style:{height:t.scroll_height,width:t.width},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[e("q-markup-table",[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(t._s(t.scan_goods_code))]),e("th",{staticClass:"text-right"},[t._v(t._s(t.scan_bin_name))]),e("th",{staticClass:"text-right"},[t._v(t._s(t.order_qty))]),e("th",{staticClass:"text-right"},[t._v(t._s(t.picking_qty))])])]),e("tbody",[t._l(t.table_list,(function(a,s){return e("tr",{key:s,attrs:{id:"dom"+s}},[e("td",{staticClass:"text-center"},[t._v(t._s(a.goods_code))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.bin_name))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.goods_qty))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.picked_qty))])])}))],2)])],1)],1)],1)},n=[],i=e("3004"),c=e("18d6"),o=e("09f9"),r=e("e302"),d={name:"Pagezebra_shipping",data(){return{openid:"",login_name:"",authin:"0",pathname:"cyclecount/",separator:"cell",loading:!1,height:"",table_list:[],scan_goods_code:this.$t("scan.scan_goods_code"),scan_bin_name:this.$t("scan.scan_bin_name"),order_qty:this.$t("scan.view_picking.order_qty"),picking_qty:this.$t("scan.view_picking.picking_qty"),thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#E0E0E0",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#EEEEEE",width:"9px",opacity:.2},barscan:"",bin_scan:"",goods_scan:""}},methods:{datachange(){var t=this;c["a"].has("auth")&&Object(i["e"])("scanner/?bar_code="+t.barscan,{}).then((a=>{t.barscan=a.results[0].code,"BINSET"===a.results[0].mode?(t.bin_scan=a.results[0].code,t.goods_scan=""):"GOODS"===a.results[0].mode&&(t.goods_scan=a.results[0].code,t.countAdd(t.goods_scan))})).catch((a=>{t.$q.notify({message:a.detail,icon:"close",color:"negative"})}))},getList(){var t=this;c["a"].has("auth")&&Object(i["e"])(t.pathname,{}).then((a=>{t.table_list=a.results})).catch((a=>{t.$q.notify({message:a.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.barscan="",t.bin_scan="",t.goods_scan="",t.getList()}},computed:{fab:{get(){return this.$store.state.fabchange.fab}}},created(){var t=this;c["a"].has("openid")?t.openid=c["a"].getItem("openid"):(t.openid="",c["a"].set("openid","")),c["a"].has("login_name")?t.login_name=c["a"].getItem("login_name"):(t.login_name="",c["a"].set("login_name","")),c["a"].has("auth")?t.authin="1":t.authin="0",t.datachange=Object(r["a"])(t.datachange,200)},mounted(){var t=this;t.width=1*o["a"].width+"px",t.height=o["a"].height-50+"px",t.scroll_height=o["a"].height-225+"px",t.barscan="",t.bin_scan="",t.goods_scan=""},updated(){},beforeDestroy(){},destroyed(){}},l=d,h=e("42e1"),_=e("3545"),g=e("9989"),b=e("f09f"),u=e("a370"),p=e("d847"),m=e("e7a9"),f=e("9c40"),y=e("4983"),v=e("2bb1"),w=e("eebe"),q=e.n(w),x=Object(h["a"])(l,s,n,!1,null,null,null);"function"===typeof _["default"]&&Object(_["default"])(x);a["default"]=x.exports;q()(x,"components",{QPage:g["a"],QCard:b["a"],QCardSection:u["a"],QBar:p["a"],QBtnGroup:m["a"],QBtn:f["a"],QScrollArea:y["a"],QMarkupTable:v["a"]})},3545:function(t,a,e){"use strict";var s=e("8528"),n=e.n(s);a["default"]=n.a},8528:function(t,a){}}]);