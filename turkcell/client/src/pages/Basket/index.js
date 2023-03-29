import { Alert, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../Context/BasketContext'
const Basket = () => {

    const { items } = useBasket();
    console.log(items);

    return (
        <div>
            {
                items.length < 1 && <Alert status="warning">You have not any items in your basket</Alert>
            }
            {
                items.length > 0 && <>
                    <ul>
                        {
                            items.map(item => (
                                <li key={item._id}>
                                    <Link to={`/product/${item._id}`}>
                                        {item.title} - {item.price} $
                                        <Image htmlWidth="200" src={item.photos} alt="Basket item"></Image>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </>
            }
        </div>
    )
}

export default Basket