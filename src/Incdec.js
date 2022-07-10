import React,{useState} from 'react'
import './Incdec.css';

function Incdec() {
    const[Number,updatenum] = useState(0);
  return (
    <div>
    <div className="navbar">
        <p className="navbar_element">Increasing And Decreasing Of a Number </p>
    </div>
    <div className="container">
        <p className="result">{Number}</p>
        <button id="inc" onClick={ () => {

            updatenum(Number+ 1);

        }}>INCREMENT</button>
        <button id="dec" onClick={ () => {

            Number > 0 ? updatenum(Number-1) : updatenum(0);

        }}>DECREMENT</button>
    </div>
    </div>
  )
}

export default Incdec