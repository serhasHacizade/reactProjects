import React from 'react'
import Footer from '../components/Footer';
import List from './List';

const Content = () => {
    return (
        <>
            <section className="container">
                <List />
            </section>
            <Footer />
        </>
    )
}

export default Content;