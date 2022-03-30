import React from 'react';
import styled from 'styled-components';


const StyledBox = styled.div`
width:200px;
height:150px;
background-color:gainsboro;
align-items:center;
`;


const NotFound = () => {
    return(
        <img src="notfound.png" className="mypic" alt="logo" 
        />
    );
}



export default NotFound