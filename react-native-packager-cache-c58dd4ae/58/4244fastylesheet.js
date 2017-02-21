Object.defineProperty(exports,"__esModule",{value:true});var StyleSheet=function(){function StyleSheet(){babelHelpers.classCallCheck(this,StyleSheet);}babelHelpers.createClass(StyleSheet,null,[{key:"merge",value:function merge(
target,source){
for(var property in source){
var toMerge=source[property];
if(target.hasOwnProperty(property)){
if(typeof toMerge==="object"&&!Array.isArray(toMerge))
target[property]=babelHelpers.extends({},target[property],toMerge);else

target[property]=toMerge;
}else
{
target[property]=toMerge;
}
}

return target;
}},{key:"parseSizeFeature",value:function parseSizeFeature(

feature){
var parsed=feature.match(/([a-zA-Z\-]+): ?([0-9]+\.?[0-9]*)/);

if(parsed)
return{
key:parsed[1],
value:Number(parsed[2])};


return null;
}},{key:"toCamelCase",value:function toCamelCase(

str){
return str.replace(/-([a-z])/gi,function(match,group1){
return group1.toUpperCase();
});
}}]);return StyleSheet;}();exports.default=


StyleSheet;