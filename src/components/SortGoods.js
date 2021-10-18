import React from 'react';
import { Select } from 'antd';
import { connect } from 'dva';

const { Option } = Select;

const sortGoods = (props) => {

	const handleChange = (value) => {
		props.dispatch({
			type: 'checkSize/saveFilter',
			payload: value
		})
	}

	return (
		<div style={{textAlign: 'center', marginBottom: '10px'}}>
			price: 
			<Select defaultValue="normal" style={{ width: 130, marginLeft: '10px' }} onChange={handleChange}>			
				<Option value="normal"> normal </Option> 
				<Option value="lower"> lowestprice </Option>
				<Option value="high"> highestprice </Option>
			</Select>
		</div>
	);
};

sortGoods.propTypes = {
};

export default connect()(sortGoods);
