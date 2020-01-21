
import ReactDOM from "react-dom";
import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import { blue100 } from 'material-ui/styles/colors';
import { red100 } from 'material-ui/styles/colors';


function LinkInterceptor({ html }) {
    const handleClick = e => {
        e.preventDefault()
        alert(`clicked ${e.target.text}`)
    }
    const ref = useRef()

    useEffect(
        () => {
            Array.from(ref.current.querySelectorAll('a')).forEach(node =>
                node.addEventListener('click', handleClick)
            )

            return () => {
                Array.from(ref.current.querySelectorAll('a')).forEach(node =>
                    node.removeEventListener('click', handleClick)
                )
            }
        },
        [html]
    )

    return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}

const getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min
const getApiUrl = () => `https://httpbin.org/links/${getRandom(10, 60)}`



function Welcome() {
    const [count, setCount] = useState(0);
    const [url, setUrl] = useState(getApiUrl())
    const [html, setHtml] = useState('')
    const [name, setName] = useState('Mithil')
    useEffect(
        () => {
            fetch(url)
                .then(response => response.text())
                .then(html => setHtml(html))
        },
        [url]
    );

    useEffect(() => {
        setTimeout(() => {
            console.log(`You clicked ${count} times`);
        }, 3000);
    });

    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }
    function sayHi(person) {
       
        const name = person.name;
        //setName(person.name);
        setTimeout(() => {        
           // alert('Hello, ' + name);
        }, 3000);
    }
    let someone = { name: 'Dan' };
    sayHi(someone)
    const element = (    
        <h1> Hello, { name }!!!  </h1>
      );
      

    someone = { name: 'Yuzhi' };
    sayHi(someone);

    someone = { name: 'Dominic' };
    sayHi(someone);
    return (
        <>
            <LinkInterceptor html={html} />
            <br />
            <button onClick={() => setUrl(getApiUrl())}>Fetch articles</button>

            <div>
            <label for="firstName">
                    First Name :
                <input type="text" class="form-control" name="first_name"
                        minlength="1" maxlength="10" style={style_input}
                        placeholder="First Name" 
                        onChange={(event, newValue) => setName({ name: newValue })}/>
                       
                </label>

                <button onClick={() => {
                    console.log("name", name)
                }}>
                    Save Data
                </button>
                <p>Name is {name} </p>
                <button onClick={() => setName(element)}>
                    Click me2
                </button>
                <button onClick={sayHi(someone)}>
                    Click me3-No Effect
                </button>
                <button onClick={() => setName(sayHi(someone))}>
                    Click me4-NoEffect
                </button>
              
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
        </button>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
        </button>
                <button onClick={handleAlertClick}>
                    Show alert
        </button>
            </div>
        </>
    )
}
const style_input = {
    margin: 35,
    color: red100,
    position: 'relative',
    display: 'inline-block',
    height: 40,
    width: 400


    // font-size: 14,
    // line-height: 1.42857143,
    // font-family: Helvetica Neue,Helvetica,Arial,sans-serif,


};

export default Welcome

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Example />, rootElement);