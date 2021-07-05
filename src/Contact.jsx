import React, { useState } from 'react'

export const Contact = () => {
  const [data, setdata] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:""
  })
  const formsubmit=(event)=>{
    event.preventDefault();
    alert(`My name is ${data.fullname}.My phone no. id ${data.phone}.My email id is ${data.email}.Query is ${data.msg}`)
  }
  const inputEvent=(e)=>{
      const {name,value}=e.target;
      setdata((prevvalue)=>{
          return{
            ...prevvalue,
            [name]:value

          }
      })
  }
  return (
    <>
      <div className="my-5">
        <div className="text-center">Contact Us</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
          <form onSubmit={formsubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="name" class="form-control" id="exampleFormControlInput1" 
              value={data.fullname} name="fullname" onChange={inputEvent}placeholder="Enter your Name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" 
              value={data.phone} name="phone" onChange={inputEvent}placeholder="Enter Contact No." />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" 
              value={data.email} name="email" onChange={inputEvent}placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Any Query</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent}></textarea>
            </div>
            <div class="col-12">
            <button class="btn btn-primary " type="submit">Submit form</button>
          </div>
         </form> 
          </div>
         
        </div>
      </div>


    </>
  )
}
