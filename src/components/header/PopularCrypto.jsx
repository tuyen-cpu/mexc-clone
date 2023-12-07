import './PopularCrypto.css'
import {Button, Table, Tabs} from "antd";
import {dataHotSearch} from "../data/data.js";
import ReactECharts from "echarts-for-react";




const columns = [
    {
        title: 'Cặp giao dịch',
        dataIndex: 'name',
        key: 'name',
        width: 300,
        render:(name,data) => (
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

    },
    {
        title: 'Thay đổi',
        dataIndex: 'rate',
        key: 'rate',
        render:(rate,data) => (
            <>
                <div className={`hot-list_change ${data.operator==='+'?'up-rate':'down-rate'}`}>{rate}</div>
            </>

        )
    }
    ,
    {
        title: 'Thị trường',
        dataIndex: 'data',
        key: '3',
        width: 200,
        responsive: ['md','lg'],
        render:(data)=>(
          <div style={{height:'50px'}}>
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
                              color: '#fe445c',
                              width: 1.3
                          },
                          data: [['2019-10-10', 200],
                              ['2019-10-11', 560],
                              ['2019-10-12', 300],
                              ['2019-10-13', 580],
                              ['2019-10-14', 250],
                              ['2019-10-15', 300],
                              ['2019-10-16', 450],
                              ['2019-10-17', 300],
                              ['2019-10-18', 200]]
                      }
                  ]
              }} />
          </div>
        )
    }
    ,
    {
        title: 'Thao tác',
        dataIndex: '',
        key: '4',
        width: '100px',
        render: (data) =>  <Button className='hot-list_toTradeLink___yvj0'  onClick={()=>window.location.href=data.link} >Giao dịch</Button>,
    },
];



const items = [
    {
        key: '1',
        label: 'Top Futures',
        children: (<div className='home-market-list '>
            <Table columns={columns} dataSource={dataHotSearch.slice(0,5)} bordered={false}  />

        </div>),
    },
    {
        key: '2',
        label: 'Hot',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Mới nhất',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: 'Top KL',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '5',
        label: 'Top tăng trưởng',
        children: 'Content of Tab Pane 3',
    },
];
export default function PopularCrypto() {
    return (
        <>
            <div className='hot-list_markets__ihE0y'>
                <div className='home-container'>
                    <h2>Tiền mã hoá phổ biến</h2>
                    <Tabs rootClassName='antd-custom-wrapper' defaultActiveKey="1" items={items} />
                </div>
            </div>
        </>
    )
}