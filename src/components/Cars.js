import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Drawer, Popconfirm, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import styles from './styles/cars.less'



const Cars = (props) => {
    const { confirm } = Modal;
    const { carsData } = props.cars

    const [visible, setVisible] = useState(false);
    const [priceAll, setPriceAll] = useState(0)


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

    useEffect(() => {
        getPriceAll(carsData)
    }, [carsData])

    // 计算总价
    const getPriceAll = (arr) => {
        const result = arr.reduce((item, next) => {
            return item + (next.number * next.price);
        }, 0)
        setPriceAll(result.toFixed(2))
    }

    // 数量+-
    const changeNum = (id, value) => {
        props.dispatch({
            type: 'cars/changeNum',
            payload: {
                id, value
            }
        })
        getPriceAll(carsData)
    }

    // 确定之后，删除
    const delgoods = (id) => {
        props.dispatch({
            type: 'cars/delGoods',
            payload: id
        })
    }
    const settlement = () => {
        confirm({
            title: '是否结算所有商品？',
            icon: <ExclamationCircleOutlined />,
            content: `所有商品价格：${priceAll}`,
            okText: "确定",
            cancelText: "取消",
            onOk() {
                message.success('所有商品已结算。')
                clearCar()
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    // 清除购物车
    const clearCar = () => {
        props.dispatch({
            type: 'cars/clearGoods'
        })
    }


    return (
        <>
            <Drawer title={`Cars （共有商品 ${carsData.length} 件）`} width={420} placement="right" onClose={onClose}
                visible={visible} >

                <div className={styles.goodsInfo}>
                    {
                        carsData.map(item => {
                            return (
                                <div className={styles.goodsOne} key={item.id}>
                                    <div><img src={require(`./image/${item.sku}_2.jpg`)} alt="未找到图片" /></div>
                                    <div>
                                        <p className={styles.title}> {item.title} </p>
                                        <p> {item.availableSizes[0]} | {item.style} </p>
                                        <p>number: {item.number} </p>
                                    </div>
                                    <div>
                                        <Popconfirm
                                            title="确定删除这个商品吗？"
                                            onConfirm={() => delgoods(item.id)}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <p > 删除 </p>
                                        </Popconfirm>

                                        <p className={styles.price}> ${(item.price * item.number).toFixed(2)} </p>
                                        <Button onClick={() => changeNum(item.id, -1)} disabled={item.number == 1 ? true : false} > - </Button>
                                        <Button onClick={() => changeNum(item.id, 1)}> + </Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className={styles.ft}>
                    <div> 总价: <span> $ {priceAll} </span>  <br />
                        <button onClick={settlement}>结算</button>
                    </div>
                    <Button className={styles.clear} type='primary' onClick={clearCar}> 清空购物车 </Button>
                </div>

            </Drawer>
        </>
    );
};

Cars.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Cars);
