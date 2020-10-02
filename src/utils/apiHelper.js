var baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';

var apiHelper = function(config) {

    var methodType = config.method || 'get';
    var params = config.params || {}
    var url = baseUrl;

    var config = {
        method: methodType,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    }

    function status(response) {
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    function json(response) {
        return response.json();
    }

    if(methodType == 'get' && !!params && Object.keys(params).length > 0){
        var query = Object.keys(params).map(k => k + '=' + params[k]).join('&');
        url += '&' + query;
    }

    return fetch(url, config)
    .then(status)
    .then(json)
}

export default apiHelper;