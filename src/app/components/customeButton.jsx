import React from 'react'

function CustomeButton(props) {
  return (
    <button className={`px-8  py-2 rounded-lg text-base font-medium ${props.className}`}>
     {props.text}
    </button>
  )
}

export default CustomeButton