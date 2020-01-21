import React, { Component, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ImageExposureNeg1 } from 'material-ui/svg-icons';

const HCMDemo2 = () => {
  const [name, setName] = useState('Nipun')
  const [age, setAge] = useState(0);
  const [buttonText, setButtonText] = useState('Click')
  const [message, setMessage] = useState('')
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
  const useDropdown = options => {
    const [state, updateState] = useState(options[0]);
    const Dropdown = () => (
      <select
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
      >
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
    return [state, Dropdown, updateState];
  };
  //ANother Drop down for age
  //     const useDropdownage =  options =>{
  //       const [state ,updateState] = useState(options[0]);
  // const useDropdownage = () =>(
  //       <select value ={ind}
  //       onChange={e=> updateInd(e.target.value)}
  //       onBlur={e=> updateInd(e.target.value)}
  //       >
  //         {options.map(item =>(
  //           <option key={item} value={item}>{item}</option>
  //         ))}
  //       </select>
  // );
  // return [ind,Dropdownage,updateInd];
  //     };
  const [user, setUser] = useState("Dan");
  // const[age,setAge]=useState(990);
  const [agemon, AgemonDropdown, setAgemon] = useDropdown([
    67,
    89,
    90
  ]);
  const [lastName, LastNameDropdown, setLastName] = useDropdown([
    "Holt",
    "Abramov",
    "Alpert"
  ]);
  const [firstName, FirstNameDropdown, setFirstName] = useDropdown([
    "Brian",
    "Dan",
    "Sophie"
  ]);
  useEffect(
    () => {
      if (firstName === "Brian") {
        setLastName("Holt");
      } else if (firstName === "Sophie") {
        setLastName("Alpert");
      } else {
        setLastName("Abramov");
      }
    },
    [firstName]
  );
  useEffect(
    () => {
      if (firstName === "Brian") {
        setLastName("Holt");
        setAgemon(67);
      } else if (firstName === "Sophie") {
        setLastName("Alpert");
        setAgemon(89);
      } else {
        setLastName("Abramov");
        setAgemon(90);
      }
    },
    [agemon]
  );
  function reset() {
    setFirstName("Brian");
    setLastName("Holt");
    setAgemon(89);
  }


  return (

    <div className="App">
      <FirstNameDropdown />
      <LastNameDropdown />
      <AgemonDropdown />
      <button onClick={reset}>Reset</button>
      <br /> <br />

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