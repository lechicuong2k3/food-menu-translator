import { Table } from 'antd';
import React from 'react';
import './Menu.css';

const columns = [
  {
    title: 'Food',
    dataIndex: 'food',
    key: 'food',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (int) => <span>{int} VND</span>,
  },
];

const Menu = (props) => <Table columns={columns} dataSource={props.menu} />;

export default Menu;