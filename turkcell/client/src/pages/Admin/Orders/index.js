import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from '../../../api';
import {Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
const Orders = () => {
  const { isLoading,data, isError, error} = useQuery(["admin : orders"], fetchOrders);
  console.log(data);
  if (isLoading) {return <div>Loading...</div>};
  if (isError) {return <div>Error : {error.message}</div>};

  return (
    <div>
      <Text fontSize="2xl" p="5">
        <Table variant="simple">
          <TableCaption>Muratı gööten</TableCaption>
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Address</Th>
              <Th>Items</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              data.map((item) => (
                <Tr key={item._id}>
                  <Td>{item.address}</Td>
                  <Td>{item.items.length}</Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Text>
    </div>
  )
}

export default Orders;