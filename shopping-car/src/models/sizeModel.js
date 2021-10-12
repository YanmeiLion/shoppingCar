
export default {

    namespace: 'checkSize',

    state: {
        // size选择数据
        size: [],
        
        // 排序筛选条件
        filter: 'normal'
    },


    effects: {
        
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
