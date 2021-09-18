import config from './config.json'
 

const baseUrl = config.baseUrl


export function contactUS(body) {  
    return callPost(baseUrl+'/rapidOZ/ContactUs', body);
}


const callGet = (url) => {
    return fetch(url).then(handleres);
}


const callPost = (url, body) => {
 
    return fetch(url, {       
        method: 'POST',        
        body: JSON.stringify(body),
        headers: { "Content-Type" : "application/json" }
    }).then(handleres);
}


 

const callPut = (url, body) => {
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    }).then(handleres);
}

const callDelete = (url) => {
    return fetch(url, {
        method: 'DELETE'
    }).then(handleres);
}

const handleres = (res) => {
 
    if (res.ok) {
        return res.json();
    }
    else {
        if (res.status === 404) {
            return Promise.reject();
        } else {
            throw res.json();
        }
    }
}

