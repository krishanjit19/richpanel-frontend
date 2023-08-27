import { useState } from 'react';
import './Success.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const [isCancel, setIsCancel] = useState(false);
    const location = useLocation();
    const { data } = location.state;
    let option = 'mon';
    if(data.option === 'Yearly') {
        option = 'yr';
    }

  return (
    <div className="success">
    <div className="card">
        <div className="top">
            <div className='head'>
                <h3>Current Plan details</h3>
                <span style={isCancel? {backgroundColor : "red"}: {}}>
                {isCancel ? "Cancelled":"Active"}
                </span>
            </div>
            {
                !isCancel && 
            <a className='cancel' onClick={()=>setIsCancel(true)}>Cancel</a>
            }
        </div>
        <div className="bottom">
            <span>{data.name}</span>
            <h2>₹ {data.price} /{option}</h2>
            <Link to='/plans' className='btn'>Change plan</Link>
        </div>
    </div>
  </div>
  )
}

export default Success