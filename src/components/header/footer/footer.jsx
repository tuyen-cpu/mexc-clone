import './footer.css';
import {Button, Popover} from "antd";
import {useState} from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Line} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const socialIcons = [
    {
        icon: 'https://public.mocortech.com/banner/F20230822155201934UfZdMHFm2nifuh.png',
        links: [
            {
                name: 'MEXC Official',
                link: 'https://t.me/MEXCEnglish'
            },
            {
                name: 'MEXC 港臺交流群',
                link: 'https://t.me/MEXC_ZH'
            },
            {
                name: 'MEXC EN',
                link: 'https://t.me/MEXC_ENofficial'
            },
            {
                name: 'MEXC 日本コミュニティ',
                link: 'https://t.me/MEXCJapan'
            },
            {
                name: 'MEXC Korea',
                link: 'https://t.me/MEXCKorean'
            },
            {
                name: 'MEXC Türkiye',
                link: 'https://t.me/MEXCTurkey'
            },
            {
                name: 'MEXC Việt Nam',
                link: 'https://t.me/MEXCVN_Community'
            },
            {
                name: 'MEXC Русский',
                link: 'https://t.me/MEXCRussianOfficial'
            },
            {
                name: 'MEXC Español',
                link: 'https://t.me/MEXCSpanish'
            },
            {
                name: 'MEXC Malaysian',
                link: 'https://t.me/MEXC_MalaysiaOfficial'
            },
            {
                name: 'MEXC Português',
                link: 'https://t.me/MEXCPortuguese'
            },
            {
                name: 'MEXC Filipino',
                link: 'https://t.me/MEXCFilipino'
            },
            {
                name: 'MEXC Bengali',
                link: 'https://t.me/MEXCBengali'
            },
            {
                name: 'MEXC Indonesian',
                link: 'https://t.me/MEXCIndonesian'
            },
            {
                name: 'MEXC DACH',
                link: 'https://t.me/MEXC_DE'
            },
            {
                name: 'MEXC فارسی',
                link: 'https://t.me/MEXC_PER'
            },
            {
                name: 'MEXC Україна',
                link: 'https://t.me/MEXCUkraineOfficial'
            },
            {
                name: 'MEXC Futures',
                link: 'https://t.me/MEXCFutures'
            }
        ]
    },
    {
        icon: 'https://public.mocortech.com/banner/F20230809152906655hpY3SsIldymI9c.png',
        links: [
            {
                name: 'MEXC Official',
                link: 'https://twitter.com/MEXC_Official'
            },
            {
                name: 'MEXC 華語',
                link: 'https://twitter.com/MEXCZH'
            },
            {
                name: 'MEXC EN',
                link: 'https://twitter.com/MEXC_EN'
            },
            {
                name: 'MEXC 日本',
                link: 'https://twitter.com/MEXC_Japan'
            },
            {
                name: 'MEXC Korea',
                link: 'https://twitter.com/MEXC_Korea'
            },
            {
                name: 'MEXC Türkiye',
                link: 'https://twitter.com/MEXC_TR'
            },
            {
                name: 'MEXC Việt Nam',
                link: 'https://twitter.com/MEXCVietnam'
            },
            {
                name: 'MEXC Deutsch',
                link: 'https://twitter.com/MEXC_DE'
            },
            {
                name: 'MEXC Русский',
                link: 'https://twitter.com/mexcrussian'
            },
            {
                name: 'MEXC Україна',
                link: 'https://twitter.com/mexcukr'
            }
        ]

    },
    {
        icon: 'https://public.mocortech.com/banner/F20230822155229778s0suWntyOovsxl.png',
        links: [
            {
                name: 'MEXC Official',
                link: 'https://www.facebook.com/mexcofficial'
            },
            {
                name: 'MEXC Türkiye',
                link: 'https://www.facebook.com/MEXC_TR/'
            },
            {
                name: 'MEXC Việt Nam',
                link: 'https://www.facebook.com/MEXCVN'
            },
            {
                name: 'MEXC Korea',
                link: 'https://www.facebook.com/people/Mexc-Ko/100076308821804/'
            }
        ]
    }
    ,
    {
        icon: 'https://public.mocortech.com/banner/F202308221552408392lb9SGdeK5017S.png',
        links: [
            {
                name: 'MEXC Official',
                link: 'https://www.instagram.com/mexc_official/'
            },
            {
                name: 'MEXC Korea',
                link: 'https://www.instagram.com/mexc_korea/'
            },
            {
                name: 'MEXC Türkiye',
                link: 'https://www.instagram.com/mexc_turkiye/'
            },
            {
                name: 'MEXC DACH🇩🇪🇨🇭🇦🇹',
                link: 'https://www.instagram.com/deutsch_mexc/'
            }
        ]
    },
    {
        icon: 'https://public.mocortech.com/banner/F202307241212107880YTsQlvnBAvjuQ.jpeg',
        links: [
            {
                name: 'MEXC Official',
                link: 'https://www.youtube.com/@MEXCofficial'
            },
            {
                name: 'MEXC Türkiye',
                link: 'https://www.youtube.com/@MEXCTurkiye'
            },
            {
                name: 'MEXC Việt Nam',
                link: 'https://www.youtube.com/@MEXC-Vietnam'
            },
            {
                name: 'MEXC Русский',
                link: 'https://youtube.com/@mexcrussian'
            }
        ]
    },
    {
        icon: 'https://public.mocortech.com/banner/F20230822155305528L9mV2FVnwudz35.png',
        links: [
            {
                name: 'MEXC Korea',
                link: 'https://medium.com/@mexc.korea'
            },
            {
                name: 'MEXC Türkiye',
                link: 'https://medium.com/@MEXC_TR'
            }
        ]
    },
    {
        icon: 'https://public.mocortech.com/banner/F20230822155318715TXC1ahjCQHGjfH.png',
        link: 'https://discord.com/invite/Hs2e93Xav5'
    },
    {
        icon: 'https://public.mocortech.com/banner/F20230724121158714sGf4sSd41CbTGD.jpeg',
        links: [
            {
                name: 'MEXC Türkiye',
                link: 'https://www.tiktok.com/@mexc_turkiye'
            },
            {
                name: 'MEXC Việt Nam',
                link: 'https://www.tiktok.com/@mexc.vn'
            }
        ]
    },
    {
        icon: 'https://public.mocortech.com/banner/F20230822155337560uFg55xz4kjrKc6.png',
        link: 'https://line.me/R/ti/p/@917sttae'
    },
    {
        icon: 'https://public.mocortech.com/banner/F20230822155349228BGxdO9lZYpFFYV.png',
        link: 'https://www.reddit.com/r/MEXC_official/'
    },
    {
        icon: 'https://public.mocortech.com/banner/F202308221554012327aWtAh2tFavbYb.png',
        link: 'https://teletype.in/@mexcrussian'
    },
    {
        icon: 'https://public.mocortech.com/banner/F202308221554114182thJcamotY7rP5.png',
        link: 'https://mexc-japan.theletter.jp/'
    },
    {
        icon: 'https://public.mocortech.com/banner/F20230822155423011Atz46YQN6jCsMV.png',
        link:'https://www.linkedin.com/company/mexcofficial/'
    },
    {
        icon: 'https://public.mocortech.com/banner/F202308221554336896AKIJa9lD2f3HN.png',
        link:'https://coinmarketcap.com/exchanges/mexc/'
    },
    {
        icon: 'https://public.mocortech.com/banner/F20230822155443043RJqBoi5IsZJ6Tx.png',
        link:'https://www.coingecko.com/en/exchanges/mexc'
    }
]
export default function FooterPage() {
    const [show, setShow] = useState([false, false, false, false]);
    const handleClick = event => {

        setShow((prev) => {
            const prevShow = [...prev];
            prevShow[Number(event.target.dataset.id) - 1] = !prevShow[Number(event.target.dataset.id) - 1];
            return prevShow;
        })

    };

    return (
        <div className='footer-wrapper'>
            <div className='footer-content'>
                <dl className='footer-content-dl'>
                    <dt className='footer-content__title'><span>About Us</span>
                        {!show[0] && <svg onClick={handleClick} data-id='1'
                                          className="sc-aXZVg ktFCMi mx-icon footer_toggleBtn__3F0ol" focusable="false"
                                          width="1em"
                                          height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                          data-icon="PlusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                            <path d="M512 944a48 48 0 0 1-48-48V128a48 48 0 0 1 96 0v768a48 48 0 0 1-48 48z"></path>
                        </svg>}
                        {show[0] && <svg onClick={handleClick} data-id='1'
                                         className="sc-aXZVg ktFCMi mx-icon iconfont footer_toggleBtn__3F0ol footer_toggleBtnOpen__GhJzW"
                                         focusable="false" width="1em" height="1em" fill="currentColor"
                                         aria-hidden="true"
                                         viewBox="0 0 1024 1024" data-icon="MinusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                        </svg>}
                    </dt>
                    <div className={`footer-content__body ${show[0] ? 'active' : ''}`} data-id='1'>
                        <dd><a href="https://www.mexc.com/about">About</a></dd>
                        <dd><a href="https://www.mexc.com/terms">User Agreement</a></dd>
                        <dd><a href="https://www.mexc.com/privacypolicy">Privacy Policy</a></dd>
                        <dd><a href="https://www.mexc.com/risk">Risk Disclosure</a></dd>
                        <dd><a href="https://m-ventures.io/">M-Ventures</a></dd>
                        <dd><a rel="nofollow noopener noreferrer" target="_blank" href="https://blog.mexc.com/">MEXC
                            Blog</a></dd>
                    </div>
                </dl>
                <dl className="footer-content-dl">
                    <dt className='footer-content__title'><span>Services</span>
                        {!show[1] && <svg onClick={handleClick} data-id='2'
                                          className="sc-aXZVg ktFCMi mx-icon footer_toggleBtn__3F0ol" focusable="false"
                                          width="1em"
                                          height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                          data-icon="PlusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                            <path d="M512 944a48 48 0 0 1-48-48V128a48 48 0 0 1 96 0v768a48 48 0 0 1-48 48z"></path>
                        </svg>}
                        {show[1] && <svg onClick={handleClick} data-id='2'
                                         className="sc-aXZVg ktFCMi mx-icon iconfont footer_toggleBtn__3F0ol footer_toggleBtnOpen__GhJzW"
                                         focusable="false" width="1em" height="1em" fill="currentColor"
                                         aria-hidden="true"
                                         viewBox="0 0 1024 1024" data-icon="MinusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                        </svg>}
                    </dt>
                    <div className={`footer-content__body ${show[1] ? 'active' : ''}`} data-id='2'>
                        <dd><a href="https://otc.mexc.com/fastTransaction">Buy Crypto</a></dd>
                        <dd><a href="https://www.mexc.com/download">Download MEXC</a></dd>
                        <dd><a href="https://www.mexc.com/fee">Fees</a></dd>
                        <dd><a href="https://www.mexc.com/invite">Referral Program</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer"
                               href="https://affiliates.mexc.com/intro?entrance=footer">Affiliate Program</a>
                        </dd>
                        <dd><a href="https://www.mexc.com/mexc-api">API</a></dd>
                        <dd><a href="https://www.mexc.com/activity/institution">Institutional Services</a></dd>
                        <dd><a href="https://www.mexc.com/how-to-buy">How To Buy</a></dd>
                        <dd><a href="https://www.mexc.com/tokens">Crypto Information</a></dd>
                        <dd><a href="https://www.mexc.com/price">Crypto Price</a></dd>
                    </div>
                </dl>
                <dl className="footer-content-dl">
                    <dt className="footer-content__title"><span>User Support</span>
                        {!show[2] && <svg onClick={handleClick} data-id='3'
                                          className="sc-aXZVg ktFCMi mx-icon footer_toggleBtn__3F0ol" focusable="false"
                                          width="1em"
                                          height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                          data-icon="PlusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                            <path d="M512 944a48 48 0 0 1-48-48V128a48 48 0 0 1 96 0v768a48 48 0 0 1-48 48z"></path>
                        </svg>}
                        {show[2] && <svg onClick={handleClick} data-id='3'
                                         className="sc-aXZVg ktFCMi mx-icon iconfont footer_toggleBtn__3F0ol footer_toggleBtnOpen__GhJzW"
                                         focusable="false" width="1em" height="1em" fill="currentColor"
                                         aria-hidden="true"
                                         viewBox="0 0 1024 1024" data-icon="MinusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                        </svg>}
                    </dt>
                    <div className={`footer-content__body ${show[2] ? 'active' : ''}`} data-id='3'>
                        <dd><a>Customer Service</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer" href="https://www.mexc.com/support">Help
                            Center</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer"
                               href="https://www.mexc.com/support/categories/360000254192">Announcements</a></dd>
                        <dd><a href="https://www.mexc.com/learn">Learn</a></dd>
                        <dd><a href="https://www.mexc.com/vip">VIP Benefits</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer nofollow"
                               href="https://www.mexc.com/support/requests">Submit an Enquiry</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer nofollow"
                               href="https://www.mexc.com/support/requests/suggestion">Improvement Suggestions</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer nofollow"
                               href="https://www.mexc.com/support/requests/report">Report Abnormal Funds</a>
                        </dd>
                        <dd><a href="https://www.mexc.com/support/requests/legal">Judicial Assistance</a></dd>
                        <dd><a href="https://www.mexc.com/official-verify">MEXC Verify</a></dd>
                        {/*<dd><a href="https://www.mexc.com/support/requests/complaint">Nộp yêu cầu khiếu nại</a>*/}
                        {/*</dd>*/}
                    </div>
                </dl>
                <dl className="footer-content-dl">
                    <dt className="footer-content__title"><span>Contact Us</span>
                        {!show[3] && <svg onClick={handleClick} data-id='4'
                                          className="sc-aXZVg ktFCMi mx-icon footer_toggleBtn__3F0ol" focusable="false"
                                          width="1em"
                                          height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                          data-icon="PlusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                            <path d="M512 944a48 48 0 0 1-48-48V128a48 48 0 0 1 96 0v768a48 48 0 0 1-48 48z"></path>
                        </svg>}
                        {show[3] && <svg onClick={handleClick} data-id='4'
                                         className="sc-aXZVg ktFCMi mx-icon iconfont footer_toggleBtn__3F0ol footer_toggleBtnOpen__GhJzW"
                                         focusable="false" width="1em" height="1em" fill="currentColor"
                                         aria-hidden="true"
                                         viewBox="0 0 1024 1024" data-icon="MinusOutlined">
                            <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>
                        </svg>}
                    </dt>
                    <div data-id='4' className={`footer-content__body ${show[3] ? 'active' : ''}`}>
                        <dd><a href="mailto:business@mexc.com">Let’s Collaborate (Businesses)</a></dd>
                        <dd><a href="mailto:institution@mexc.com">Let’s Collaborate (Institutions)</a></dd>
                        <dd><a href="mailto:media@mexc.com">Let's Collaborate (Media)</a></dd>
                        <dd><a target="_blank" rel="noopener noreferrer">Listing Application</a></dd>
                        <dd><a href="mailto:otc_apply@mexc.com">OTC Merchant Application</a></dd>
                    </div>
                </dl>
                <dl className="footer-content-dl">
                    <dt className="footer-content__title"><span>Community</span>
                        {/*<svg onClick={handleClick} data-id='5' className="sc-aXZVg ktFCMi mx-icon footer_toggleBtn__3F0ol" focusable="false" width="1em"*/}
                        {/*     height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"*/}
                        {/*     data-icon="PlusOutlined">*/}
                        {/*    <path d="M80 512A48 48 0 0 1 128 464h768a48 48 0 0 1 0 96H128A48 48 0 0 1 80 512z"></path>*/}
                        {/*    <path d="M512 944a48 48 0 0 1-48-48V128a48 48 0 0 1 96 0v768a48 48 0 0 1-48 48z"></path>*/}
                        {/*</svg>*/}
                    </dt>
                    <div className={`footer-content__body`}>
                        <div className="footer-media">
                            {socialIcons.map((item, index) => (
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
                                // <div key={index} className="media_mediaItem">
                                //     <div className="ant-popover-arrow media_ant-popover-arrow__hidden__Yokjr"><span
                                //         className="ant-popover-arrow-content"></span></div>
                                //     <div className="media_mediaItemContent"
                                //          style={{backgroundImage: `url(${item.icon})`}}></div>
                                // </div>

                                   <Popover key={index} overlayClassName={`${item.link ? 'hidden' : 'sshow'}`} content={(<div>
                                       <div className="media_mediumMenu__Yd4Cp">
                                           <div className="media_mediumMenu-body__gsxDx">
                                               <div className="media_mediumMenu-content__tIpYq">
                                                   {item.links && item.links.length > 10 ? (
                                                       <>
                                                           <ul>
                                                               {item.links.slice(0, 9).map((link, index) => (
                                                                   <li key={index}>
                                                                       <a href={link.link} target="_blank" title="m" rel="noopener noreferrer">
                                                                           {link.name}
                                                                       </a>
                                                                   </li>
                                                               ))}
                                                           </ul>
                                                           <ul>
                                                               {item.links.slice(9).map((link, index) => (
                                                                   <li key={index}>
                                                                       <a href={link.link} target="_blank" title="m" rel="noopener noreferrer">
                                                                           {link.name}
                                                                       </a>
                                                                   </li>
                                                               ))}
                                                           </ul>
                                                       </>
                                                   ) : (
                                                       <ul>
                                                           {item.links && item.links.map((link, index) => (
                                                               <li key={index}>
                                                                   <a href={link.link} target="_blank" title="m" rel="noopener noreferrer">
                                                                       {link.name}
                                                                   </a>
                                                               </li>
                                                           ))}
                                                       </ul>
                                                   )}

                                               </div>
                                           </div>
                                       </div>

                                   </div>)}>
                                       <div className="media_mediaItemContent__fW1w2" onClick={() => {
                                           if(item.link){
                                               window.location.href = item.link
                                           }
                                       }}
                                            style={{backgroundImage: `url(${item.icon})`}}></div>
                                   </Popover>

                            ))}


                        </div>
                    </div>
                </dl>
            </div>
            <p className="footer_copyRight__Axy8j">© 2023 MEXC.COM</p>

        </div>
    )
}
