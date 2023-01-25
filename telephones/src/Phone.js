const Phone = ({id, title, price, img, amount, removePhone}) => {    
    return (
        <article className="phone">
            <img src={img} alt=""/>
            <footer>
                <div className="phoneInfo">
                    <h4>{title}</h4>
                    <h4 className="phonePrice">${price}</h4>
                    <h4 className="phoneAmount">Amount: {amount}</h4>
                </div>
                <button className="deleteBtn" onClick={() => removePhone(id)}>
                    Delete phone
                </button>
            </footer>
        </article>
    );
}
export default Phone;