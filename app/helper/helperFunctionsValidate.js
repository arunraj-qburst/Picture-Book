
export function emailValidation(value){
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(value);
}

export function passwordValidation(value){
var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
return re.test(value);
}

export function emptyValidation(value){
  if(value.length==0){
    return false;
  }
  else{
    return true;
  }
}

export function firstNameValidation(value){
  var re =/^[a-zA-Z ]{2,30}$/;
  return re.test(value);
}

export function lastNameValidation(value){
  var re =/^[a-zA-Z ]{2,30}$/;
  return re.test(value);
}
