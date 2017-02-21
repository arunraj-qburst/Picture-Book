Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require("react-native");var




Device=function(){function Device(){babelHelpers.classCallCheck(this,Device);}babelHelpers.createClass(Device,null,[{key:"physicalWidth",get:function get()






{
return Device.pxWidth;
}},{key:"physicalHeight",get:function get()

{
return Device.pxHeight;
}},{key:"cssWidth",get:function get()

{
return Device.dpWidth;
}},{key:"cssHeight",get:function get()

{
return Device.dpHeight;
}},{key:"width",get:function get()

{
return Device.cssWidth;
}},{key:"height",get:function get()

{
return Device.cssHeight;
}}]);return Device;}();Device.pixelRatio=_reactNative.PixelRatio.get();Device.dpWidth=Math.min(_reactNative.Dimensions.get("window").width,_reactNative.Dimensions.get("window").height);Device.dpHeight=Math.max(_reactNative.Dimensions.get("window").width,_reactNative.Dimensions.get("window").height);Device.pxWidth=Math.min(_reactNative.Dimensions.get("window").width,_reactNative.Dimensions.get("window").height)*_reactNative.PixelRatio.get();Device.pxHeight=Math.max(_reactNative.Dimensions.get("window").width,_reactNative.Dimensions.get("window").height)*_reactNative.PixelRatio.get();exports.default=


Device;