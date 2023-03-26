import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';
import Component0 from './Component0';
import Component1 from './Component1';
// import data from './data.json';


function App() {
  const data = JSON.parse(localStorage.getItem("config-data"));

  const [data0, setData0] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    if (!data) return;
    for (let index = 0; index <= 1; index++) {
      axios({
        url: `${data.baseUrl}/${data[`data${index}EndPoint`]}`,
        method: "GET",
        headers: data.headers
      }).then(response => {
        if (index === 0) {
          setData0(response.data.data);
        } else if (index === 1) {
          setData1(response.data.data);
        }
      });

    }
    axios({
      url: `${data.baseUrl}/${data.data0EndPoint}`,
      method: "GET",
      headers: data.headers
    }).then(response => {
      setData0(response.data.data);
    });
  }, []);

  return (
    <div className="layout">
      <div style={{ width: "40%", maxHeight: "100vh", overflow: "scroll" }}>
        <div>
          <Component1
            configData={data}
            data={data1}
          />
        </div>
      </div>
      <div style={{ width: "60%", maxHeight: "100vh", overflow: "scroll" }}>
        <Component0 data={data0} />
      </div>
    </div>
  )
}

export default App;
