import { useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchProductList, deleteProduct } from '../../../api';
import { Button, Text } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import { Table, Popconfirm } from "antd";
import NewProduct from "./new";

const Products = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(["admin : products"], fetchProductList);

  const deleteMutation = useMutation(deleteProduct, { onSuccess: () => queryClient.invalidateQueries(["admin : products"]) });


  const columns = useMemo(() => {
    return [{
      title: "Title",
      dataIndex: "title",
      key: "title"
    }, {
      title: "Price",
      dataIndex: "price",
      key: "price"
    }, {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt"
    }, {
      title: "Action",
      key: "action",
      render: (text, record) => (<div>
        <>
          <Link to={`/admin/products/${record._id}`}>Edit</Link>
          <Popconfirm title="Are you sure?" onConfirm={() => {
            deleteMutation.mutate(record._id, {
              onSuccess: () => {
                console.log("Success!");
                queryClient.invalidateQueries(["admin : products"])
              }
            })
          }} onCancel={() => { console.log("canceled!") }}
            okText="Yes" cancelText="No" placement="left">
            <Link href="/#" style={{ marginLeft: 10 }}>Delete</Link>
          </Popconfirm>
        </>
      </div>)
    }
    ];
  }, []);

  if (isLoading) { return (<div>Loading...</div>) };
  if (isError) { return (<div>Error : {error.message}</div>) };



  return (
    <div>
      <Link to="/admin/products/new">
        <Button>New Product</Button>
      </Link>
      <Text fontSize="2xl" p="5">Products</Text>
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </div>
  )
}

export default Products;