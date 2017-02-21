Object.defineProperty(exports,"__esModule",{value:true});var _model=require("./model.js");var _model2=babelHelpers.interopRequireDefault(_model);
var _apis=require("../apis");var

Device=function(_Model){babelHelpers.inherits(Device,_Model);
function Device(expected){babelHelpers.classCallCheck(this,Device);return babelHelpers.possibleConstructorReturn(this,(Device.__proto__||Object.getPrototypeOf(Device)).call(this,
expected));
}babelHelpers.createClass(Device,[{key:"debug",value:function debug(

identifierName){
console.log("\uD83D\uDCF1 DEVICE LOGS for "+
identifierName+":\n","\t\uD83D\uDC49 \uD83D\uDCF1 Device Width (css pixels): "+
_apis.DeviceUtil.width+" dip\n","\t\uD83D\uDC49 \uD83D\uDCF1 Device Height (css pixels): "+
_apis.DeviceUtil.height+" dip\n","\t\uD83D\uDC49 \uD83D\uDCF1 Device Width (physical pixels): "+
_apis.DeviceUtil.physicalWidth+" px\n","\t\uD83D\uDC49 \uD83D\uDCF1 Device Height (physical pixels): "+
_apis.DeviceUtil.physicalHeight+" px\n","\t\uD83D\uDC49 \uD83D\uDCF1 Device Pixel Ratio: "+
_apis.DeviceUtil.pixelRatio+"\n\n","\t\uD83D\uDC49 \uD83D\uDCF1 props.deviceWidth: "+
this.expected.deviceWidth+" px\n","\t\uD83D\uDC49 \uD83D\uDCF1 props.minDeviceWidth: "+
this.expected.minDeviceWidth+" px\n","\t\uD83D\uDC49 \uD83D\uDCF1 props.maxDeviceWidth: "+
this.expected.maxDeviceWidth+" px\n","\t\uD83D\uDC49 \uD83D\uDCF1 props.deviceHeight: "+
this.expected.deviceHeight+" px\n","\t\uD83D\uDC49 \uD83D\uDCF1 props.minDeviceHeight: "+
this.expected.minDeviceHeight+" px\n","\t\uD83D\uDC49 \uD83D\uDCF1 props.maxDeviceHeight: "+
this.expected.maxDeviceHeight+" px\n","\t\uD83D\uDC49 \uD83D\uDCF1 props.devicePixelRatio: "+
this.expected.devicePixelRatio+"\n","\t\uD83D\uDC49 \uD83D\uDCF1 props.minDevicePixelRatio: "+
this.expected.minDevicePixelRatio+"\n","\t\uD83D\uDC49 \uD83D\uDCF1 props.maxDevicePixelRatio: "+
this.expected.maxDevicePixelRatio+"\n");

}},{key:"isValid",value:function isValid()

{
return this.isValidWidth(this.expected)&&this.isValidHeight(this.expected)&&this.isValidPixelRatio(this.expected);
}},{key:"isValidWidth",value:function isValidWidth(

expected){
return Device.isInIntervalOrEqual(_apis.DeviceUtil.width,expected.deviceWidth,expected.minDeviceWidth,expected.maxDeviceWidth);
}},{key:"isValidHeight",value:function isValidHeight(

expected){
return Device.isInIntervalOrEqual(_apis.DeviceUtil.height,expected.deviceHeight,expected.minDeviceHeight,expected.maxDeviceHeight);
}},{key:"isValidPixelRatio",value:function isValidPixelRatio(

expected){
return Device.isInIntervalOrEqual(_apis.DeviceUtil.pixelRatio,expected.devicePixelRatio,expected.minDevicePixelRatio,expected.maxDevicePixelRatio);
}}],[{key:"isValidWidthFromOperator",value:function isValidWidthFromOperator(

operator,expectedWidth){
return Device.isInIntervalOrEqualFromOperator(operator,expectedWidth,_apis.DeviceUtil.width);
}},{key:"isValidHeightFromOperator",value:function isValidHeightFromOperator(

operator,expectedHeight){
return Device.isInIntervalOrEqualFromOperator(operator,expectedHeight,_apis.DeviceUtil.height);
}},{key:"isValidPixelRatioFromOperator",value:function isValidPixelRatioFromOperator(

operator,expectedPixelRatio){
return Device.isInIntervalOrEqualFromOperator(operator,expectedPixelRatio,_apis.DeviceUtil.pixelRatio);
}},{key:"information",get:function get()

{
return["\uD83D\uDC49 \uD83D\uDCF1 Device Width (css pixels): "+
_apis.DeviceUtil.width+" dip","\uD83D\uDC49 \uD83D\uDCF1 Device Height (css pixels): "+
_apis.DeviceUtil.height+" dip","\uD83D\uDC49 \uD83D\uDCF1 Device Width (physical pixels): "+
_apis.DeviceUtil.physicalWidth+" px","\uD83D\uDC49 \uD83D\uDCF1 Device Height (physical pixels): "+
_apis.DeviceUtil.physicalHeight+" px","\uD83D\uDC49 \uD83D\uDCF1 Device Pixel Ratio: "+
_apis.DeviceUtil.pixelRatio];

}}]);return Device;}(_model2.default);exports.default=


Device;