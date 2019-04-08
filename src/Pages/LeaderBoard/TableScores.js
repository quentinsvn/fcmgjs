import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [{
  title: 'Pseudo',
  dataIndex: 'name',
  key: 'name',
},
{
  title: 'Grade',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
      })}
    </span>
  ),
}, 
{
    title: 'Points',
    dataIndex: 'age',
    key: 'age',
  },
{
  title: 'Options',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Modifier</a>
      <Divider type="vertical" />
      <a href="javascript:;">Supprimer</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'T2S Zaikuu_',
  age: 165,
  tags: ['Epique'],
}, {
  key: '2',
  name: 'MadeinHaze',
  age: 134,
  tags: ['Epique'],
}, {
  key: '3',
  name: 'Tchoow',
  age: 131,
  tags: ['Epique'],
},
{
    key: '4',
    name: 'Rakyo',
    age: 127,
    tags: ['Epique'],
},
{
    key: '5',
    name: 'Pyj4ma',
    age: 121,
    tags: ['Epique'],
},
{
    key: '6',
    name: 'Kayy',
    age: 112,
    tags: ['Epique'],
},
{
    key: '7',
    name: 'XxLeFouDuWeb30xX	',
    age: 89,
    tags: ['Rare'],
},
{
    key: '8',
    name: 'Shagetsuuu	',
    age: 88,
    tags: ['Rare'],
},
{
    key: '9',
    name: 'MoKow_',
    age: 70,
    tags: ['Rare'],
},
{
    key: '10',
    name: 'ATF Hugard',
    age: 64,
    tags: ['Rare'],
},

];

export default class TableScores extends Component {
  render() {
    return (
      <div className="container table_scores">
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}
