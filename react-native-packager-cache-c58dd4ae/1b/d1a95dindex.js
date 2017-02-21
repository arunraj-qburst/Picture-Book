'use strict';

Object.defineProperty(exports,"__esModule",{
value:true});


var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _core=require('./core');

var _helpers=require('./helpers');

var _defaults=require('./defaults');

var _defaults2=_interopRequireDefault(_defaults);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




















function createLogger(){
var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};

var loggerOptions=_extends({},_defaults2.default,options);

var logger=loggerOptions.logger,
transformer=loggerOptions.transformer,
stateTransformer=loggerOptions.stateTransformer,
errorTransformer=loggerOptions.errorTransformer,
predicate=loggerOptions.predicate,
logErrors=loggerOptions.logErrors,
diffPredicate=loggerOptions.diffPredicate;



if(typeof logger==='undefined'){
return function(){
return function(next){
return function(action){
return next(action);
};
};
};
}

if(transformer){
console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!');
}

var logBuffer=[];

return function(_ref){
var getState=_ref.getState;
return function(next){
return function(action){

if(typeof predicate==='function'&&!predicate(getState,action)){
return next(action);
}

var logEntry={};
logBuffer.push(logEntry);

logEntry.started=_helpers.timer.now();
logEntry.startedTime=new Date();
logEntry.prevState=stateTransformer(getState());
logEntry.action=action;

var returnedValue=void 0;
if(logErrors){
try{
returnedValue=next(action);
}catch(e){
logEntry.error=errorTransformer(e);
}
}else{
returnedValue=next(action);
}

logEntry.took=_helpers.timer.now()-logEntry.started;
logEntry.nextState=stateTransformer(getState());

var diff=loggerOptions.diff&&typeof diffPredicate==='function'?diffPredicate(getState,action):loggerOptions.diff;

(0,_core.printBuffer)(logBuffer,_extends({},loggerOptions,{diff:diff}));
logBuffer.length=0;

if(logEntry.error)throw logEntry.error;
return returnedValue;
};
};
};
}

exports.default=createLogger;
module.exports=exports['default'];