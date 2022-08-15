import React from 'react'

export default function Alert(props) {
    const c=(word)=>{
const l=word.toLowerCase();
return l.charAt(0).toUpperCase() +l.slice(1)
    }
return (
    <div style={{height:'60px'}}>

{props.alert && < div className={`alert alert-${props.alert.type} alert-dismissible fade show " role="alert`}>
   
    <strong>{c(props.alert.type)}</strong> : {props.alert.message}
    </div>}
    
</div>
)
}
