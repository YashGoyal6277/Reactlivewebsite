import React from 'react'
import { Card } from './Card'
import Cardddata from './Carddata'

export const Service = () => {
    return (<>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container">
            <div className="row gy-4">
               
               {
                   Cardddata.map((val,index)=>{
                        return <Card
                            img={val.imgsrc}
                            title={val.title}
                            key={index}
                        />
                   })
               } 
               
            </div>
        </div>
    </>
    )
}
