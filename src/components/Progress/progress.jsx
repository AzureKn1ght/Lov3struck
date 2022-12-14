import React from "react";

const Progress = () => {
  return (
    <section className="app-process section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Minting Process
                <span className="right"></span>
              </h6>
              <h2>3 Simple Steps to Complete</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-user"></span>
              <h5>Create Account</h5>
              <span className="step-number">Step 01</span>
              <p>
                Create an account and login to the app. Connect your own web3
                wallet, or simply create one in app.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-pen"></span>
              <h5>Customize Design</h5>
              <span className="step-number">Step 02</span>
              <p>
                Design your perfect digital asset with our easy-to-use NFT
                design studio, no design skills needed.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item text-center">
              <span className="icon pe-7s-cart"></span>
              <h5>Get Results</h5>
              <span className="step-number">Step 03</span>
              <p>
                Simply checkout and pay using whatever method works for you. Instant devlivery, no fuss required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
