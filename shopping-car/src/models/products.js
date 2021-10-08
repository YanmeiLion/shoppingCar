import { findData } from '../services/productSev'

export default {
    namespace: 'product',

    state: {
        listData: ['1', '2'], // 商品列表数组
    },


    effects: {
        *getListData({ payload }, { call, put }) {
            const data = yield call(findData, payload);
            console.log('data', data)
            // yield put({
            //     type: "add",
            //     data,
            // });
        },
    },
    

    reducers: {
        add(state, { data }) {
            return {
                ...state,
                listData: data,
            };
        },
    },

};
