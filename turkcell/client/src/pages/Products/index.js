import React from 'react'
import Card from "../../components/Card"
import { Grid, Box } from "@chakra-ui/react";
const Products = () => {
    return (
        <div>

            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Grid>
        </div>
    )
}

export default Products