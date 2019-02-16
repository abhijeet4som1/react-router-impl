import React from 'react';

const CustomTextBox = ({name, value, onChange, label}) => {
    return(
        <div style={{float: 'left'}}>
            <label>{label}</label>
            <input 
                type="text" 
                value={value} 
                onChange={e => onChange(name, e.target.value)}/>
        </div>
    )
}

export {
    CustomTextBox
}