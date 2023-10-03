import React, { useEffect } from 'react'
import { Avatar, List, Skeleton, Table } from 'antd';

const columns = [
  {
    title: 'Img',
    dataIndex: 'img',
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Precio',
    dataIndex: 'precio',
  },
  {
    title: 'Descripcion',
    dataIndex: 'descripcion',
  },
  {
    title: 'Categoria',
    dataIndex: 'categoria',
  },
];
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
//   getCheckboxProps: (record) => ({
//     disabled: record.name === 'Disabled User',
//     // Column configuration not to be checked
//     name: record.name,
//   }),
// };

function ProductListTable({ list }) {
  useEffect(() => {
    console.log(list);
  }, [list])

  return (
    <Table
      // rowSelection={{
      //   type: selectionType,
      //   ...rowSelection,
      // }}
      columns={columns}
      dataSource={list}
    />
  )
}

export default ProductListTable