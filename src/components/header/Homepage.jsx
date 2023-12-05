import './home.css';
import {Button, Popover} from "antd";

export default function Homepage() {
    const text = <span>Title</span>;


    return (
        <div className='banner-wrapper'>
            <div className='banner-img-wrapper'>
                <div className='banner-img-content'>
                    <div className="banner-img-content__img" style={{background: "url(/background-home.png)"}}></div>
                    <div className="banner-background-shadowBox"><p className="banner-background-shadowBox__inner"></p>
                    </div>
                </div>
            </div>
            <div className='banner-content-wrapper'>
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
                        <a href="https://mexc.onelink.me/KTsj/Ios" target="_blank" className="banner-content-action__btn social-btn"
                           data-testid="appleStoreUrl">
                            <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em"
                                 fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="AppleFilled"
                                 style={{fontSize: '18px'}}>
                                <path
                                    d="M781.152 517.547c1.35 140.502 129.231 187.259 130.72 187.907-1.162 3.216-20.492 66.642-67.481 132.167-40.604 56.626-82.659 112.933-149.023 114.093-65.292 1.165-86.199-36.882-160.801-36.882-74.562 0-97.891 35.723-159.597 38.048-63.984 2.329-112.789-61.102-153.729-117.497-83.732-115.399-147.627-326.037-61.751-468.213 42.612-70.649 118.847-115.307 201.509-116.514 62.918-1.073 122.337 40.467 160.71 40.467 38.513 0 110.649-49.921 186.511-42.612 31.716 1.26 120.898 12.201 178.13 92.025-4.563 2.839-106.41 59.285-105.201 177.010v0zM514.026 237.942c-7.358-53.414 20.211-108.929 51.695-143.808 35.161-39.259 94.487-68.457 143.481-70.32 6.287 54.393-16.716 109.020-50.667 148.37-34.043 39.216-89.836 69.81-144.507 65.758v0zM514.026 237.942z"></path>
                            </svg>
                        </a>
                        <a href="https://mexc.onelink.me/KTsj/google" target="_blank" className="banner-content-action__btn social-btn"
                        >
                            <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em"
                                 fill="currentColor" aria-hidden="true" style={{fontSize: '18px'}}
                                 viewBox="0 0 1024 1024"
                                 data-icon="GooglePlayOutlined">
                                <path
                                    d="M168.30464 102.4l417.01376 409.6-416.9728 409.6a40.63232 40.63232 0 0 1-18.18624-14.78656 39.56736 39.56736 0 0 1-6.79936-22.20032V139.38688a39.7312 39.7312 0 0 1 6.79936-22.15936 40.79616 40.79616 0 0 1 18.14528-14.82752z m445.97248 438.02624l94.28992 92.5696-447.93856 254.64832 353.64864-347.21792z m130.99008-128.6144l114.97472 65.41312a39.64928 39.64928 0 0 1 0 69.55008l-115.01568 65.37216-101.9904-100.1472 102.03136-100.1472zM260.62848 136.3968L708.608 390.9632l-94.28992 92.5696L260.62848 136.3968z"></path>
                            </svg>
                        </a>
                        <Popover className='banner-content-action__btn social-btn social-btn-qr' placement="bottom"  content={(
                            <div >
                                <p className="banner-content-action-btn__title">Tải xuống App MEXC chính thức</p>
                                <div className='qr-img'>
                                    <img src="./qr-1.png" alt=""/>
                                </div>
                            </div>
                        )} >
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
    )
}