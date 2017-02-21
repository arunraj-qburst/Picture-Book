Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require("react-native");
var _utils=require("./utils");
var _models=require("../models");var

StyleSheet=function(_StyleSheetUtil){babelHelpers.inherits(StyleSheet,_StyleSheetUtil);function StyleSheet(){babelHelpers.classCallCheck(this,StyleSheet);return babelHelpers.possibleConstructorReturn(this,(StyleSheet.__proto__||Object.getPrototypeOf(StyleSheet)).apply(this,arguments));}babelHelpers.createClass(StyleSheet,null,[{key:"create",value:function create(












base,rules){
if(rules){
for(var property in rules){
if(/@media/.test(property)){
if(StyleSheet.isValidRule(property)){
StyleSheet.merge(base,rules[property]);
}
}
}
}

return _reactNative.StyleSheet.create(base);
}},{key:"isValidRule",value:function isValidRule(

rule){
if(rule){
var matches=[];
var reg=/\(([^()]+)\)/g;

var isValid=true;
while((matches=reg.exec(rule))&&isValid){
isValid=StyleSheet.isValidFeature(matches[1]);
}

return isValid;
}

return false;
}},{key:"isValidFeature",value:function isValidFeature(

feature){
if(feature){
return StyleSheet.isValidSizeFeature(feature);
}

return false;
}},{key:"isValidSizeFeature",value:function isValidSizeFeature(

feature){
var size=StyleSheet.parseSizeFeature(feature);

if(size)
return StyleSheet.featuresCheckers[size.key](size.value);

return false;
}},{key:"debug",value:function debug()

{
console.log("📱 DEVICE LOGS for MediaQueryStyleSheet:\n");
_models.Device.information.map(function(data){
console.log("	"+data);
});
}}]);return StyleSheet;}(_utils.StyleSheetUtil);StyleSheet.featuresCheckers={"device-width":function deviceWidth(w){return _models.Device.isValidWidthFromOperator("equal",w);},"min-device-width":function minDeviceWidth(w){return _models.Device.isValidWidthFromOperator("min",w);},"max-device-width":function maxDeviceWidth(w){return _models.Device.isValidWidthFromOperator("max",w);},"device-height":function deviceHeight(h){return _models.Device.isValidHeightFromOperator("equal",h);},"min-device-height":function minDeviceHeight(h){return _models.Device.isValidHeightFromOperator("min",h);},"max-device-height":function maxDeviceHeight(h){return _models.Device.isValidHeightFromOperator("max",h);},"device-pixel-ratio":function devicePixelRatio(pr){return _models.Device.isValidPixelRatioFromOperator("equal",pr);},"min-device-pixel-ratio":function minDevicePixelRatio(pr){return _models.Device.isValidPixelRatioFromOperator("min",pr);},"max-device-pixel-ratio":function maxDevicePixelRatio(pr){return _models.Device.isValidPixelRatioFromOperator("max",pr);}};exports.default=


StyleSheet;