import './css/style.css'
import './css/bootstrap.min.css'
import './css/owl.carousel.min.css'
import '../fonts/icomoon/style.css'
import bomma from './images/bg_1.jpg'
import bomma1 from './images/w3.jpeg'
import React from "react";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}

      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" style={{backgroundImage: `url(${bomma1})`}}></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <h3>Login to <strong>Colorlib</strong></h3>
                <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                <form action="#" method="post">
                  <div className="form-group first">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" placeholder="your-email@gmail.com" id="username"/>
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Your Password" id="password"/>
                  </div>

                  <div className="d-flex mb-5 align-items-center">
                    <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                  </div>

                  <input type="submit" value="Log In" className="btn btn-block btn-primary"/>

                </form>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}


