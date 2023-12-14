import {default as ReactCarousel} from "react-multi-carousel";
import ReactECharts from 'echarts-for-react';
import './newpinsection.css'
import {Button} from "antd";
import {useEffect, useState} from "react";
import {randomDecimals, randomizeDecimalPlaces} from "../utils.js";
import AutoplayCarousel from "./AutoplayCarousel.jsx";
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
    },
    {
        name:'MEME/USDT',
        price: 0.034698,
        rate:'+5.64%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231028160204774tNsdre2kHjW1a8',
        link:'https://www.mexc.com/exchange/MEME_USDT',
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
    },
    {
        name:'XTOKEN/USDT',
        price: 0.000003238,
        rate:'+9.57%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F202310261639452559F0OUgQW0oE02t',
        link:'https://www.mexc.com/exchange/XTOKEN_USDT',
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
    },
    {
        name:'BEAMX/USDT',
        price: 0.034698,
        rate:'+2.56%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F202311171156155741YFRj7sg9l91Fv',
        link:'https://www.mexc.com/exchange/BEAMX_USDT',
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
    },
    {
        name:'XAIGROK/USDT',
        price: 0.00000000078,
        rate:'-3.70%',
        operator:'-',
        avatar:'https://www.mexc.com/api/file/download/F20231212135211163IjXTftQREiclYr',
        link:'https://www.mexc.com/exchange/XAIGROK_USDT',
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
    },
    {
        name:'XMP/USDT',
        price: 0.00219,
        rate:'-3.70%',
        operator:'-',
        avatar:'https://www.mexc.com/api/file/download/F20231211211117431lem8lWAhobpKrB',
        link:'https://www.mexc.com/exchange/exchange/XMP_USDT',
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
    },
    {
        name:'OCTA/USDT',
        price: 0.8245,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231016210611207XR6UGUWSsKj6Gv',
        link:'https://www.mexc.com/exchange/OCTA_USDT',
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
    },
    {
        name:'XAI1/USDT',
        price: 0.0012122,
        rate:'-1.64%',
        operator:'-',
        avatar:'https://www.mexc.com/api/file/download/F20231118180923838TUQdxUPexHzjKa',
        link:'https://www.mexc.com/exchange/XAI1_USDT',
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
    },
    {
        name:'KFI/USDT',
        price: 0.000003238,
        rate:'+0.09%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231024132915474aBHKCvCmjS9NlF',
        link:'https://www.mexc.com/exchange/KFI_USDT',
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
    },
    {
        name:'INSP/USDT',
        price: 0.034698,
        rate:'+3.39%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231205183536274ru0dfWJog4PfsC',
        link:'https://www.mexc.com/exchange/INSP_USDT',
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
    },
    {
        name:'JINKO/USDT',
        price: 0.01753,
        rate:'-3.70%',
        operator:'-',
        avatar:'https://www.mexc.com/api/file/download/F20231029090957481ignAQjQ4KbbhM7',
        link:'https://www.mexc.com/exchange/JINKO_USDT',
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
    },
    {
        name:'XRAI/USDT',
        price: 0.00219,
        rate:'+1.39%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231017160053344MT8WfUz6oIqza1',
        link:'https://www.mexc.com/exchange/exchange/XRAI_USDT',
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
    },
    {
        name:'PUFFIN/USDT',
        price: 0.0005348,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231116105903175lXvqiyhvPO1L3f',
        link:'https://www.mexc.com/exchange/PUFFIN_USDT',
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
    },
    {
        name:'WRKX/USDT',
        price: 0.010020,
        rate:'+3.94%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F202310311814101124l0pTU8qx8RK8s',
        link:'https://www.mexc.com/exchange/WRKX_USDT',
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
    },
    {
        name:'DIAMOND/USDT',
        price: 0.000003238,
        rate:'+7.27%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231022095524070E8x78Yy69rw5fo',
        link:'https://www.mexc.com/exchange/DIAMOND_USDT',
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
    },
    {
        name:'SMT/USDT',
        price: 0.034698,
        rate:'+4.56%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F202312071926469065IWwx0cG6gXq65',
        link:'https://www.mexc.com/exchange/SMT_USDT',
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
    },
    {
        name:'TRBS/USDT',
        price: 0.05978,
        rate:'+19.00%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231213194413182Ohj4dKJP5DNvIo',
        link:'https://www.mexc.com/exchange/TRBS_USDTT',
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
    },
    {
        name:'RBX/USDT',
        price: 0.19610,
        rate:'+1.39%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231122104937914zn8SSUBxvYuZwO',
        link:'https://www.mexc.com/exchange/RBX_USDT',
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
    },
    {
        name:'PUFFIN/USDT',
        price: 0.0005348,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231116105903175lXvqiyhvPO1L3f',
        link:'https://www.mexc.com/exchange/PUFFIN_USDT',
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
    },
    {
        name:'TLT/USDT',
        price: 0.0005348,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231211204704037Mt2sFXfL8s4a5r',
        link:'https://www.mexc.com/exchange/TLT_USDT',
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
    },
    {
        name:'SUC/USDT',
        price: 0.0005348,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231203133819858QB1SoulfaXBS2l',
        link:'https://www.mexc.com/exchange/SUC_USDT',
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
    ,
    {
        name:'MGC/USDT',
        price: 0.0005348,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231213195011427rFqeB2B80OSmsv',
        link:'https://www.mexc.com/exchange/MGC_USDT',
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
    } ,
    {
        name:'XRPBABY/USDT',
        price: 0.0005348,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231212211642642gqqLwSrFRgxYmt',
        link:'https://www.mexc.com/exchange/XRPBABY_USDT',
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
    },
    {
        name:'MOSPACE/USDT',
        price: 0.0005348,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F202310241329291308iSRzPue2cqoLy',
        link:'https://www.mexc.com/exchange/MOSPACE_USDT',
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
    },
    {
        name:'RSY/USDT',
        price: 0.0005348,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231128175359046AvM1UWEmX4W4c1',
        link:'https://www.mexc.com/exchange/RSY_USDT',
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
    },
    {
        name:'PUMPKIN/USDT',
        price: 0.0005348,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231110132827909WxKmNzIsOd5xm6',
        link:'https://www.mexc.com/exchange/PUMPKIN_USDT',
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
    },
    {
        name:'VRD_USDT',
        price: 0.0005348,
        rate:'+2.70%',
        operator:'+',
        avatar:'https://www.mexc.com/api/file/download/F20231203125724106Sd1oB8u2pYTBq5',
        link:'https://www.mexc.com/exchange/VRD_USDT',
        data:[
            ['2019-10-10', 1500],
            ['2019-10-11', 2000],
            ['2019-10-12', 12],
            ['2019-10-13', 2000],
            ['2019-10-14', 12],
            ['2019-10-15', 12],
            ['2019-10-16', 12],
            ['2019-10-17', 12],
            ['2019-10-18', 2000]
        ]
    }
]
export default function NewPinSection() {
    const [dataHot, setDataHot] = useState([...newPinData.map((item)=>{
        return {
            ...item,
           data:item.data.map((item)=>{
                return [item[0],Math.floor(Math.random() * 4001)]
           })
        }

    })]);
    const [dataHot1, setDataHot1] = useState([...newPinData.sort(() => Math.random() - 0.5).map((item)=>{
        return {
            ...item,
            data:item.data.map((item)=>{
                return [item[0],Math.floor(Math.random() * 4001)]
            })
        }

    })]);

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
                    <AutoplayCarousel data={dataHot}/>
                    <AutoplayCarousel data={dataHot1}/>
                </div>
                <div className='new-list_home-new-list-footer__6RXpK'>
                    <Button type="primary" className='section-main-btn'
                            onClick={() => window.location.href = 'https://www.mexc.com/login'}>Start Trading</Button>
                </div>

            </div>

        </div>
    )
}