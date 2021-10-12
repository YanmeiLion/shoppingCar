import { findData } from '../services/productSev'

export default {
    namespace: 'product',

    state: {
        listData: [], // 商品列表数组
    },


    effects: {
        *getListData({ payload }, { call, put }) {
            const res = yield call(findData, payload);
            yield put({
                type: "saveList",
                payload: res.data.data
            });
        },
    },


    reducers: {
        saveList(state, {payload}){
            return {
                ...state,
                listData: payload
            }
        }
    },

};
