import React, { useEffect, useMemo, useState } from 'react'
import { Button, Table, Tag } from 'antd';

const columns = (cart, list) => [
  {
    title: 'Img',
    dataIndex: 'img',
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    filters: list.map(p => ({ text: p.nombre, value: p.nombre })),
    onFilter: (value, record) => record?.nombre.includes(value),
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
    filterSearch: true,
    filters: list.map(p => ({ text: p.categoria, value: p.categoria })),
    // filters: [...new Set(list)].map(p => ({ text: p.categoria, value: p.categoria })),
    onFilter: (value, record) => record?.categoria.indexOf(value) === 0,
  },
  {
    title: '',
    render: (record) => {
      console.log('inCart', cart);
      return cart.includes(record.nombre) ? <Tag>En el carrito</Tag> : ''
    }
  }
];

function ProductListTable({ list }) {
  const [alreadySelectedRows, setAlreadySelectedRows] = useState([])
  const [cart, setCart] = useState([])

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
    setCart(alreadySelectedRows);
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
      footer={() => <ButtonAddToCart />}
      rowKey="nombre"
      rowSelection={rowSelection}
      columns={columns(cart, list)}
      dataSource={list}
    />
  )
}

export default ProductListTable