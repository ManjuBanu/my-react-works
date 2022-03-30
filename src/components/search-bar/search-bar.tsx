import React from 'react';
import './search-bar.css';



export const SearchBar =(props:any)=>(
    <input 
    className='search'
    type='search'  
    placeholder={props.placeholder}
    onChange={props.handleChange}
     />
);