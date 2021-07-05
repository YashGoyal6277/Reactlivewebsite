import React from 'react'
import { NavLink } from 'react-router-dom'

export const Common = (props) => {
    return (
        <>
      <section id="header" className="d-flex align-items-center b mt-5" >
      <div className="container  b mt-5 mb-5">
          <div className="row b">
            
                <div className="col-md-8 pt-3 pt-lg-0 order-2 order-md-1 b d-flex align-items-center flex-column justify-content-center">
                <h1 className="text-center">{props.msg} <strong className="brand-name"><br/>Yash Technical</strong></h1>
                <h2>We are the team of talented developer making websites</h2>
                <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started mb-3">{props.btnmsg}</NavLink>
                </div>
                </div>
               <div className="col-md-4 order-1  order-md-2 b header-img d-flex align-items-center  justify-content-center"   >
               <img src={props.img}  alt="" className="img-fluid animated" width="70%" />

               </div>
              </div>

          </div>
      
      </section>
        </>
    )
}
