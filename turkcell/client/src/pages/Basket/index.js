import {
    Alert,
    Box,
    Button,
    Image,
    Text,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Modal,
    Textarea
} from '@chakra-ui/react';

import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../Context/BasketContext'
import { postOrder } from '../../api';
const Basket = () => {

    const [address, setAddress] = useState("");
    const { items, removeFromBasket, emptyBasket } = useBasket();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef();


    const total = items.reduce((acc, obj) => acc + obj.price, 0);

    const handleSubmitForm = async () => {
        const itemIds = items.map(item => item._id);
        const input = {
            address,
            items : JSON.stringify(itemIds)
        };
        await postOrder(input);
        emptyBasket();
        onClose()
    };

    return (
        <Box p="5">
            {
                items.length < 1 && <Alert status="warning">You have not any items in your basket</Alert>
            }
            {
                items.length > 0 && <>
                    <ul style={{ listStyleType: "decimal" }}>
                        {
                            items.map(item => (
                                <li key={item._id} style={{ marginBottom: 15 }}>
                                    <Link to={`/product/${item._id}`}>
                                        <Text fontSize="16">{item.title} - {item.price} $</Text>
                                        <Image htmlWidth="200" loading="lazy" src={item.photos} alt="Basket item"></Image>
                                    </Link>
                                    <Button mt="2" size="sm" colorScheme="pink" onClick={() => removeFromBasket(item._id)}>
                                        Remove from basket
                                    </Button>
                                </li>
                            ))
                        }
                    </ul>
                    <Box mt="10">
                        <Text fontSize="22">Total : {total}</Text>
                    </Box>
                    <Button mt="2" size="sm" colorScheme="green" onClick={onOpen}>Order</Button>
                    <Modal
                        initialFocusRef={initialRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Order</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Address</FormLabel>
                                    <Textarea ref={initialRef} placeholder="Address" value={address} 
                                    onChange={(event) => setAddress(event.target.value)}/>
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            }

        </Box>
    )
}

export default Basket