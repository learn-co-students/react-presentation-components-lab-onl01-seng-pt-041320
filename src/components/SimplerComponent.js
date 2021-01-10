import React from 'react'

const defaultText = "I am just happy"

const SimplerComponent = (props) => 
    <div onClick={props.handleClick}>
        {defaultText}
    </div>

export default SimplerComponent

