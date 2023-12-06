import './footer.css';
import {Button, Popover} from "antd";
import {useState} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const socialIcons = [
    'https://public.mocortech.com/banner/F20230822155201934UfZdMHFm2nifuh.png',
    'https://public.mocortech.com/banner/F20230809152906655hpY3SsIldymI9c.png',
    'https://public.mocortech.com/banner/F20230822155229778s0suWntyOovsxl.png',
    'https://public.mocortech.com/banner/F202308221552408392lb9SGdeK5017S.png',
    'https://public.mocortech.com/banner/F202307241212107880YTsQlvnBAvjuQ.jpeg',
    'https://public.mocortech.com/banner/F20230822155305528L9mV2FVnwudz35.png',
    'https://public.mocortech.com/banner/F20230822155318715TXC1ahjCQHGjfH.png',
    'https://public.mocortech.com/banner/F20230724121158714sGf4sSd41CbTGD.jpeg',
    'https://public.mocortech.com/banner/F20230822155337560uFg55xz4kjrKc6.png',
    'https://public.mocortech.com/banner/F20230822155349228BGxdO9lZYpFFYV.png',
    'https://public.mocortech.com/banner/F202308221554012327aWtAh2tFavbYb.png',
    'https://public.mocortech.com/banner/F202308221554114182thJcamotY7rP5.png',
    'https://public.mocortech.com/banner/F20230822155423011Atz46YQN6jCsMV.png',
    'https://public.mocortech.com/banner/F202308221554336896AKIJa9lD2f3HN.png',
    'https://public.mocortech.com/banner/F20230822155443043RJqBoi5IsZJ6Tx.png'
]
export default function FooterPage() {
    const [show, setShow] = useState([false,false,false,false]);
    const handleClick = event => {

       setShow((prev) => {
           const prevShow = [...prev];
              prevShow[Number(event.target.dataset.id) - 1] = !prevShow[Number(event.target.dataset.id) - 1];
              console.log(prevShow);
              return prevShow;
       })

    };

    return (
        <div className='footer-wrapper'>
            <div className='footer-content'>
                <dl className='footer-content-dl'>
                    <dt className='footer-content__title'><span>Về chúng tôi</span>
                        <svg onClick={handleClick} data-id='1' className="sc-aXZVg ktFCMi mx-icon footer_toggleBtn__3F0ol" focusable="false" width="1em"
                             height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                             data-icon="PlusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                            <path d="M512 944a48 48 0 0 1-48-48V128a48 48 0 0 1 96 0v768a48 48 0 0 1-48 48z"></path>
                        </svg>
                    </dt>
                    <div className={`footer-content__body ${show[0]?'active':''}`} data-id='1'>
                        <dd><a href="https://www.mexc.com/vi-VN/about">Giới thiệu MEXC</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/terms">Thỏa thuận người dùng</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/privacypolicy">Chính sách bảo mật</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/risk">Tuyên bố rủi ro</a></dd>
                        <dd><a href="https://m-ventures.io/">M-Ventures</a></dd>
                        <dd><a rel="nofollow noopener noreferrer" target="_blank" href="https://blog.mexc.com/">MEXC
                            Blog</a></dd>
                    </div>
                </dl>
                <dl className="footer-content-dl">
                    <dt className='footer-content__title'><span>Dịch vụ</span>
                        <svg onClick={handleClick} data-id='2' className="sc-aXZVg ktFCMi mx-icon footer_toggleBtn__3F0ol" focusable="false" width="1em"
                             height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                             data-icon="PlusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                            <path d="M512 944a48 48 0 0 1-48-48V128a48 48 0 0 1 96 0v768a48 48 0 0 1-48 48z"></path>
                        </svg>
                    </dt>
                    <div className={`footer-content__body ${show[1]?'active':''}`} data-id='2'>
                        <dd><a href="https://otc.mexc.com/vi-VN/fastTransaction">Mua Crypto</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/download">Tải xuống APP</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/fee">Phí</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/invite">Chương trình giới thiệu bạn bè</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer"
                               href="https://affiliates.mexc.com/vi-VN/intro?entrance=footer">Chương Trình Đại Lý</a>
                        </dd>
                        <dd><a href="https://www.mexc.com/vi-VN/mexc-api">API</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/activity/institution">Dịch vụ cho tổ chức</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/how-to-buy">Làm thế nào để mua</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/tokens">Thông tin Crypto</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/price">Giá Crypto</a></dd>
                    </div>
                </dl>
                <dl className="footer-content-dl">
                    <dt className="footer-content__title"><span>Hỗ trợ người dùng</span>
                        <svg onClick={handleClick} data-id='3' className="sc-aXZVg ktFCMi mx-icon footer_toggleBtn__3F0ol" focusable="false" width="1em"
                             height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                             data-icon="PlusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                            <path d="M512 944a48 48 0 0 1-48-48V128a48 48 0 0 1 96 0v768a48 48 0 0 1-48 48z"></path>
                        </svg>
                    </dt>
                    <div className={`footer-content__body ${show[2]?'active':''}`} data-id='3'>
                        <dd><a>CSKH</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer" href="https://www.mexc.com/vi-VN/support">Trung
                            tâm trợ giúp</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer"
                               href="https://www.mexc.com/vi-VN/support/categories/360000254192">Thông báo</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/learn">Learn</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/vip">Quyền lợi VIP</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer nofollow"
                               href="https://www.mexc.com/vi-VN/support/requests">Gửi yêu cầu</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer nofollow"
                               href="https://www.mexc.com/vi-VN/support/requests/suggestion">Kiến nghị cải tiến</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer nofollow"
                               href="https://www.mexc.com/vi-VN/support/requests/report">Báo cáo tài sản bất thường</a>
                        </dd>
                        <dd><a href="https://www.mexc.com/vi-VN/support/requests/legal">Hỗ trợ pháp lý</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/official-verify">Kênh xác minh chính thức</a></dd>
                        <dd><a href="https://www.mexc.com/vi-VN/support/requests/complaint">Nộp yêu cầu khiếu nại</a>
                        </dd>
                    </div>
                </dl>
                <dl className="footer-content-dl">
                    <dt className="footer-content__title"><span>Liên hệ với chúng tôi</span>
                        <svg onClick={handleClick} data-id='4' className="sc-aXZVg ktFCMi mx-icon footer_toggleBtn__3F0ol" focusable="false" width="1em"
                             height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                             data-icon="PlusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                            <path d="M512 944a48 48 0 0 1-48-48V128a48 48 0 0 1 96 0v768a48 48 0 0 1-48 48z"></path>
                        </svg>
                    </dt>
                    <div data-id='4' className={`footer-content__body ${show[3]?'active':''}`}>
                        <dd><a href="mailto:business@mexc.com">Hợp tác kinh doanh</a></dd>
                        <dd><a href="mailto:institution@mexc.com">Hợp tác thể chế</a></dd>
                        <dd><a href="mailto:media@mexc.com">Hợp tác truyền thông</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer">Đăng ký niêm yết token</a></dd>
                        <dd><a href="mailto:otc_apply@mexc.com">Đăng ký Thương gia OTC</a></dd>
                    </div>
                </dl>
                <dl className="footer-content-dl">
                    <dt className="footer-content__title"><span>Cộng đồng</span>
                        {/*<svg onClick={handleClick} data-id='5' className="sc-aXZVg ktFCMi mx-icon footer_toggleBtn__3F0ol" focusable="false" width="1em"*/}
                        {/*     height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"*/}
                        {/*     data-icon="PlusOutlined">*/}
                        {/*    <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>*/}
                        {/*    <path d="M512 944a48 48 0 0 1-48-48V128a48 48 0 0 1 96 0v768a48 48 0 0 1-48 48z"></path>*/}
                        {/*</svg>*/}
                    </dt>
                    <div  className={`footer-content__body`}>
                        <div className="footer-media">
                            {socialIcons.map((icon, index) => (
                                // <Popover className='banner-content-action__btn social-btn social-btn-qr' placement="top"
                                //          content={(
                                //              <div>
                                //                  <p className="banner-content-action-btn__title">Tải xuống App MEXC chính
                                //                      thức</p>
                                //                  <div className='qr-img'>
                                //                      <img src="./qr-1.png" alt=""/>
                                //                  </div>
                                //              </div>
                                //          )}>
                                //     <Button icon={<div className="media_mediaItemContent"
                                //                        style={{backgroundImage: `url(${icon})`}}></div>}></Button>
                                // </Popover>
                                <div key={index} className="media_mediaItem">
                                    <div className="ant-popover-arrow media_ant-popover-arrow__hidden__Yokjr"><span
                                        className="ant-popover-arrow-content"></span></div>
                                    <div className="media_mediaItemContent"
                                         style={{backgroundImage: `url(${icon})`}}></div>
                                </div>
                            ))}


                        </div>
                    </div>
                </dl>
            </div>
            <p className="footer_copyRight__Axy8j">© 2023 MEXC.COM</p>

        </div>
    )
}
