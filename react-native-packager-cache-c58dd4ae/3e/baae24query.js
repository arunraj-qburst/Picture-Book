Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _models=require("../models");
var _apis=require("../apis");var

Query=function(_React$Component){babelHelpers.inherits(Query,_React$Component);


















function Query(props){babelHelpers.classCallCheck(this,Query);var _this=babelHelpers.possibleConstructorReturn(this,(Query.__proto__||Object.getPrototypeOf(Query)).call(this,
props));
_this.device=new _models.Device(_this.props);
_this.state={
isVisible:_this.device.isValid()};return _this;

}babelHelpers.createClass(Query,[{key:"componentDidMount",value:function componentDidMount()

{
if(this.props.debug)
this.device.debug(Query.displayName);
}},{key:"render",value:function render()

{
if(this.state.isVisible)
return this.props.children;

return null;
}}]);return Query;}(_react2.default.Component);Query.displayName="MediaQuery";Query.propTypes={children:_apis.MediaQueryPropTypes.childrenValidator,debug:_react2.default.PropTypes.bool,deviceWidth:_react2.default.PropTypes.number,minDeviceWidth:_react2.default.PropTypes.number,maxDeviceWidth:_react2.default.PropTypes.number,deviceHeight:_react2.default.PropTypes.number,minDeviceHeight:_react2.default.PropTypes.number,maxDeviceHeight:_react2.default.PropTypes.number,devicePixelRatio:_react2.default.PropTypes.number,minDevicePixelRatio:_react2.default.PropTypes.number,maxDevicePixelRatio:_react2.default.PropTypes.number};Query.defaultProps={debug:false};exports.default=


Query;