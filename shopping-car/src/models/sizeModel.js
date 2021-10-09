
export default {

    namespace: 'checkSize',

    state: {
        // size选择数据
        size: [],
        
        // 排序筛选条件
        filter: 'normal'
    },


    effects: {
        *getSizeData({ payload }, {call, put}){
            yield put({
                type: 'saveSize',
                payload
            })
        },

        *chooseFilter({ payload }, {call, put}){
            yield put({
                type: 'saveFilter',
                payload
            })
        }
        
    },

    reducers: {
        saveSize(state, {payload}) {
            return {
                ...state,
                size: payload
            };
        },
        saveFilter(state, {payload}){
            return {
                ...state,
                filter: payload
            }
        }
    },

};
