import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';


function Apiexample() {
    const [query, setQuery] = useState('react');
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        let ignore = false;
        async function fetchData() {
            const res = await Axios('https://hn.algolia.com/api/v1/search?query=' + query);
            if (!ignore) setData(res.data);
        }
        fetchData();
        return () => { ignore = true; }

    },[query]);





    //Render at App.js
    return (
       
        <div className="App">
             <h1>Search Engine using React Axios API </h1>
            Enter Your Search Text Here: &nbsp;
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
           
                    {data.hits.map(item => (<li key={item.objectID}>
                      <a href={item.url}> {item.title} </a>
                    </li>

                    )
                    )}
              
            </ul>

        </div>
    );

}

export default Apiexample;