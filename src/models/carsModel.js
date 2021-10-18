import { message } from "antd";

export default {

  namespace: 'cars',

  state: {
    carsData: []
  },


  effects: {


  },

  reducers: {
    saveData(state, { payload }) {
      const { carsData } = state
      const arr = carsData.filter(item => item.id === payload.id)
      if (arr.length > 0) {
        carsData.filter(item => {
          if (item.id === payload.id) {
            item.number++
          }
          return item.number
        })
      } else {
        carsData.push(payload)
      }
      // 本地保存
      localStorage.setItem('carData', JSON.stringify(carsData))
      message.success('add goods to cars successful!')

      return {
        ...state,
        carsData
      }
    },
    // 全局保存
    carsList(state, { payload }) {
      return {
        ...state,
        carsData: payload
      }
    },

    // 商品加减
    changeNum(state, { payload }) {
      const { carsData } = state
      const { id, value } = payload
      carsData.filter(item => {
        if (item.id === id) {
          item.number = item.number + value
        }
        return item.number
      })
      localStorage.setItem('carData', JSON.stringify(carsData))

      return {
        ...state,
        carsData: carsData
      }
    },

    // 数量——
    subNum(state, {payload}){
      const { carsData } = state
      carsData.filter(item => {
        if (item.id === payload) {
          item.number = item.number - 1
        }
        return item.number
      })
      localStorage.setItem('carData', JSON.stringify(carsData))
      return {
        ...state,
        carsData: carsData
      }
    },

    // 数量+
    plusNum(state, {payload}){
      const { carsData } = state
      carsData.filter(item => {
        if (item.id === payload) {
          item.number = item.number + 1
        }
        return item.number
      })
      localStorage.setItem('carData', JSON.stringify(carsData))
      return {
        ...state,
        carsData: carsData
      }
    },


    // del 
    delGoods(state, { payload }) {
      let { carsData } = state
      carsData = carsData.filter(item => item.id !== payload)
      localStorage.setItem('carData', JSON.stringify(carsData))
      message.success('商品删除成功');
      return {
        ...state,
        carsData
      }
    },
    clearGoods(state, { payload }) {
      localStorage.clear();
      message.success('购物车清除成功');
      return {
        ...state,
        carsData: []
      }
    }
  },

};
