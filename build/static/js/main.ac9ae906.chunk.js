(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(7),o=n.n(c),i=(n(15),n(9)),u=n(8),l=n(2),b=n(3),d=n(5),h=n(4),p=function(e){var t=e.totalCounters;return Object(r.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(r.jsxs)("a",{className:"navbar-brand",href:"#",children:["Navbar"," ",Object(r.jsx)("span",{className:"badge badge-pill badge-secondary",children:t})]})})},j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"renderTags",value:function(){return 0===this.state.tags.length?Object(r.jsx)("p",{children:"There are no tags!"}):Object(r.jsx)("ul",{children:this.state.tags.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})}},{key:"render",value:function(){var e=this;return console.log("props",this.props),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:this.getBadgeClasses(),children:this.props.counter.value}),Object(r.jsx)("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm",children:"Increment"}),Object(r.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2",children:"Delete"})]})}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(a.Component),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.counters,a=e.onDelete,s=e.onIncrement;return Object(r.jsxs)("div",{style:{textAlign:"center"},children:[Object(r.jsx)("button",{onClick:t,className:"btn btn-primary btn-sm m-2",children:"Reset"}),n.map((function(e){return Object(r.jsx)(j,{onDelete:a,onIncrement:s,counter:e},e.id)}))]})}}]),n}(a.Component),v=(n(16),n.p+"static/media/iron_texture1049.4387b832.jpg"),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handlerIncrement=function(t){var n=Object(u.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(i.a)({},t),n[r].value++,e.setState({counters:n})},e.handlerDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handlerReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)("img",{src:v,alt:"",style:{width:"100%",height:window.innerHeight}}),Object(r.jsxs)("div",{style:{position:"absolute",width:"100%",height:"50px",left:0,top:0,right:0,margin:"auto",zIndex:"9999",backgroundColor:"#ff0000"},children:[" ",Object(r.jsx)(p,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length})]}),Object(r.jsx)("div",{style:{position:"absolute",width:"250px",height:"240px",left:0,top:0,right:0,bottom:0,margin:"auto",zIndex:"9999",backgroundColor:"rgba(0, 0, 0, 0.9)",border:"1px solid red",borderRadius:"25px"},children:Object(r.jsx)("main",{className:"container",children:Object(r.jsx)(g,{counters:this.state.counters,onReset:this.handlerReset,onIncrement:this.handlerIncrement,onDelete:this.handlerDelete})})})]})}}]),n}(a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};n(17);o.a.render(Object(r.jsx)(f,{}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.ac9ae906.chunk.js.map