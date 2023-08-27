import './Payment.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { planData } = location.state;
  console.log(planData)
  const showData = planData;
  const navigate = useNavigate();

  const plans = {
    monthly: [
      { plan: 'Mobile', priceid: 'price_1NjcbGSIqOqHlxHg3HnRwD7u' },
      { plan: 'Basic', priceid: 'price_1NjccsSIqOqHlxHgg17Q6s5P' },
      { plan: 'Standard', priceid: 'price_1NjcdkSIqOqHlxHgcyzwuRTD' },
      { plan: 'Premium', priceid: 'price_1NjceRSIqOqHlxHgfJJSnsuV' }
    ],
    yearly: [
      { plan: 'Mobile', priceid: 'price_1NjcmISIqOqHlxHgSKpGNFza' },
      { plan: 'Basic', priceid: 'price_1NjcmvSIqOqHlxHghK4PxaAW' },
      { plan: 'Standard', priceid: 'price_1NjcneSIqOqHlxHg6JxufDeT' },
      { plan: 'Yearly', priceid: 'price_1Njd2NSIqOqHlxHgEnKV1FOO' }
    ]
  };

  const handlePayment = async () => 
  {
    // let selectedPlan;
    // if(showData.option == 'Monthly'){
    //   selectedPlan = plans.monthly.find(e => e.plan === planData.name);
    // }else{
    //   selectedPlan = plans.yearly.find(e => e.plan === planData.name);
    // }
    // console.log("ABS")
    // console.log(selectedPlan)
    // const cartItems = {
    //   priceId: selectedPlan,
    // };
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({items: cartItems})
      body: JSON.stringify(planData)
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url) {
        navigate('/success', {state: {data: showData}});
      }
    })
  }

  return (
    <div className="payment">
      <div className="card">
        <div className="left">
          <h3>Complete Payment</h3>
          <span>Enter your credit or debit card details below</span>
          <div className="card-details">
            <input type="text" placeholder="Card Number" className="card-number" />
            <input type="text" placeholder="MM/YY" className="expiry-date" />
            <input type="text" placeholder="CVV" className="cvv" />
          </div>
          <button className='btn' onClick={handlePayment}>Confirm payment</button>
        </div>
        <div className="right">
          <h4>Order summary</h4>
          <table className="order-summary-table">
            <tbody>
              <tr>
                <td>Plan name</td>
                <td>{planData.name}</td>
              </tr>
              <tr>
                <td>Billing cycle</td>
                <td>{planData.option}</td>
              </tr>
              <tr>
                <td>Plan price</td>
                <td>{planData.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Payment