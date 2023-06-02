import React from 'react'
import { useState } from 'react';

const Valid = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailValidation = () => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regEx.test(email)) {
      setMessage("Email is valid");
    } else if (!regEx.test(email) && email !== "") {

      setMessage("Email is not valid");
    } else {
      setMessage("");
    }
  }
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <div className="card">
              <div className="card-body ">
                <div className="input-group">
                  <div className="form-outline">
                    <input type="email" placeholder='xyz@gmail.com' value={email} onChange={handleOnChange} id="email" class="form-control" />

                  </div>
                  <button type="submit" class="btn btn-outline-secondary verify-btn" onClick={emailValidation}>
                    Verify
                  </button>
                  <p className='message'>{message}</p>
                </div>
                <p className='gapping'>Enter an email address to verify its deliverability</p>
              </div>
            </div>

          </div>
          <div className='col-md-2'></div>

        </div>
      </div>
    </>
  )
}

export default Valid