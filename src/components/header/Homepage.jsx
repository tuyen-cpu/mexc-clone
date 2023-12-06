import 'react-multi-carousel/lib/styles.css'
import './home.css';
import {Button, Carousel as AntdCarousel, Popover} from "antd";
import {default as ReactCarousel} from "react-multi-carousel";
import {useEffect, useRef} from "react";


const noticeData = [
    {
        title: 'MEXC hoàn thành hoán đổi hợp đồng Ben (BEN)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511885'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter và lịch trình niêm yết WEAVERS TOKEN (VRS2)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511907'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter và lịch trình niêm yết Send Finance (SEND)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511896'
    },
    {
        title: '[Niêm yết đầu tiên] MEXC Kickstarter - Bỏ phiếu Groooook(GROOOOOK) để nhận 50,000 USDT airdrop miễn phí!',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511910'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter và lịch trình niêm yết DOGE69 (DOGE69)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511913'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter - Ideaology (IDEA)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511893'
    },
    {
        title: 'MEXC sẽ ra mắt “Thử thách đòn bẩy Futures 15-200x”. Giao dịch ORDI, SOL, DOGE, PEPE, AVAX, IOTX, STX và KAS USDT-M Perpetual Futures để chia sẻ 20,000 USDT tiền thưởng (05/12 - 10/12)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511904'
    },
    {
        title: 'MEXC Kickstarter - Bỏ phiếu Strike Finance (STRK) để nhận 2,200 STRK & 20,000 USDC airdrop miễn phí!',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511901'
    },
    {
        title: 'Thông báo nâng cấp ứng dụng MEXC lên phiên bản từ v4.4.8 trở lên',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511898'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter và lịch trình niêm yết Altura (ALU)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511895'
    },
    {
        title: 'MEXC sẽ niêm yết Anchored Coins EUR (AEUR) trên Khu vực Đổi mới',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511892'
    },
    {
        title: '[Niêm yết đầu tiên] MEXC Kickstarter - Bỏ phiếu MiddleLend (MIDDLE) để nhận 37,500 MIDDLE & 20,000 USDTUSDT airdrop miễn phí!',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511883'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter và lịch trình niêm yết SUC (SUC)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511874'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter và lịch trình niêm yết zkPEPE (ZKPEPE)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511891'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter và lịch trình niêm yết Viridis Network (VRD)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511890'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter và lịch trình niêm yết Baby Grok1 (BABYGROK1)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511889'
    },
    {
        title: 'MEXC Kickstarter - Bỏ phiếu Send Finance (SEND) để nhận 15,385 SEND & 20,000 USDT airdrop miễn phí!',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511855'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter và lịch trình niêm yết Gorilla (GORILLA)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511887'
    },
    {
        title: 'Kết quả bỏ phiếu Kickstarter và lịch trình niêm yết ratsDAO (RAT)',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511886'
    },
    {
        title: '[Niêm yết đầu tiên] MEXC Kickstarter - Bỏ phiếu DOGE69(DOGE69) để nhận 50,000 USDT airdrop miễn phí!',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511880'
    },
    {
        title: '[Niêm yết đầu tiên] MEXC Kickstarter - Bỏ phiếu WEAVERS TOKEN (VRS2) để nhận 2,250,000 VRS2 & 20,000USDT airdrop miễn phí!',
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511881'
    },

]
const activityData = [
    {
        id: 1,
        link: 'https://www.mexc.com/vi-VN/support/articles/14106206825113',
        image: 'https://www.mexc.com/api/file/download/F20230710154521291p3WInakGugxIUw'
    },
    {
        id: 2,
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511485',
        image: 'https://www.mexc.com/api/file/download/F20231113183521324OPOCimtcUnoaGi'
    },
    {
        id: 3,
        link: 'https://affiliates.mexc.com/vi-VN/intro',
        image: 'https://www.mexc.com/api/file/download/F202310201628505737LySrKxInuL7WR'
    },
    {
        id: 4,
        link: 'https://www.mexc.com/vi-VN/sun/assessment?utm_source=mexc&utm_medium=kickstarteractivity&utm_campaign=ygpz',
        image: 'https://www.mexc.com/api/file/download/F20231204115051737PrqJe4GV97P5rs'
    },
    {
        id: 5,
        link: 'https://www.mexc.com/vi-VN/futures-activity/hot-coins/64?time=2023/12/01&name=ID&utm_source=mexc&utm_medium=appwebbanner&utm_campaign=id20231201',
        image: 'https://www.mexc.com/api/file/download/F20231201125546962CwgNPiNN3phPEZ'
    },
    {
        id: 6,
        link: 'https://www.mexc.com/vi-VN/futures-activity/crazy-week?id=60&utm_source=mexc&utm_medium=appwebbanner&utm_campaign=week20231204',
        image: 'https://www.mexc.com/api/file/download/F20230724182719335AgkkTsPEgLVOvS'
    },
    {
        id: 7,
        link: 'https://www.mexc.com/vi-VN/futures-activity/x-game?utm_source=mexc&utm_medium=appwebbanner&utm_campaign=xgame20231204',
        image: 'https://www.mexc.com/api/file/download/F202312032331333264G0Z8j99Ke2IK8'
    },
    {
        id: 8,
        link: 'https://www.mexc.com/vi-VN/launchpads/assessment?utm_source=mexc&utm_medium=launchpadactivity&utm_campaign=launchpad',
        image: 'https://www.mexc.com/api/file/download/F20231204115640255hh97kWyNTKH39F'
    },
    {
        id: 9,
        link: 'https://www.mexc.com/vi-VN/support/articles/17827791511485?utm_source=mexc&utm_medium=webbannner&utm_campaign=holdmx',
        image: 'https://www.mexc.com/api/file/download/F20231112120007712OnlKHWXbmuvJX7'
    },
    {
        id: 10,
        link: 'https://twitter.com/MEXCVietnam/status/1696791180439351556',
        image: 'https://www.mexc.com/api/file/download/F20230727160039800G7OkBbmY9t5J7c'
    }

]
const communitySocialData = [
    'https://public.mocortech.com/banner/F20230822155229778s0suWntyOovsxl.png',
    'https://public.mocortech.com/banner/F202308221552408392lb9SGdeK5017S.png',
    'https://public.mocortech.com/banner/F202307241212107880YTsQlvnBAvjuQ.jpeg',
    'https://public.mocortech.com/banner/F20230822155305528L9mV2FVnwudz35.png',
    'https://public.mocortech.com/banner/F20230822155318715TXC1ahjCQHGjfH.png',
    'https://public.mocortech.com/banner/F20230724121158714sGf4sSd41CbTGD.jpeg',
    'https://public.mocortech.com/banner/F20230822155337560uFg55xz4kjrKc6.png',
    'https://public.mocortech.com/banner/F20230822155349228BGxdO9lZYpFFYV.png',
    'https://public.mocortech.com/banner/F202308221554012327aWtAh2tFavbYb.png',
    'https://public.mocortech.com/banner/F202308221554114182thJcamotY7rP5.png'
]
export default function Homepage() {
    const myvideo = useRef(null);

    useEffect(() => {
        console.log(myvideo.current)
        myvideo.current.play();
    }, [])
    return (
        <>
            <div className='banner-wrapper'>
                <div className='banner-img-wrapper'>
                    <div className='banner-img-content'>
                        <div className="banner-img-content__img"
                             style={{background: "url(/background-home.png)"}}></div>
                        <div className="banner-background-shadowBox"><p
                            className="banner-background-shadowBox__inner"></p>
                        </div>
                    </div>
                </div>
                <div className='banner-content-wrapper'>
                    <div className='home-container'>
                        <div className='banner-content'>
                            <div className='banner-content-box'>
                                <div className='banner-content-box__title'>
                                    <h1>Phí thấp nhất<br/>Lợi nhuận cao nhất</h1>
                                </div>
                                <p className='banner-content-box__desc'><strong>0%</strong> Phí Maker &amp; Taker
                                    Spot<br/><strong>0%</strong> Phí Maker Futures, <strong>0.02%</strong> Phí Taker</p>
                            </div>
                            <div className='banner-content-action'>
                                <Button type="primary" className='banner-content-action__btn login-btn' onClick={() => {
                                    window.location.href = 'https://www.mexc.com/vi-VN/login'
                                }}>Đăng ký</Button>
                                <a href="https://mexc.onelink.me/KTsj/Ios" target="_blank"
                                   className="banner-content-action__btn social-btn"
                                   data-testid="appleStoreUrl">
                                    <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em"
                                         fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                         data-icon="AppleFilled"
                                         style={{fontSize: '18px'}}>
                                        <path
                                            d="M781.152 517.547c1.35 140.502 129.231 187.259 130.72 187.907-1.162 3.216-20.492 66.642-67.481 132.167-40.604 56.626-82.659 112.933-149.023 114.093-65.292 1.165-86.199-36.882-160.801-36.882-74.562 0-97.891 35.723-159.597 38.048-63.984 2.329-112.789-61.102-153.729-117.497-83.732-115.399-147.627-326.037-61.751-468.213 42.612-70.649 118.847-115.307 201.509-116.514 62.918-1.073 122.337 40.467 160.71 40.467 38.513 0 110.649-49.921 186.511-42.612 31.716 1.26 120.898 12.201 178.13 92.025-4.563 2.839-106.41 59.285-105.201 177.010v0zM514.026 237.942c-7.358-53.414 20.211-108.929 51.695-143.808 35.161-39.259 94.487-68.457 143.481-70.32 6.287 54.393-16.716 109.020-50.667 148.37-34.043 39.216-89.836 69.81-144.507 65.758v0zM514.026 237.942z"></path>
                                    </svg>
                                </a>
                                <a href="https://mexc.onelink.me/KTsj/google" target="_blank"
                                   className="banner-content-action__btn social-btn"
                                >
                                    <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em"
                                         fill="currentColor" aria-hidden="true" style={{fontSize: '18px'}}
                                         viewBox="0 0 1024 1024"
                                         data-icon="GooglePlayOutlined">
                                        <path
                                            d="M168.30464 102.4l417.01376 409.6-416.9728 409.6a40.63232 40.63232 0 0 1-18.18624-14.78656 39.56736 39.56736 0 0 1-6.79936-22.20032V139.38688a39.7312 39.7312 0 0 1 6.79936-22.15936 40.79616 40.79616 0 0 1 18.14528-14.82752z m445.97248 438.02624l94.28992 92.5696-447.93856 254.64832 353.64864-347.21792z m130.99008-128.6144l114.97472 65.41312a39.64928 39.64928 0 0 1 0 69.55008l-115.01568 65.37216-101.9904-100.1472 102.03136-100.1472zM260.62848 136.3968L708.608 390.9632l-94.28992 92.5696L260.62848 136.3968z"></path>
                                    </svg>
                                </a>
                                <Popover className='banner-content-action__btn social-btn social-btn-qr'
                                         placement="bottom"
                                         content={(
                                             <div>
                                                 <p className="banner-content-action-btn__title">Tải xuống App MEXC
                                                     chính
                                                     thức</p>
                                                 <div className='qr-img'>
                                                     <img src="./qr-1.png" alt=""/>
                                                 </div>
                                             </div>
                                         )}>
                                    <Button icon={<svg focusable="false" width="1em" height="1em"
                                                       fill="currentColor" aria-hidden="true" style={{fontSize: '18px'}}
                                                       viewBox="0 0 1024 1024"
                                                       data-icon="QrcodeOutlined">
                                        <path
                                            d="M708.928 708.928h157.568V551.36H1024v236.352h-157.504v78.72h-157.568v-78.72H551.36V551.36h157.568v157.568zM0 551.36h472.64V1024H0V551.36z m157.568 157.568v157.568h157.504v-157.568H157.568zM0 0h472.64v472.64H0V0z m157.568 157.568v157.504h157.504V157.568H157.568zM551.36 0H1024v472.64H551.36V0z m157.568 157.568v157.504h157.568V157.568h-157.568z m157.568 708.928H1024V1024h-157.504v-157.504z m-315.136 0h157.568V1024H551.36v-157.504z"></path>
                                    </svg>}></Button>
                                </Popover>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='notice-wrapper'>
                <div className='home-container'>
                    <div className='notice-content'>
                    <span>
                        <svg className="speaker-icon" focusable="false" width="1em" height="1em" fill="currentColor"
                             aria-hidden="true" viewBox="0 0 16 12" data-icon="HomeTrumpet"
                             style={{color: 'var(--title)', fontSize: '16px'}}><path fillRule="evenodd"
                                                                                     clipRule="evenodd"
                                                                                     d="M8 0H5L3 3H0V6V9H3L5 12H8V0ZM16 6C16 9.31371 13.3137 12 10 12V11C12.7614 11 15 8.76142 15 6C15 3.23858 12.7614 1 10 1V0C13.3137 0 16 2.68629 16 6ZM13 6C13 7.65685 11.6569 9 10 9V8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4V3C11.6569 3 13 4.34315 13 6Z"
                                                                                     fill="currentColor"></path></svg>
                    </span>
                        <div className='notice-wrapper-slider'>
                            <AntdCarousel autoplay dotPosition='right'>
                                {noticeData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <a className='notice-content-item' href={item.link}>{item.title}</a>
                                        </div>
                                    )
                                })}
                            </AntdCarousel>
                        </div>
                        <a className='notice-content-more'
                           href="https://www.mexc.com/vi-VN/support/categories/360000254192">
                            <span>Xem thêm</span>
                            <svg className="sc-gEvEer hSTeNi mx-icon iconfont iconic_arrow1 notices_arrow__hcJeo"
                                 focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"
                                 viewBox="0 0 1024 1024" data-icon="ArrowRightOutlined">
                                <path
                                    d="M128 469.333333h604.586667l-152.746667-153.173333L640 256l256 256-256 256-60.16-60.16L732.586667 554.666667H128z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
            <div className='activity-banner-wrapper'>
                <div className='home-container'>
                    <ReactCarousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        showDots
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {activityData.map((item, index) => {
                            return (<a className='activity-banner__item' key={index}
                                       style={{backgroundImage: `url(${item.image})`}} href={item.link}>

                            </a>)
                        })}
                    </ReactCarousel>
                </div>

            </div>
            <div className='hot-list_markets'>
                <div className='home-container'>
                    <h2>Tiền mã hoá phổ biến</h2>
                </div>
            </div>
            <div className="why-choose-mexc_why-choose-wrapper__ud1w8">
                <div className="why-choose-mexc_why-choose__SUZms home-container"><h2>Vì sao lại lựa chọn
                    MEXC?</h2>
                    <div className="why-choose-container">
                        <div className="video-player_video-player__e0dtZ">
                            <div className="video-player_video-player-content__Kmbbl">
                                <video src="https://learn.mocortech.com/learnvideo/Frontpage-Video-VN.mp4" ref={myvideo}
                                       muted preLoad="auto" loop>

                                </video>
                            </div>
                            <div className="video-player_specs-tab__lYN2b">
                                <div className="video-player_specs-tab-content__61jqd" data-theme="dark">
                                    <div className="video-player_specs-tab-item__sIc2t">
                                        <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em"
                                             height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 48 48"
                                             data-icon="IconFee">
                                            <path
                                                d="M35.812 21.5126V23.0126H37.312H37.9946C39.1712 23.0126 39.977 23.6562 40.3171 24.4211C40.6508 25.1718 40.5586 26.065 39.7986 26.7731L25.8041 39.8117C24.819 40.7294 23.181 40.7294 22.1959 39.8117L8.20135 26.7731C7.44143 26.065 7.3492 25.1718 7.68295 24.4211C8.02303 23.6562 8.82876 23.0126 10.0054 23.0126H11.3287H12.8287V21.5126V9.72438C12.8287 8.59408 13.8451 7.5 15.3261 7.5H33.3146C34.7956 7.5 35.812 8.59408 35.812 9.72438V21.5126Z"
                                                stroke="currentColor" fill="none" strokeWidth="3"></path>
                                            <path
                                                d="M22.5 16.5C22.5 15.6716 23.1716 15 24 15C24.8284 15 25.5 15.6716 25.5 16.5V29.5C25.5 30.3284 24.8284 31 24 31C23.1716 31 22.5 30.3284 22.5 29.5V16.5Z"
                                                fill="currentColor"></path>
                                            <rect x="6" y="39" width="36" height="3" rx="1.5"
                                                  fill="currentColor"></rect>
                                        </svg>
                                        <label>Tỷ lệ phí thấp nhất trên thị trường</label></div>
                                    <div className="video-player_specs-tab-item__sIc2t">
                                        <svg className="sc-gEvEer hSTeNi mx-icon icon-liquidity" focusable="false"
                                             width="1em" height="1em" fill="currentColor" aria-hidden="true"
                                             viewBox="0 0 48 48" data-icon="IconLiquidity">
                                            <rect x="7.5" y="7.5" width="33" height="33" rx="2.5" stroke="currentColor"
                                                  fill="none" strokeWidth="3"></rect>
                                            <path
                                                d="M16.6977 29H24.5V40.5H10C8.61929 40.5 7.5 39.3807 7.5 38V21.5H15.1977V27.5V29H16.6977Z"
                                                stroke="currentColor" fill="none" strokeWidth="3"></path>
                                            <path
                                                d="M24.5 24V40.5H38C39.3807 40.5 40.5 39.3807 40.5 38V14.5H31.5571V22.5V24H30.0571H24.5Z"
                                                stroke="currentColor" fill="none" strokeWidth="3"></path>
                                        </svg>
                                        <label>Thanh khoản tốt nhất thị trường</label></div>
                                    <div
                                        className="video-player_specs-tab-item__sIc2t video-player_specs-tab-item__active__rBx_j">
                                        <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em"
                                             height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 48 48"
                                             data-icon="IconSecurity">
                                            <path
                                                d="M8.01953 10.7604L23.9038 7.54981C23.9688 7.53668 24.0357 7.5366 24.1006 7.54955L39.9742 10.7143C40.2229 10.7639 40.3951 10.9918 40.3749 11.2446L38.7981 30.9021C38.7853 31.061 38.6976 31.2043 38.5618 31.2879L24.2577 40.093C24.0975 40.1916 23.8955 40.192 23.7349 40.0939L9.42155 31.3482L8.63946 32.6281L9.42155 31.3482C9.2849 31.2647 9.1965 31.1208 9.18381 30.9611L7.62016 11.2901C7.60012 11.0379 7.77158 10.8105 8.01953 10.7604Z"
                                                stroke="currentColor" fill="none" strokeWidth="3"></path>
                                            <path
                                                d="M32.6178 19.9447C33.2036 19.3589 33.2036 18.4091 32.6178 17.8234C32.032 17.2376 31.0823 17.2376 30.4965 17.8234L23.2641 25.0558C23.0688 25.251 22.7522 25.251 22.557 25.0558L19.0216 21.5204C18.4358 20.9346 17.486 20.9346 16.9003 21.5204C16.3145 22.1062 16.3145 23.0559 16.9003 23.6417L22.2035 28.945C22.5941 29.3355 23.2273 29.3355 23.6178 28.945L32.6178 19.9447Z"
                                                fill="currentColor"></path>
                                        </svg>
                                        <label>Hệ thống bảo mật đạt chuẩn thế giới</label></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button type="primary" className='section-main-btn'
                            onClick={() => window.location.href = 'https://www.mexc.com/vi-VN/login'}>Bắt đầu giao
                        dịch</Button>

                </div>
            </div>
            <div className="products_productsContWrap__4ogse home-container">
                <h2>Khám phá sản phẩm của chúng
                    tôi</h2>
                <ul className="products_productsCont__QZKeW">
                    <li>
                        <div className="products_webCont__QX7YI"><img
                            src="./product-future_2x.png" alt="mexc" loading="lazy" width="200"
                            height="200"/>
                            <div className="products_rightPart__zRAWS"><h3>Future</h3><p>Số 1 về thanh khoản, Phí Maker
                                0.</p><p className="products_des__CFIiD">Đòn bẩy lên tới 200x đối với hợp đồng tương
                                lai. Bạn có thể sử dụng Futures để bảo hộ các vị thế Spot của mình.</p>
                                <aside>
                                    <button type="button" className="ant-btn ant-btn-text products_productsLink__7krbH">
                                        <span>Tìm hiểu thêm</span>
                                        <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em"
                                             height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                             data-icon="ArrowRightOutlined">
                                            <path
                                                d="M128 469.333333h604.586667l-152.746667-153.173333L640 256l256 256-256 256-60.16-60.16L732.586667 554.666667H128z"></path>
                                        </svg>
                                    </button>
                                </aside>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="products_webCont__QX7YI"><img src="./product-spot_2x.png"
                                                                      alt="mexc" loading="lazy" width="200"
                                                                      height="200"/>
                            <div className="products_rightPart__zRAWS"><h3>Spot</h3><p>Đa dạng về loại Crypto. Niêm yết
                                Crypto nhanh chóng.</p><p className="products_des__CFIiD">Hơn 1,500 loại tiền điện tử có
                                sẵn để bạn giao dịch với tỷ lệ phí tốt nhất.</p>
                                <aside>
                                    <button type="button" className="ant-btn ant-btn-text products_productsLink__7krbH">
                                        <span>Tìm hiểu thêm</span>
                                        <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em"
                                             height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                             data-icon="ArrowRightOutlined">
                                            <path
                                                d="M128 469.333333h604.586667l-152.746667-153.173333L640 256l256 256-256 256-60.16-60.16L732.586667 554.666667H128z"></path>
                                        </svg>
                                    </button>
                                </aside>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="products_loginBtn__rFbKX">
                    <Button type="primary" className='section-main-btn '>Đăng ký để giao dịch</Button>
                </div>
            </div>
            <div className="community_community__EJdFT">
                <div className="rtl-img community_community-bg__HcGIb">
                    <div className="community_community-bg-content__bhtGF">
                        <div className="community_community-mask__i7dO_"><img loading="lazy"
                                                                              src="./community_bg.jpg"/>
                        </div>
                    </div>
                </div>
                <div className="community_community-body__Jgr43 home-container"><h2>Tham gia cộng đồng MEXC</h2>
                    <p>Luôn bên cạnh bạn.</p>
                    <div className="community_communityBigBtn__MD3tR">
                        <div>

                            <Button
                                className='main-community-entry_main-community-btn__kHsAS main-community-entry_main-community-twitter__7wyjw'
                                icon={<svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em"
                                           height="1em"
                                           fill="currentColor" aria-hidden="true" viewBox="0 0 28 25"
                                           data-icon="NewTwitterOutLined">
                                    <path d="M19.9192 23.7976L2.44947 1.20238H8.08076L25.5505 23.7976H19.9192Z"
                                          stroke="currentColor" strokeWidth="2.40475"></path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M21.9785 0H26.1935L16.7546 10.9771L14.7319 8.4275L21.9785 0ZM10.6648 13.1575L0.48172 25H4.69677L12.6875 15.7071L10.6648 13.1575Z"
                                          fill="currentColor"></path>
                                </svg>}>X</Button>
                        </div>
                        <div>
                            <Button
                                className='main-community-entry_main-community-btn__kHsAS main-community-btn main-community-entry_main-community-telegram__rwQzp'
                                icon={
                                    <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em"
                                         fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                         data-icon="TelegramFilled">
                                        <path
                                            d="M417.28 795.733l11.947-180.48L756.907 320c14.506-13.227-2.987-19.627-22.187-8.107L330.24 567.467 155.307 512c-37.547-10.667-37.974-36.693 8.533-55.467l681.387-262.826c31.146-14.08 61.013 7.68 49.066 55.466L778.24 795.733c-8.107 38.827-31.573 48.214-64 30.294L537.6 695.467l-84.907 82.346c-9.813 9.814-17.92 17.92-35.413 17.92z"></path>
                                    </svg>}>Telegram</Button>

                        </div>
                    </div>
                    <div className="community_otherMedia__K3_H_">
                        {communitySocialData.map((item, index) => (
                            <div key={index} className="media-menu_mediaItem__KFU_G">
                                <div className="ant-popover-arrow media-menu_ant-popover-arrow__hidden__ov9qR"><span
                                    className="ant-popover-arrow-content"></span></div>
                                <div className="media-menu_mediaItemContent__dTapB"
                                     style={{backgroundImage: `url(${item})`}}></div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className='download_home-download__0ReTU home-container'>
                <h2>Giao dịch mọi lúc mọi nơi với App MEXC</h2>
                <p>Hỗ trợ trên iOS, Android, Windows.</p>
                <div className="download_downloadContent__w4yWM">
                    <div className="download_device__cW4OQ"><img className="download_deviceLogo__mGXRx"
                                                                 src="https://static.mocortech.com/www/static/images/new-home/imh_iPhone_light.png"
                                                                 alt="mexc" loading="lazy"/></div>
                    <div className="download_downloadInfoWrapper__9S0v_">
                        <div className="download_downloadInfoGroup__ITmEa">
                            <div className="download_downloadInfo__WX6Ki"><img
                                src="./portfolio.svg?v=1001" alt="mexc" loading="lazy"/>
                                <div className="download_contRight___VlGG"><h5>Quản lý danh mục đầu tư của bạn</h5>
                                    <p>Tận hưởng nền tảng dịch vụ toàn diện của chúng tôi, trở thành một nhà giao dịch
                                        chuyên nghiệp với các tính năng mạnh mẽ, tốc độ cao và phí giao dịch hấp
                                        dẫn.</p></div>
                            </div>
                            <div className="download_downloadInfo__WX6Ki"><img
                                src="./mobile_apps.svg?v=1001" alt="mexc" loading="lazy"/>
                                <div className="download_contRight___VlGG"><h5>Hỗ trợ ứng dụng đa nền tảng</h5><p>Mua và
                                    giao dịch tất cả những token mà bạn muốn trên ứng dụng MEXC một cách dễ dàng mọi lúc
                                    mọi nơi.</p></div>
                            </div>
                        </div>
                        <div className="download_downloadGroup__V_bnp">
                            <a href="https://www.mexc.com/vi-VN/download" className="download_www">
                                <svg className="sc-gEvEer hSTeNi mx-icon iconfont iconios1 download_appStore__b4QwE"
                                     focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"
                                     viewBox="0 0 1024 1024" data-icon="AppleFilled">
                                    <path
                                        d="M781.152 517.547c1.35 140.502 129.231 187.259 130.72 187.907-1.162 3.216-20.492 66.642-67.481 132.167-40.604 56.626-82.659 112.933-149.023 114.093-65.292 1.165-86.199-36.882-160.801-36.882-74.562 0-97.891 35.723-159.597 38.048-63.984 2.329-112.789-61.102-153.729-117.497-83.732-115.399-147.627-326.037-61.751-468.213 42.612-70.649 118.847-115.307 201.509-116.514 62.918-1.073 122.337 40.467 160.71 40.467 38.513 0 110.649-49.921 186.511-42.612 31.716 1.26 120.898 12.201 178.13 92.025-4.563 2.839-106.41 59.285-105.201 177.010v0zM514.026 237.942c-7.358-53.414 20.211-108.929 51.695-143.808 35.161-39.259 94.487-68.457 143.481-70.32 6.287 54.393-16.716 109.020-50.667 148.37-34.043 39.216-89.836 69.81-144.507 65.758v0zM514.026 237.942z"></path>
                                </svg>
                                <span style={{marginInlineStart: '10px'}}>App Store</span>
                            </a>
                            <a href="https://www.mexc.com/vi-VN/download" className="download_www">
                                <svg
                                    className="sc-gEvEer hSTeNi mx-icon iconfont iconGooglePlaylogo1 download_googleplay__Wm4mF"
                                    focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"
                                    viewBox="0 0 1024 1024" data-icon="GooglePlayOutlined">
                                    <path
                                        d="M168.30464 102.4l417.01376 409.6-416.9728 409.6a40.63232 40.63232 0 0 1-18.18624-14.78656 39.56736 39.56736 0 0 1-6.79936-22.20032V139.38688a39.7312 39.7312 0 0 1 6.79936-22.15936 40.79616 40.79616 0 0 1 18.14528-14.82752z m445.97248 438.02624l94.28992 92.5696-447.93856 254.64832 353.64864-347.21792z m130.99008-128.6144l114.97472 65.41312a39.64928 39.64928 0 0 1 0 69.55008l-115.01568 65.37216-101.9904-100.1472 102.03136-100.1472zM260.62848 136.3968L708.608 390.9632l-94.28992 92.5696L260.62848 136.3968z"></path>
                                </svg>
                                <span style={{marginInlineStart: '6px'}}>Google Play</span>
                            </a>
                            <a href="https://www.mexc.com/vi-VN/download" className="download_www">
                                <svg className="sc-gEvEer hSTeNi mx-icon iconfont icondo-windows1" focusable="false"
                                     width="1em" height="1em" fill="currentColor" aria-hidden="true"
                                     viewBox="0 0 1024 1024"
                                     data-icon="WindowsOutlined">
                                    <path
                                        d="M125.5424 242.3296v221.7984L368.64 455.0656V191.7952l-243.0464 50.4832z m345.3952-78.7968V450.048l428.8512-15.8208V74.496l-428.8512 89.088zM125.5424 560.128v221.7984l243.0464 50.5344v-263.2192l-243.0464-9.1136z m345.3952 14.1312v286.464l428.8512 89.0368v-359.68l-428.8512-15.8208z"></path>
                                </svg>
                                <span style={{marginInlineStart: '10px'}}>Windows</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}