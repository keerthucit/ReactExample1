import React, { Component, useState, useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import { ImageExposureNeg1 } from 'material-ui/svg-icons';

const HCMDemo2 = () => {
    const [name, setName] = useState('Nipun')
    const [age, setAge] = useState(0);
    const [buttonText, setButtonText] = useState('Click')
    const [message,setMessage]=useState('')
    const [data, setData] = useState([])
    // Keep track of the latest value.
  const latestMessage = useRef('');
  useEffect(() => {
    latestMessage.current = message;
  });
  const showMessage = () => {
    alert('You said: ' + latestMessage.current);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

    // useEffect(() => {
    //     fetch("https://localhost:3001/links/")
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    //  });
   


    return (
        <div>
            Name: {name} <input type="text" onChange={(e) => { setName(e.target.value) }} /> <br />
            Age: {age}  <input type="text" onChange={(e) => { setAge(e.target.value) }} /><br />
            <button onClick={() => setButtonText('Button After Clicked')}>
                {buttonText}
            </button>
            <input value={message} onChange={handleMessageChange} />
      <button onClick={handleSendClick}>Send</button>
           
        </div>
    )

}




export default HCMDemo2;