import React, {useEffect, useState} from 'react';
import { Drawer } from 'antd';

const Cars = (props) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
        // 关闭模块
        props.hideCarModel()
    };
    useEffect(() => {
        showDrawer();  
    }, [])

    return (
        <>
            <Drawer title="Cars" width={420} placement="right" onClose={onClose}  
                visible={visible} >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

Cars.propTypes = {
};

export default Cars;
