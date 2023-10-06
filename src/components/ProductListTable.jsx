import React, { useEffect, useMemo, useState } from 'react'
import { Button, Table, Tag } from 'antd';

const columns = (cart) => [
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
    filters: [
      {
        text: 'AAA',
        value: 'AAA',
      },
      {
        text: 'BBB',
        value: 'BBB',
      },
      {
        text: 'CCC',
        value: 'CCC',
      },
      {
        text: 'DDD',
        value: 'DDD',
      },
    ],
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

  useEffect(() => {
    console.log('cart', cart);
  }, [cart])

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
      columns={columns(cart)}
      dataSource={list}
    />
  )
}

export default ProductListTable