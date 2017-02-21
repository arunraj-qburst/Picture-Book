Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _models=require("../models");

var Query=function Query(sizeConstraints,debug){
return function(Target){var _class,_temp;return _temp=_class=function(_React$Component){babelHelpers.inherits(HigherOrderComponent,_React$Component);


function HigherOrderComponent(props){babelHelpers.classCallCheck(this,HigherOrderComponent);var _this=babelHelpers.possibleConstructorReturn(this,(HigherOrderComponent.__proto__||Object.getPrototypeOf(HigherOrderComponent)).call(this,
props));
_this.device=new _models.Device(sizeConstraints);
_this.state={
isVisible:_this.device.isValid()};return _this;

}babelHelpers.createClass(HigherOrderComponent,[{key:"componentDidMount",value:function componentDidMount()

{
if(debug)
this.device.debug(HigherOrderComponent.displayName);
}},{key:"render",value:function render()

{
if(this.state.isVisible)
return(
_react2.default.createElement(Target,this.props));


return null;
}}]);return HigherOrderComponent;}(_react2.default.Component),_class.displayName="MediaQueryDecorator",_temp;};

};exports.default=

Query;