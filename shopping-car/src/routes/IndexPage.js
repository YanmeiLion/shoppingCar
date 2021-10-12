import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less'

import { Button } from 'antd'

// 引入模块
import CheckSize from '../components/CheckSize';
import Cars from '../components/Cars';
import Products from '../components/Products';
import SortGoods from '../components/SortGoods';

//  总页面
function IndexPage(props) {
	const [show, setShow] = useState(false)

	const showCarModel = () => {
		setShow(true)
	}
	const hideCarModel = () => {
		setShow(false)
	}

	return (
		<div className={styles.main}>

			{/* 筛选部分 */}
			<div className={styles.leftModel}>
				<CheckSize></CheckSize>
			</div>


			<div className={styles.mainModel}>
				{/* 右侧弹框购物车 */}
				<Button type='primary' className={styles.carBtn} onClick={showCarModel}>shopCar</Button>
				<div className={styles.numberGoods}> {props.cars.carsData.length} </div>
				{show ? <Cars hideCarModel={hideCarModel}></Cars> : null}

				{/* 排序选择 */}
				<SortGoods></SortGoods>

				{/* 内容 */}
				<Products></Products>
			</div>

		</div>
	);
}

IndexPage.propTypes = {
};

const mapStateToProps = (state) => {
	return {
		cars: state.cars
	}
}

export default connect(mapStateToProps)(IndexPage);
