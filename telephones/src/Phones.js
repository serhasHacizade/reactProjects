import React from "react";
import Phone from "./Phone"
const Phones = ({phones, removePhone}) => {
    return (
        <section>
            <div className="title">
                <h2>Phones</h2>
                <div className="underLine"></div>
            </div>
            <div>
                {phones.map((phone) => {
                    return <Phone key={phone.id} {...phone} removePhone={removePhone}/>
                })}
            </div>
        </section>
    )
}
export default Phones;