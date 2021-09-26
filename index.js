export const hsv2hsl=(e,s,p,t=p-p*s/2,n=Math.min(t,1-t))=>[e,n?(p-t)/n:0,t],pointOnCurve=(e,s,p,t,n=[0,0],m=[1,1])=>{const x=Math.PI/2,u=x/p,r=s/p;let a=0,o=0;if(e==="lam\xE9"){const i=r*x,l=2/(2+20*t),f=Math.cos(i),h=Math.sin(i);a=Math.sign(f)*Math.abs(f)**l,o=Math.sign(h)*Math.abs(h)**l}else if(e==="arc")o=Math.cos(-Math.PI/2+s*u+t),a=Math.sin(Math.PI/2+s*u-t);else if(e==="pow")a=Math.pow(1-r,1-t),o=Math.pow(r,1-t);else if(e==="powY")a=Math.pow(1-r,t),o=Math.pow(r,1-t);else if(e==="powX")a=Math.pow(r,t),o=Math.pow(r,1-t);else if(typeof e=="function")a=e(r)[0],o=e(r)[1];else throw new Error(`pointOnCurve() curveAccent parameter is expected to be "lam\xE9" | "arc" | "pow" | "powY" | "powX" or a function but \`${e}\` given.`);return a=n[0]+Math.min(Math.max(a,0),1)*(m[0]-n[0]),o=n[1]+Math.min(Math.max(o,0),1)*(m[1]-n[1]),[a,o]};export function generateRandomColorRamp({total:e=3,centerHue:s=0,hueCycle:p=.3,offsetTint:t=.1,offsetShade:n=.1,curveAccent:m=0,tintShadeHueShift:x=.1,curveMethod:u="arc",offsetCurveModTint:r=.03,offsetCurveModShade:a=.03,minSaturationLight:o=[0,0],maxSaturationLight:i=[1,1]}={}){const l=[],f=[],h=[];for(let b=1;b<e+1;b++){const[w,C]=pointOnCurve(u,b,e+1,m,o,i),d=(360+(-180*p+(s+b*(360/(e+1))*p)))%360,V=hsv2hsl(d,w,C);l.push(V);const[g,y]=pointOnCurve(u,b,e+1,m+r,o,i),c=hsv2hsl(d,g,y);f.push([(d+360*x)%360,c[1]-t,c[2]+t]);const[R,S]=pointOnCurve(u,b,e+1,m-a,o,i),M=hsv2hsl(d,R,S);h.push([(360+(d-360*x))%360,M[1]-n,M[2]-n])}return{light:f,dark:h,base:l,all:[...f,...l,...h]}}export const generateRandomColorRampParams={curveMethod:{default:"lam\xE9",props:{options:["lam\xE9","arc","pow","powY","powX"]}},curveAccent:{default:0,props:{min:-.095,max:1,step:.001}},total:{default:9,props:{min:3,max:35,step:1}},centerHue:{default:0,props:{min:0,max:360,step:.1}},hueCycle:{default:.3,props:{min:0,max:1.5,step:.001}},offsetTint:{default:.01,props:{min:0,max:.4,step:.001}},offsetShade:{default:.01,props:{min:0,max:.4,step:.001}},tintShadeHueShift:{default:.01,props:{min:0,max:1,step:.001}},offsetCurveModTint:{default:.03,props:{min:0,max:.4,step:1e-4}},offsetCurveModShade:{default:.03,props:{min:0,max:.4,step:1e-4}},minSaturation:{default:0,props:{min:0,max:1,step:.001}},minLight:{default:0,props:{min:0,max:1,step:.001}},maxSaturation:{default:1,props:{min:0,max:1,step:.001}},maxLight:{default:1,props:{min:0,max:1,step:.001}}};
