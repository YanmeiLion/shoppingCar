import React, { useEffect, useState } from 'react';
import { connect } from 'dva'
import styles from './styles/products.less'
import { Button, Spin } from 'antd';


const Products = (props) => {
	const { listData } = props.product
	const { size, filter } = props.checkSize
	const [loading, setLoading] = useState(true)
	const [notData, setNotData] = useState(true)  // 有数据	

	// 发送请求
	useEffect(() => {
		setNotData(true)
		setLoading(true)
		props.dispatch({
			type: 'product/getListData',
			payload: {
				size: size,
				filter: filter
			}
		})
	}, [size, filter])

	// 监控react服务
	useEffect(() => {
		if (listData.length) {
			setLoading(false)	
			setNotData(true)		
		} else {
			setLoading(false)
			setNotData(false)
		}
	}, [listData])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('carData'))
		if(data){
			props.dispatch({
				type: 'cars/carsList',
				payload: data
			})
		}
	}, [])

	// 添加购物车
	const addToCars = (id) => {
		let obj = {}
		listData.filter(item => {
			if(item.id == id){
				obj = {
					...item,
					number: 1
				}
			}
		})		
		props.dispatch({
			type: 'cars/saveData',
			payload: obj
		})
	}


	return (
		<> 
		<span className={styles.number}> <b>{listData.length}</b> Product(s) found. </span>
		{ notData ?
			<Spin spinning={loading} tip='加载中' >
				<div className={styles.proInfo}>
					{
						listData.map(item => {
							return (
								<div className={styles.productOne} key={item.id}>
									<div className={styles.proImg}>
										<img src={require(`./image/${item.sku}_1.jpg`)} alt="未找到图片" />
									</div>
									<p className={styles.title}>
										{item.title}
									</p>
									<div className={styles.avaSize}>
										型号：
										{item.availableSizes.map((avaItem) => <span key={avaItem}> {avaItem}, </span>)}
									</div>
									<p className={styles.price}> $ <span> {item.price} </span> </p>
									<Button type='primary' onClick={() => addToCars(item.id)}>Add to Cart</Button>
								</div>
							)
						})
					}
				</div>
			</Spin>
			: <p className={styles.noGoods}>暂时还没有内容哦, 前往选择！</p> } 
		</>
	);
};



Products.propTypes = {
};

const mapStateToProps = (state) => {
	return {
		product: state.product,
		checkSize: state.checkSize
	}
}
export default connect(mapStateToProps)(Products);
