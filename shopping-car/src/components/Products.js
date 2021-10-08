import React, { useState } from 'react';
import { connect } from 'dva'


const Products = (props) => {
	const { listData } = props.listData
	props.dispatch({
		type: 'product/getListData',
		payload: { size: 'S' }
	})

	
	


	return (
		<div>

		</div>
	);
};



Products.propTypes = {
};

const mapStateToProps = (state) => {
	return {
		listData: state.product
	}
}
export default connect(mapStateToProps)(Products);
