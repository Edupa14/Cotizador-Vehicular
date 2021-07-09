import React,{useState} from "react";
import './InputArrows.css';

const InputArrows = () => {
    const [cantidad, setCantidad] = useState(14300)
    const adicion = ()=>{
        setCantidad(cantidad+100)
    }
    const resta = ()=>{
        setCantidad(cantidad-100)
    }
    return (
        <>
            <div className="number-input">
                <button style={{ color: "#6F7DFF" }} onClick={() => {
                    resta();
                }}></button>
                <input className="quantity home__right--suma" min="0" name="quantity" value={cantidad} type="number" />
                <button onClick={() => {
                    adicion();
                }} className="plus"></button>
            </div>
        </>
    )
}
export default InputArrows;