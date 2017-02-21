Object.defineProperty(exports,"__esModule",{value:true});var Api=function(){function Api(){babelHelpers.classCallCheck(this,Api);}babelHelpers.createClass(Api,null,[{key:'headers',value:function headers()
{
return{
'Accept':'application/json',
'Content-Type':'application/json',
'dataType':'json'};

}},{key:'get',value:function get(

route){
return this.xhr(route,null,'GET');
}},{key:'put',value:function put(

route,params){
return this.xhr(route,params,'PUT');
}},{key:'post',value:function post(

route,params){
return this.xhr(route,params,'POST');
}},{key:'delete',value:function _delete(

route,params){
return this.xhr(route,params,'DELETE');
}},{key:'xhr',value:function xhr(

route,params,verb){
var host='http://www.recipepuppy.com';
var url=''+host+route;
var options=babelHelpers.extends({method:verb},params?{body:JSON.stringify(params)}:null);
options.headers=Api.headers();
return fetch(url,options).then(function(resp){
var json=resp.json();
if(resp.ok){
return json;
}
return json.then(function(err){throw err;});
}).then(function(json){return json.results;});
}}]);return Api;}();exports.default=

Api;