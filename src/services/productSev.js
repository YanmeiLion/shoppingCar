

import request from '../utils/request';

const baseUrl = 'http://120.55.193.14:3030'

export function findData(params){
    console.log('1', params)
    return request(baseUrl+'/shoppingCat', {params})
}


// import axios from "axios";
// const getProductData = async (obj) => {
//     console.log(obj);
//     const {
//         data: { data },
//     } = await axios.get("http://120.55.193.14:3030/shoppingCat", { params: obj });
//     return data;
// };

// export default getProductData;


