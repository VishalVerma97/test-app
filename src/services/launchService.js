import apiHelper from "../utils/apiHelper";

export function launchService(params = null) {
    return apiHelper({method: 'get', params: params});
}