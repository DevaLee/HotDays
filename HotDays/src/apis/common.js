/**
 * Created by ritamashin on 2017/9/21.
 */

import store from '../store'
import {ENVS} from '../config'

import axios from 'axios'
import querystring from 'querystring'
import {parse} from 'url'
import {ApiResultError, ApiHttpError} from '../error'


let client = axios.create({
    timeout : 5000,
    paramsSerializer : params => querystring.stringify(params),
    responseType: 'json',
    maxContentLength : Math.pow(1024, 2)
})

export function requestApi(config) {
    let {app} = store.getState();
    config.baseURL = ENVS[app.env].api_base_url;
    return client.request(config)
        .then(response => {
            if (response.data.code === 0){
                return response.data;
            }else {
                let {code, message, data} = response.data;
                return Promise.reject(new ApiResultError(code, message, data));
            }
        })
}

export function getApi(url, params = {}, {headers = {}, timeOut = 3000,
                           background = false, onDownloadProgress = {}}) {
    return requestApi({
        url,
        method: 'GET',
        params,
        headers,
        timeOut,
        background,
        onDownloadProgress
    })
}

export function postApi(url, data = {}, {headers = {}, timeOut = 5000,
                        background = false, onUploadProgress = {}}) {
    let formData = new FormData()
    for(let [k,v] of Object.entries(data)){
        formData.append(k, v)
    }

    return requestApi({
        url,
        method: 'POST',
        data : formData,
        headers,
        timeOut,
        background,
        onUploadProgress
    });
}

