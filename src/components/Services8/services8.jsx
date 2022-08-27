import React from "react";

const Services8 = () => {
  return (
    <section className="app-services section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span>Our Core Features
                <span className="right"></span>
              </h6>
              <h2>Amazing Features to Customize your Blockchain Experience</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item mb-30">
              <div className="item-tit mb-15">
                <div className="icon">
                  <span className="pe-7s-vector"></span>
                </div>
                <div className="text-tit">
                  <h5>Custom Design</h5>
                </div>
              </div>

              <p>
                {"Make personalized digital assets that truly matter to you. Don't fuss about the technology, we'll take care of that."}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-30">
              <div className="item-tit mb-15">
                <div className="icon">
                  <span className="pe-7s-rocket"></span>
                </div>
                <div className="text-tit">
                  <h5>Easy Payments</h5>
                </div>
              </div>
              
              <p>
                {"New to crypto? Don't know how NFTs work? Not to worry, we got  your back! Pay using whatever you're used to."}
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="item">
              <div className="item-tit mb-15">
                <div className="icon">
                  <span className="pe-7s-lock"></span>
                </div>
                <div className="text-tit">
                  <h5>Lasts Forever</h5>
                </div>
              </div>

              <p>
                NFTs you mint are decentralized and uncensorable. They will last
                forever on the blockchain even many years later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services8;
