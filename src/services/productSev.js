

import request from '../utils/request';

const baseUrl = 'http://120.55.193.14:3030'

export function findData(params){
    return request(baseUrl+'/shoppingCat', {params})
}


