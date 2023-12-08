import './PopularCrypto.css'
import {Button, Table, Tabs} from "antd";
import {dataHotSearch, dataNewStart, hotHotSearch, topIncrease} from "../data/data.js";
import ReactECharts from "echarts-for-react";
import {useEffect, useMemo, useState} from "react";
import CountdownTimer from "./CountdownTimer.jsx";
import {addCommasToNumber, randomDecimals, randomizeDecimalPlaces} from "../utils.js";


const columns = [
    {
        title: 'Cặp giao dịch',
        dataIndex: 'name',
        key: 'name',
        width: 300,
        render: (name, data) => (
            <>
                <div className='hot-list_symbolWrapper__T_j7e'>
                    <div className='hot-list_sss'>
                        <img src={data.icon} alt=""/>
                    </div>
                    <div className='hot-list_title'>
                        {name} {data.market} Vĩnh cữu
                    </div>
                </div>
            </>

        )
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
        width:300,
        render: (price) => (
            <>
            <div>{addCommasToNumber(price)}</div>
            </>
        )
    },
    {
        title: 'Thay đổi',
        dataIndex: 'rate',
        key: 'rate',
        render: (rate, data) => (
            <>
                <div className={`hot-list_change ${data.operator === '-' ? 'up-rate' : 'down-rate'}`}>{rate}</div>
            </>

        )
    }
    ,
    {
        title: 'Thị trường',
        dataIndex: 'data',
        key: '3',
        width: 200,
        responsive: ['md', 'lg'],
        render: (data, dat) => (
            <div style={{height: '50px'}}>
                <ReactECharts notMerge={true} style={{height: '150%'}} option={{
                    globe: {
                        width: '100%',
                        height: '100%'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        show: false
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '30%'],
                        show: false
                    },
                    backgroundColor: 'transparent',
                    visualMap: {
                        type: 'piecewise',
                        show: false,
                        dimension: 0,
                        seriesIndex: 0,
                        pieces: [
                            {
                                gt: 1,
                                lt: 3,
                                color: 'rgba(0, 0, 180, 0.4)'
                            },
                            {
                                gt: 5,
                                lt: 7,
                                color: 'rgba(0, 0, 180, 0.4)'
                            }
                        ]
                    },
                    series: [
                        {
                            type: 'line',
                            smooth: 0.5,
                            symbol: 'none',
                            lineStyle: {
                                color: `${dat.operator === '+' ? '#0aa869' : '#fe445c'}`,
                                width: 1.3
                            },
                            data: [...data]
                        }
                    ]
                }}/>
            </div>
        )
    }
    ,
    {
        title: 'Thao tác',
        dataIndex: '',
        key: '4',
        responsive: ['md', 'lg'],
        width: '100px',
        render: (data) => <Button className='hot-list_toTradeLink___yvj0'
                                  onClick={() => window.location.href = data.link}>Giao dịch</Button>,
    },
];

const columns2 = [
    {
        title: 'Cặp giao dịch',
        dataIndex: 'name',
        key: 'name',
        width: 300,
        render: (name, data) => (
            <>
                <div className='hot-list_symbolWrapper__T_j7e'>
                    <div className='hot-list_sss'>
                        <img src={data.icon} alt=""/>
                    </div>
                    <div className='hot-list_title'>
                        {name} {data.market} Vĩnh cữu
                    </div>
                </div>
            </>

        )
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
        render: (price) => (
            <>
                {!price && <CountdownTimer days={Math.floor(Math.random() * 5) + 1} hours={Math.floor(Math.random() * 23) + 1} minutes={Math.floor(Math.random() * 30) + 1} seconds={Math.floor(Math.random() * 60) + 1}/>}
                {addCommasToNumber(price)}
            </>
        )
    },
    {
        title: 'Thay đổi',
        dataIndex: 'rate',
        key: 'rate',
        render: (rate, data) => (
            <>
                {rate &&
                    <div className={`hot-list_change ${data.operator === '-' ? 'up-rate' : 'down-rate'}`}>{rate}</div>}
                {!rate && <div>--</div>}
            </>

        )
    }
    ,
    {
        title: 'Thị trường',
        dataIndex: 'data',
        key: '3',
        width: 200,
        responsive: ['md', 'lg'],
        render: (data, dat) => (
            <>
                {data &&
                    <div style={{height: '50px'}}>
                        <ReactECharts notMerge={true} style={{height: '150%'}} option={{
                            globe: {
                                width: '100%',
                                height: '100%'
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                show: false
                            },
                            yAxis: {
                                type: 'value',
                                boundaryGap: [0, '30%'],
                                show: false
                            },
                            backgroundColor: 'transparent',
                            visualMap: {
                                type: 'piecewise',
                                show: false,
                                dimension: 0,
                                seriesIndex: 0,
                                pieces: [
                                    {
                                        gt: 1,
                                        lt: 3,
                                        color: 'rgba(0, 0, 180, 0.4)'
                                    },
                                    {
                                        gt: 5,
                                        lt: 7,
                                        color: 'rgba(0, 0, 180, 0.4)'
                                    }
                                ]
                            },
                            series: [
                                {
                                    type: 'line',
                                    smooth: 0.6,
                                    symbol: 'none',
                                    lineStyle: {
                                        color: `${dat.operator === '+' ? '#0aa869' : '#fe445c'}`,
                                        width: 1.3
                                    },
                                    data: [...data]
                                }
                            ]
                        }}/>
                    </div>
                }
                {!data && <div> Sắp bắt đầu </div>}
            </>
        )
    }
    ,
    {
        title: 'Thao tác',
        dataIndex: '',
        key: '4',
        responsive: ['md', 'lg'],
        width: '100px',
        render: (data) => <Button className='hot-list_toTradeLink___yvj0'
                                  onClick={() => window.location.href = data.link}>Giao dịch</Button>,
    },
];



const OperationsSlot = {
    right: <a href='https://www.mexc.com/vi-VN/markets/reference?position=contract'
              className="hot-list_viewMore__poZ__">Xem thêm
        <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em" fill="currentColor"
             aria-hidden="true" viewBox="0 0 1024 1024" data-icon="ArrowRightOutlined">
            <path
                d="M128 469.333333h604.586667l-152.746667-153.173333L640 256l256 256-256 256-60.16-60.16L732.586667 554.666667H128z"></path>
        </svg>
    </a>,
};
export default function PopularCrypto() {
    const [activeTab, setActiveTab] = useState('2');
    const [position, setPosition] = useState(['left', 'right']);
    const [dataTab1, setDataTab1] = useState([...dataHotSearch]);
    const [dataTab2, setDataTab2] = useState([...hotHotSearch]);
    const [dataTab3, setDataTab3] = useState([...dataNewStart]);
    const [dataTab4, setDataTab4] = useState([...dataHotSearch]);
    const [dataTab5, setDataTab5] = useState([...topIncrease]);



    const slot = useMemo(() => {
        if (position.length === 0) return null;

        return position.reduce(
            (acc, direction) => ({...acc, [direction]: OperationsSlot[direction]}),
            {},
        );
    }, [position]);
    const handleTabChange = key => {
        console.log("click",key);
        setActiveTab(key);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (activeTab === '1') {
                setDataTab1(prevState => {
                    return prevState.map((item) => {
                        return {
                            ...item,
                            price: randomizeDecimalPlaces(item.price),
                            rate: randomDecimals(item.rate)
                        };
                    });

                })
                setDataTab5(prevState => {
                    return prevState.map((item) => {
                        return {
                            ...item,
                            price: randomizeDecimalPlaces(item.price),
                            rate: randomDecimals(item.rate)
                        };
                    });
                });
            } else if (activeTab === '2') {
             setDataTab2(prevState => {
                    return prevState.map((item) => {
                        return {
                            ...item,
                            price: randomizeDecimalPlaces(item.price),
                            rate: randomDecimals(item.rate)
                        };
                    });
             });
            } else if (activeTab === '3') {
                setDataTab3(prevState => {
                    return prevState.map((item) => {
                        return {
                            ...item,
                            price: randomizeDecimalPlaces(item.price),
                            rate: randomDecimals(item.rate)
                        };
                    });
                });
            }
            else if(activeTab === '4'){
                setDataTab4(prevState => {
                    return prevState.map((item) => {
                        return {
                            ...item,
                            price: randomizeDecimalPlaces(item.price),
                            rate: randomDecimals(item.rate)
                        };
                    });
                });
            }
            else if(activeTab === '5'){
                setDataTab5(prevState => {
                    return prevState.map((item) => {
                        return {
                            ...item,
                            price: randomizeDecimalPlaces(item.price),
                            rate: randomDecimals(item.rate)
                        };
                    });
                });
            }
        }, 1500);

        return () => clearInterval(interval);
    }, [activeTab]);
    const items = [
        {
            key: '1',
            label: (<div className='hot-list_makerWrapper__SOmuY special-tab-line'>
                <span className='hot-list_vvv'>Top Futures</span>
                <span className="hot-list_makerTitle__ngRja">Maker 0% / Taker 0.02%</span>
            </div>),
            children: (<div className='home-market-list '>
                <Table columns={columns} dataSource={dataTab1.slice(0, 5)} bordered={false}/>

            </div>),

        },
        {
            key: '2',
            label: 'Hot',
            children: (<div className='home-market-list '>
                <Table columns={columns} dataSource={dataTab2.slice(0, 5)} bordered={false}/>

            </div>),
        },
        {
            key: '3',
            label: 'Mới nhất',
            children: (<div className='home-market-list '>
                <Table columns={columns2} dataSource={dataTab3} bordered={false}/>

            </div>),
        },
        {
            key: '4',
            label: 'Top KL',
            children: (<div className='home-market-list '>
                <Table columns={columns} dataSource={dataTab4.slice(0, 5)} bordered={false}/>

            </div>),
        },
        {
            key: '5',
            label: (<div className='hot-list_makerWrapper__SOmuY special-tab-line'>
                <span className='hot-list_toptop'>Top tăng trưởng</span>
                <span className="hot-list_changeBlock__K6hyV hot-list_changeUp__O_Kgh">{console.log(dataTab5)}{dataTab5[0].rate}</span>
            </div>),
            children: (<div className='home-market-list '>
                <Table columns={columns} dataSource={dataTab5.slice(0, 5)} bordered={false}/>

            </div>),
        },
    ];
    return (
        <>
            <div className='hot-list_markets__ihE0y'>
                <div className='home-container'>
                    <h2>Tiền mã hoá phổ biến</h2>
                    <Tabs tabBarExtraContent={slot} rootClassName='antd-custom-wrapper' activeKey={activeTab}
                          items={items} pagination={{position: ['none', 'none']}} onChange={handleTabChange}/>
                    <div className='hot-list_exploreMarket__FSKIX'>
                        <Button onClick={() => window.location.href = 'https://www.mexc.com/vi-VN/login'} type="primary"
                                className='section-main-btn'>Bắt đầu giao dịch</Button>
                    </div>
                </div>

            </div>
        </>
    )
}