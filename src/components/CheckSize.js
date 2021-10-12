import React, { useEffect, useState } from 'react';
import { connect } from 'dva'
import {
	Checkbox,
	Divider,
} from 'antd'

const CheckboxGroup = Checkbox.Group;

// 型号大小
const plainOptions = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
const defaultCheckedList = ["XS", "S", "M", "ML"];


const CheckSize = (props) => {
	
    // 默认选中
	const [size, setSize] = useState(defaultCheckedList)
	const [checkedList, setCheckedList] = useState(defaultCheckedList);
	const [indeterminate, setIndeterminate] = useState(true);
	
	const [checkAll, setCheckAll] = useState(false);

	

	// 监听size, 传值size
	useEffect(() => {
		props.dispatch({
			type: 'checkSize/saveSize',
			payload: size
		})
	}, [size])


	const onChangeSize = list => {
		setSize(list)
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < plainOptions.length);
		setCheckAll(list.length === plainOptions.length);		
	};
	

	// 选中点击的 选项
	const onCheckAllChange = e => {
		setCheckedList(e.target.checked ? plainOptions : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
		// 改变size
		if(e.target.checked){
			setSize(plainOptions)
		}else{
			setSize([])
		}
	};

    return (
        <div>
            {/* 购物车筛选模块 */}
            <span> Sizes:  </span>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                多选
            </Checkbox>
            <Divider />
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChangeSize} />
        </div>
    );
};

CheckSize.propTypes = {
};


export default connect()(CheckSize);
