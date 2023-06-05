import{Q as d}from"./QItemLabel.4c6d5a0a.js";import{Q as z,b as $,a as T}from"./QList.b9c40f0f.js";import{_ as J,az as W,J as X,aP as H,r as K,c as t,w as U,o as Y,M as C,O as Z,R as s,f as n,S as r,U as c,X as E,V as G,W as ee,F as M,$ as ae,aA as te}from"./index.f33d3375.js";import{u as ne}from"./use-quasar.9dcc7043.js";import{a as se}from"./index.2732f8ae.js";import{u as oe}from"./vue-i18n.runtime.esm-bundler.284a7e26.js";const ce=W({name:"ASNList",data(){return{}},setup(){const e=X(),D=H(),m=ne(),u=K(0),{t:g}=oe(),k=t({get:()=>e.state.fabchange.fab1}),i=t({get:()=>e.state.fabchange.fab2}),f=t({get:()=>e.state.fabchange.fab3}),y=t({get:()=>e.state.fabchange.fab4}),Q=t({get:()=>e.state.screenchange.screenscroll}),A=t({get:()=>e.state.loginauth.authin}),q=t({get:()=>e.state.loginauth.login_name}),L=t({get:()=>e.state.loginauth.operator}),N=t({get:()=>e.state.settings.openid}),w=t({get:()=>e.state.langchange.lang}),b=t({get:()=>e.state.settings.server}),O=t({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),F=t({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),P=t({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),R=t({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),j=t({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),h=t({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),_=t({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),p=t({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),v=t({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),V=t({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function B(a){if(a!==null){var o=b.value.split(":"),l=a.split(":");return o[0]!==l[0]?o[0]+":"+l[1]:l}else return null}function x(a){O.value=a,_.value="GOODS",D.push({name:"binstock"})}function I(a){se.get(p.value+a,{headers:{"Content-Type":"application/json",token:N.value,language:w.value,operator:L.value}}).then(o=>{if(o.data.detail)m.notify({type:"negative",message:g("notice.mobile_scan.notice1")});else{var l=[];h.value.forEach(S=>{l.push(S)}),o.data.results.forEach(S=>{l.push(S)}),h.value=l,V.value=B(o.data.previous),v.value=B(o.data.next)}}).catch(o=>{m.notify({type:"negative",message:g("notice.mobile_scan.notice3")})})}return U(Q,(a,o)=>{a>=.95?v.value!==null&&(p.value=v.value,u.value=1):u.value=0}),U(u,(a,o)=>{a===1&&I("")}),Y(()=>{A.value==="0"?m.notify({type:"negative",message:g("notice.mobile_userlogin.notice9")}):(_.value="GOODS",p.value=b.value+"stock/list/?ordering=-id",h.value=[],I(""))}),{t:g,fab1:k,fab2:i,fab3:f,fab4:y,screenscroll:Q,authin:A,login_name:q,openid:N,operator:L,lang:w,requestauth:u,baseurl:b,apiurl:p,apiurlnext:v,apiurlprevious:V,scandata:O,datadetail:F,tablelist:h,asndata:P,dndata:R,bindata:j,scanmode:_,DetailLine:x}}});function ie(e,D,m,u,g,k){return C(),Z(z,{bordered:"",padding:""},{default:s(()=>[n(T,null,{default:s(()=>[n($,null,{default:s(()=>[n(d,{overline:""},{default:s(()=>[r(c(e.$t("notice.mobile_asn.notice1")),1)]),_:1}),n(d,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_asn.notice2")),1)]),_:1})]),_:1})]),_:1}),n(E,{spaced:""}),(C(!0),G(M,null,ee(e.tablelist,(i,f)=>(C(),G(M,{key:f},[n(T,null,{default:s(()=>[n($,{onClick:y=>e.DetailLine(i.goods_code)},{default:s(()=>[n(d,null,{default:s(()=>[r(c(i.goods_code),1)]),_:2},1024),n(d,{caption:"",lines:"2"},{default:s(()=>[r(c(e.$t("notice.mobile_asn.notice3"))+c(i.goods_desc),1)]),_:2},1024)]),_:2},1032,["onClick"]),n($,{side:"",top:""},{default:s(()=>[n(d,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_asn.notice4"))+":"+c(i.onhand_stock),1)]),_:2},1024),n(d,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_asn.notice5"))+c(i.can_order_stock),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),ae(n(E,{spaced:"",inset:"item"},null,512),[[te,f+1!==e.tablelist.length]])],64))),128))]),_:1})}var fe=J(ce,[["render",ie]]);export{fe as default};