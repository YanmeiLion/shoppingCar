import React, { useState } from 'react';
import {
	Checkbox,
	Divider,
} from 'antd'

const CheckboxGroup = Checkbox.Group;
// 型号大小
const plainOptions = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
const defaultCheckedList = ["XS"];

const CheckSize = () => {

    // 默认选中
	const [checkedList, setCheckedList] = useState(defaultCheckedList);
	const [indeterminate, setIndeterminate] = useState(true);
	
	const [checkAll, setCheckAll] = useState(false);

	const onChangeSize = list => {
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < plainOptions.length);
		setCheckAll(list.length === plainOptions.length);
	};

	// 选中点击的 选项
	const onCheckAllChange = e => {
		setCheckedList(e.target.checked ? plainOptions : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
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

export default CheckSize;
