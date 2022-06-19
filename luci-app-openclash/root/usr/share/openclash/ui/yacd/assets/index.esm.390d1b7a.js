import{_ as re,O as k,r as E,Q as ie}from"./index.5901d226.js";function W(n,e){if(n==null)return{};var r={},i=Object.keys(n),a,s;for(s=0;s<i.length;s++)a=i[s],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}var U=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function ne(n,e){return!!(n===e||U(n)&&U(e))}function ae(n,e){if(n.length!==e.length)return!1;for(var r=0;r<n.length;r++)if(!ne(n[r],e[r]))return!1;return!0}function N(n,e){e===void 0&&(e=ae);var r,i=[],a,s=!1;function c(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];return s&&r===this&&e(u,i)||(a=n.apply(this,u),s=!0,r=this,i=u),a}return c}var oe=typeof performance=="object"&&typeof performance.now=="function",$=oe?function(){return performance.now()}:function(){return Date.now()};function q(n){cancelAnimationFrame(n.id)}function se(n,e){var r=$();function i(){$()-r>=e?n.call(null):a.id=requestAnimationFrame(i)}var a={id:requestAnimationFrame(i)};return a}var C=null;function H(n){if(n===void 0&&(n=!1),C===null||n){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var i=document.createElement("div"),a=i.style;return a.width="100px",a.height="100px",e.appendChild(i),document.body.appendChild(e),e.scrollLeft>0?C="positive-descending":(e.scrollLeft=1,e.scrollLeft===0?C="negative":C="positive-ascending"),document.body.removeChild(e),C}return C}var le=150,ce=function(e,r){return e};function j(n){var e,r=n.getItemOffset,i=n.getEstimatedTotalSize,a=n.getItemSize,s=n.getOffsetForIndexAndAlignment,c=n.getStartIndexForOffset,u=n.getStopIndexForStartIndex,v=n.initInstanceProps,y=n.shouldResetStyleCacheOnItemSizeChange,M=n.validateProps;return e=function(x){re(p,x);function p(h){var t;return t=x.call(this,h)||this,t._instanceProps=v(t.props,k(t)),t._outerRef=void 0,t._resetIsScrollingTimeoutId=null,t.state={instance:k(t),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof t.props.initialScrollOffset=="number"?t.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},t._callOnItemsRendered=void 0,t._callOnItemsRendered=N(function(o,l,f,d){return t.props.onItemsRendered({overscanStartIndex:o,overscanStopIndex:l,visibleStartIndex:f,visibleStopIndex:d})}),t._callOnScroll=void 0,t._callOnScroll=N(function(o,l,f){return t.props.onScroll({scrollDirection:o,scrollOffset:l,scrollUpdateWasRequested:f})}),t._getItemStyle=void 0,t._getItemStyle=function(o){var l=t.props,f=l.direction,d=l.itemSize,g=l.layout,m=t._getItemStyleCache(y&&d,y&&g,y&&f),I;if(m.hasOwnProperty(o))I=m[o];else{var z=r(t.props,o,t._instanceProps),O=a(t.props,o,t._instanceProps),T=f==="horizontal"||g==="horizontal",R=f==="rtl",b=T?z:0;m[o]=I={position:"absolute",left:R?void 0:b,right:R?b:void 0,top:T?0:z,height:T?"100%":O,width:T?O:"100%"}}return I},t._getItemStyleCache=void 0,t._getItemStyleCache=N(function(o,l,f){return{}}),t._onScrollHorizontal=function(o){var l=o.currentTarget,f=l.clientWidth,d=l.scrollLeft,g=l.scrollWidth;t.setState(function(m){if(m.scrollOffset===d)return null;var I=t.props.direction,z=d;if(I==="rtl")switch(H()){case"negative":z=-d;break;case"positive-descending":z=g-f-d;break}return z=Math.max(0,Math.min(z,g-f)),{isScrolling:!0,scrollDirection:m.scrollOffset<d?"forward":"backward",scrollOffset:z,scrollUpdateWasRequested:!1}},t._resetIsScrollingDebounced)},t._onScrollVertical=function(o){var l=o.currentTarget,f=l.clientHeight,d=l.scrollHeight,g=l.scrollTop;t.setState(function(m){if(m.scrollOffset===g)return null;var I=Math.max(0,Math.min(g,d-f));return{isScrolling:!0,scrollDirection:m.scrollOffset<I?"forward":"backward",scrollOffset:I,scrollUpdateWasRequested:!1}},t._resetIsScrollingDebounced)},t._outerRefSetter=function(o){var l=t.props.outerRef;t._outerRef=o,typeof l=="function"?l(o):l!=null&&typeof l=="object"&&l.hasOwnProperty("current")&&(l.current=o)},t._resetIsScrollingDebounced=function(){t._resetIsScrollingTimeoutId!==null&&q(t._resetIsScrollingTimeoutId),t._resetIsScrollingTimeoutId=se(t._resetIsScrolling,le)},t._resetIsScrolling=function(){t._resetIsScrollingTimeoutId=null,t.setState({isScrolling:!1},function(){t._getItemStyleCache(-1,null)})},t}p.getDerivedStateFromProps=function(t,o){return ue(t,o),M(t),null};var S=p.prototype;return S.scrollTo=function(t){t=Math.max(0,t),this.setState(function(o){return o.scrollOffset===t?null:{scrollDirection:o.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},S.scrollToItem=function(t,o){o===void 0&&(o="auto");var l=this.props.itemCount,f=this.state.scrollOffset;t=Math.max(0,Math.min(t,l-1)),this.scrollTo(s(this.props,t,o,f,this._instanceProps))},S.componentDidMount=function(){var t=this.props,o=t.direction,l=t.initialScrollOffset,f=t.layout;if(typeof l=="number"&&this._outerRef!=null){var d=this._outerRef;o==="horizontal"||f==="horizontal"?d.scrollLeft=l:d.scrollTop=l}this._callPropsCallbacks()},S.componentDidUpdate=function(){var t=this.props,o=t.direction,l=t.layout,f=this.state,d=f.scrollOffset,g=f.scrollUpdateWasRequested;if(g&&this._outerRef!=null){var m=this._outerRef;if(o==="horizontal"||l==="horizontal")if(o==="rtl")switch(H()){case"negative":m.scrollLeft=-d;break;case"positive-ascending":m.scrollLeft=d;break;default:var I=m.clientWidth,z=m.scrollWidth;m.scrollLeft=z-I-d;break}else m.scrollLeft=d;else m.scrollTop=d}this._callPropsCallbacks()},S.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&q(this._resetIsScrollingTimeoutId)},S.render=function(){var t=this.props,o=t.children,l=t.className,f=t.direction,d=t.height,g=t.innerRef,m=t.innerElementType,I=t.innerTagName,z=t.itemCount,O=t.itemData,T=t.itemKey,R=T===void 0?ce:T,b=t.layout,G=t.outerElementType,Q=t.outerTagName,Z=t.style,J=t.useIsScrolling,X=t.width,L=this.state.isScrolling,F=f==="horizontal"||b==="horizontal",Y=F?this._onScrollHorizontal:this._onScrollVertical,P=this._getRangeToRender(),ee=P[0],te=P[1],A=[];if(z>0)for(var w=ee;w<=te;w++)A.push(E.exports.createElement(o,{data:O,key:R(w,O),index:w,isScrolling:J?L:void 0,style:this._getItemStyle(w)}));var D=i(this.props,this._instanceProps);return E.exports.createElement(G||Q||"div",{className:l,onScroll:Y,ref:this._outerRefSetter,style:ie({position:"relative",height:d,width:X,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:f},Z)},E.exports.createElement(m||I||"div",{children:A,ref:g,style:{height:F?"100%":D,pointerEvents:L?"none":void 0,width:F?D:"100%"}}))},S._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var t=this.props.itemCount;if(t>0){var o=this._getRangeToRender(),l=o[0],f=o[1],d=o[2],g=o[3];this._callOnItemsRendered(l,f,d,g)}}if(typeof this.props.onScroll=="function"){var m=this.state,I=m.scrollDirection,z=m.scrollOffset,O=m.scrollUpdateWasRequested;this._callOnScroll(I,z,O)}},S._getRangeToRender=function(){var t=this.props,o=t.itemCount,l=t.overscanCount,f=this.state,d=f.isScrolling,g=f.scrollDirection,m=f.scrollOffset;if(o===0)return[0,0,0,0];var I=c(this.props,m,this._instanceProps),z=u(this.props,I,m,this._instanceProps),O=!d||g==="backward"?Math.max(1,l):1,T=!d||g==="forward"?Math.max(1,l):1;return[Math.max(0,I-O),Math.max(0,Math.min(o-1,z+T)),I,z]},p}(E.exports.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var ue=function(e,r){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,r.instance},fe=50,_=function(e,r,i){var a=e,s=a.itemSize,c=i.itemMetadataMap,u=i.lastMeasuredIndex;if(r>u){var v=0;if(u>=0){var y=c[u];v=y.offset+y.size}for(var M=u+1;M<=r;M++){var x=s(M);c[M]={offset:v,size:x},v+=x}i.lastMeasuredIndex=r}return c[r]},de=function(e,r,i){var a=r.itemMetadataMap,s=r.lastMeasuredIndex,c=s>0?a[s].offset:0;return c>=i?B(e,r,s,0,i):me(e,r,Math.max(0,s),i)},B=function(e,r,i,a,s){for(;a<=i;){var c=a+Math.floor((i-a)/2),u=_(e,c,r).offset;if(u===s)return c;u<s?a=c+1:u>s&&(i=c-1)}return a>0?a-1:0},me=function(e,r,i,a){for(var s=e.itemCount,c=1;i<s&&_(e,i,r).offset<a;)i+=c,c*=2;return B(e,r,Math.min(i,s-1),Math.floor(i/2),a)},K=function(e,r){var i=e.itemCount,a=r.itemMetadataMap,s=r.estimatedItemSize,c=r.lastMeasuredIndex,u=0;if(c>=i&&(c=i-1),c>=0){var v=a[c];u=v.offset+v.size}var y=i-c-1,M=y*s;return u+M},Se=j({getItemOffset:function(e,r,i){return _(e,r,i).offset},getItemSize:function(e,r,i){return i.itemMetadataMap[r].size},getEstimatedTotalSize:K,getOffsetForIndexAndAlignment:function(e,r,i,a,s){var c=e.direction,u=e.height,v=e.layout,y=e.width,M=c==="horizontal"||v==="horizontal",x=M?y:u,p=_(e,r,s),S=K(e,s),h=Math.max(0,Math.min(S-x,p.offset)),t=Math.max(0,p.offset-x+p.size);switch(i==="smart"&&(a>=t-x&&a<=h+x?i="auto":i="center"),i){case"start":return h;case"end":return t;case"center":return Math.round(t+(h-t)/2);case"auto":default:return a>=t&&a<=h?a:a<t?t:h}},getStartIndexForOffset:function(e,r,i){return de(e,i,r)},getStopIndexForStartIndex:function(e,r,i,a){for(var s=e.direction,c=e.height,u=e.itemCount,v=e.layout,y=e.width,M=s==="horizontal"||v==="horizontal",x=M?y:c,p=_(e,r,a),S=i+x,h=p.offset+p.size,t=r;t<u-1&&h<S;)t++,h+=_(e,t,a).size;return t},initInstanceProps:function(e,r){var i=e,a=i.estimatedItemSize,s={itemMetadataMap:{},estimatedItemSize:a||fe,lastMeasuredIndex:-1};return r.resetAfterIndex=function(c,u){u===void 0&&(u=!0),s.lastMeasuredIndex=Math.min(s.lastMeasuredIndex,c-1),r._getItemStyleCache(-1),u&&r.forceUpdate()},s},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}}),Ie=j({getItemOffset:function(e,r){var i=e.itemSize;return r*i},getItemSize:function(e,r){var i=e.itemSize;return i},getEstimatedTotalSize:function(e){var r=e.itemCount,i=e.itemSize;return i*r},getOffsetForIndexAndAlignment:function(e,r,i,a){var s=e.direction,c=e.height,u=e.itemCount,v=e.itemSize,y=e.layout,M=e.width,x=s==="horizontal"||y==="horizontal",p=x?M:c,S=Math.max(0,u*v-p),h=Math.min(S,r*v),t=Math.max(0,r*v-p+v);switch(i==="smart"&&(a>=t-p&&a<=h+p?i="auto":i="center"),i){case"start":return h;case"end":return t;case"center":{var o=Math.round(t+(h-t)/2);return o<Math.ceil(p/2)?0:o>S+Math.floor(p/2)?S:o}case"auto":default:return a>=t&&a<=h?a:a<t?t:h}},getStartIndexForOffset:function(e,r){var i=e.itemCount,a=e.itemSize;return Math.max(0,Math.min(i-1,Math.floor(r/a)))},getStopIndexForStartIndex:function(e,r,i){var a=e.direction,s=e.height,c=e.itemCount,u=e.itemSize,v=e.layout,y=e.width,M=a==="horizontal"||v==="horizontal",x=r*u,p=M?y:s,S=Math.ceil((p+i-x)/u);return Math.max(0,Math.min(c-1,r+S-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}});function V(n,e){for(var r in n)if(!(r in e))return!0;for(var i in e)if(n[i]!==e[i])return!0;return!1}var he=["style"],ve=["style"];function ge(n,e){var r=n.style,i=W(n,he),a=e.style,s=W(e,ve);return!V(r,a)&&!V(i,s)}export{Ie as F,Se as V,ge as a};
