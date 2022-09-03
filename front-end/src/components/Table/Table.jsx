import { Space, Table } from 'antd';
import React from 'react';
import './Table.css';

import { Restaurant } from '../Data/Restaurant';
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
    render: (favorite) => (
      favorite===1? <BsHeartFill color='red'/>: <BsHeart/>
    ),
  },
];

const TableStyle = {
  width: "100%",
  borderRadius: "30%",
  backgroundColor: "#DFF0FB"
};

const DataTable = () => <Table 
    columns={columns} 
    dataSource={Restaurant} 
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
    size='large'
    style={TableStyle}
  />;

export default DataTable;