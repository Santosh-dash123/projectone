import React from 'react'
import { useState } from 'react';

const Contact = () => {
  const [data,setData] = useState({
    fullname : "",
    phone : "",
    email : "",
    msg : ""
  });
  // console.log(data.fullname);
  const callEvent = (event)=>{
      // console.log(event.target.value);
      // const name = event.target.value;
      // const value = event.target.value;

      const {name,value} = event.target; //This is the javascript object destructuring .
      setData((prevValue)=>{
          return{
            ...prevValue, //This is the spread operator from which we can get the previous value .
            [name] : value //If any one name is matched then it will be stored in that name of the corresponding value .
          }
      })
  }
  const formSubmit = (event)=>{
      event.preventDefault();
      alert(`My full name is ${data.fullname}. My phn number is ${data.phone}. My email id is ${data.email}. Here is what i want to say ${data.msg}`);
  }
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
        <div className="container contact_div">
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" onChange={callEvent} name="fullname" value={data.fullname} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile number" onChange={callEvent}  name="phone" value={data.phone} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={callEvent} name="email" value={data.email}  required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" name="msg" value={data.msg} id="exampleFormControlTextarea1" rows="3" onChange={callEvent}></textarea>
              </div>
              <div className='col-12'>
                {
                 ( data.fullname && data.phone && data.email && data.msg) && <button className="btn btn-outline-primary btn-lg" type="submit">Submit</button>
                }
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
