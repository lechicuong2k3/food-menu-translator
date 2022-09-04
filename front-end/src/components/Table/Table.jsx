import { Space, Table } from 'antd';
import React from 'react';
import './Table.css';

import Menu from './Menu';
import { BsHeart, BsHeartFill, BsStarFill } from "react-icons/bs";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Rate',
    key: 'rate',
    dataIndex: 'rate',
    render: (rate) => (
      <Space size='small' className='Rate'>
        <span>{rate}</span>
        <BsStarFill color='yellow'/>
      </Space>
    ),
  },
  {
    title: 'Favorite',
    key: 'favorite',
    dataIndex: 'favorite',
    width: 100,
    render: (favorite) => (
      favorite===1? <BsHeartFill color='red'/>: <BsHeart/>
    ),
  },
];

const TableStyle = {
  width: "100%",
  marginRight: "2rem",
  fontSize: "14px",
};

const DataTable = (props) => <Table 
    columns={columns} 
    dataSource={props.data} 
    expandable={{
      expandedRowRender: (record) => (
        <Menu menu={record.menu}/>
      ),
      expandIcon: ({ expanded, onExpand, record }) =>
        expanded ? (
          <div className='Expand'>
            <MinusCircleTwoTone onClick={e => onExpand(record, e)} /> 
            <span>Close</span>
          </div>
        ) : (
          <div className='Expand'>
            <PlusCircleTwoTone onClick={e => onExpand(record, e)} /> 
            <span>View Menu</span>
          </div>
        )
    }}
    style={TableStyle}
    scroll={{y: 500, x: "max-content"}}
  />;

export default DataTable;