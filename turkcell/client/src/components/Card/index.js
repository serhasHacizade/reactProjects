import { Box, Image, Button } from "@chakra-ui/react";
import React from "react"
import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ item }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to="#/">
            <Image src={item.photos[0]} alt="Products" loading="lazy"/>
            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    {moment(item.createdAt).format("DD/MM/YYYY")}
                </Box>
                <Box marginTop="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    {item.title}
                </Box>
                <Box>{item.price} $</Box>
            </Box>
        </Link>
        <Button colorScheme="pink">Add to basket</Button>
    </Box>
  )
}

export default Card;