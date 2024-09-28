import{j as n,r as R,p as z,f as J,P as H}from"./mui-339d5278.js";import{A as ie}from"./AppBar-099626d0.js";import{A as le}from"./AppGrid-43d03ce0.js";import{S as P}from"./index-1a10882a.js";import{S as oe}from"./Search-dc5d6350.js";import{S as ue}from"./SubmenuButton-4ff145d6.js";import{u as Q,q as de,t as fe}from"./index-4495768e.js";import{E as K,P as he,a as ce}from"./react-number-format.es-8e47ecba.js";import{o as Y,O as me,S as ve}from"./order-18d3290c.js";import{b as ge}from"./columnDefs-debc38c5.js";import"./Helmet-265ddaff.js";import"./ResizeObserver.es-f4289e8a.js";import"./browser-38983a41.js";import"./Table-1cb6168e.js";import"./toConsumableArray-c2ba1e09.js";import"./objectWithoutProperties-5dba71f4.js";import"./createSuper-b4b3fdc3.js";import"./toArray-1e25edf2.js";import"./TopSellingProductItem-c3d87b1a.js";import"./helpers-fc71785b.js";import"./index-1f53deeb.js";import"./6-c4059850.js";import"./7-8d12314d.js";import"./StarRating-3f013815.js";import"./options-4eeaed21.js";const pe=()=>n.jsxs(P,{className:"layout-wrapper !pb-0 flex flex-col gap-4 mb-6 md:mb-8 sm:flex-row md:gap-6",children:[n.jsx(oe,{wrapperClass:"flex-1",inputClass:"dark:bg-widget",placeholder:"Search for invoice..."}),n.jsx(ue,{className:"dark:bg-widget",text:"Manage Invoice"}),n.jsx("button",{className:"btn btn--primary",children:"Add New"})]});var O={},U={L:1,M:0,Q:3,H:2},Z={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},xe=Z;function X(e){this.mode=xe.MODE_8BIT_BYTE,this.data=e}X.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var Ae=X,S=U;function x(e,t){this.totalCount=e,this.dataCount=t}x.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];x.getRSBlocks=function(e,t){var a=x.getRsBlockTable(e,t);if(a==null)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=a.length/3,s=new Array,i=0;i<r;i++)for(var o=a[i*3+0],l=a[i*3+1],d=a[i*3+2],f=0;f<o;f++)s.push(new x(l,d));return s};x.getRsBlockTable=function(e,t){switch(t){case S.L:return x.RS_BLOCK_TABLE[(e-1)*4+0];case S.M:return x.RS_BLOCK_TABLE[(e-1)*4+1];case S.Q:return x.RS_BLOCK_TABLE[(e-1)*4+2];case S.H:return x.RS_BLOCK_TABLE[(e-1)*4+3];default:return}};var be=x;function V(){this.buffer=new Array,this.length=0}V.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var a=0;a<t;a++)this.putBit((e>>>t-a-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Ce=V,p={glog:function(e){if(e<1)throw new Error("glog("+e+")");return p.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return p.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var c=0;c<8;c++)p.EXP_TABLE[c]=1<<c;for(var c=8;c<256;c++)p.EXP_TABLE[c]=p.EXP_TABLE[c-4]^p.EXP_TABLE[c-5]^p.EXP_TABLE[c-6]^p.EXP_TABLE[c-8];for(var c=0;c<255;c++)p.LOG_TABLE[p.EXP_TABLE[c]]=c;var q=p,T=q;function I(e,t){if(e.length==null)throw new Error(e.length+"/"+t);for(var a=0;a<e.length&&e[a]==0;)a++;this.num=new Array(e.length-a+t);for(var r=0;r<e.length-a;r++)this.num[r]=e[r+a]}I.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),a=0;a<this.getLength();a++)for(var r=0;r<e.getLength();r++)t[a+r]^=T.gexp(T.glog(this.get(a))+T.glog(e.get(r)));return new I(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=T.glog(this.get(0))-T.glog(e.get(0)),a=new Array(this.getLength()),r=0;r<this.getLength();r++)a[r]=this.get(r);for(var r=0;r<e.getLength();r++)a[r]^=T.gexp(T.glog(e.get(r))+t);return new I(a,0).mod(e)}};var $=I,v=Z,W=$,we=q,w={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},h={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;h.getBCHDigit(t)-h.getBCHDigit(h.G15)>=0;)t^=h.G15<<h.getBCHDigit(t)-h.getBCHDigit(h.G15);return(e<<10|t)^h.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;h.getBCHDigit(t)-h.getBCHDigit(h.G18)>=0;)t^=h.G18<<h.getBCHDigit(t)-h.getBCHDigit(h.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;e!=0;)t++,e>>>=1;return t},getPatternPosition:function(e){return h.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,a){switch(e){case w.PATTERN000:return(t+a)%2==0;case w.PATTERN001:return t%2==0;case w.PATTERN010:return a%3==0;case w.PATTERN011:return(t+a)%3==0;case w.PATTERN100:return(Math.floor(t/2)+Math.floor(a/3))%2==0;case w.PATTERN101:return t*a%2+t*a%3==0;case w.PATTERN110:return(t*a%2+t*a%3)%2==0;case w.PATTERN111:return(t*a%3+(t+a)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new W([1],0),a=0;a<e;a++)t=t.multiply(new W([1,we.gexp(a)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case v.MODE_NUMBER:return 10;case v.MODE_ALPHA_NUM:return 9;case v.MODE_8BIT_BYTE:return 8;case v.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case v.MODE_NUMBER:return 12;case v.MODE_ALPHA_NUM:return 11;case v.MODE_8BIT_BYTE:return 16;case v.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else if(t<41)switch(e){case v.MODE_NUMBER:return 14;case v.MODE_ALPHA_NUM:return 13;case v.MODE_8BIT_BYTE:return 16;case v.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}else throw new Error("type:"+t)},getLostPoint:function(e){for(var t=e.getModuleCount(),a=0,r=0;r<t;r++)for(var s=0;s<t;s++){for(var i=0,o=e.isDark(r,s),l=-1;l<=1;l++)if(!(r+l<0||t<=r+l))for(var d=-1;d<=1;d++)s+d<0||t<=s+d||l==0&&d==0||o==e.isDark(r+l,s+d)&&i++;i>5&&(a+=3+i-5)}for(var r=0;r<t-1;r++)for(var s=0;s<t-1;s++){var f=0;e.isDark(r,s)&&f++,e.isDark(r+1,s)&&f++,e.isDark(r,s+1)&&f++,e.isDark(r+1,s+1)&&f++,(f==0||f==4)&&(a+=3)}for(var r=0;r<t;r++)for(var s=0;s<t-6;s++)e.isDark(r,s)&&!e.isDark(r,s+1)&&e.isDark(r,s+2)&&e.isDark(r,s+3)&&e.isDark(r,s+4)&&!e.isDark(r,s+5)&&e.isDark(r,s+6)&&(a+=40);for(var s=0;s<t;s++)for(var r=0;r<t-6;r++)e.isDark(r,s)&&!e.isDark(r+1,s)&&e.isDark(r+2,s)&&e.isDark(r+3,s)&&e.isDark(r+4,s)&&!e.isDark(r+5,s)&&e.isDark(r+6,s)&&(a+=40);for(var u=0,s=0;s<t;s++)for(var r=0;r<t;r++)e.isDark(r,s)&&u++;var b=Math.abs(100*u/t/t-50)/5;return a+=b*10,a}},Ne=h,Ee=Ae,ee=be,te=Ce,N=Ne,Te=$;function A(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var m=A.prototype;m.addData=function(e){var t=new Ee(e);this.dataList.push(t),this.dataCache=null};m.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]};m.getModuleCount=function(){return this.moduleCount};m.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=ee.getRSBlocks(e,this.errorCorrectLevel),a=new te,r=0,s=0;s<t.length;s++)r+=t[s].dataCount;for(var s=0;s<this.dataList.length;s++){var i=this.dataList[s];a.put(i.mode,4),a.put(i.getLength(),N.getLengthInBits(i.mode,e)),i.write(a)}if(a.getLengthInBits()<=r*8)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())};m.makeImpl=function(e,t){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++){this.modules[a]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[a][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),this.dataCache==null&&(this.dataCache=A.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)};m.setupPositionProbePattern=function(e,t){for(var a=-1;a<=7;a++)if(!(e+a<=-1||this.moduleCount<=e+a))for(var r=-1;r<=7;r++)t+r<=-1||this.moduleCount<=t+r||(0<=a&&a<=6&&(r==0||r==6)||0<=r&&r<=6&&(a==0||a==6)||2<=a&&a<=4&&2<=r&&r<=4?this.modules[e+a][t+r]=!0:this.modules[e+a][t+r]=!1)};m.getBestMaskPattern=function(){for(var e=0,t=0,a=0;a<8;a++){this.makeImpl(!0,a);var r=N.getLostPoint(this);(a==0||e>r)&&(e=r,t=a)}return t};m.createMovieClip=function(e,t,a){var r=e.createEmptyMovieClip(t,a),s=1;this.make();for(var i=0;i<this.modules.length;i++)for(var o=i*s,l=0;l<this.modules[i].length;l++){var d=l*s,f=this.modules[i][l];f&&(r.beginFill(0,100),r.moveTo(d,o),r.lineTo(d+s,o),r.lineTo(d+s,o+s),r.lineTo(d,o+s),r.endFill())}return r};m.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)this.modules[e][6]==null&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)this.modules[6][t]==null&&(this.modules[6][t]=t%2==0)};m.setupPositionAdjustPattern=function(){for(var e=N.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var a=0;a<e.length;a++){var r=e[t],s=e[a];if(this.modules[r][s]==null)for(var i=-2;i<=2;i++)for(var o=-2;o<=2;o++)i==-2||i==2||o==-2||o==2||i==0&&o==0?this.modules[r+i][s+o]=!0:this.modules[r+i][s+o]=!1}};m.setupTypeNumber=function(e){for(var t=N.getBCHTypeNumber(this.typeNumber),a=0;a<18;a++){var r=!e&&(t>>a&1)==1;this.modules[Math.floor(a/3)][a%3+this.moduleCount-8-3]=r}for(var a=0;a<18;a++){var r=!e&&(t>>a&1)==1;this.modules[a%3+this.moduleCount-8-3][Math.floor(a/3)]=r}};m.setupTypeInfo=function(e,t){for(var a=this.errorCorrectLevel<<3|t,r=N.getBCHTypeInfo(a),s=0;s<15;s++){var i=!e&&(r>>s&1)==1;s<6?this.modules[s][8]=i:s<8?this.modules[s+1][8]=i:this.modules[this.moduleCount-15+s][8]=i}for(var s=0;s<15;s++){var i=!e&&(r>>s&1)==1;s<8?this.modules[8][this.moduleCount-s-1]=i:s<9?this.modules[8][15-s-1+1]=i:this.modules[8][15-s-1]=i}this.modules[this.moduleCount-8][8]=!e};m.mapData=function(e,t){for(var a=-1,r=this.moduleCount-1,s=7,i=0,o=this.moduleCount-1;o>0;o-=2)for(o==6&&o--;;){for(var l=0;l<2;l++)if(this.modules[r][o-l]==null){var d=!1;i<e.length&&(d=(e[i]>>>s&1)==1);var f=N.getMask(t,r,o-l);f&&(d=!d),this.modules[r][o-l]=d,s--,s==-1&&(i++,s=7)}if(r+=a,r<0||this.moduleCount<=r){r-=a,a=-a;break}}};A.PAD0=236;A.PAD1=17;A.createData=function(e,t,a){for(var r=ee.getRSBlocks(e,t),s=new te,i=0;i<a.length;i++){var o=a[i];s.put(o.mode,4),s.put(o.getLength(),N.getLengthInBits(o.mode,e)),o.write(s)}for(var l=0,i=0;i<r.length;i++)l+=r[i].dataCount;if(s.getLengthInBits()>l*8)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+l*8+")");for(s.getLengthInBits()+4<=l*8&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=l*8||(s.put(A.PAD0,8),s.getLengthInBits()>=l*8));)s.put(A.PAD1,8);return A.createBytes(s,r)};A.createBytes=function(e,t){for(var a=0,r=0,s=0,i=new Array(t.length),o=new Array(t.length),l=0;l<t.length;l++){var d=t[l].dataCount,f=t[l].totalCount-d;r=Math.max(r,d),s=Math.max(s,f),i[l]=new Array(d);for(var u=0;u<i[l].length;u++)i[l][u]=255&e.buffer[u+a];a+=d;var b=N.getErrorCorrectPolynomial(f),L=new Te(i[l],b.getLength()-1),j=L.mod(b);o[l]=new Array(b.getLength()-1);for(var u=0;u<o[l].length;u++){var B=u+j.getLength()-o[l].length;o[l][u]=B>=0?j.get(B):0}}for(var D=0,u=0;u<t.length;u++)D+=t[u].totalCount;for(var E=new Array(D),y=0,u=0;u<r;u++)for(var l=0;l<t.length;l++)u<i[l].length&&(E[y++]=i[l][u]);for(var u=0;u<s;u++)for(var l=0;l<t.length;l++)u<o[l].length&&(E[y++]=o[l][u]);return E};var je=A,F={};Object.defineProperty(F,"__esModule",{value:!0});var Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},De=z,g=ae(De),re=R,k=ae(re);function ae(e){return e&&e.__esModule?e:{default:e}}function ye(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}var Pe={bgColor:g.default.oneOfType([g.default.object,g.default.string]).isRequired,bgD:g.default.string.isRequired,fgColor:g.default.oneOfType([g.default.object,g.default.string]).isRequired,fgD:g.default.string.isRequired,size:g.default.number.isRequired,title:g.default.string,viewBoxSize:g.default.number.isRequired,xmlns:g.default.string},G=(0,re.forwardRef)(function(e,t){var a=e.bgColor,r=e.bgD,s=e.fgD,i=e.fgColor,o=e.size,l=e.title,d=e.viewBoxSize,f=e.xmlns,u=f===void 0?"http://www.w3.org/2000/svg":f,b=ye(e,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return k.default.createElement("svg",Be({},b,{height:o,ref:t,viewBox:"0 0 "+d+" "+d,width:o,xmlns:u}),l?k.default.createElement("title",null,l):null,k.default.createElement("path",{d:r,fill:a}),k.default.createElement("path",{d:s,fill:i}))});G.displayName="QRCodeSvg";G.propTypes=Pe;F.default=G;Object.defineProperty(O,"__esModule",{value:!0});O.QRCode=void 0;var Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},Re=z,C=M(Re),Me=U,Se=M(Me),ke=je,Ie=M(ke),se=R,Oe=M(se),_e=F,He=M(_e);function M(e){return e&&e.__esModule?e:{default:e}}function Ye(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}var Qe={bgColor:C.default.oneOfType([C.default.object,C.default.string]),fgColor:C.default.oneOfType([C.default.object,C.default.string]),level:C.default.string,size:C.default.number,value:C.default.string.isRequired},_=(0,se.forwardRef)(function(e,t){var a=e.bgColor,r=a===void 0?"#FFFFFF":a,s=e.fgColor,i=s===void 0?"#000000":s,o=e.level,l=o===void 0?"L":o,d=e.size,f=d===void 0?256:d,u=e.value,b=Ye(e,["bgColor","fgColor","level","size","value"]),L=new Ie.default(-1,Se.default[l]);L.addData(u),L.make();var j=L.modules;return Oe.default.createElement(He.default,Le({},b,{bgColor:r,bgD:j.map(function(B,D){return B.map(function(E,y){return E?"":"M "+y+" "+D+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:i,fgD:j.map(function(B,D){return B.map(function(E,y){return E?"M "+y+" "+D+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:t,size:f,viewBoxSize:j.length}))});O.QRCode=_;_.displayName="QRCode";_.propTypes=Qe;var Fe=O.default=_;const Ge={invoiceNumber:"642678",issuedDate:new Date(2023,2,28),dueDate:new Date(2023,3,2),link:"https://1.envato.market/tf-merkulove"},Je=({info:e=Ge})=>{const{width:t}=Q();return n.jsxs(P,{className:"card flex flex-col md:flex-row md:justify-between md:items-center gap-6 !bg-blue p-5 h-full xs:p-6",children:[n.jsxs("div",{className:"text-[var(--header-light)]",children:[n.jsx("h2",{className:"mb-[15px] text-[var(--header-light)]",children:"Invoice Number"}),n.jsxs("ul",{className:"flex flex-col gap-[14px] text-[16px] leading-[1.1] font-medium md:text-[18px]",children:[n.jsxs("li",{children:["No : #",e.invoiceNumber]}),n.jsxs("li",{children:["Issued Date: ",J(e.issuedDate).format("MMM DD, YYYY")]}),n.jsxs("li",{children:["Due Date : ",J(e.dueDate).format("MMM DD, YYYY")]})]})]}),n.jsx("div",{className:"md:w-[132px]",children:n.jsx(Fe,{value:e.link,bgColor:"transparent",fgColor:"var(--header-light)",style:{height:"auto",width:t<768?"60%":"100%"}})})]})},We=()=>n.jsxs(P,{className:"card flex flex-col justify-between !bg-yellow p-5 h-full xs:p-6",children:[n.jsx("h2",{className:"text-[var(--text-light)] mb-[13px]",children:"Invoice to"}),n.jsxs("div",{className:`flex flex-col gap-[14px] text-[var(--text-light)] text-[16px] leading-[1.1] font-medium
                 md:text-[18px]`,children:[n.jsx("p",{children:"Balveer Bhadiar"}),n.jsx("p",{children:"25 Melrose Court, Lafayette"}),n.jsx("p",{children:"43906  United States"})]})]}),ze=()=>{const{width:e}=Q();return n.jsxs(P,{className:"card h-full",children:[n.jsxs("div",{className:"flex items-center justify-between p-5 !pb-[16px] xs:p-6",children:[n.jsx("h2",{children:"Item Detail"}),n.jsx(K,{})]}),n.jsx("div",{className:"border-t border-b",children:e<768?n.jsx("div",{children:Y.map((t,a)=>n.jsx(me,{product:t,isLast:a===Y.length-1},a))}):n.jsx(ve,{dataSource:Y,columns:ge,pagination:!1,scroll:{y:266},showSorterTooltip:!1})}),n.jsx("div",{className:"p-5 !pt-0 xs:p-6 mt-6 md:mt-8",children:n.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("label",{className:"h2",htmlFor:"invoiceComment",children:"Comment"}),n.jsx("textarea",{className:"field-input !py-[14px] !h-[144px]",id:"invoiceComment",placeholder:"Add a Note:  This is a small notes section that only the seller can see."})]}),n.jsxs("div",{className:"flex flex-col gap-10",children:[n.jsxs("ul",{className:"card-container rounded-[10px] font-medium p-4 flex flex-col gap-[14px]",children:[n.jsxs("li",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"uppercase text-xs text-label",children:"Sub Total :"}),n.jsx("span",{children:"$683.17"})]}),n.jsxs("li",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"uppercase text-xs text-label",children:"Discount :"}),n.jsx("span",{children:"$60.00"})]}),n.jsxs("li",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"uppercase text-xs text-label",children:"Shipping Charge :"}),n.jsx("span",{children:"$15.00"})]}),n.jsxs("li",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"uppercase text-xs text-label",children:"Estimated Tax :"}),n.jsx("span",{children:"$0.00"})]}),n.jsxs("li",{className:"flex items-center justify-between font-bold text-header",children:[n.jsx("span",{className:"uppercase",children:"Total (USD) :"}),n.jsx("span",{children:"$638.17"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-6",children:[n.jsx("button",{className:"btn btn--base h-[50px]",children:"Share"}),n.jsx("button",{className:"btn btn--primary",children:"Download"})]})]})]})})]})},Ke=()=>{const[e,t]=R.useState(!1),[a,r]=R.useState("1234123412344566"),[s,i]=R.useState("John Doe"),o=a.replace(/\d(?=\d{4})/g,"x");return n.jsxs(P,{className:"card p-5 min-h-[180px] xs:p-6 md:h-full",children:[n.jsxs("div",{className:"flex gap-2.5 items-center justify-between mb-[18px]",children:[n.jsx("h2",{className:"truncate",children:"Payment Method"}),n.jsx(K,{isActive:e,onClick:()=>t(!e)})]}),n.jsxs("div",{className:"flex flex-col xs:flex-row xs:items-center gap-1 justify-between pb-4 border-b",children:[n.jsx("label",{className:"uppercase font-medium text-xs text-label",htmlFor:"cardNumber",children:"Card Number:"}),n.jsx(he,{className:"bg-transparent xs:text-right",id:"cardNumber",readOnly:!e,value:e?a:o,onChange:l=>r(l.target.value),format:e?"#### #### #### ####":"xxxx xxxx xxxx ####",mask:""})]}),n.jsxs("div",{className:"flex flex-col xs:flex-row xs:items-center justify-between gap-1 pt-4",children:[n.jsx("label",{className:"uppercase font-medium text-xs text-label",htmlFor:"cardHolderName",children:"Card Holder Name:"}),n.jsx("input",{className:"bg-transparent xs:text-right",type:"text",id:"cardHolderName",value:s,onChange:l=>i(l.target.value),readOnly:!e})]})]})},Ue=de.div.withConfig({displayName:"Switch__StyledSwitch",componentId:"sc-1w5on0u-0"})(["input{display:none;&:checked + label span{left:22px;background:var(--peach);}}label{display:block;width:44px;height:24px;background:",";border-radius:12px;position:relative;span{display:block;width:18px;height:18px;background:#fff;border-radius:50%;position:absolute;top:50%;left:4px;transform:translateY(-50%);transition:all var(--transition);}}"],fe("theme",{light:"var(--text-dark)",dark:"var(--border-dark)"})),ne=({id:e,checked:t,onChange:a})=>n.jsxs(Ue,{children:[n.jsx("input",{type:"checkbox",id:e,checked:t,onChange:a}),n.jsx("label",{htmlFor:e,children:n.jsx("span",{})})]});ne.propTypes={id:H.string.isRequired,checked:H.bool,onChange:H.func};const Ze=()=>{const e="Thank you for your order! Payment is expected within 31 day. Please process this invoice within that time.";return n.jsxs(P,{className:"card flex flex-col gap-2 p-5 h-full xs:p-6",children:[n.jsx("h2",{className:"leading-none",children:"Send Invoice"}),n.jsxs("div",{className:"flex flex-col flex-1",children:[n.jsx("textarea",{className:"field-input !min-h-[240px] flex-1 !py-[14px] md:!min-h-[108px]",defaultValue:e,placeholder:"Enter invoice message"}),n.jsxs("div",{className:"flex items-center justify-between mt-[18px] mb-[26px]",children:[n.jsx("p",{className:"text-header font-medium text-[15px]",children:"Attach PDF"}),n.jsx(ne,{id:"attach-pdf"})]}),n.jsx("button",{className:"btn btn--primary w-full",children:"Send Invoice"})]})]})},Xe="data:image/webp;base64,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",Ve={firstName:"Balveer",lastName:"Bhadiar",avatar:Xe,role:"customer",mobile:"+1-9846499950",email:"dashboard@comvi.com",location1:"25 Melrose Court, Lafayette",location2:"United States"},qe={info:n.jsx(Je,{}),receiver:n.jsx(We,{}),client:n.jsx(ce,{data:Ve}),details:n.jsx(ze,{}),method:n.jsx(Ke,{}),send:n.jsx(Ze,{})},Et=()=>{const{width:e}=Q(),t={md:e>=768&&e<1024,lg:e>=1024&&e<1366,xl:e>=1366};return n.jsxs(n.Fragment,{children:[n.jsx(ie,{title:"Invoice"}),n.jsx(pe,{}),n.jsx(le,{id:"invoice",widgets:qe,gridBreakpoints:t})]})};export{Et as default};
