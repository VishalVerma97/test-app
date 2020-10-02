var baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';

var apiHelper = function(config) {

    var methodType = config.method || 'get';
    var params = config.params || {}

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

    return fetch(baseUrl, config)
    .then(status)
    .then(json)
}

export default apiHelper;