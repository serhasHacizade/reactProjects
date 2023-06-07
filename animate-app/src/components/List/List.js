import React, { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import './List.css';

const List = () => {

    const [state, setState] = useState([1, 2, 3]);
    const addItemHandler = () => {
        setState(() => {
            return (
                state.concat(state.length + 1)
            );
        });
    }

    const removeItemHandler = (setIndex) => {
        setState(() => {
            return (
                state.filter((item, index) => index !== setIndex)
            );
        });
    }

    const listItems = state.map((item, index) => (
        <CSSTransition key={index} classNames="fade" timeout={300} >
            <li className="ListItem" onClick={() => removeItemHandler(index)}>{item}</li>
        </CSSTransition>
    ));

    return (
        <div>
            <button className="Button" onClick={addItemHandler}>Add Item</button>
            <p>Click Item to Remove.</p>
            <TransitionGroup component="ul" className="List">
                {listItems}
            </TransitionGroup>
        </div>
    );
}


export default List;