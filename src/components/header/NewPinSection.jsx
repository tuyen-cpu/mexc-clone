import {default as ReactCarousel} from "react-multi-carousel";
import ReactECharts from 'echarts-for-react';
import './newpinsection.css'
import {Button} from "antd";
import {useEffect, useState} from "react";
import {randomDecimals, randomizeDecimalPlaces} from "../utils.js";
const newPinData = [
    {
        name:'ROOT/USDT',
        price:0.4417,
        rate:'+1.51%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F202312111411102757yoH8siwYu5vYm',
        link:'https://www.mexc.com/exchange/ROOT_USDT',
        data:[
            ['2019-10-10', 122],
            ['2019-10-11', 222],
            ['2019-10-12', 900],
            ['2019-10-13', 580],
            ['2019-10-14', 222],
            ['2019-10-15', 300],
            ['2019-10-16', 111],
            ['2019-10-17', 300],
            ['2019-10-18', 1200]
        ]
    },
    {
        name:'CYBERTRUCK/USDT',
        price:0.000000000000144,
        rate:'-0.42%',
        operator:'-',
        avatar:'https://www.mexc.com/api/file/download/F20231211145114751yHJ0pqKzq4ItaM',
        link:'https://www.mexc.com/exchange/CYBERTRUCK_USDT',
        data:[
            ['2019-10-10', 1111],
            ['2019-10-11', 222],
            ['2019-10-12', 1111],
            ['2019-10-13', 777],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 80],
            ['2019-10-18', 1000]
        ]
    },
    {
        name:'GOOD/USDT',
        price:0.000000000185,
        rate:'-43.06%',
        operator:'-',
        avatar:'https://www.mexc.com/api/file/download/F202312111927224630TD6tV2kqdnir2',
        link:'https://www.mexc.com/exchange/GOOD_USDT',
        data:[
            ['2019-10-10', 2000],
            ['2019-10-11', 1000],
            ['2019-10-12', 300],
            ['2019-10-13', 580],
            ['2019-10-14', 250],
            ['2019-10-15', 3000],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 200]
        ]
    },
    {
        name:'PYTH/USDT',
        price:0.4328,
        rate:'-5.17%',
        operator:'-',
        avatar:'https://www.mexc.com/api/file/download/F20231120002235816BRW9nc4jpE4IKt',
        link:'https://www.mexc.com/exchange/PYTH_USDT',
        data:[
            ['2019-10-10', 2323],
            ['2019-10-11', 444],
            ['2019-10-12', 300],
            ['2019-10-13', 580],
            ['2019-10-14', 1000],
            ['2020-10-15', 300],
            ['2020-10-16', 450],
            ['2020-10-17', 1000],
            ['2020-10-18', 200],
            ['2020-11-10', 200],
            ['2020-11-11', 4000],
            ['2020-11-12', 300],
            ['2020-10-13', 580],
            ['2020-12-14', 1000],
            ['2020-12-15', 300],
            ['2020-12-16', 333],
            ['2020-12-17', 3444],
            ['2020-12-18', 300]
        ]
    },
    {
        name:'ZKPEPE/USDT',
        price:0.00007582,
        rate:'-11.81%',
        operator:'-',
        avatar:'https://www.mexc.com/api/file/download/F20231203135058365ppbRQoLzi1gTvh',
        link:'https://www.mexc.com/exchange/ZKPEPE_USDT',
        data:[
            ['2019-10-10', 100],
            ['2019-10-11', 1000],
            ['2019-10-12', 555],
            ['2019-10-13', 580],
            ['2019-10-14', 1000],
            ['2020-10-15', 500],
            ['2020-10-16', 450],
            ['2020-10-17', 1000],
            ['2020-10-18', 200],
            ['2020-11-10', 500],
            ['2020-11-11', 100],
            ['2020-11-12', 300],
            ['2020-10-13', 580],
            ['2020-12-14', 100],
            ['2020-12-15', 300],
            ['2020-12-16', 1000],
            ['2020-12-17', 2000],
            ['2020-12-18', 300]
        ]
    },
    {
        name:'HER/USDT',
        price:1.4930,
        rate:'+1.37%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231207133204709T73siXopqofWbu',
        link:'https://www.mexc.com/exchange/HER_USDT',
        data:[
            ['2019-10-10', 1],
            ['2019-10-11', 10],
            ['2019-10-12', 300],
            ['2019-10-13', 60],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 30],
            ['2019-10-17', 300],
            ['2019-10-18', 200]
        ]

    },
    {
        name:'JOB/USDT',
        price:0.0000000000002251,
        rate:'+4.21%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231015095706833zjmdPkBi1nxhY7',
        link:'https://www.mexc.com/exchange/JOB_USDT',
        data:[
            ['2019-10-10', 200],
            ['2019-10-11', 560],
            ['2019-10-12', 300],
            ['2019-10-13', 580],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 200]
        ]
    },
    {
        name:'BITS/USDT',
        price:0.007599,
        rate:'+4.21%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231029090700269AKupqw6DKfzPRX',
        link:'https://www.mexc.com/exchange/BITS_USDT',
        data:[
            ['2019-10-10', 1400],
            ['2019-10-11', 560],
            ['2019-10-12', 300],
            ['2019-10-13', 580],
            ['2019-10-14', 250],
            ['2019-10-15', 2000],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 2000]
        ]
    },
    {
        name:'ATEM/USDT',
        price:0.13553,
        rate:'+8.21%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231115161745134Un8pkYK2uf7gdQ',
        link:'https://www.mexc.com/exchange/ATEM_USDT',
        data:[
            ['2019-10-10', 100],
            ['2019-10-11', 1200],
            ['2019-10-12', 300],
            ['2019-10-13', 2000],
            ['2019-10-14', 250],
            ['2019-10-15', 100],
            ['2019-10-16', 450],
            ['2019-10-17', 100],
            ['2019-10-18', 100]
        ]
    }
    ,
    {
        name:'PHAROS/USDT',
        price:0.0043553,
        rate:'-8.21%',
        operator:'-',
        avatar:'https://www.mexc.com/api/file/download/F20231017140509613zFKQvxVOFUT5RO',
        link:'https://www.mexc.com/exchange/PHAROS_USDT',
        data:[
            ['2019-10-10', 100],
            ['2019-10-11', 100],
            ['2019-10-12', 300],
            ['2019-10-13', 100],
            ['2019-10-14', 2000],
            ['2019-10-15', 2000],
            ['2019-10-16', 450],
            ['2019-10-17', 2000],
            ['2019-10-18', 100]
        ]
    }
    ,
    {
        name:'TURT/USDT',
        price:0.02786,
        rate:'+12.24%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F202312071326460242SqQZ89CMZq1WT',
        link:'https://www.mexc.com/exchange/TURT_USDT',
        data:[
            ['2019-10-10', 100],
            ['2019-10-11', 100],
            ['2019-10-12', 300],
            ['2019-10-13', 100],
            ['2019-10-14', 2000],
            ['2019-10-15', 2000],
            ['2019-10-16', 450],
            ['2019-10-17', 2000],
            ['2019-10-18', 100]
        ]
    } ,
    {
        name:'MAKA/USDT',
        price:0.03656,
        rate:'-6.89%',
        operator:'-',
        avatar:'https://www.mexc.com/api/file/download/F20231025191046296TkH4qOkTYfxkD4',
        link:'https://www.mexc.com/exchange/MAKA_USDT',
        data:[
            ['2019-10-10', 12],
            ['2019-10-11', 12],
            ['2019-10-12', 3000],
            ['2019-10-13', 3000],
            ['2019-10-14', 2000],
            ['2019-10-15', 2000],
            ['2019-10-16', 12],
            ['2019-10-17', 12],
            ['2019-10-18', 1000]
        ]
    },
    {
        name:'SYNC/USDT',
        price:0.06231,
        rate:'+15.98%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231204174948741AHAxvOeTMTiAtQ',
        link:'https://www.mexc.com/exchange/SYNC_USDT',
        data:[
            ['2019-10-10', 1500],
            ['2019-10-11', 2000],
            ['2019-10-12', 12],
            ['2019-10-13', 2000],
            ['2019-10-14', 12],
            ['2019-10-15', 2000],
            ['2019-10-16', 12],
            ['2019-10-17', 12],
            ['2019-10-18', 2000]
        ]
    }
]
export default function NewPinSection() {
    const [dataHot, setDataHot] = useState([...newPinData]);
    const [dataHot1, setDataHot1] = useState([...newPinData.reverse()]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDataHot((prevDataHot) => {
                return prevDataHot.map((item) => {
                    return {
                        ...item,
                        price: randomizeDecimalPlaces(item.price),
                        rate: randomDecimals(item.rate)
                    };
                });
            });
            setDataHot1((prevDataHot) => {
                return prevDataHot.map((item) => {
                    return {
                        ...item,
                        price: randomizeDecimalPlaces(item.price),
                        rate: randomDecimals(item.rate)
                    };
                });
            });

        }, 2000);
        return () => {
            clearInterval(interval)
        };
    }, []);
    return(
        <div className='new-list_home-new-list '>
            <h2>New Listing</h2>
            <div className="new-list_home-new-view-markets home-container">
                <a href="https://www.mexc.com/markets">View Markets
                    <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em"
                         fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                         data-icon="ArrowRightOutlined">
                        <path
                            d="M128 469.333333h604.586667l-152.746667-153.173333L640 256l256 256-256 256-60.16-60.16L732.586667 554.666667H128z"></path>
                    </svg>
                </a><
                /div>
            <div>
                <div className='wrapper-pin-pin'>
                    <ReactCarousel
                        additionalTransfrom={100}
                        arrows={false}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        customTransition="all 10s linear"
                        dotListClass=""
                        focusOnSelect={false}
                        infinite={true}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={0}
                        draggable={false}
                        pauseOnHover={true}
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1600
                                },
                                items: 7,
                                partialVisibilityGutter: 40,
                            },
                            desktop1: {
                                breakpoint: {
                                    max: 1599,
                                    min: 1300
                                },
                                items: 5,
                                partialVisibilityGutter: 40,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1090,
                                    min: 800
                                },
                                items: 3,
                                partialVisibilityGutter: 30
                            },
                            mobile: {
                                breakpoint: {
                                    max: 650,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        transitionDuration={0}
                    >

                        {dataHot && dataHot.map((item, index) => {
                            return (
                                <a key={index} className="home-new-item new-list-item_home-new-item__MMsS4" target="_blank"
                                   href={item.link}>
                                    <div className="new-list-item_new-item-title__klJ1r">
                                        <div className="coin-cover_coin-cover__NV_PX coin-cover">
                                            <div className="ant-image">
                                                <img alt='' loading="lazy" className="ant-image-img" src={item.avatar}/>
                                            </div>
                                        </div>
                                        <span className="new-list-item_new-item-name__DAo_z">{item.name}</span></div>
                                    <div className="new-list-item_new-item-content__2p31j">
                                        <div className="new-list-item_new-item-desc__hiZs1"><p
                                            className="new-list-item_new-item-price__3wZ1V">{item.price}</p><p
                                            className={`new-list-item_new-item-change__78_QS new-list-item_changeUp__s_DWJ ${item.operator==='+'?'down-rate':'up-rate'}`}>{item.rate}</p>
                                        </div>
                                        <div className="new-list-item_new-item-kline__zKLhh">
                                            <div
                                                className="suggestKline_kline__BsyCt new-list-item_new-item-kine__chart__Uhvs5"
                                                _echarts_instance_="ec_1701930168657">
                                                <div className='newnewnew'>
                                                    {/*<img src={`./${item.img}`} alt=""/>*/}
                                                    <ReactECharts  notMerge={true}  style={{ height: '150%' }} option={{
                                                        globe:{
                                                            width:'100%',
                                                            height:'100%'
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
                                                        backgroundColor:'transparent',
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
                                                                    color: `${item.operator==='+'?'#0aa869':'#fe445c'}`,
                                                                    width: 1.3
                                                                },
                                                                data: item.data
                                                            }
                                                        ]
                                                    }} />
                                                </div>
                                                <div className=""></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}

                    </ReactCarousel>
                    <ReactCarousel
                        additionalTransfrom={100}
                        arrows={false}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        customTransition="all 12s linear"
                        dotListClass=""
                        focusOnSelect={false}
                        infinite={true}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={0}
                        draggable={false}
                        pauseOnHover={true}
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1600
                                },
                                items: 7,
                                partialVisibilityGutter: 40,
                            },
                            desktop1: {
                                breakpoint: {
                                    max: 1599,
                                    min: 1300
                                },
                                items: 5,
                                partialVisibilityGutter: 40,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1090,
                                    min: 800
                                },
                                items: 3,
                                partialVisibilityGutter: 30
                            },
                            mobile: {
                                breakpoint: {
                                    max: 650,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={true}
                        rewindWithAnimation={true}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        transitionDuration={0}
                    >

                        {dataHot1 && dataHot1.map((item, index) => {
                            return (
                                <a key={index} className="home-new-item new-list-item_home-new-item__MMsS4" target="_blank"
                                   href={item.link}>
                                    <div className="new-list-item_new-item-title__klJ1r">
                                        <div className="coin-cover_coin-cover__NV_PX coin-cover">
                                            <div className="ant-image">
                                                <img alt='' loading="lazy" className="ant-image-img" src={item.avatar}/>
                                            </div>
                                        </div>
                                        <span className="new-list-item_new-item-name__DAo_z">{item.name}</span></div>
                                    <div className="new-list-item_new-item-content__2p31j">
                                        <div className="new-list-item_new-item-desc__hiZs1"><p
                                            className="new-list-item_new-item-price__3wZ1V">{item.price}</p><p
                                            className={`new-list-item_new-item-change__78_QS new-list-item_changeUp__s_DWJ ${item.operator==='+'?'down-rate':'up-rate'}`}>{item.rate}</p>
                                        </div>
                                        <div className="new-list-item_new-item-kline__zKLhh">
                                            <div
                                                className="suggestKline_kline__BsyCt new-list-item_new-item-kine__chart__Uhvs5"
                                                _echarts_instance_="ec_1701930168657">
                                                <div className='newnewnew'>
                                                    {/*<img src={`./${item.img}`} alt=""/>*/}
                                                    <ReactECharts  notMerge={true}  style={{ height: '150%' }} option={{
                                                        globe:{
                                                            width:'100%',
                                                            height:'100%'
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
                                                        backgroundColor:'transparent',
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
                                                                    color: `${item.operator==='+'?'#0aa869':'#fe445c'}`,
                                                                    width: 1.3
                                                                },
                                                                data: item.data
                                                            }
                                                        ]
                                                    }} />
                                                </div>
                                                <div className=""></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}

                    </ReactCarousel>
                </div>
                <div className='new-list_home-new-list-footer__6RXpK'>
                    <Button type="primary" className='section-main-btn'
                            onClick={() => window.location.href = 'https://www.mexc.com/login'}>Start Trading</Button>
                </div>

            </div>

        </div>
    )
}