(this["webpackJsonpfootball-app"]=this["webpackJsonpfootball-app"]||[]).push([[0],{114:function(e,t,a){e.exports=a(143)},143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=a(17),l=a(19),i=a(95),u=a(96),m=a(43),d=a(56),p=a.n(d),h=a(12),b=a.n(h),f=a(35),g=a.n(f),E=a(67),v=a(97),y=a.n(v).a.create({baseURL:"https://covid-193.p.rapidapi.com"}),x={"content-type":"application/octet-stream","x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"adfbf85029msh5dc3b041e6bf80ep173bdfjsne817b46d9ab3",useQueryString:!0},S=function(e){return{type:"set_country",payload:e}},O=a(5),C=a(183),j=a(185),w=a(184),N=a(199),T=a(194),k=a(181),D=a(182),A=a(41),I=a.n(A),B=a(198),W=a(42),H=a(39),R=Object(O.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(B.a),_=Object(O.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(k.a),z=Object(O.a)((function(e){return{root:{flexDirection:"column"}}}))(D.a),Y=Object(C.a)((function(e){return{labels:{display:"flex",padding:0,justifyContent:"space-between"},bar:{display:"flex",padding:0},subheading:{textAlign:"center",marginTop:e.spacing(1)},icon:{marginRight:e.spacing(1)}}}));var $=Object(s.b)(null)((function(e){var t=Y(),a=e.curStats.cases.active/e.curStats.cases.total*100,n=e.curStats.cases.recovered/e.curStats.cases.total*100,c=e.curStats.deaths.total/e.curStats.cases.total*100;return r.a.createElement(R,{variant:"outlined"},r.a.createElement(_,{expandIcon:r.a.createElement(I.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(w.a,null,r.a.createElement(H.a,{className:t.icon,icon:W.b}),"BREAKDOWN")),r.a.createElement(z,null,r.a.createElement(w.a,{variant:"subtitle1"},"Breakdown of total ",b()(e.curStats.cases.total).format("0,0")," ","recorded cases:"),r.a.createElement(j.a,{className:t.bar},r.a.createElement(N.a,{arrow:!0,title:e.curStats.cases.active,placement:"top"},r.a.createElement(T.a,{width:"".concat(a,"%"),bgcolor:"secondary.main",p:1,my:.5})),r.a.createElement(N.a,{arrow:!0,title:e.curStats.cases.recovered,placement:"top"},r.a.createElement(T.a,{width:"".concat(n,"%"),bgcolor:"primary.main",p:1,my:.5})),r.a.createElement(N.a,{arrow:!0,title:e.curStats.deaths.total,placement:"top"},r.a.createElement(T.a,{width:"".concat(c,"%"),bgcolor:"text.primary",p:1,my:.5}))),r.a.createElement(j.a,{className:t.labels},r.a.createElement(w.a,{variant:"subtitle2",color:"secondary"},"Active"),r.a.createElement(w.a,{variant:"subtitle2",color:"primary"},"Recovered"),r.a.createElement(w.a,{variant:"subtitle2"},"Deceased")),r.a.createElement("div",{className:t.subheading},r.a.createElement(w.a,{className:t.subheading,variant:"h5",color:"secondary"},b()(e.curStats.cases.total/e.curStats.population*100).format("0.00"),"%"),r.a.createElement(w.a,{variant:"body1"},"...of this country's population have tested positive for COVID-19.")),r.a.createElement("div",{className:t.subheading},r.a.createElement(w.a,{variant:"h5",color:"secondary"},b()(e.curStats.deaths.total/e.curStats.cases.total*100).format("0.00"),"%"),r.a.createElement(w.a,{variant:"body1"},"...of COVID-19 patients in this country have died."))))})),M=Object(O.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(B.a),L=Object(O.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56,borderBottom:"1px solid rgba(0, 0, 0, .125)"}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(k.a),P=Object(O.a)((function(e){return{root:{flexDirection:"column"}}}))(D.a),G=Object(C.a)((function(e){return{labels:{display:"flex",padding:0,justifyContent:"space-between"},bar:{display:"flex",padding:0},subheading:{marginTop:e.spacing(1)},icon:{marginRight:e.spacing(1)}}}));var U=Object(s.b)(null)((function(e){var t=G(),a=b()(e.curStats.tests.total/e.curStats.population*100).format("0.00"),n=b()(e.curStats.cases.total/e.curStats.tests.total*100).format("0.00");return r.a.createElement(M,{variant:"outlined"},r.a.createElement(L,{expandIcon:r.a.createElement(I.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(w.a,null,r.a.createElement(H.a,{className:t.icon,icon:W.c}),"TESTING")),r.a.createElement(P,null,r.a.createElement(w.a,null,"Proportion of population who have received tests:"),r.a.createElement(j.a,{className:t.bar},r.a.createElement(N.a,{arrow:!0,title:e.curStats.tests.total,placement:"top"},r.a.createElement(T.a,{width:"".concat(a,"%"),bgcolor:"primary.main",p:1,my:.5})),r.a.createElement(N.a,{arrow:!0,title:e.curStats.population,placement:"top"},r.a.createElement(T.a,{width:"".concat(100-a,"%"),bgcolor:"black",p:1,my:.5}))),r.a.createElement(j.a,{className:t.labels},r.a.createElement(w.a,{variant:"subtitle2",color:"primary"},"Tested"),r.a.createElement(w.a,{variant:"subtitle2"},"Untested")),r.a.createElement("div",{className:t.subheading},r.a.createElement(w.a,{color:"primary",variant:"h5"},b()(e.curStats.tests.total).format("0,0"))),r.a.createElement(w.a,null,"...people have been tested for COVID-19. That's"," ",b()(e.curStats.tests.total/e.curStats.population*100).format("0.00"),"% of the population."),r.a.createElement("div",{className:t.subheading},r.a.createElement(w.a,{color:"primary",variant:"h5"},n,"%"),r.a.createElement(w.a,null,"...of all tests have returned positive."))))})),V=a(188),J=a(100),q=a.n(J),F=a(102),K=a.n(F),Q=a(99),X=a.n(Q),Z=a(101),ee=a.n(Z),te=Object(O.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(B.a),ae=Object(O.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56,borderBottom:"1px solid rgba(0, 0, 0, .125)"}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(k.a),ne=Object(O.a)((function(e){return{root:{flexDirection:"column"}}}))(D.a),re=Object(C.a)((function(e){return{labels:{display:"flex",padding:0,justifyContent:"space-between"},bar:{display:"flex",padding:0},subheading:{textAlign:"center",marginTop:e.spacing(1)},icon:{marginRight:e.spacing(1)},loaderContainer:{textAlign:"center",paddingTop:e.spacing(2)},textWithIcon:{display:"flex",alignItems:"center",justifyContent:"center"}}}));var ce=Object(s.b)((function(e){return{selectedCountry:e.selectedCountry,curStats:e.currentStats,lastWeekStats:e.lastWeekStats}}),{fetchHistory:function(e,t){return function(){var a=Object(E.a)(g.a.mark((function a(n){var r;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.get("/history",{params:{country:e,day:t},headers:x});case 2:r=a.sent,n({type:"fetch_history",payload:r.data.response[0]});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=re();Object(n.useEffect)((function(){e.fetchHistory(e.selectedCountry,a())}),[e.selectedCountry]);var a=function(){var e=new Date;return e.setDate(e.getDate()-7),p()(e).format("YYYY-MM-DD")};return r.a.createElement(te,{variant:"outlined"},r.a.createElement(ae,{expandIcon:r.a.createElement(I.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(w.a,null,r.a.createElement(H.a,{className:t.icon,icon:W.a}),"PROGRESSION")),r.a.createElement(ne,null,e.lastWeekStats.cases?function(){var a=e.curStats.cases.active-e.lastWeekStats.cases.active;return a>0?r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement("div",{className:t.textWithIcon},r.a.createElement(X.a,{style:{marginRight:"4px"}})," ","Doing worse than last week. There are:")),r.a.createElement(w.a,{variant:"h5",className:t.subheading,color:"secondary"},r.a.createElement("div",{className:t.textWithIcon},b()(a).format("0,0"),r.a.createElement(q.a,null))),r.a.createElement(w.a,null,"...more active cases than this time last week. That's a"," ",b()(a/e.lastWeekStats.cases.active*100).format("0.00"),"% increase in active cases.")):a<0?(a*=-1,r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement("div",{className:t.textWithIcon},r.a.createElement(ee.a,{style:{marginRight:"4px"}}),"Doing better than last week. There are:")),r.a.createElement(w.a,{variant:"h5",className:t.subheading,style:{color:"#64dd17"}},r.a.createElement("div",{className:t.textWithIcon},b()(a).format("0,0"),r.a.createElement(K.a,null))),r.a.createElement(w.a,null,"...less active cases than this time last week. That's a"," ",b()(a/e.lastWeekStats.cases.active*100).format("0.00"),"% decrease in active cases."))):r.a.createElement("div",null,r.a.createElement(w.a,{className:t.subheading},"There are the same amount of active cases as this time last week."))}():r.a.createElement(j.a,{className:t.loaderContainer},r.a.createElement(V.a,null))))})),oe=a(189),se=a(200),le=Object(C.a)((function(e){var t;return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},mainGrid:(t={paddingTop:e.spacing(2),margin:e.spacing(2)},Object(m.a)(t,e.breakpoints.down("xs"),{marginTop:e.spacing(10)}),Object(m.a)(t,"marginTop",e.spacing(12)),Object(m.a)(t,"textAlign","center"),t),statsContainer:{padding:0},statsHeader:{padding:0,paddingBottom:e.spacing(2)},caption:{color:"grey"},progress:{marginTop:e.spacing(24),marginBottom:e.spacing(12)}}}));var ie=Object(l.compose)(Object(se.a)(),Object(s.b)((function(e){return{selectedCountry:e.selectedCountry,curStats:e.currentStats}}),{fetchCurStats:function(e){return function(){var t=Object(E.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/statistics",{params:{country:e},headers:x});case 2:n=t.sent,a({type:"fetch_cur_stats",payload:n.data.response[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCountry:S}))((function(e){var t=le(),a=e.width;return Object(n.useEffect)((function(){e.fetchCurStats(e.selectedCountry)}),[e.selectedCountry]),e.curStats.cases?r.a.createElement(oe.a,{className:t.mainGrid,item:!0,md:7,sm:10,xs:12},r.a.createElement(j.a,{className:t.statsContainer},r.a.createElement(j.a,{className:t.statsHeader},r.a.createElement(w.a,{variant:"caption",className:t.caption},p()(Date.now()).format("MMM D YYYY")),r.a.createElement(oe.a,{container:!0,spacing:1,direction:"xs"===a?"column":"row",justify:"center",alignItems:"center"},r.a.createElement(oe.a,{item:!0,xs:12,sm:4},r.a.createElement(w.a,{variant:"xs"===a?"h3":"h4"},b()(e.curStats.cases.total).format("0,0")),r.a.createElement(w.a,{variant:"subtitle2"},"TOTAL CASES")),r.a.createElement(oe.a,{item:!0,xs:12,sm:4},r.a.createElement(w.a,{color:"secondary",variant:"xs"===a?"h2":"h3"},b()(e.curStats.cases.active).format("0,0")),r.a.createElement(w.a,{variant:"subtitle1"},"ACTIVE CASES "),r.a.createElement(w.a,{variant:"caption",className:t.caption},b()(e.curStats.cases.new).format("+0,0"))),r.a.createElement(oe.a,{item:!0,xs:12,sm:4},r.a.createElement(w.a,{variant:"xs"===a?"h3":"h4"},b()(e.curStats.deaths.total).format("0,0")," "),r.a.createElement(w.a,{variant:"subtitle2"},"TOTAL DEATHS"),r.a.createElement(w.a,{variant:"caption",className:t.caption},b()(e.curStats.deaths.new).format("+0,0")||"+0")))),r.a.createElement("div",{className:t.root},r.a.createElement($,{curStats:e.curStats}),r.a.createElement(U,{curStats:e.curStats}),r.a.createElement(ce,{curStats:e.curStats})))):r.a.createElement(T.a,{position:"relative",display:"inline-flex"},r.a.createElement(V.a,{className:t.progress}))})),ue=a(74),me=a(190),de=a(191),pe=a(196),he=a(192),be=a(195),fe=a(103),ge=a.n(fe),Ee=a(197),ve=a(147),ye=a(104),xe=a.n(ye),Se=Object(C.a)((function(e){return{header:{backgroundColor:"#212121"},headerButtonContainer:{textAlign:"center",paddingBottom:e.spacing(1)},headerTextContainer:{textAlign:"center",paddingTop:e.spacing(1)},headerText:{color:"white"},buttonHelper:{fontSize:"10px",color:"grey"},button:{color:"white","&:hover":{backgroundColor:"#424242"}}}}));var Oe=Object(s.b)((function(e){return{selectedCountry:e.selectedCountry,countryList:Array.from(e.countries)}}),{setCountry:S,fetchCountries:function(){return function(){var e=Object(E.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/countries",{headers:x});case 2:a=e.sent,t({type:"fetch_countries",payload:a.data.response});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=Se();Object(n.useEffect)((function(){e.fetchCountries()}),[]);var a=Object(n.useState)(null),c=Object(ue.a)(a,2),o=c[0],s=c[1],l=Boolean(o),i=Object(n.useState)(!1),u=Object(ue.a)(i,2),m=u[0],d=u[1],p=function(){d(!0)},h=function(e,t){"clickaway"!==t&&d(!1)};return r.a.createElement("div",null,r.a.createElement(me.a,{className:t.header},r.a.createElement(de.a,{style:{flexDirection:"column"}},r.a.createElement(j.a,{className:t.headerTextContainer},r.a.createElement(w.a,{className:t.buttonHelper,variant:"caption"},"SELECT A COUNTRY")),r.a.createElement(j.a,{className:t.headerButtonContainer},r.a.createElement(he.a,{size:"large",fullWidth:!1,className:t.button,startIcon:r.a.createElement(ge.a,{className:t.headerText}),"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)}},e.selectedCountry),r.a.createElement(be.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},id:"long-menu",anchorEl:o,getContentAnchorEl:null,open:l,onClose:function(e){s(null)},PaperProps:{style:{maxHeight:216,width:"30ch"}}},e.countryList.map((function(t){return r.a.createElement(pe.a,{key:t,onClick:function(){return function(t){s(null),e.setCountry(t),p()}(t)}},t)})))))),r.a.createElement(Ee.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:m,autoHideDuration:6e3,onClose:h,message:"Set country to ".concat(e.selectedCountry),action:r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{color:"secondary",size:"small",onClick:h}),r.a.createElement(ve.a,{size:"small","aria-label":"close",color:"inherit",onClick:h},r.a.createElement(xe.a,{fontSize:"small"})))}))})),Ce=a(105),je=a(193),we=Object(C.a)((function(e){return{root:{justifyContent:"center"},infoContainer:{textAlign:"center"},info:{color:"grey"}}})),Ne=function(e){e.children;var t=we(),a=r.a.useMemo((function(){return Object(Ce.a)({palette:{type:"light",button:"#212121"}})}),[]);return r.a.createElement(je.a,{theme:a},r.a.createElement(Oe,null),r.a.createElement(oe.a,{className:t.root,container:!0,spacing:2},r.a.createElement(ie,null)),r.a.createElement(j.a,{className:t.infoContainer},r.a.createElement(w.a,{className:t.info,variant:"caption"},"Data provided by api-sports. Updates every 15 minutes.",r.a.createElement("br",null)," Note: some countries may have incomplete/missing data on this API.")))},Te=a(47),ke=(a(55),Object(l.combineReducers)({currentStats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_cur_stats":return Object(Te.a)(Object(Te.a)({},e),t.payload);default:return e}},selectedCountry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Australia",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_country":return t.payload;default:return e}},countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_countries":return t.payload;default:return e}},lastWeekStats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_history":return Object(Te.a)(Object(Te.a)({},e),t.payload);default:return e}}})),De=Object(l.createStore)(ke,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(i.a)));o.a.render(r.a.createElement(s.a,{store:De},r.a.createElement(Ne,null)),document.querySelector("#root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.d9d51db1.chunk.js.map