import { Box, Image, Button } from "@chakra-ui/react";
import React from "react"
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to="#/">
            <Image src="https://picsum.photos/200/300" alt="Products"/>
            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    12/12/2023
                </Box>
                <Box marginTop="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    Macbook Pro
                </Box>
                <Box>100 TL</Box>
            </Box>
        </Link>
        <Button colorScheme="pink">Add to basket</Button>
    </Box>
  )
}

export default Card;