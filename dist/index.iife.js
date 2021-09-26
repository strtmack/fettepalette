var fettePalette=(()=>{var g=Object.defineProperty;var w=Math.pow;var Y=e=>g(e,"__esModule",{value:!0});var H=(e,o)=>{Y(e);for(var n in o)g(e,n,{get:o[n],enumerable:!0})};var N={};H(N,{generateRandomColorRamp:()=>F,generateRandomColorRampParams:()=>G,hsv2hsl:()=>c,pointOnCurve:()=>M,random:()=>I});var c=(e,o,n,t=n-n*o/2,s=Math.min(t,1-t))=>[e,s?(n-t)/s:0,t],I=(e,o)=>(o||(o=e,e=0),Math.random()*(o-e)+e),M=(e,o,n,t,s=[0,0],m=[1,1])=>{let d=Math.PI/2,u=d/n,a=o/n,p=0,r=0;if(e==="lam\xE9"){let l=a*d,i=2/(2+20*t),f=Math.cos(l),h=Math.sin(l);p=Math.sign(f)*w(Math.abs(f),i),r=Math.sign(h)*w(Math.abs(h),i)}else if(e==="arc")r=Math.cos(-Math.PI/2+o*u+t),p=Math.sin(Math.PI/2+o*u-t);else if(e==="pow")p=Math.pow(1-a,1-t),r=Math.pow(a,1-t);else if(e==="powY")p=Math.pow(1-a,t),r=Math.pow(a,1-t);else if(e==="powX")p=Math.pow(a,t),r=Math.pow(a,1-t);else if(typeof e=="function")p=e(a)[0],r=e(a)[1];else throw new Error(`pointOnCurve() curveAccent parameter is expected to be "lam\xE9" | "arc" | "pow" | "powY" | "powX" or a function but \`${e}\` given.`);return p=s[0]+Math.min(Math.max(p,0),1)*(m[0]-s[0]),r=s[1]+Math.min(Math.max(r,0),1)*(m[1]-s[1]),[p,r]};function F({total:e=3,centerHue:o=0,hueCycle:n=.3,offsetTint:t=.1,offsetShade:s=.1,curveAccent:m=0,tintShadeHueShift:d=.1,curveMethod:u="arc",offsetCurveModTint:a=.03,offsetCurveModShade:p=.03,minSaturationLight:r=[0,0],maxSaturationLight:l=[1,1]}={}){let i=[],f=[],h=[];for(let b=1;b<e+1;b++){let[y,R]=M(u,b,e+1,m,r,l),x=(360+(-180*n+(o+b*(360/(e+1))*n)))%360,S=c(x,y,R);i.push(S);let[T,k]=M(u,b,e+1,m+a,r,l),C=c(x,T,k);f.push([(x+360*d)%360,C[1]-t,C[2]+t]);let[P,X]=M(u,b,e+1,m-p,r,l),V=c(x,P,X);h.push([(360+(x-360*d))%360,V[1]-s,V[2]-s])}return{light:f,dark:h,base:i,all:[...f,...i,...h]}}var G={curveMethod:{default:"lam\xE9",props:{options:["lam\xE9","arc","pow","powY","powX"]}},curveAccent:{default:0,props:{min:-.095,max:1,step:.001}},total:{default:9,props:{min:3,max:35,step:1}},centerHue:{default:0,props:{min:0,max:360,step:.1}},hueCycle:{default:.3,props:{min:0,max:1.5,step:.001}},offsetTint:{default:.01,props:{min:0,max:.4,step:.001}},offsetShade:{default:.01,props:{min:0,max:.4,step:.001}},tintShadeHueShift:{default:.01,props:{min:0,max:1,step:.001}},offsetCurveModTint:{default:.03,props:{min:0,max:.4,step:1e-4}},offsetCurveModShade:{default:.03,props:{min:0,max:.4,step:1e-4}},minSaturation:{default:0,props:{min:0,max:1,step:.001}},minLight:{default:0,props:{min:0,max:1,step:.001}},maxSaturation:{default:1,props:{min:0,max:1,step:.001}},maxLight:{default:1,props:{min:0,max:1,step:.001}}};return N;})();
