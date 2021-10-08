// import axios from "axios";
// // 获取商品列表数据
// const getProductData = async (obj) => {
//   const {
//     data: { data },
//   } = await axios.get("http://120.55.193.14:3030/shoppingCat", { params: obj });
//   return data;
// };
// export { getProductData };


import request from '../utils/request';

const baseUrl = 'http://120.55.193.14:3030'

export function findData(params){
    return request(baseUrl+'/shoppingCat', {
        method: 'get',
        params: params
    })
}

// get提交
// export function findAllUser() {
    // return request(baseURL+'/users/getAccountList2');
// }


// post提交
// export function addUser(params) {
    // return request(baseURL+'/users/accountadd',{method:"post",body:params})
// }
