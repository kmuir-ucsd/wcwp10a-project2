(this.webpackJsonpgnd=this.webpackJsonpgnd||[]).push([[0],{156:function(e,t,a){e.exports=a.p+"static/media/background.959c3028.jpg"},170:function(e,t,a){e.exports=a(284)},175:function(e,t,a){},176:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(81),i=a.n(l),o=(a(175),a(27)),c=(a(176),a(309)),s=a(157),u=a(317),m=a(321),h=a(320),w=a(322),d=a(323);var p=a(304),g=a(306),y=a(307),x=function(e,t,a){return e+(t-e)*a},f=function(e,t){var a,n,r=1/0,l=-1/0,i=null,c=null;return e.forEach((function(e){var a=e.index,n=e.value;if(a===t)return console.log("using endpoint ".concat(a," value ").concat(n[n.length-1].y)),n;a<r&&a>t&&(r=a,i=n),a>l&&a<t&&(l=a,c=n)})),i?c?(a=i,n=(t-l)/(r-l),c.map((function(e,t){return[e,a[t]]})).map((function(e){for(var t=Object(o.a)(e,2),a=t[0],r=t[1],l={},i=0,c=Object.keys(a);i<c.length;i++){var s=c[i];l[s]=x(a[s],r[s],n)}return l}))):i:c},b=function(e){var t=e.source,a=e.index,l=e.peakCallback,i=e.endCallback,c=t.data,x=t.name,b=function(e,t){var a=Object(n.useState)(e),r=Object(o.a)(a,2),l=r[0],i=r[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),u=s[0],m=s[1];return u||l===e||(m(!0),i(e),setTimeout((function(){m(!1)}),t)),l}(a,200),E=Object(n.useMemo)((function(){var e=-1/0,t=0;return c.forEach((function(a){return a.value.forEach((function(a){var n=a.x,r=a.y,l=a.w;r>e&&(e=r+l/2,t=n)}))})),l&&(console.log(t),l(t)),e}),[c,l]),v=Object(n.useMemo)((function(){var e=1/0;return c.forEach((function(t){return t.value.forEach((function(t){var a=t.y,n=t.w;a<e&&(e=a-n/2)}))})),e}),[c]),k=(E-v)/10,j=Object(n.useMemo)((function(){return f(c,b)}),[c,b]);if(l){var O=-1/0,C=0;j.forEach((function(e){var t=e.x,a=e.y;a>O&&(O=a,C=t)})),l(C)}i&&i(j[j.length-1].y);var R=Object(n.useMemo)((function(){return j.map((function(e){return Object(s.a)({top:e.y+e.w/2,bottom:e.y-e.w/2},e)}))}),[j]);return r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},x),r.a.createElement(u.a,{maxDomain:{y:E+k},minDomain:{y:v-k},theme:m.a.grayscale,padding:{top:10,bottom:10,left:50,right:50}},r.a.createElement(h.a,{dependentAxis:!0,tickFormat:function(e){return"".concat(e)}}),r.a.createElement(h.a,{tickFormat:function(e){return"".concat(e)}}),r.a.createElement(w.a,{data:R,x:"x",y:"bottom",y0:"top",style:{data:{fill:"#0040ff",opacity:.5}},interpolation:"catmullRom"}),r.a.createElement(d.a,{data:R,style:{data:{stroke:"#0040ff"}},interpolation:"catmullRom"}))))},E={name:"C02 Concentration (ppm)",data:[{index:2.59,value:[{x:2e3,y:370,w:1},{x:2020,y:400,w:1},{x:2040,y:440,w:25},{x:2060,y:430,w:50},{x:2080,y:420,w:75},{x:2100,y:410,w:100}]},{index:4.49,value:[{x:2e3,y:370,w:1},{x:2020,y:400,w:1},{x:2040,y:450,w:25},{x:2060,y:500,w:50},{x:2080,y:510,w:75},{x:2100,y:520,w:100}]},{index:6.01,value:[{x:2e3,y:370,w:1},{x:2020,y:400,w:1},{x:2040,y:440,w:25},{x:2060,y:520,w:50},{x:2080,y:570,w:75},{x:2100,y:610,w:100}]},{index:8.49,value:[{x:2e3,y:370,w:1},{x:2020,y:400,w:1},{x:2040,y:500,w:25},{x:2060,y:600,w:50},{x:2080,y:720,w:75},{x:2100,y:950,w:100}]}]},v={name:"Sea Level Rise (m)",data:[{index:2.59,value:[{x:2e3,y:0,w:0},{x:2025,y:.1,w:.05},{x:2050,y:.2,w:.1},{x:2075,y:.3,w:.2},{x:2100,y:.4,w:.3}]},{index:4.49,value:[{x:2e3,y:0,w:0},{x:2025,y:.12,w:.05},{x:2050,y:.24,w:.1},{x:2075,y:.36,w:.2},{x:2100,y:.5,w:.3}]},{index:8.49,value:[{x:2e3,y:0,w:0},{x:2025,y:.12,w:.05},{x:2050,y:.3,w:.1},{x:2075,y:.5,w:.2},{x:2100,y:.85,w:.3}]}]},k={name:"C02 Emissions (GtC)",data:[{index:2.59,value:[{x:2e3,y:7.5,w:1},{x:2010,y:8.5,w:1},{x:2020,y:10,w:1},{x:2030,y:7.5,w:1},{x:2040,y:5,w:1},{x:2050,y:3,w:1},{x:2060,y:2,w:1},{x:2070,y:1,w:1},{x:2080,y:0,w:1},{x:2090,y:-1,w:1},{x:2100,y:-1,w:1}]},{index:4.49,value:[{x:2e3,y:7.5,w:1},{x:2010,y:8,w:1},{x:2020,y:9,w:1},{x:2030,y:10,w:1},{x:2040,y:11,w:1},{x:2050,y:10,w:1},{x:2060,y:8,w:1},{x:2070,y:6,w:1},{x:2080,y:4,w:1},{x:2090,y:4,w:1},{x:2100,y:4,w:1}]},{index:6.01,value:[{x:2e3,y:7.5,w:1},{x:2010,y:8,w:1},{x:2020,y:8.5,w:1},{x:2030,y:9,w:1},{x:2040,y:12,w:1},{x:2050,y:15,w:1},{x:2060,y:17.5,w:1},{x:2070,y:16,w:1},{x:2080,y:14,w:1},{x:2090,y:13,w:1},{x:2100,y:13,w:1}]},{index:8.49,value:[{x:2e3,y:7.5,w:1},{x:2010,y:10,w:1},{x:2020,y:12.5,w:1},{x:2030,y:15,w:1},{x:2040,y:17.5,w:1},{x:2050,y:20,w:1},{x:2060,y:22,w:1},{x:2070,y:25,w:1},{x:2080,y:25.5,w:1},{x:2090,y:26,w:1},{x:2100,y:26,w:1}]}]},j={name:"Average Temprature Change (\u2103)",data:[{index:2.59,value:[{x:2e3,y:.1,w:.25},{x:2020,y:.5,w:.5},{x:2040,y:.9,w:.75},{x:2060,y:1,w:1},{x:2080,y:1,w:1.25},{x:2100,y:1,w:1.5}]},{index:8,value:[{x:2e3,y:.1,w:.25},{x:2020,y:.5,w:.5},{x:2040,y:1.25,w:1},{x:2060,y:2.5,w:1.5},{x:2080,y:3.5,w:2},{x:2100,y:4.1,w:2.5}]}]},O=a(312),C=a(311),R=a(310),T=a(313),I=a(156),N=a.n(I),F=a(316),S=a(14),G=Object(S.a)({root:{height:6},thumb:{height:24,width:24,border:"2px solid currentColor",marginTop:-10,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{color:"#ffffff",height:8,borderRadius:4},rail:{height:6,borderRadius:4}})(F.a),B=function(e){var t=e.position,a=e.setPosition;return r.a.createElement(G,{value:t,onChange:function(e,t){a(t)},valueLabelDisplay:"on",track:!1,max:8.5,min:2.6,step:.1})},P=(a(283),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"We have begun to experience the effects of climate change, however, the extent to which these effects will ultimately progress is still uncertain. The main source of this uncertainty, particularly regarding the climate in the second half of this century, comes from the as yet unknown human response to climate change. In order to represent these different responses and their impact on climate change, the IPCC uses Representative Concentration Pathways."),r.a.createElement("p",null,"The scenarios range from the best case, RCP 2.6, to the worst case, RCP 8.5. The number of each pathway is the radiative forcing value at the end of the century in each scenario. Radiative forcing values measure the proportion of the sun\u2019s energy absorbed into the earth instead of radiating back into space, and are dependent upon the concentration of greenhouse gasses in the atmosphere."),r.a.createElement("p",null,"The scenario that becomes reality will be dependent upon our net greenhouse gas emissions over the coming decades. If we quickly stabilize and then lower our emissions we will end up in a lower radiative forcing value scenario, but if we continue to increase our emissions at the current rate, we will quickly end up in the worst case scenario."),r.a.createElement("p",null,"Use the slider at the bottom of the page to adjust the scenario for climate change that is shown. Each graph shows the predicted value over the remainder of the century of an important measurement related to climate change. The shaded area represents the uncertainty associated with each prediction. After exploring the different scenarios for climate change read below about the green new deal, a proposal that would prevent the worst scenarios for climate change from occurring."))}),A=function(e){var t=e.peak;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Greenhouse gas emissions are the most important control we have over climate change. The most important greenhouse gas is carbon dioxide, but other gasses such as methane or sulfur dioxide also contribute.  One important metric to pay attention to is when our emissions will reach their peak and begin declining. In the current scenario, emissions will peak around ",t,"."))},_=function(e){var t=e.end;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Greenhouse gas concentrations are affected by our cumulative emissions, and determine the level of radiative forcing. Higher concentrations of greenhouse gases result in higher temperatures and more severe impacts. In the current scenario, CO2 concentrations will be ",t,"ppm at the end of the century."))},z=function(e){var t=e.end;return r.a.createElement(r.a.Fragment,null,"Increased temperatures result in shrinking ice sheets, raising the sea level. Rising sea levels threaten to inundate coastal cities, forcing people and industries near the ocean to move to higher ground. In the current scenario, sea levels will have risen by ",t,"m by the end of the century.")},D=function(e){var t=e.end;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Rising global tempratures result in heat waves that are more frequent and intense, crop failures, rising sea levels, more frequent and severe natural disasters, and ocean acidification. Temperature changes are measured against the pre-industrial average. One important threshold to pay attention to is 2 degrees of warming. At 2 degrees rising temperatures also lead to positive feedback cycles that will warm the earth even faster. In the current scenario, at the end of the century the average global temperature will be ",t," degrees celcius higher than the pre-industrial average."))},H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"An action all of us in America can take to avoid the worst scenarios for climate change is to support the green new deal. The green new deal is a proposal to rapidly shift our energy infrastructure to carbon neutral solutions, through world war two scale investment in research and public works projects. The green new deal aims to transition our economy to 100% renewable energy by 2030. Because the time we have to begin reducing our emissions is so short if we want to guarantee the best scenario for global warming, a project this ambitious is our best hope."),r.a.createElement("p",null,"Find out whether your elected officials support the green new deal, and make climate change part of your decision when voting."),r.a.createElement("p",null,"Read more about the green new deal here: ",r.a.createElement("a",{href:"https://www.gp.org/green_new_deal"},"https://www.gp.org/green_new_deal")))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://link.springer.com/article/10.1007/s10584-011-0148-z"},"https://link.springer.com/article/10.1007/s10584-011-0148-z"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.ipcc-data.org/guidelines/pages/glossary/glossary_r.html"},"https://www.ipcc-data.org/guidelines/pages/glossary/glossary_r.html"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://skepticalscience.com/rcp.php?t=1"},"https://skepticalscience.com/rcp.php?t=1"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.wri.org/blog/2018/08/why-positive-climate-feedbacks-are-so-bad"},"https://www.wri.org/blog/2018/08/why-positive-climate-feedbacks-are-so-bad"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.ucsusa.org/climate/impacts"},"https://www.ucsusa.org/climate/impacts"),r.a.createElement("br",null))},q=Object(c.a)((function(e){return{bg:{backgroundImage:"url(".concat(Image,")")},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,background:"transparent",boxShadow:"none"},pair:{flexGrow:1,display:"flex",flexDirection:"row",justifyContent:"center",allignItems:"center",allignContent:"space-between"},item:{flexGrow:2,maxWidth:750},text:{flexGrow:1,maxWidth:600},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},title:{color:"#313436"},bottom:{minHeight:150}}}));i.a.render(r.a.createElement((function(){var e=q(),t=Object(n.useState)(5),a=Object(o.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)(2020),s=Object(o.a)(c,2),u=s[0],m=s[1],h=Object(n.useState)(0),w=Object(o.a)(h,2),d=w[0],x=w[1],f=Object(n.useState)(0),I=Object(o.a)(f,2),F=I[0],S=I[1],G=Object(n.useState)(0),M=Object(o.a)(G,2),W=M[0],J=M[1];return r.a.createElement("div",{style:{backgroundImage:"url(".concat(N.a,")"),backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover",backgroundPosition:"center",minHeight:100}},r.a.createElement(R.a,{maxWidth:"lg"},r.a.createElement(T.a,{padding:5},r.a.createElement(y.a,{variant:"h1",className:e.title},"The world in 2100:"),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h2",className:e.title},"Scenarios for climate change and the green new deal")),r.a.createElement(T.a,{paddingY:5},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{variant:"h4"},"Representative Concentration Pathways"),r.a.createElement("br",null),r.a.createElement(P,null)))),r.a.createElement(C.a,{container:!0,spacing:5,className:e.pair},r.a.createElement(C.a,{item:!0,className:e.item},r.a.createElement(b,{source:k,index:l,peakCallback:m})),r.a.createElement(C.a,{item:!0,className:e.text},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{variant:"h4"},"Green House Gas Emissions"),r.a.createElement("br",null),r.a.createElement(A,{peak:u})))),r.a.createElement(C.a,{item:!0,className:e.item},r.a.createElement(b,{source:E,index:l,endCallback:J})),r.a.createElement(C.a,{item:!0,className:e.text},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{variant:"h4"},"Green House Gas Concentration"),r.a.createElement("br",null),r.a.createElement(_,{end:W.toFixed()})))),r.a.createElement(C.a,{item:!0,className:e.item},r.a.createElement(b,{source:j,index:l,endCallback:x})),r.a.createElement(C.a,{item:!0,className:e.text},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{variant:"h4"},"Temprature Change"),r.a.createElement("br",null),r.a.createElement(D,{end:d.toFixed(2)})))),r.a.createElement(C.a,{item:!0,className:e.item},r.a.createElement(b,{source:v,index:l,endCallback:S})),r.a.createElement(C.a,{item:!0,className:e.text},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{variant:"h4"},"Sea Level Rise"),r.a.createElement("br",null),r.a.createElement(z,{end:F.toFixed(2)}))))),r.a.createElement(T.a,{paddingY:5},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{variant:"h4"},"The Green New Deal"),r.a.createElement("br",null),r.a.createElement(H,null)))),r.a.createElement(T.a,null,r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{variant:"h6"},"Refrences"),r.a.createElement("br",null),r.a.createElement(L,null)))),r.a.createElement("div",{className:e.bottom})),r.a.createElement(O.a,{position:"fixed",className:e.appBar},r.a.createElement(T.a,{padding:1,paddingX:5},r.a.createElement(B,{position:l,setPosition:i}))))}),null),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.421a55fe.chunk.js.map