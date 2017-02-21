Object.defineProperty(exports,"__esModule",{value:true});var _apis=require("../apis");var

Model=function(){
function Model(expected){babelHelpers.classCallCheck(this,Model);
this.expected=expected;
}babelHelpers.createClass(Model,null,[{key:"isInIntervalOrEqualFromOperator",value:function isInIntervalOrEqualFromOperator(

operator,expected,actual){
switch(operator){
case"min":return Model.isInIntervalOrEqual(actual,null,expected);
case"max":return Model.isInIntervalOrEqual(actual,null,null,expected);
case"equal":return Model.isInIntervalOrEqual(actual,expected);
default:return true;}

}},{key:"isInIntervalOrEqual",value:function isInIntervalOrEqual(

val,valProp,minProp,maxProp){
if(valProp||minProp||maxProp)
return _apis.CommonUtil.isInIntervalOrEqual(val,valProp,minProp,maxProp);

return true;
}}]);return Model;}();exports.default=


Model;