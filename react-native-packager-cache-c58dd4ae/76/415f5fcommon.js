Object.defineProperty(exports,"__esModule",{value:true});var Common=function(){function Common(){babelHelpers.classCallCheck(this,Common);}babelHelpers.createClass(Common,null,[{key:"isInInterval",value:function isInInterval(
x,min,max,debug){
if(x||x===0){
if((min||min===0)&&(max||max===0)){
return x>=min&&x<=max;
}else{
if(min||min===0)
return x>=min;
if(max||max===0)
return x<=max;
}
}

return false;
}},{key:"isInIntervalOrEqual",value:function isInIntervalOrEqual(

x,y,min,max){
if(y||y===0)
return x===y;else

return Common.isInInterval(x,min,max);
}},{key:"debounce",value:function debounce(

callback,delay){
var timer=void 0;
return function(){
console.log(timer);
clearTimeout(timer);
console.log(timer);
timer=setTimeout(
callback,
delay);

};
}}]);return Common;}();exports.default=


Common;