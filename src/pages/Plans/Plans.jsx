import './Plans.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Plans = () => {

    const navigate = useNavigate();
    const plans = [
        {
          name: 'Mobile',
          price: 100,
          videoQuality: 'Good',
          resolution: '480p',
          devices: ['Phone', 'Tablet'],
        },
        {
          name: 'Basic',
          price: 200,
          videoQuality: 'Good',
          resolution: '480p',
          devices: ['Phone', 'Tablet', 'TV', 'Computer'],
        },
        {
          name: 'Standard',
          price: 500,
          videoQuality: 'Better',
          resolution: '1080p',
          devices: ['Phone', 'Tablet', 'TV', 'Computer'],
        },
        {
          name: 'Premium',
          price: 700,
          videoQuality: 'Best',
          resolution: '4K+HDR',
          devices: ['Phone', 'Tablet', 'TV', 'Computer'],
        },
      ];

    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Monthly');
    const [videoQuality, setVideoQuality] = useState(null);
    const [resolution, setResolution] = useState(null);
    const [devices, setDevices] = useState(null);

  // Define a function to handle the click event on a table cell
  const handleSelectPlan = (plan) => {
    // Update the state variables with the plan properties
    setSelectedPlan(plan.name);
    setVideoQuality(plan.videoQuality);
    setResolution(plan.resolution);
    setDevices(plan.devices);
  };

  // Define a function to handle the click event on the next button
  const handleNext = () => {
    // Check if a plan is selected
    if (selectedPlan) {
      const selectedPrice = modifiedPlans.find((plan) => plan.name === selectedPlan).price;
      const selectedPlanData = {
        name: selectedPlan,
        option: selectedOption,
        price: selectedPrice,
      };
      // Show a confirmation message
      alert(`You have selected the ${selectedPlan} plan with ${videoQuality} video quality, ${resolution} resolution, and ${devices} devices.`);
      // send the data to payment page
      navigate('/payment', { state: { planData: selectedPlanData } });
    }
  };

  const handleToggleOption = (option) => {
    setSelectedOption(option);
  };

  const modifiedPlans = plans.map(plan => {
    const factor = selectedOption === 'Yearly' ? 10 : 1;
    return {
        ...plan,
        price: plan.price * factor
    };
  });

  return (
    <div className="canvas">
      <div className="plan-table">
        <h1>Choose the right plan for you</h1>
        <table className='table'>
            <thead>
            <tr>
                <th>
                  <div className="toggle">
                    <button 
                      onClick={() => handleToggleOption('Monthly')}
                      className={selectedOption === 'Monthly' ? 'active' : ''}
                    >Monthly</button>
                    <button 
                        onClick={() => handleToggleOption('Yearly')}
                        className={selectedOption === 'Yearly' ? 'active' : ''}
                    >Yearly</button>
                  </div>
                </th>
                {plans.map((plan) => (
                <th key={plan.name}>
                  <button 
                    className={`btn ${selectedPlan === plan.name ? 'selected' : ''}`}
                    onClick={() => handleSelectPlan(plan)}
                  >{plan.name}</button>
                </th>
                ))}
            </tr>
            </thead>
            <tbody className='table-body'>
            <tr>
                <td>Price</td>
                {modifiedPlans.map((plan) => (
                <td
                key={plan.price}
                    style={selectedPlan===plan.price ? {color:"#1450A3"} : {}}
                    className={selectedPlan === plan.price ? 'selected1' : ''}
                    onClick={() => handleSelectPlan(plan)}
                >
                    ₹ {plan.price}
                </td>
                ))}
            </tr>
            <tr>
                <td>Video quality</td>
                {plans.map((plan) => (
                <td
                    key={plan.name}
                    className={selectedPlan === plan.name ? 'selected1' : ''}
                    onClick={() => handleSelectPlan(plan)}
                >
                    {plan.videoQuality}
                </td>
                ))}
            </tr>
            <tr>
                <td>Resolution</td>
                {plans.map((plan) => (
                <td
                    key={plan.name}
                    className={selectedPlan === plan.name ? 'selected1' : ''}
                    onClick={() => handleSelectPlan(plan)}
                >
                    {plan.resolution}
                </td>
                ))}
            </tr>
            <tr>
                <td>Devices you can use to watch</td>
                {plans.map((plan) => (
                <td
                    key={plan.name}
                    className={selectedPlan === plan.name ? 'selected1' : ''}
                    onClick={() => handleSelectPlan(plan)}
                >
                  <ul className="devices-list">
                    {plan.devices.map((device, index) => (
                        <li key={index}>{device}</li>
                    ))}
                  </ul>
                </td>
                ))}
            </tr>
            </tbody>
        </table>
        <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Plans