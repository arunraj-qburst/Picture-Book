Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);


var _reactNative=require("react-native");



var _models=require("../models");var

Debug=function(_Component){babelHelpers.inherits(Debug,_Component);





function Debug(props){babelHelpers.classCallCheck(this,Debug);return babelHelpers.possibleConstructorReturn(this,(Debug.__proto__||Object.getPrototypeOf(Debug)).call(this,
props));
}babelHelpers.createClass(Debug,[{key:"render",value:function render()

{var _props=



this.props,styleText=_props.styleText,others=babelHelpers.objectWithoutProperties(_props,["styleText"]);

return(
_react2.default.createElement(_reactNative.View,others,
_models.Device.information.map(function(data,key){return _react2.default.createElement(_reactNative.Text,{key:key,style:styleText}," ",data," ");})));


}}]);return Debug;}(_react.Component);Debug.displayName="MediaQueryDebug";Debug.propTypes=babelHelpers.extends({},_reactNative.View.propTypes);exports.default=


Debug;