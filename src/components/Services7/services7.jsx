import React from "react";

const Services7 = ({ lightTheme }) => {
  return (
    <section className="serv-block section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="serv-img md-mb50">
              <img
                src={
                  lightTheme
                    ? "/img/mobile-app/app-img/light/s1.png"
                    : "/img/mobile-app/app-img/s1.png"
                }
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="content">
              <h6 className="stit mb-30">
                <span className="left"></span> Our Product
              </h6>
              <h2 className="mb-30">Mint and View Unique NFTs</h2>
              <p>
                Love3struck offers a unique service where you can easily upload your own pictures to create customized digital assets that matter to you, and keep your memories stored forever on a decetralized blockchain. You can also bring them along with you anywhere, and easily display them within our app. A truly special way to cherish the moments you love!
                { " " }
              </p>

              <div className="butons mt-40">
                <a href="#0" className="butn-gr rounded buton">
                  <span>Sign Up Today!</span>
                </a>
                <a href="#0" className="butn-more">
                  <span>Read More</span>
                  <i className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                    </svg>
                  </i>
                </a>
              </div>

              <div className="list-feat mt-40">
                <ul>
                  <li className="mb-20">
                    <i className="icon">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                      </svg>
                    </i>{" "}
                    Forge your memories into NFTs
                  </li>
                  <li className="mb-20">
                    <i className="icon">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                      </svg>
                    </i>{" "}
                    Display and view it anywhere
                  </li>
                  <li>
                    <i className="icon">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                      </svg>
                    </i>{" "}
                    Pay easily with any credit card
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur two"></div>
    </section>
  );
};

export default Services7;
