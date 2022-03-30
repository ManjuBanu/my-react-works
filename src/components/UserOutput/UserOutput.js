import React from 'react';



const UserOutput = (props) =>{
    const OutputStyle ={
        border: '2px solid black',
        padding:'16px',
        margin:'30px auto',
        width:'60%',
        backgroundColor:'lemonchiffon',
        textAlign:'center'
    }
    return(
        <div style={OutputStyle}>
        <p>Name :: {props.userName}</p>
        <p>SurName :: {props.surName} </p>
        <p>Welcome !! {props.userName} {props.surName} </p>
        </div>
    )
}

export default UserOutput;
