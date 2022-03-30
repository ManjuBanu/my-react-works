import React from 'react';


const UserInput = (props) =>{
const inputDivStyle ={
    border: '2px solid black',
    margin:'10px 32%',
    height:'30px', 
    width:'200px',
    padding:'7px 17px',
    boxSizing:'border-box',
}
return (
<div >
<input type="text"
style={inputDivStyle}
onChange={props.onInputChange} 
value={props.currentName}
placeholder="Enter Here"/>
</div>
)
}

export default UserInput;