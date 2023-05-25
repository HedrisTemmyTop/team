import "../App.css";
import { dots, symbol, verify } from "../assets";

import { MdModeEditOutline } from "react-icons/md";

const Form = () => {
  return (
    <div className="col-span-12 md:col-span-8">
      <div className="form">
        <header className="form-header">
          <div className="logo">
            <span className="logo-circle"></span>
            <h1>
              AceCoin<span className="lean">Pay</span>
            </h1>
          </div>
          <div className="timer">
            <span className="timer-box">0</span>
            <span className="timer-box">1</span>
            <span className="timer-divider">:</span>
            <span className="timer-box">1</span>
            <span className="timer-box">9</span>
          </div>
        </header>
        <section className="form-body">
          <form action="">
            <div className="input-group">
              <div className="header">
                <div className="description">
                  <h2 className="title">card number</h2>
                  <p className="desc">
                    Enter the 15-digit card number on the card
                  </p>
                </div>
                <button className="edit">
                  <MdModeEditOutline />
                  <span className="btn-desc">Edit</span>
                </button>
              </div>
              <div className="main">
                <img src={symbol} alt="" className="leading-icon" />
                <input
                  type="text"
                  placeholder="2412   -   7512   -   3412   -   3456"
                />
                <img src={verify} alt="" className="trailing-icon" />
              </div>
            </div>
            <div className="input-group __col">
              <div className="header">
                <div className="description">
                  <h2 className="title">CVV number</h2>
                  <p className="desc">
                    Enter the 3 or 4 digit number on the card
                  </p>
                </div>
              </div>
              <div className="main">
                <input type="text" placeholder="327" />
                <img src={dots} alt="" className="trailing-icon" />
              </div>
            </div>
            <div className="input-group __col">
              <div className="header">
                <div className="description">
                  <h2 className="title">expiry date</h2>
                  <p className="desc">Enter the expiration date of the card</p>
                </div>
              </div>
              <div className="grp">
                <div className="main __date">
                  <input type="text" placeholder="09" />
                </div>
                <span className="divider">/</span>
                <div className="main __date">
                  <input type="text" placeholder="22" />
                </div>
              </div>
            </div>
            <div className="input-group __col">
              <div className="header">
                <div className="description">
                  <h2 className="title">password</h2>
                  <p className="desc">Enter your Dynamic password</p>
                </div>
              </div>
              <div className="main">
                <input type="password" placeholder="******" />
                <img src={dots} alt="" className="trailing-icon" />
              </div>
            </div>
            <button type="submit" className="btn-submit">
              pay now
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Form;
