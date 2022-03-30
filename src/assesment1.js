import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

const InstructionDiv ={
    border: '2px solid black',
    margin:'auto',
    // padding:'7px 17px',
    boxSizing:'border-box',
    backgroundColor:'white',
    width:'85%',
    padding: '20px',
    boxShadow: 
              'inset 0 -3em 3em skyblue',
               '0 0  0 2px green':
               '0.3em 0.3em 1em skyblue',
  }

  const NameDiv ={
    border: '2px solid black',
    margin:' 30px auto',
    padding:'7px 17px',
    boxSizing:'border-box',
    backgroundColor:'lightgrey',
    width:'70%',
  }
  // css 
//   p {
//     box-shadow: 0 0 0 2em #F4AAB9,
//                 0 0 0 4em #66CCFF;
//     margin: 4em;
//     padding:1em;
//   }

class Assesment1 extends Component {

  state = {
    userName: '',
    surName:''
  }

  inputChangeHandler = (event) =>{
    this.setState({
      userName : event.target.value,
    })
  }
  inputSurNameChangeHandler = (event) =>{
    this.setState({
      surName : event.target.value,
    })
  }


  render() {
    return (
      <div className="App">
        <ol type="a" style={InstructionDiv}>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <div style={NameDiv}>
        <UserInput onInputChange= {this.inputChangeHandler}
        currentName={this.state.userName} />
        <UserInput onInputChange= {this.inputSurNameChangeHandler}
        surName ={this.state.surName}/>
        <UserOutput userName={this.state.userName}
        surName ={this.state.surName}/> 
        </div>
      </div>
    );
  }
}

export default Assesment1;
