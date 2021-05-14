import React from 'react'

function Alert(props) {
    return (
      <div>
        <div className={props.className} role="alert">{props.children} </div>
      </div>
    )
}
export default  Alert;
