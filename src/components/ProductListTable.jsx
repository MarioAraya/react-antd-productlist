import React, { useEffect } from 'react'
import { Button, Table } from 'antd';

const columns = [
  {
    title: 'Img',
    dataIndex: 'img',
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
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
  }
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.categoria === 'DDD',
    // Column configuration not to be checked
    nombre: record.nombre,
  }),
};

function ProductListTable({ list }) {
  useEffect(() => {
    console.log(list);
  }, [list])

  function addToCart() {
    console.log('rowSeleccion: ', rowSelection.selectedRowKeys)
  }
  function ButtonAddToCart() {
    return (
      <Button onClick={addToCart}>Agregar producto(s) al carrito</Button>
    )
  }
  return (
    <Table
      title={() => 'Lista de Productos'}
      footer={ButtonAddToCart}
      rowKey="nombre"
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={list}
    />
  )
}

export default ProductListTable