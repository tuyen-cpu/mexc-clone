import {Button, Drawer, Input, Layout, Modal, Switch} from "antd";

const {Header: AntdHeader} = Layout;
import {SearchOutlined} from '@ant-design/icons';
import './header.css';

import {Tabs} from 'antd';

import Dropdown from "./Dropdown.jsx";
import React, {useEffect, useRef, useState} from "react";
import SearchResult from "./SearchResult.jsx";
import {dataHotSearch} from "../data/data.js";
// import MenuItems from "./MenuItems.jsx";


const logoWrapperStyle = {
    float: 'left',
    marginRight: '20px',
}
const logoStyle = {
    height: '20px',
    minWidth: '104px',
    verticalAlign: '-0.3rem',
}
const leftMenuStyle = {
    minWidth: '50%',
}

const rightMenuStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}
const onChange = (key) => {

};

const menuItemsData = [
    {
        title: "Market",
        url: "https://www.mexc.com/markets",
    },
    {
        title: "Buy Crypto",
        url: "https://www.mexc.com/buy-crypto",
        icon: true,
        submenu: [
            {
                title: "Debit/Credit Card",
                url: "https://otc.mexc.com/checkout-deposit?newPage=1&type=1",
                content: "Buy Crypto via Card",
                icon: 'credit-icon.png'
            },
            {
                title: "Global Bank Transfer",
                url: "https://otc.mexc.com/deposit-fiat?newPage=1&type=1",
                content: "Buy/Sell via SEPA",
                icon: 'bank-icon.png',
                status: 'new'
            },
            {
                title: "Quick Buy/Sell",
                url: "https://otc.mexc.com/fastTransaction",
                content: "Fast and secure digital asset transactions",
                icon: 'wallet-icon.png',
            },
            {
                title: "P2P Trading",
                url: "https://otc.mexc.com",
                content: "Bank transfer and more options",
                icon: 'people-icon.png',
            },
            {
                title: "MEXC MasterCard",
                url: "https://otc.mexc.com/mexcCard",
                content: "Supporting global consumption",
                icon: 'master-card-icon.png',
                status: 'new'
            }
        ]
    },
    {
        title: "Spot",
        url: "https://futures.mexc.com/exchange",
        icon: true,
        submenu: [
            {
                title: "Spot",
                url: "https://www.mexc.com/exchange/GEC_USDT?_from=header",
                content: "Trade on our award-winning platform",
                icon: 'spot-1.png'
            },
            {
                title: "MX Zone",
                url: "https://www.mexc.com/mx",
                content: "Privileges and rewards for MX Token Holders",
                icon: 'spot-2.png'
            },
            {
                title: "Launchpad",
                url: "https://www.mexc.com/launchpads/assessment",
                content: "Hold MX and Earn New Token Airdrops",
                icon: 'spot-3.png',
                status: 'hot'
            },
            {
                title: "Kickstarter",
                url: "https://www.mexc.com/sun/assessment",
                content: "MX Holder Privileges - Join and Share New Tokens",
                icon: 'spot-4.png',
                status: 'hot'
            },
            {
                title: "Deposit for Listing",
                url: "https://www.mexc.com/depositing-vote",
                content: "Join Deposit Events & Share MX Rewards",
                icon: 'spot-5.png',

            },
            {
                title: "Savings",
                url: "https://www.mexc.com/staking",
                content: "Simple & secure way to earn crypto",
                icon: 'spot-5.png',

            },
            {
                title: "MEXC Loans",
                url: "https://www.mexc.com/mx-activity/loan?type=1",
                content: "Get an instant loan secured by crypto assets",
                icon: 'spot-5.png',
                status: 'new'
            }
        ]
    },
    {
        title: "Futures",
        url: "https://futures.mexc.com/exchange",
        icon: true,
        status: 'hot',
        submenu: [
            {
                title: "Futures Overview",
                url: "https://www.mexc.com/futures",
                content: "View our full range of crypto-derivative tools",
                icon: 'feature-1.png'
            },
            {
                title: "Perpetual Futures",
                url: "https://futures.mexc.com/exchange/BTC_USDT?type=linear_swap",
                content: "Lowest fees, best liquidity",
                icon: 'feature-2.png',
                submenu: [
                    {
                        title: "USDT-M Perpetual Futures",
                        url: "https://futures.mexc.com/exchange?type=linear_swap",
                        content: "Perpetual futures settled in USDT",
                    },
                    {
                        title: "Coin-M Perpetual Futures",
                        url: "https://futures.mexc.com/exchange?type=swap",
                        content: "Perpetual futures settled in the underlying crypto"

                    },

                ],
            },
            {
                title: "Copy Trade",
                url: "https://futures.mexc.com/copyTrade/home",
                content: "Follow excellent traders and earn more easily",
                icon: 'feature-3.png',
            },
            {
                title: "Demo Trading",
                url: "https://futures.testnet.mexc.com/exchange",
                content: "Simulate real-life futures trading without risking real assets",
                icon: 'feature-4.png',
            },
            {
                title: "Futures Events",
                content: "Get rewarded daily in our monthly competitions",
                icon: 'feature-5.png',
                status: 'uncheck',
                submenu: [
                    {
                        title: "December Futures Competition",
                        url: "https://www.mexc.com/futures-activity/trading-competition?id=decfc&utm_source=mexc&utm_medium=webfuturesmenu&utm_campaign=trading-activity202312",
                        content: "Total Prize Pool 5,000,000 USDT",
                        status: 'hot',
                    },
                    {
                        title: "Futures M-Day",
                        url: "https://www.mexc.com/futures-mday?utm_source=mexc&utm_medium=webheader&utm_campaign=mdayevent",
                        content: "Trade futures and claim huge rewards daily",
                        status: 'hot',
                    },
                    {
                        title: "Get $1,000",
                        url: "https://www.mexc.com/futures-activity/bonus",
                        content: "Claim 1,000 USDT bonus easily"
                    },
                    {
                        title: "Weekly Futures Event!",
                        url: "https://www.mexc.com/futures-activity/crazy-week?id=66&event-id=crazy60&utm_source=mexc&utm_medium=webfuturesmenu&utm_campaign=week20231211",
                        content: "Grab newly added check-in rewards, trade to share 60,000 USDT bonus every Mon to Fri!"
                    }, {
                        title: "[15th Season] Super X-Game",
                        url: "https://www.mexc.com/futures-activity/x-game?utm_source=mexc&utm_medium=webfuturesmenu&utm_campaign=xgame20231211",
                        content: "Share up to 100,000 USDT in bonus!"
                    }, {
                        title: "Futures Leaderboard",
                        url: "https://futures.mexc.com/contractRank?utm_source=mexc&utm_medium=webheader&utm_campaign=rankevent",
                        content: "Introduce Trading Volume Ranking. Daily bonus worth $15,000 to be shared (issued next day)!"
                    }, {
                        title: "SOL, ETH, BIGTIME, GROK, TIA, XRP, TRB & BNB Leverage Challenge",
                        url: "https://www.mexc.com/futures-activity/hot-coins/75?time=2023/12/12&name=SOL&utm_source=mexc&utm_medium=webfuturesmenu&utm_campaign=sol20231212",
                        content: "Experience 15-200x leverage, share 20,000 USDT bonus!",
                        status: 'uncheck',
                    }, {
                        title: "BTC, AVAX, TURBO, LUNC, FTT, USTC, LUNA & SAND Leverage Challenge",
                        url: "https://www.mexc.com/futures-activity/hot-coins/74?time=2023/12/11&name=BTC&utm_source=mexc&utm_medium=webfuturesmenu&utm_campaign=btc20231211",
                        content: "Experience 15-200x leverage, share 20,000 USDT bonus!"
                    }, {
                        title: "OP, 1000BONK, LINK, ARB, GRIMACE, INJ, GALA & ETC Leverage Challenge",
                        url: "https://www.mexc.com/futures-activity/hot-coins/71?time=2023/12/08&name=OP&utm_source=mexc&utm_medium=webfuturesmenu&utm_campaign=op20231208",
                        content: "Experience 15-200x leverage, share 20,000 USDT bonus!"
                    }, {
                        title: "Trade JTO Futuresn",
                        url: "https://www.mexc.com/landings/JTO_newlist?handleDefaultLocale=keep&utm_source=mexc&utm_medium=webfuturesmenu&utm_campaign=jto20231208",
                        content: "Share 20,000 USDT Futures Bonus",
                    },{
                        title: "Events Calendar Center",
                        url: "https://futures.mexc.com/activities-calendar-center",
                        content: "Win event rewards easily and gain unlimited industry knowledge at the same time",
                        status: 'new',
                    },

                ],
            },
        ],

    }, {
        title: "Futures M-Day",
        url: "https://www.mexc.com/futures-mday?utm_source=mexc&utm_medium=webheader&utm_campaign=mdayevent",
    },
    {
        title: "Learn",
        url: "https://www.mexc.com/learn",
    },
    {
        title: "December Futures Competition",
        url: "https://www.mexc.com/futures-activity/trading-competition?id=decfc&utm_source=mexc&utm_medium=webmenu&utm_campaign=trading-activity202312",
        img:'https://www.mexc.com/api/file/download/F20230513123659282d06twGdPWw54E3'
    }
];


const eventsData = [
    {
        icon: 'event-1.png',
        title: 'Launchpad',
        content: 'MX Holder Privileges - Join and Share New Tokens',
        link: 'https://www.mexc.com/launchpads/assessment?_from=search'
    },
    {
        icon: 'event-2.png',
        title: 'Futures M-Day - Daily Prize',
        content: 'Trade futures and win over 70,000 USDT rewards every day!',
        link: 'https://www.mexc.com/futures-mday?_from=search'
    },
    {
        icon: 'event-3.png',
        title: 'Kickstarter',
        content: 'MX Holder Privileges - Join and Share New Tokens',
        link: 'https://www.mexc.com/sun/assessment?_from=search'
    }
    ,
    {
        icon: 'event-4.png',
        title: 'Win $100,000 Bonus!',
        content: 'Trade Futures with 21-200x Leverage',
        link: 'https://www.mexc.com/futures-activity/x-game?utm_source=mexc&utm_medium=icon&utm_campaign=xgame20231211&_from=search'
    },
    {
        icon: 'event-5.png',
        title: 'Futures Leaderboard',
        content: 'Daily bonus worth $15,000 to be shared (issued next day)!',
        link: 'https://futures.mexc.com/contractrank?utm_source=mexc&utm_medium=icon&utm_campaign=rankevent&_from=search'
    }
    ,
    {
        icon: 'event-7.png',
        title: 'Get $1000',
        content: '1,000 USDT in Bonus Waiting to be Discovered',
        link: 'https://www.mexc.com/futures-activity/bonus?_from=search'
    },
    {
        icon: 'event-6.png',
        title: 'Weekly Futures Event!',
        content: 'Trade and check in daily to share 60,000 USDT bonus every Mon to Fri!',
        link: 'https://www.mexc.com/futures-activity/crazy-week?id=66&event-id=crazy60&utm_source=mexc&utm_medium=icon&utm_campaign=week20231211&_from=search'
    }
];
const languageData = [
    {
        id: 1,
        title: 'English',
        link: 'https://www.mexc.com/'
    },
    {
        id: 2,
        title: '한국어',
        link: 'https://www.mexc.com/ko-KR'
    },
    {
        id: 3,
        title: '日本語',
        link: 'https://www.mexc.com/ja-JP'
    },
    {
        id: 4,
        title: 'Tiếng Việt',
        link: 'https://www.mexc.com/vi-VN'
    },
    {
        id: 5,
        title: 'Pусский',
        link: 'https://www.mexc.com/ru-RU'
    },
    {
        id: 6,
        title: 'Türkçe',
        link: 'https://www.mexc.com/tr-TR'
    },
    {
        id: 7,
        title: 'Українська',
        link: 'https://www.mexc.com/uk-UA'
    },
    {
        id: 8,
        title: 'Español',
        link: 'https://www.mexc.com/es-ES'
    },
    {
        id: 9,
        title: 'Português',
        link: 'https://www.mexc.com/pt-PT'
    },
    {
        id: 10,
        title: 'Italiano',
        link: 'https://www.mexc.com/it-IT'
    },
    {
        id: 11,
        title: 'Deutsch',
        link: 'https://www.mexc.com/de-DE'
    },
    {
        id: 12,
        title: 'Bahasa Indonesia',
        link: 'https://www.mexc.com/id-ID'
    },
    {
        id: 13,
        title: 'Français',
        link: 'https://www.mexc.com/fr-FR'
    },
    {
        id: 14,
        title: '简体中文',
        link: 'https://www.mexc.com/zh-CN'
    },
    {
        id: 15,
        title: '繁體中文',
        link: 'https://www.mexc.com/zh-TW'
    },
    {
        id: 16,
        title: 'فارسی',
        link: 'https://www.mexc.com/fa-IR'
    },
    {
        id: 17,
        title: 'Filipino',
        link: 'https://www.mexc.com/fil-PH'
    },
    {
        id: 18,
        title: 'ภาษาไทย',
        link: 'https://www.mexc.com/th-TH'
    },

]
const moneyData = [
    {
        title: 'USD',
        unit: '$',
        link: ''
    },
    {
        title: 'UER',
        unit: '€',
        link: ''
    },
    {
        title: 'GBP',
        unit: '£',
        link: ''
    },
    {
        title: 'JPY',
        unit: '¥',
        link: ''
    },
    {
        title: 'KRW',
        unit: '₩',
        link: ''
    },
    {
        title: 'VND',
        unit: '₫',
        link: ''
    },
    {
        title: 'TRY',
        unit: '₺',
        link: ''
    },
    {
        title: 'HKD',
        unit: 'HK$',
        link: ''
    },
    {
        title: 'IDR',
        unit: 'Rp',
        link: ''
    },
    {
        title: 'IRN',
        unit: '₹',
        link: ''
    },
    {
        title: 'PHP',
        unit: '₱',
        link: ''
    },
    {
        title: 'BRL',
        unit: 'R$',
        link: ''
    },
    {
        title: 'CNY',
        unit: '¥',
        link: ''
    },
    {
        title: 'MYR',
        unit: 'RM',
        link: ''
    },
]
const addClass = (element, className) => {
    // Sử dụng classList để thêm lớp vào phần tử DOM
    if (element.current) {
        element.current.classList.add(className);
    }
};

const removeClass = (element, className) => {
    // Sử dụng classList để xóa lớp khỏi phần tử DOM
    if (element.current) {
        element.current.classList.remove(className);
    }
};
export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShowSideBar, setIShowSideBar] = useState(false);
    const [activeTabLanguage, setActiveTabLanguage] = useState('1');
    const [moneySelected, setMoneySelected] = useState({
        title: 'USD',
        unit: '$',
        link: ''
    });
    const sideBarRef = useRef(null);
    const [showMenuSide, setShowMenuSide] = useState([false,false,false,false,false,false]);
    const [openDraw, setOpenDraw] = useState(false);
    const [drawContent, setDrawContent] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleShowMenuSideBar =(index)=>{
        setShowMenuSide((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    }
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            // Clicked outside the dropdown, hide it
            setShowDropdown(false);
        }
    };
    const handleSetActiveTabLanguage = () => {
        setActiveTabLanguage('1')
        showModal()
    }

    const handleSetActiveTabMoney = () => {
        setActiveTabLanguage('2')
        showModal()
    }
    const handleShowSideBar = () => {
        setIShowSideBar(!isShowSideBar);
    }


    const showDrawer = () => {
        setOpenDraw(true);
    };
    const handleShowDrawContent = (content) => {
        setDrawContent(content);
        showDrawer();
    }
    const onClose = () => {
        setOpenDraw(false);
    };
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [isDarkMode]);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <Modal className='language-wrapper-modal' open={isModalOpen} footer={null} width={740} centered={true}
                   onCancel={handleCancel}>
                <div className='language-wrapper'>
                    <Tabs defaultActiveKey='2' items={[
                        {
                            key: '1',
                            label: 'Language',
                            children: (<div>
                                <div className='language-list'>
                                    {languageData.map((item, index) => {
                                        return (<div key={index}
                                                     className={`language-item ${item.id === 4 ? 'active' : ''}`}
                                                     onClick={() => window.location.href = item.link}>
                                            <span>{item.title}</span>
                                        </div>)
                                    })}
                                </div>
                            </div>)
                        },
                        {
                            key: '2',
                            label: 'Currency',
                            children: (<div>
                                <div className='language-list'>
                                    {moneyData.map((item, index) => {
                                        return (<div key={index}
                                                     className={`language-item ${moneySelected.title === item.title ? 'active' : ''}`}
                                                     onClick={() => {
                                                         handleOk();
                                                         setMoneySelected(item);
                                                     }}>
                                            <span>{item.title}</span>
                                        </div>)
                                    })}
                                </div>
                            </div>)
                        }
                    ]}/>
                </div>
            </Modal>
            <AntdHeader className='header-nav'>
                <div className={`mobile-header-nav ${isShowSideBar ? 'showSidebar' : ''}`} ref={sideBarRef}>
                    <div className="header_mobileMenuWrapper__tHt0l">
                        <div className="header_header__rBp6t">
                            <svg onClick={handleShowSideBar}
                                 className="sc-aXZVg ktFCMi mx-icon iconfont iconclose header_closeBtn__vbFT_"
                                 focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"
                                 viewBox="0 0 1024 1024" data-icon="CloseOutlined">
                                <path
                                    d="M512 592.440889l414.890667 414.890667 80.440889-80.440889L592.440889 512l414.890667-414.890667L926.890667 16.668444 512 431.559111 97.109333 16.668444 16.668444 97.109333 431.559111 512 16.668444 926.890667l80.440889 80.440889L512 592.440889z"></path>
                            </svg>
                        </div>
                        <div>
                            <div className="header_headerLeft__RZb3I">
                                <div className="header_navItem__dEqAQ header_authBtn__Gch60 header_navItem__dEqAQ">
                                    <a href='https://www.mexc.com/login?previous=%2F'
                                       className="header_registerBtn__fsUiv header_authBtn__Gch60">Log In/Sign Up</a>
                                </div>
                            </div>

                            <div className="header_settingWrapper__T55KR">
                                {menuItemsData.map((item, index) => {
                                    if(item.submenu){
                                        return ( <div key={index} className="header_innerMenu__SAvVj">
                                            <div className="header_innerMenuBtn__gCP9O header_mobileMenuBtn__KBVfi" onClick={()=>handleShowMenuSideBar(index)}>
                                                <span>{item.title} {item.status === 'hot' &&  <span className='icon-hot'>HOT</span>}</span>
                                                <svg
                                                    className={`ktFCMi mx-icon iconfont icondown header_icondown__wv4cC ${showMenuSide[index]?'active':''}`}
                                                    focusable="false" width="1em" height="1em" fill="currentColor"
                                                    aria-hidden="true" viewBox="0 0 1462 1024" data-icon="BottomOutlined">
                                                    <path
                                                        d="M330.86212049 261.09139564a65.46865059 65.46865059 0 0 1 92.47446924 0L704.44260896 542.11557945 985.54862877 261.09139564a65.46865059 65.46865059 0 0 1 92.47446924 92.47446925L704.44260896 727.39186127 330.86212049 353.64770085a65.46865059 65.46865059 0 0 1-1e-8-92.55630521z"></path>
                                                </svg>
                                            </div>
                                            <div className={`header_innerDrop__7dsea ${showMenuSide[index]?'active':''}`}>
                                                <div
                                                    className="header_popNavMenuContainer__dn3Q1 header_treeIndex0__ly3lg shadow-s1-down">
                                                    <ul className="header_menu__SBibF header_addArrow__0_Wfk"
                                                    >
                                                        {item.submenu.map((item, index) => {
                                                            return(<li key={index} className="menu-item" >
                                                                <a className=""
                                                                   >
                                                                    {/*<img src={`./${item.icon}`} alt="" className="header_sunImg__uJbyS"/>*/}
                                                                    <div className="header_itemBody__U65v7">
                                                                        <div className="header_itemTitle__jicUg">
                                                                            <span onClick={()=> {
                                                                                handleShowDrawContent(item.submenu)
                                                                                // window.location.href = item.url
                                                                            }}>{item.title}
                                                                                {item.status === 'new' &&
                                                                                    <i className='new-icon'>NEW</i>}
                                                                                {item.status === 'hot' &&  <span className='icon-hot'>HOT</span>}</span>
                                                                            {item.submenu &&
                                                                                <svg onClick={()=>{
                                                                                    handleShowDrawContent(item.submenu)
                                                                                }} className="sc-aXZVg ktFCMi mx-icon header_arrowIcon__PedAF" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="RightOutlined"><path d="M350.08 801.92a48 48 0 0 1 0-67.84L572.16 512 350.08 289.92a48 48 0 0 1 67.84-67.84l256 256a48 48 0 0 1 0 67.84l-256 256a48 48 0 0 1-67.84 0z"></path></svg>
                                                                            }

                                                                        </div>
                                                                        {/*<div className="header_itemDesc__WfPVv">Mua*/}
                                                                        {/*    Crypto với thẻ*/}
                                                                        {/*</div>*/}
                                                                    </div>
                                                                </a></li>)
                                                            })}


                                                    </ul>
                                                </div>
                                            </div>
                                        </div>)
                                    }else{
                                        return ( <a key={index} className="header_mobileMenuBtn__KBVfi" href={item.url}>
                                            <span>{item.title}</span>
                                        </a>)
                                    }
                                    })}
                            </div>

                            <div><a className="header_mobileMenuBtn__KBVfi" href="https://www.mexc.com/download"><span>Tải xuống APP</span>
                                <svg className="sc-aXZVg ktFCMi mx-icon" focusable="false" width="1em" height="1em"
                                     fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                     data-icon="RightOutlined">
                                    <path
                                        d="M350.08 801.92a48 48 0 0 1 0-67.84L572.16 512 350.08 289.92a48 48 0 0 1 67.84-67.84l256 256a48 48 0 0 1 0 67.84l-256 256a48 48 0 0 1-67.84 0z"></path>
                                </svg>
                            </a>
                                <div className="header_mobileMenuBtn__KBVfi" onClick={handleSetActiveTabLanguage}><span>Tiếng Việt</span>
                                    <svg className="sc-aXZVg ktFCMi mx-icon" focusable="false" width="1em" height="1em"
                                         fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                         data-icon="RightOutlined">
                                        <path
                                            d="M350.08 801.92a48 48 0 0 1 0-67.84L572.16 512 350.08 289.92a48 48 0 0 1 67.84-67.84l256 256a48 48 0 0 1 0 67.84l-256 256a48 48 0 0 1-67.84 0z"></path>
                                    </svg>
                                </div>
                                <div className="header_mobileMenuBtn__KBVfi" onClick={handleSetActiveTabMoney}>
                                    <span>IDR</span>
                                    <svg className="sc-aXZVg ktFCMi mx-icon" focusable="false" width="1em" height="1em"
                                         fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                         data-icon="RightOutlined">
                                        <path
                                            d="M350.08 801.92a48 48 0 0 1 0-67.84L572.16 512 350.08 289.92a48 48 0 0 1 67.84-67.84l256 256a48 48 0 0 1 0 67.84l-256 256a48 48 0 0 1-67.84 0z"></path>
                                    </svg>
                                </div>
                                <div className="header_hostComponent__gMit0">
                                    <div className="header_mobileMenuBtn__KBVfi"><span>Chế độ tối</span>
                                        <div><Switch onClick={toggleDarkMode} checked={isDarkMode}/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={leftMenuStyle} className='desktop-nav'>
                    <div className="logo" style={logoWrapperStyle}>
                        <img style={logoStyle}
                             src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgxIiBoZWlnaHQ9Ijg5IiB2aWV3Qm94PSIwIDAgNTgxIDg5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTM3LjU2MiA2Mi41OTA3TDEwNy4zNzYgMTAuMTgxNUMxMDAuNzg4IC0wLjczMjk2MiA4NC41NjMzIC0wLjgzMTI5IDc4LjE3MTkgMTAuNjczMkw0Ni41MTAxIDY1LjE0NzJDNDAuNjEwNCA3NS4xNzY4IDQ3Ljg4NjcgODcuNjY0NSA1OS43ODQ0IDg3LjY2NDVIMTIzLjQwM0MxMzUuMzAxIDg3Ljc2MjggMTQ0LjI0OSA3NC43ODM1IDEzNy41NjIgNjIuNTkwN1oiIGZpbGw9IiMwMDMwODciLz4KPHBhdGggZD0iTTk0LjAwMjggNjYuNzIwNUw5Mi4xMzQ2IDYzLjQ3NTZDOTAuMzY0NyA2MC40Mjc1IDg2LjUyOTggNTMuOTM3OCA4Ni41Mjk4IDUzLjkzNzhMNjAuOTY0NCA5LjQ5MzI3QzU0LjM3NjQgLTAuMzM5NTk3IDM4LjY0MzggLTEuMjI0NTcgMzIuMDU1OCAxMS4yNjMyTDIuMjYyMjEgNjIuNzg3M0MtMy45MzI1IDczLjYwMzUgMy40NDIxNyA4Ny42NjQ1IDE2LjgxNDkgODcuNzYyOEg4MC4wNDAySDEwNi45ODJIMTIzLjAxQzEwNi42ODcgODcuODYxMiAxMDEuNDc2IDc5LjMwNjUgOTQuMDAyOCA2Ni43MjA1WiIgZmlsbD0iIzE4NzdGMiIvPgo8cGF0aCBkPSJNOTQuMDAyOCA2Ni41MjM4TDkyLjEzNDYgNjMuMjc4OUM5MC4zNjQ3IDYwLjIzMDggODYuNTI5OSA1My43NDExIDg2LjUyOTkgNTMuNzQxMUw3MC4wMTA3IDI0LjYzNThMNDYuMzEzNCA2NS4xNDcyQzQwLjQxMzcgNzUuMTc2NyA0Ny42OSA4Ny42NjQ1IDU5LjU4NzggODcuNjY0NUg3OS45NDE4SDEwNi44ODRIMTIzLjAxQzEwNi41ODkgODcuNTY2MiAxMDEuNDc2IDc5LjIwODIgOTQuMDAyOCA2Ni41MjM4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzEwOTA3XzMzMSkiLz4KPHBhdGggZD0iTTUzMC41NTYgMjQuNDgxQzUzNC45OCAyMC4zNTEyIDU0Mi43NDggMTguMzg0NiA1NTQuMDU2IDE4LjM4NDZINTgwLjUwN1YzLjM0MDMzSDU0OS4yMzhDNTQxLjc2NSAzLjM0MDMzIDUzNS40NzIgNC4xMjY5OSA1MzAuNTU2IDUuNzAwMjRDNTI1LjczNyA3LjI3MzUgNTIxLjUwOSA5LjczMTY5IDUxNy44NzEgMTMuMTczMkM1MTQuMDM2IDE2LjkwOTcgNTEwLjk4OCAyMS41MzExIDUwOC44MjUgMjcuMDM3NUM1MDYuNjYyIDMyLjY0MjIgNTA1LjU4IDM4LjczODYgNTA1LjU4IDQ1LjEzQzUwNS41OCA1MS4yMjY0IDUwNi42NjIgNTcuMTI2MSA1MDguODI1IDYyLjUzNDJDNTEwLjk4OCA2Ny45NDIzIDUxNC4wMzYgNzIuNjYyIDUxNy44NzEgNzYuMzk4NUM1MjEuNDExIDc5Ljg0IDUyNS42MzkgODIuMjk4MiA1MzAuMzU5IDgzLjg3MTVDNTM1LjE3NyA4NS40NDQ4IDU0MS41NjggODYuMjMxNCA1NDkuMjM4IDg2LjIzMTRINTgwLjUwN1Y3MS4zODM4SDU1NC4wNTZDNTQ4LjA1OCA3MS4zODM4IDU0My45MjggNzEuMTg3MSA1NDEuNTY4IDcwLjY5NTRDNTM5LjExIDcwLjIwMzggNTM2Ljg0OSA2OS40MTcyIDUzNC45OCA2OC4yMzcyQzUzMS4yNDQgNjUuODc3MyA1MjguMzkyIDYyLjgyOTEgNTI2LjUyNCA1OC45OTQzQzUyNC43NTQgNTUuMjU3OCA1MjMuODY5IDUwLjUzODEgNTIzLjg2OSA0NS4wMzE3QzUyMy44NjkgMzUuNTkyMSA1MjYuMTMxIDI4LjYxMDggNTMwLjU1NiAyNC40ODFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzAwLjM2OCA4Ni40MjhIMzc0LjExNVY3MS44NzU0SDMxOC4zNjJWNTEuMTI4SDM2Ny4wMzVWMzcuMzYySDMxOC4zNjJWMTguMDg5NkgzNzQuMTE1VjMuNDM4NjZIMzAwLjM2OFY4Ni40MjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzkyLjUwMiAzLjQzODY2TDQyNy4wMTYgNDQuOTMzM0wzOTIuNTAyIDg2LjQyOEg0MTQuODIzTDQ0Mi4wNiA1My41ODYzVjM2LjM3ODdMNDE0LjgyMyAzLjQzODY2SDM5Mi41MDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDc2LjI3OCAzLjQzODY2TDQ0OS4wNDEgMzYuMzc4N1Y1My41ODYzTDQ3Ni4yNzggODYuNDI4SDQ5OC41OTlMNDYzLjk4NyA0NC45MzMzTDQ5OC41OTkgMy40Mzg2Nkg0NzYuMjc4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIyOC4wOTcgNDQuMzQzNEwxOTQuOTYgMy40Mzg2NkgxNzcuODUxVjg2LjQyOEgxOTUuODQ1VjMxLjA2OUwyMjQuNTU3IDY1LjQ4NDFIMjMxLjUzOEwyNjAuMjUgMzAuNzc0MVY4Ni40MjhIMjc4LjI0NFYzLjQzODY2SDI2MS4zMzJMMjI4LjA5NyA0NC4zNDM0WiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xMDkwN18zMzEiIHgxPSIzNy44NTU5IiB5MT0iNDYuNzg2OSIgeDI9IjExMS4zMTQiIHkyPSI3My45MzIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDMwODciIHN0b3Atb3BhY2l0eT0iMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDMwODciLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
                             alt="This is logo"/>
                    </div>
                    <ul className='navbar-list menus'>
                        {menuItemsData.map((item, index) => {
                            return (<li key={index} className='navbar-list-item'>
                                <a className='navbar-list-item__link' href={item.url}>{item.title} {item.img && <img className='header_navItemCustomIconTag' src={item.img} alt="img" />}
                                    {item.status === 'hot' && <span className='hot-tag'>HOT</span>}
                                    {item.icon && <svg className="icon-down"
                                                       focusable="false"
                                                       width="1em" height="1em"
                                                       fill="currentColor"
                                                       aria-hidden="true"
                                                       viewBox="0 0 1024 1024"
                                                       data-icon="CaretDownOutlined">
                                        <path
                                            d="M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z"></path>
                                    </svg>}
                                </a>
                                <Dropdown
                                    depthLevel={0}
                                    submenus={item.submenu}
                                    dropdown={true}
                                />
                            </li>)
                        })}
                        <Drawer placement="right" onClose={onClose} open={openDraw}>
                            <div className="">
                                <ul className="header_menu__SBibF header_addArrow__0_Wfk header_addArrow__0_Wf" >
                                    {drawContent.map((item, index) => {
                                        return(
                                            <li key={index} className="menu-item">
                                                <div className="header_innerMenu__SAvVj">
                                                    <div className="header_innerMenuBtn__gCP9O header_mobileMenuBtn__KBVfi">
                                                <span><a className=""
                                                         href={item.url}><div
                                                    className="header_itemBody__U65v7">
                                                    <div className="header_itemTitle__jicUg">
                                                    <span>{item.title} {item.status === 'hot' &&  <span className='icon-hot'>HOT</span>}
                                                        {item.status === 'new' &&
                                                            <i className='new-icon'>NEW</i>}
                                                    </span></div>
                                                    <div
                                                    className="header_itemDesc__WfPVv">{item.content}</div></div></a></span>
                                                    </div>
                                                    <div className="header_innerDrop__7dsea">
                                                        <div
                                                            className="header_popNavMenuContainer__dn3Q1 header_treeIndex0__ly3lg shadow-s1-down">
                                                            <ul className="header_menu__SBibF header_addArrow__0_Wfk"
                                                                ></ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Drawer>
                    </ul>
                </div>
                <div style={rightMenuStyle} className='right-menu'>
                    <div className='search-wrapper'>
                        <Input
                            onFocus={() => setShowDropdown(true)}
                            className='search-input-header'
                            placeholder="Search"
                            prefix={<SearchOutlined/>}
                        />
                        <div className='search-dropdown-wrapper' ref={dropdownRef}
                             style={{display: showDropdown ? 'block' : 'none'}}>
                            {showDropdown && <SearchResult dataHotSearch={dataHotSearch} eventsData={eventsData}/>}
                        </div>
                    </div>
                    <Button type="primary" className='login-btn' onClick={() => {
                        window.location.href = 'https://www.mexc.com/login?previous=%2F'
                    }}>Log In/Sign Up</Button>
                    <div className='setting-item-wrapper'>
                        <div className='header_divider'></div>
                        <ul className='setting-item-list'>
                            <li className='setting-item'>
                                <svg className="sc-aXZVg ktFCMi mx-icon" focusable="false" width="1em" height="1em"
                                     fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"
                                     data-icon="VerticalAlignBottomOutlined">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M13 2V14.865L18.128 10.5916L19.4084 12.128L12 18.3017L4.59159 12.128L5.87196 10.5916L11 14.865V2H13ZM3 20H21V22H3V20Z"></path>
                                </svg>

                                <div className='download-dropdown'>
                                    <div className='download-dropdown-wrapper'>
                                        <div className='download-dropdown__body'>
                                            <div className='download-dropdown__img'>
                                                <img src="./qr.png" alt=""/>
                                            </div>
                                            <div className='download-dropdown__info'>
                                                <div className='download-dropdown__title'>
                                                <span className='download-dropdown__icon-phone'><svg
                                                    className="sc-aXZVg ktFCMi mx-icon iconfont iconmobile"
                                                    focusable="false" width="1em" height="1em"
                                                    fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"
                                                    data-icon="MobileOutlined"><path
                                                    d="M11 16C10.4477 16 10 16.4477 10 17C10 17.5523 10.4477 18 11 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H11Z"></path><path
                                                    fillRule="evenodd" clipRule="evenodd"
                                                    d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM6 4H18V20H6V4Z"></path></svg></span>
                                                    <span>Mobile</span>
                                                </div>
                                                <div className='download-dropdown__desc'>Scan to download and experience seamless trading on the MEXC App
                                                </div>
                                                <div className='download-dropdown__link-wrapper'>
                                                    <a className='download-dropdown__link'
                                                       href="https://www.mexc.com/support/articles/10100036082457">
                                                        <span>Can't download?</span>
                                                        <svg className="sc-aXZVg ktFCMi mx-icon iconfont iconright"
                                                             focusable="false" width="1em" height="1em"
                                                             fill="currentColor"
                                                             aria-hidden="true" viewBox="0 0 1024 1024"
                                                             data-icon="RightOutlined" style={{'fontSize': '14px'}}>
                                                            <path
                                                                d="M350.08 801.92a48 48 0 0 1 0-67.84L572.16 512 350.08 289.92a48 48 0 0 1 67.84-67.84l256 256a48 48 0 0 1 0 67.84l-256 256a48 48 0 0 1-67.84 0z"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='download-dropdown__footer'>
                                            <span className='download-dropdown__title-verson'>Windows Client</span>
                                            <a href="https://www.mexc.com/download" className='download-dropdown__more'>
                                                <span>View More</span>
                                                <svg className="download-dropdown__more-icon" focusable="false"
                                                     width="1em"
                                                     height="1em" fill="currentColor" aria-hidden="true"
                                                     viewBox="0 0 1024 1024" data-icon="RightOutlined">
                                                    <path
                                                        d="M350.08 801.92a48 48 0 0 1 0-67.84L572.16 512 350.08 289.92a48 48 0 0 1 67.84-67.84l256 256a48 48 0 0 1 0 67.84l-256 256a48 48 0 0 1-67.84 0z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='setting-item' onClick={showModal}>
                                <svg className="mx-icon" focusable="false" width="1em" height="1em"
                                     fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"
                                     data-icon="GlobalOutlined">
                                    <path
                                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM9.71 19.667C8.72341 17.5743 8.15187 15.3102 8.027 13H4.062C4.25659 14.5389 4.89392 15.9882 5.89657 17.1717C6.89922 18.3552 8.22401 19.2221 9.71 19.667V19.667ZM10.03 13C10.181 15.439 10.878 17.73 12 19.752C13.1523 17.6766 13.8254 15.3695 13.97 13H10.03V13ZM19.938 13H15.973C15.8481 15.3102 15.2766 17.5743 14.29 19.667C15.776 19.2221 17.1008 18.3552 18.1034 17.1717C19.1061 15.9882 19.7434 14.5389 19.938 13V13ZM4.062 11H8.027C8.15187 8.68979 8.72341 6.42569 9.71 4.333C8.22401 4.77788 6.89922 5.64475 5.89657 6.8283C4.89392 8.01184 4.25659 9.4611 4.062 11V11ZM10.031 11H13.969C13.8248 8.6306 13.152 6.32353 12 4.248C10.8477 6.32345 10.1746 8.63052 10.03 11H10.031ZM14.29 4.333C15.2766 6.42569 15.8481 8.68979 15.973 11H19.938C19.7434 9.4611 19.1061 8.01184 18.1034 6.8283C17.1008 5.64475 15.776 4.77788 14.29 4.333V4.333Z"></path>
                                </svg>

                            </li>
                            <li className='setting-item' onClick={toggleDarkMode}>
                                {!isDarkMode &&<svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em"
                                                   fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                                   data-icon="SunOutlined"
                                >
                                    <path
                                        d="M512 768a256 256 0 1 1 0-512 256 256 0 0 1 0 512z m0-85.333333a170.666667 170.666667 0 1 0 0-341.333334 170.666667 170.666667 0 0 0 0 341.333334zM469.333333 42.666667h85.333334v128h-85.333334V42.666667z m0 810.666666h85.333334v128h-85.333334v-128zM149.973333 210.304l60.330667-60.330667L300.8 240.469333 240.469333 300.8 149.973333 210.346667zM723.2 783.530667l60.330667-60.330667 90.496 90.496-60.330667 60.330667-90.496-90.496z m90.496-633.6l60.330667 60.373333-90.496 90.496-60.330667-60.330667 90.496-90.496zM240.469333 723.2l60.330667 60.330667-90.496 90.496-60.330667-60.330667 90.496-90.496zM981.333333 469.333333v85.333334h-128v-85.333334h128zM170.666667 469.333333v85.333334H42.666667v-85.333334h128z"></path>
                                </svg>}
                                {isDarkMode &&   <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em"
                                                      fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"
                                                      data-icon="MoonOutlined">
                                    <path
                                        d="M426.666667 298.666667a298.666667 298.666667 0 0 0 512 209.066666v4.266667c0 235.648-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333h4.266667A297.770667 297.770667 0 0 0 426.666667 298.666667z m-256 213.333333a341.333333 341.333333 0 0 0 642.645333 160.512A384 384 0 0 1 351.488 210.688 341.290667 341.290667 0 0 0 170.666667 512z"></path>
                                </svg>}
                            </li>
                        </ul>
                    </div>
                    <div className='responsive-mobile-header'>
                        <div className='responsive-mobile-header__more' onClick={handleShowSideBar}>
                            <svg className="sc-aXZVg ktFCMi mx-icon header_mobileMenuToggle header_navItem__dEqAQ"
                                 focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"
                                 style={{fontSize: '22px'}} viewBox="0 0 20 20" data-icon="MenuOutlined">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M0 2H20V4H0V2ZM0 9H20V11H0V9ZM20 16H0V18H20V16Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

            </AntdHeader>
        </>

    )
}