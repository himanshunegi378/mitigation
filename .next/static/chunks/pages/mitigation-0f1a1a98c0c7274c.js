(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{7491:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mitigation",function(){return t(158)}])},158:function(e,n,t){"use strict";t.r(n),t.d(n,{QuestionBlock:function(){return u},default:function(){return x}});var i=t(5893),s=t(9008),d=t.n(s),r=t(9457);t(5367);var l=t(7294),o=t(3985),c=t(4056);function u(e){let{id:n,question:t,answers:s,selected:d,onAnswerChange:r}=e,[o]=(0,l.useState)(Math.random().toString(36).substring(7));return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:t}),(0,i.jsx)("div",{children:s.map((e,t)=>(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"radio",name:o,id:o+n+e.id,value:e.value,checked:d===e.id,onChange:n=>{r(e)}}),(0,i.jsx)("label",{htmlFor:o+n+e.id,title:e.longText,children:e.text})]},t))})]})}let a=e=>{let{headers:n,rows:t}=e,i=n.findIndex(e=>"Screen"===e),s=n.findIndex(e=>"Screen Name"===e),d=n.findIndex(e=>"Question #"===e),r=n.findIndex(e=>"Question"===e),l=n.findIndex(e=>"Answer Value"===e),o=n.findIndex(e=>"Answer Text"===e),c=n.findIndex(e=>"Answer MouseOver"===e),u=n.findIndex(e=>"M1015"===e),a=n.findIndex(e=>"M1016"===e),x={};for(let e=0;e<t.length;e++){let n=t[e],h=n[i],f=n[s],p=n[d],j=n[r],v=n[l],m=n[o],_=n[c];n.slice(u,a+1).reduce((e,n)=>e+parseFloat(n),0),x[h]||(x[h]={id:h,text:f,questions:[]});let w=x[h],g=w.questions.find(e=>e.id===p);g?g.answers.push({id:v,text:m,longText:_,value:v}):w.questions.push({id:p,question:j,answers:[{id:v,text:m,longText:_,value:v}]})}return{screens:x}};function x(){let{tableData:e,setTableData:n}=(0,o.Z)(),[t,s]=(0,l.useState)(void 0),[x,h]=(0,r.x)({});(0,l.useEffect)(()=>{h(a(e).screens)},[h,e]);let f=e=>{let n=Object.values(x).map(e=>({screen_name:e.text,questions_response:e.questions.filter(e=>"selected"in e).map(e=>({question_id:parseInt(e.id),answer_value:parseInt(e.selected)}))})).filter(e=>e.questions_response.length>0);(0,c.YB)({screen_questions:n}).then(s)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{children:[(0,i.jsx)("div",{children:Object.values(x).map((e,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{style:{position:"sticky",top:0,background:"white",zIndex:1},children:e.text}),e.questions.map((n,t)=>(0,i.jsx)(u,{...n,onAnswerChange:n=>{h(i=>{i[e.id].questions[t].selected=n.id})}},t))]},e.id))}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{onClick:f,children:"Submit"})}),(0,i.jsx)("div",{children:"object"==typeof t&&(0,i.jsx)("pre",{children:JSON.stringify(t,null,2)})})]})]})}},9008:function(e,n,t){e.exports=t(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7491)}),_N_E=e.O()}]);