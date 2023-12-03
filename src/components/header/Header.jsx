import {Button, Input, Layout} from "antd";

const {Header: AntdHeader} = Layout;
import {SearchOutlined} from '@ant-design/icons';
import './header.css';

import { Tabs } from 'antd';

import Dropdown from "./Dropdown.jsx";
import {useEffect, useRef, useState} from "react";
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
const navListStyle = {
    display: 'flex',

}

const rightMenuStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}
const onChange = (key) => {
    console.log(key);
};


export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            // Clicked outside the dropdown, hide it
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        // Add event listener to handle clicks outside the dropdown
        document.addEventListener('mousedown', handleClick);
        return () => {
            // Clean up the event listener on component unmount
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);
    const menuItemsData = [
        {
            title: "Thị trường",
            url: "https://www.mexc.com/markets",
        },
        {
          title: "Mua Crypto",
            url: "https://www.mexc.com/buy-crypto",
            icon: true,
            submenu: [
                {
                    title: "Thẻ Debit/Credit",
                    url: "https://otc.mexc.com/vi-VN/checkout-deposit?newPage=1&type=1",
                    content: "Mua Crypto với thẻ",
                    icon: 'credit-icon.png'
                },
                {
                    title: "Chuyển khoản ngân hàng toàn cầu",
                    url: "https://otc.mexc.com/vi-VN/deposit-fiat?newPage=1&type=1",
                    content: "Mua/Bán qua SEPA",
                    icon: 'bank-icon.png',
                    status: 'new'
                },
                {
                    title: "Mua/Bán ngay",
                    url: "https://otc.mexc.com/vi-VN/fastTransaction",
                    content: "Giao dịch tài sản kỹ thuật số nhanh chóng",
                    icon: 'wallet-icon.png',
                },
                {
                    title: "Giao dịch P2P",
                    url: "https://otc.mexc.com/vi-VN",
                    content: "Chuyển khoản ngân hàng và các lựa chọn khác",
                    icon: 'people-icon.png',
                },
                {
                    title: "MEXC MasterCard",
                    url: "https://otc.mexc.com/vi-VN/mexcCard",
                    content: "Hỗ trợ tiêu dùng toàn cầu",
                    icon: 'master-card-icon.png',
                    status: 'new'
                }
            ]
        },
        {
            title: "Spot",
            url: "https://futures.mexc.com/exchange",
            icon: true,
            submenu:[
                {
                    title: "Spot",
                    url: "https://www.mexc.com/vi-VN/exchange/MX_USDT?_from=header",
                    content: "Đầu tư hiệu quả tại MEXC",
                    icon: 'spot-1.png'
                },
                {
                    title: "MX Zone",
                    url: "https://www.mexc.com/vi-VN/exchange/MX_USDT?_from=header",
                    content: "Khu đặc quyền của chủ sở hữu MX",
                    icon: 'spot-2.png'
                },
                {
                    title: "Spot",
                    url: "https://www.mexc.com/vi-VN/exchange/MX_USDT?_from=header",
                    content: "Đầu tư hiệu quả tại MEXC",
                    icon: 'spot-3.png'
                }
            ]
        },
        {
            title: "Futures",
            url: "https://futures.mexc.com/exchange",
            icon: true,
            status:'hot',
            submenu:[
                {
                    title: "Tổng quan Features",
                    url: "https://www.mexc.com/vi-VN/futures",
                    content: "Xem đầy đủ các công cụ phái sinh tiền điện tử của chúng tôi",
                    icon: 'feature-1.png'
                },
                {
                    title: "Features Vĩnh cữu",
                    url: "https://futures.mexc.com/exchange/BTC_USDT?type=linear_swap",
                    content: "Phí thấp nhất, thanh khoản tốt nhất",
                    icon: 'feature-2.png',
                    submenu: [
                        {
                            title: "USDT-M Futures Vĩnh cửu",
                            url: "https://futures.mexc.com/exchange?type=linear_swap",
                            content: "Futures Vĩnh cửu thanh toán bằng USDT",
                        },
                        {
                            title: "Sự kiện Futures hàng tuần!",
                            url: "https://www.mexc.com/vi-VN/futures-activity/crazy-week?id=60&utm_source=mexc&utm_medium=webfuturesmenu&utm_campaign=week20231204",
                            content: "Phần thưởng Check-in được thêm mới, giao dịch để chia sẻ phần thưởng 60,000 USDT từ Thứ Hai đến Thứ Sáu!"

                        },

                    ],
                },
                {
                    title: "Tổng quan Features",
                    url: "https://www.mexc.com/vi-VN/futures",
                    content: "Xem đầy đủ các công cụ phái sinh tiền điện tử của chúng tôi",
                    icon: 'feature-2.png',
                },
                {
                    title: "Tổng quan Features",
                    url: "https://www.mexc.com/vi-VN/futures",
                    content: "Xem đầy đủ các công cụ phái sinh tiền điện tử của chúng tôi",
                    icon: 'feature-2.png',
                },
                {
                    title: "Sự kiện Futures",
                    content: "Nhận phần thưởng hàng ngày từ các cuộc thi đấu hàng tháng của chúng tôi",
                    icon: 'feature-5.png',
                    status:'uncheck'

                },
            ]
        }
    ];

    const dataHotSearch = [
        {
            name:'BTC',
            market: 'USDT',
            price: '39,624.8',
            rate:'+2.09%',
            operator:'+',
        },
        {
            name:'ETH',
            market: 'USDT',
            price: '2,157.67',
            rate:'+2.09%',
            operator:'+',
        },
        {
            name:'SOL',
            market: 'USDT',
            price: '62.961',
            rate:'+1.69%',
            operator:'+',
        },
        {
            name:'GROK',
            market: 'USDT',
            price: '0.01512',
            rate:'-2.64%',
            operator:'-',
        },{
            name:'USTC',
            market: 'USDT',
            price: '0.06108',
            rate:'+13.66%',
            operator:'-',
        },
        {
            name:'BIGTIME',
            market: 'USDT',
            price: '0.04222',
            rate:'+20.50%',
            operator:'+',
        },
        {
            name:'ID',
            market: 'USDT',
            price: '0.3055',
            rate:'+9.34%',
            operator:'+',
        },
        {
            name:'ORDI',
            market: 'USDT',
            price: '31.055',
            rate:'+13.33%',
            operator:'+',
        },
        {
            name:'IOTA',
            market: 'USDT',
            price: '0.3277',
            rate:'+9.55%',
            operator:'+',
        },
        {
            name:'TIA',
            market: 'USDT',
            price: '8.556',
            rate:'-1.8%',
            operator:'-',
        },
        {
            name:'LUNC',
            market: 'USDT',
            price: '0.00018411',
            rate:'+28.13%',
            operator:'+',
        },
        {
            name:'ETH',
            market: '/USDT',
            price: '2,153.58',
            rate:'+2.35',
            operator:'+',
        },
        {
            name:'GRIMACE',
            market: 'USDT',
            price: '47.76',
            rate:'+0.20%',
            operator:'+',
        },
        {
            name:'LINK',
            market: 'USDT',
            price: '15.828',
            rate:'-0.006%',
            operator:'-',
        },
        {
            name:'KAS',
            market: '/USDT',
            price: '0.138763',
            rate:'+1.65%',
            operator:'+',
        },

    ]
    const eventsData=[
        {
            icon:'event-1.png',
            title:'Launchpad',
            content:'Đặc quyền của người nắm giữ MX - Tham gia và chia sẻ token mới',
            link:'https://www.mexc.com/vi-VN/launchpads/assessment?_from=search'
        },
        {
            icon:'event-2.png',
            title:'M-Day Futures - Giải thưởng hàng ngày',
            content:'Giao dịch Futures và giành phần thưởng hơn 70,000 USDT mỗi ngày!',
            link:'https://www.mexc.com/vi-VN/futures-mday?_from=search'
        },
        {
            icon:'event-3.png',
            title:'Kickstarter',
            content:'Đặc quyền của người nắm giữ MX - Tham gia và chia sẻ token mới',
            link:'https://www.mexc.com/vi-VN/sun/assessment?_from=search'
        }
        ,
        {
            icon:'event-4.png',
            title:'Chia sẻ 100,000$',
            content:'Giao dịch Futures với Đòn bẩy 21-200x',
            link:'https://www.mexc.com/vi-VN/futures-activity/x-game?utm_source=mexc&utm_medium=icon&utm_campaign=xgame20231204&_from=search'
        },
        {
            icon:'event-5.png',
            title:'Bảng xếp hạng Futures',
            content:'chia sẻ $15,000 USD mỗi ngày, và giải thưởng sẽ được phân phối vào ngày hôm sau!',
            link:'https://futures.mexc.com/contractrank?_from=search&utm_campaign=rankevent&utm_medium=icon&utm_source=mexc'
        },
        {
            icon:'event-6.png',
            title:'Sự kiện Futures hàng tuần!',
            content:'Giao dịch và Check-in hàng ngày để chia sẻ Tiền thưởng trị giá 60,000 USDT vào mỗi Thứ Hai-Thứ Sáu!',
            link: 'https://www.mexc.com/vi-VN/futures-activity/crazy-week?id=60&utm_source=mexc&utm_medium=icon&utm_campaign=week20231204&_from=search'
        }
    ];
    const itemsTab = [
        {
            key: '1',
            label: 'Tìm kiếm hàng đầu',
            children: (
                <div className='hot-search-wrapper'>
                    <div className='hot-search-content'>
                        {dataHotSearch.map((item, index) => {
                            return(<div key={index} className='hot-search__item'>
                                    <div className='hot-search__info'>
                                        <div className={`hot-search__rank ${index<=2?`hot-search__rank--top`:''}`}> {index+1}</div>
                                        <div className='hot-search-info-wrapper'>
                                           <div className='hot-search-info__name-market'>
                                               <span className='hot-search-info__name '>{item.name}</span>
                                               <span className='hot-search-info__name hot-search-info__market'>{item.market}</span>
                                           </div>
                                            <div className='hot-search-info__attr'>
                                                <span className='attr-tag'>Vĩnh cửu</span>
                                                <span className='attr-hot-fire'>
                                                    {(index+1)<=3 && Array(3 - index).fill(null).map((item, index) => {
                                                        return (<img key={index} src="./fire.svg" alt=""/>)
                                                    })}
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                <div className='hot-search__price'>{item.price}</div>
                                <div className='right-data'>
                                    <span className={item.operator==='+'?`rate-up`:'rate-down'}>{item.rate}</span>
                                   <span className='rate-icon'> <svg className="" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="StarFilled"><path d="M908.096 353.088l-253.888-36.864-113.536-230.08a32.128 32.128 0 0 0-57.408 0L369.792 316.16l-253.888 36.864a32 32 0 0 0-17.728 54.656l183.68 179.072-43.392 252.864a32 32 0 0 0 46.4 33.728L512 753.984l227.072 119.424a32 32 0 0 0 46.4-33.728l-43.392-252.864 183.68-179.072a31.936 31.936 0 0 0-17.664-54.656z"></path></svg>
                               </span>
                                    </div>
                            </div>)
                        })}
                    </div>
                </div>
            ),
        },
        {
            key: '2',
            label: 'Sự kiện Hot',
            children: (
                <div className='hot-event-wrapper'>
                    <div className='hot-event-site'>
                        {eventsData.map((item, index) => {
                            return(
                                <a href={item.link} className='hot-event-link'>
                                    <span className='hot-event__img'>
                                        <img src={`./${item.icon}`} alt=""/>
                                    </span>
                                    <div className='hot-event__info'>
                                        <div className='hot-event__title'>{item.title}</div>
                                        <div className='hot-event_desc'>{item.content}</div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            ),
        }
    ];

    return (
        <AntdHeader className='header-nav'>
            <div style={leftMenuStyle} className='desktop-nav'>
                <div className="logo" style={logoWrapperStyle}>
                    <img style={logoStyle}
                         src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgxIiBoZWlnaHQ9Ijg5IiB2aWV3Qm94PSIwIDAgNTgxIDg5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTM3LjU2MiA2Mi41OTA3TDEwNy4zNzYgMTAuMTgxNUMxMDAuNzg4IC0wLjczMjk2MiA4NC41NjMzIC0wLjgzMTI5IDc4LjE3MTkgMTAuNjczMkw0Ni41MTAxIDY1LjE0NzJDNDAuNjEwNCA3NS4xNzY4IDQ3Ljg4NjcgODcuNjY0NSA1OS43ODQ0IDg3LjY2NDVIMTIzLjQwM0MxMzUuMzAxIDg3Ljc2MjggMTQ0LjI0OSA3NC43ODM1IDEzNy41NjIgNjIuNTkwN1oiIGZpbGw9IiMwMDMwODciLz4KPHBhdGggZD0iTTk0LjAwMjggNjYuNzIwNUw5Mi4xMzQ2IDYzLjQ3NTZDOTAuMzY0NyA2MC40Mjc1IDg2LjUyOTggNTMuOTM3OCA4Ni41Mjk4IDUzLjkzNzhMNjAuOTY0NCA5LjQ5MzI3QzU0LjM3NjQgLTAuMzM5NTk3IDM4LjY0MzggLTEuMjI0NTcgMzIuMDU1OCAxMS4yNjMyTDIuMjYyMjEgNjIuNzg3M0MtMy45MzI1IDczLjYwMzUgMy40NDIxNyA4Ny42NjQ1IDE2LjgxNDkgODcuNzYyOEg4MC4wNDAySDEwNi45ODJIMTIzLjAxQzEwNi42ODcgODcuODYxMiAxMDEuNDc2IDc5LjMwNjUgOTQuMDAyOCA2Ni43MjA1WiIgZmlsbD0iIzE4NzdGMiIvPgo8cGF0aCBkPSJNOTQuMDAyOCA2Ni41MjM4TDkyLjEzNDYgNjMuMjc4OUM5MC4zNjQ3IDYwLjIzMDggODYuNTI5OSA1My43NDExIDg2LjUyOTkgNTMuNzQxMUw3MC4wMTA3IDI0LjYzNThMNDYuMzEzNCA2NS4xNDcyQzQwLjQxMzcgNzUuMTc2NyA0Ny42OSA4Ny42NjQ1IDU5LjU4NzggODcuNjY0NUg3OS45NDE4SDEwNi44ODRIMTIzLjAxQzEwNi41ODkgODcuNTY2MiAxMDEuNDc2IDc5LjIwODIgOTQuMDAyOCA2Ni41MjM4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzEwOTA3XzMzMSkiLz4KPHBhdGggZD0iTTUzMC41NTYgMjQuNDgxQzUzNC45OCAyMC4zNTEyIDU0Mi43NDggMTguMzg0NiA1NTQuMDU2IDE4LjM4NDZINTgwLjUwN1YzLjM0MDMzSDU0OS4yMzhDNTQxLjc2NSAzLjM0MDMzIDUzNS40NzIgNC4xMjY5OSA1MzAuNTU2IDUuNzAwMjRDNTI1LjczNyA3LjI3MzUgNTIxLjUwOSA5LjczMTY5IDUxNy44NzEgMTMuMTczMkM1MTQuMDM2IDE2LjkwOTcgNTEwLjk4OCAyMS41MzExIDUwOC44MjUgMjcuMDM3NUM1MDYuNjYyIDMyLjY0MjIgNTA1LjU4IDM4LjczODYgNTA1LjU4IDQ1LjEzQzUwNS41OCA1MS4yMjY0IDUwNi42NjIgNTcuMTI2MSA1MDguODI1IDYyLjUzNDJDNTEwLjk4OCA2Ny45NDIzIDUxNC4wMzYgNzIuNjYyIDUxNy44NzEgNzYuMzk4NUM1MjEuNDExIDc5Ljg0IDUyNS42MzkgODIuMjk4MiA1MzAuMzU5IDgzLjg3MTVDNTM1LjE3NyA4NS40NDQ4IDU0MS41NjggODYuMjMxNCA1NDkuMjM4IDg2LjIzMTRINTgwLjUwN1Y3MS4zODM4SDU1NC4wNTZDNTQ4LjA1OCA3MS4zODM4IDU0My45MjggNzEuMTg3MSA1NDEuNTY4IDcwLjY5NTRDNTM5LjExIDcwLjIwMzggNTM2Ljg0OSA2OS40MTcyIDUzNC45OCA2OC4yMzcyQzUzMS4yNDQgNjUuODc3MyA1MjguMzkyIDYyLjgyOTEgNTI2LjUyNCA1OC45OTQzQzUyNC43NTQgNTUuMjU3OCA1MjMuODY5IDUwLjUzODEgNTIzLjg2OSA0NS4wMzE3QzUyMy44NjkgMzUuNTkyMSA1MjYuMTMxIDI4LjYxMDggNTMwLjU1NiAyNC40ODFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzAwLjM2OCA4Ni40MjhIMzc0LjExNVY3MS44NzU0SDMxOC4zNjJWNTEuMTI4SDM2Ny4wMzVWMzcuMzYySDMxOC4zNjJWMTguMDg5NkgzNzQuMTE1VjMuNDM4NjZIMzAwLjM2OFY4Ni40MjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzkyLjUwMiAzLjQzODY2TDQyNy4wMTYgNDQuOTMzM0wzOTIuNTAyIDg2LjQyOEg0MTQuODIzTDQ0Mi4wNiA1My41ODYzVjM2LjM3ODdMNDE0LjgyMyAzLjQzODY2SDM5Mi41MDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDc2LjI3OCAzLjQzODY2TDQ0OS4wNDEgMzYuMzc4N1Y1My41ODYzTDQ3Ni4yNzggODYuNDI4SDQ5OC41OTlMNDYzLjk4NyA0NC45MzMzTDQ5OC41OTkgMy40Mzg2Nkg0NzYuMjc4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIyOC4wOTcgNDQuMzQzNEwxOTQuOTYgMy40Mzg2NkgxNzcuODUxVjg2LjQyOEgxOTUuODQ1VjMxLjA2OUwyMjQuNTU3IDY1LjQ4NDFIMjMxLjUzOEwyNjAuMjUgMzAuNzc0MVY4Ni40MjhIMjc4LjI0NFYzLjQzODY2SDI2MS4zMzJMMjI4LjA5NyA0NC4zNDM0WiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xMDkwN18zMzEiIHgxPSIzNy44NTU5IiB5MT0iNDYuNzg2OSIgeDI9IjExMS4zMTQiIHkyPSI3My45MzIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDMwODciIHN0b3Atb3BhY2l0eT0iMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDMwODciLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
                         alt="This is logo"/>
                </div>
                <ul style={navListStyle} className='navbar-list menus'>
                    {menuItemsData.map((item, index) => {
                        return (<li key={index} className='navbar-list-item'>
                            <a className='navbar-list-item__link' >{item.title}
                                {item.status==='hot' && <span  className='hot-tag'>HOT</span>}
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
                </ul>
            </div>
            <div style={rightMenuStyle} className='right-menu'>
                <div className='search-wrapper'>
                    <Input
                        onFocus={() => setShowDropdown(true)}
                        className='search-input-header'
                        placeholder="Tìm kiếm"
                        prefix={<SearchOutlined/>}
                    />
                    <div className='search-dropdown-wrapper' ref={dropdownRef}  style={{display: showDropdown ? 'block' : 'none'}}>
                        <div className='search-dropdown-site'>
                            <Tabs defaultActiveKey="1" items={itemsTab}  />
                        </div>
                    </div>
                </div>
                <Button type="primary" className='login-btn'>Đăng nhập/Đăng ký</Button>
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
                        </li>
                        <li className='setting-item'>
                            <svg className="sc-aXZVg ktFCMi mx-icon" focusable="false" width="1em" height="1em"
                                 fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"
                                 data-icon="GlobalOutlined">
                                <path
                                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM9.71 19.667C8.72341 17.5743 8.15187 15.3102 8.027 13H4.062C4.25659 14.5389 4.89392 15.9882 5.89657 17.1717C6.89922 18.3552 8.22401 19.2221 9.71 19.667V19.667ZM10.03 13C10.181 15.439 10.878 17.73 12 19.752C13.1523 17.6766 13.8254 15.3695 13.97 13H10.03V13ZM19.938 13H15.973C15.8481 15.3102 15.2766 17.5743 14.29 19.667C15.776 19.2221 17.1008 18.3552 18.1034 17.1717C19.1061 15.9882 19.7434 14.5389 19.938 13V13ZM4.062 11H8.027C8.15187 8.68979 8.72341 6.42569 9.71 4.333C8.22401 4.77788 6.89922 5.64475 5.89657 6.8283C4.89392 8.01184 4.25659 9.4611 4.062 11V11ZM10.031 11H13.969C13.8248 8.6306 13.152 6.32353 12 4.248C10.8477 6.32345 10.1746 8.63052 10.03 11H10.031ZM14.29 4.333C15.2766 6.42569 15.8481 8.68979 15.973 11H19.938C19.7434 9.4611 19.1061 8.01184 18.1034 6.8283C17.1008 5.64475 15.776 4.77788 14.29 4.333V4.333Z"></path>
                            </svg>
                        </li>
                        <li className='setting-item'>
                            <svg className="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em"
                                 fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="SunOutlined"
                            >
                                <path
                                    d="M512 768a256 256 0 1 1 0-512 256 256 0 0 1 0 512z m0-85.333333a170.666667 170.666667 0 1 0 0-341.333334 170.666667 170.666667 0 0 0 0 341.333334zM469.333333 42.666667h85.333334v128h-85.333334V42.666667z m0 810.666666h85.333334v128h-85.333334v-128zM149.973333 210.304l60.330667-60.330667L300.8 240.469333 240.469333 300.8 149.973333 210.346667zM723.2 783.530667l60.330667-60.330667 90.496 90.496-60.330667 60.330667-90.496-90.496z m90.496-633.6l60.330667 60.373333-90.496 90.496-60.330667-60.330667 90.496-90.496zM240.469333 723.2l60.330667 60.330667-90.496 90.496-60.330667-60.330667 90.496-90.496zM981.333333 469.333333v85.333334h-128v-85.333334h128zM170.666667 469.333333v85.333334H42.666667v-85.333334h128z"></path>
                            </svg>
                        </li>
                    </ul>

                </div>
            </div>

        </AntdHeader>
    )
}