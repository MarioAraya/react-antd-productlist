import React, { useEffect, useMemo, useState } from 'react'
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

function ProductListTable({ list }) {
  const [alreadySelectedRows, setAlreadySelectedRows] = useState([])

  useEffect(() => {
    console.log('alreadySelectedRows', alreadySelectedRows);
  }, [alreadySelectedRows])

  const rowSelection = {
    selectedRowKeys: alreadySelectedRows,
    onChange: (keys) => {
      setAlreadySelectedRows(keys);
    },
    type: 'checkbox',
    getCheckboxProps: (record) => ({
      disabled: record.categoria === 'DDD',
      // Column configuration not to be checked
      nombre: record.nombre,
    }),
  };
  const onClickAddToCart = () => {
    console.log('rowSeleccion: ', alreadySelectedRows)
  }
  const ButtonAddToCart = () => {
    if (alreadySelectedRows.length === 0)
      return;
    const text = alreadySelectedRows.length > 1 ? "los productos" : "el producto"
    return (
      <Button onClick={onClickAddToCart}>{`Agregar ${text} al carrito`}</Button>
    )
  }
  return (
    <Table
      title={() => 'Lista de Productos'}
      footer={() => <ButtonAddToCart />}
      rowKey="nombre"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={list}
    />
  )
}

export default ProductListTable