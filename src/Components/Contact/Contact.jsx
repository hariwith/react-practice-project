import React from 'react'
import './Contact.css'

const Contact = ({dis,s,n,name}) => {

  let inp_dis
  if(dis==="none"){
    inp_dis = "bloack"
  }
  else{
    inp_dis = "none"
  }
  return (
    <div>
      <div className="cont-con">
        
        <div style={{display:inp_dis}} className="inp">
<h2>Enter your details!!</h2>
        <input type='text' placeholder='Enter your name' value={name} onChange={n} />
        <input type='email' placeholder='Enter your Email'/>
        <input type='tel' placeholder='Contact' maxLength={10}/>
        <button onClick={()=>s()}> Submit</button>
        </div>
        <div style={{display:dis}} className="out">
            <h3>Thank you {name} for submitting the details,
                We'll get back to you
            </h3>
        </div>
      </div>
    </div>
  )
}

export default Contact
