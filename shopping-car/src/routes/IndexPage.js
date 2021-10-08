import React, {useState} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less'
import CheckSize from '../components/CheckSize';
import { Button } from 'antd'

// 引入模块
import Cars from '../components/Cars';

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

			{/* 内容部分 */}
			<div  className={styles.mainModel}>
				11111
				<Button type='primary' className={styles.carBtn} onClick={showCarModel}>shopCar</Button>
				{show ? <Cars hideCarModel={hideCarModel}></Cars> : null}
			</div>

		</div>
	);
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
