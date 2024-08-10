import { useState } from "react"
import { productinfo } from "./util/productInfo"

export default function Card() {
    const [choose, setChoose] = useState(false)
    function handleClick(buttonid) {
        setChoose(buttonid)
    }
    return (
        <div className="parent">
            <div className="card">
                <p>Choose the one which looks more expensive to you</p>
                <div className="info">
                    <div>
                        <img src={productinfo[0].img} />
                        <br />
                        <button className="btn btn-dark" onClick={()=>handleClick("button1")}>Choose</button>
                    </div>
                    <div>
                        <img src={productinfo[1].img} />
                        <br />
                        <button className="btn btn-dark" onClick={()=>handleClick("button2")}>Choose</button>
                    </div>
                </div>
                {choose === "button1" && <p>Answer is correct. The price is ₹3000</p>} 
                {choose === "button2" && <p>Answer is incorrect. The price is ₹2500</p>}
            </div>
        </div>
    )
}
