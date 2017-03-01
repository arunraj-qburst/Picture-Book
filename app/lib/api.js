class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'http://10.9.12.97:3000/api/v1'
     //const host = 'http://www.recipepuppy.com'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers() 
    return fetch(url, options).then( resp => {
     
      let json = resp.json();
      console.log("on api error @2",json)
      if (resp.ok) {
         
        return json
      }
      console.log("on api error @4")
      return json.then(err => {throw err});
    }).then( json => json );
  }
}
export default Api 