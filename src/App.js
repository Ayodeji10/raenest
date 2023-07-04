import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const data = [
    { currency: "USD", balance: 5000 },
    { currency: "GBP", balance: 2000 },
    { currency: "EUR", balance: 3500 },
    { currency: "NGN", balance: 200000 },
  ];

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const [index, setIndex] = useState(0);
  const { currency, balance } = data[index];

  const [index2, setIndex2] = useState(0);
  const { currency2, balance2 } = data[index];

  const convert = (e) => {
    e.preventDefault();
    setValue1(e.target.value);
    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${data[index].currency}`)
      .then((res) => {
        console.log(res.data.rates[0]);
        // console.log(
        //   res.data.rates.filter(
        //     (currency) => currency.hasOwnProperty(data[index].currency) === true
        //   )
        // );
        // const rate = Object.keys(res.data.rates).filter((key) =>
        //   key.includes(data[index].currency)
        // );
        // console.log(rate);
        // console.log(res);
        // setValue2(res.data.rates.fi);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <p id="title">Convert form one currency to another</p>
          <div className="wallet d-flex justify-content-between">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {data[index].currency}
              </button>
              <ul className="dropdown-menu">
                {data.map((data, i) => {
                  return (
                    <li onClick={() => setIndex(i)}>
                      <a className="dropdown-item" href="#">
                        {data.currency}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="balance">
              <p>Balance</p>
              <h4>{data[index].balance}</h4>
            </div>
          </div>
          <input type="number" value={value1} onChange={(e) => convert(e)} />
          <div className="wallet d-flex justify-content-between">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {data[index2].currency}
              </button>
              <ul className="dropdown-menu">
                {data.map((data, i) => {
                  return (
                    <li onClick={() => setIndex2(i)}>
                      <a className="dropdown-item" href="#">
                        {data.currency}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="balance">
              <p>Balance</p>
              <h4>{data[index2].balance}</h4>
            </div>
          </div>
          <input type="number" value={value2} />
        </div>
        <div className="col-6">
          <div className="result">
            <p>You're Converting {data[index].currency}</p>
            <p>You're Converting {data[index].currency}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
