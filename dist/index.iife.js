var fettePalette=(()=>{var g=Object.defineProperty;var c=Math.pow;var Y=e=>g(e,"__esModule",{value:!0});var D=(e,o)=>{Y(e);for(var r in o)g(e,r,{get:o[r],enumerable:!0})};var O={};D(O,{default:()=>i,hsv2hsl:()=>d,pointOnCurve:()=>w,random:()=>H});var d=(e,o,r,t=r-r*o/2,n=Math.min(t,1-t))=>[e,n?(r-t)/n:0,t],H=(e,o)=>(o||(o=e,e=0),Math.random()*(o-e)+e),w=(e,o,r,t,n=[0,0],h=[1,1])=>{let V=Math.PI/2,p=V/r,s=0,a=0;if(e==="lam\xE9"){let m=o/r*V,b=2/(2+20*t),u=Math.cos(m),M=Math.sin(m);s=Math.sign(u)*c(Math.abs(u),b),a=Math.sign(M)*c(Math.abs(M),b)}else e==="arc"?(a=Math.cos(-Math.PI/2+o*p+t),s=Math.sin(Math.PI/2+o*p-t)):e==="pow"?(s=Math.pow(1-o/r,1-t),a=Math.pow(o/r,1-t)):e==="powY"?(s=Math.pow(1-o/r,t),a=Math.pow(o/r,1-t)):e==="powX"&&(s=Math.pow(o/r,t),a=Math.pow(o/r,1-t));return s=n[0]+Math.min(Math.max(s,0),1)*(h[0]-n[0]),a=n[1]+Math.min(Math.max(a,0),1)*(h[1]-n[1]),[s,a]};function i({total:e=3,centerHue:o=0,hueCycle:r=.3,offsetTint:t=.1,offsetShade:n=.1,curveAccent:h=0,tintShadeHueShift:V=.1,curveMethod:p="arc",offsetCurveModTint:s=.03,offsetCurveModShade:a=.03,minSaturationLight:m=[0,0],maxSaturationLight:b=[1,1]}={}){let u=[],M=[],C=[];for(let l=1;l<e+1;l++){let[R,k]=w(p,l,e+1,h,m,b),f=(360+(-180*r+(o+l*(360/(e+1))*r)))%360,I=d(f,R,k);u.push(I);let[P,T]=w(p,l,e+1,h+s,m,b),x=d(f,P,T);M.push([(f+360*V)%360,x[1]-t,x[2]+t]);let[G,X]=w(p,l,e+1,h-a,m,b),y=d(f,G,X);C.push([(360+(f-360*V))%360,y[1]-n,y[2]-n])}return{light:M,dark:C,base:u,all:[...M,...u,...C]}}return O;})();
