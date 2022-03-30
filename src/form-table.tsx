import React from 'react';
import './App.css';
import 'react-table-6/react-table.css';


export class MyForm extends React.Component<{}, { list: any, newItem: any, default: string }>{
    constructor(props: any) {
        super(props);
        this.state = {
            list: [],
            newItem: {
                id: 0,
                name: '',
            },
            default: '',
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.editRow = this.editRow.bind(this);
    }

    onChangeHandler = (event: any) => {
        //let value = event.target.name
        this.setState({
            newItem: {
                id: this.state.list.length,
                name: event.target.value
            }
        }, () => { console.log('name get value', this.state) })
        console.log('state value', this.state);
        console.log('get value by name', event.target);
    }

    onSubmitForm = (event: any) => {
        event.preventDefault();
        console.log('new item',this.state.newItem.name);
        if (this.state.newItem.name.length > 0) {
            this.state.list.push(this.state.newItem);
        } else {
            event.preventDefault();
            return false;
        }
        this.setState({
            newItem: {
                name: this.state.default,
            }
        })
    }

    editRow  = (key:any) => {
        console.log('editrow', key);
    }
    render() {        
        return (
            <>
            <form className="FormDiv" onSubmit= {this.onSubmitForm}> 
              <h1>Welcome!!!</h1>
              <label>Name</label>
              <input
                type="text" onChange = {this.onChangeHandler}
              />
              {/* input[type=password]
              input[type=number] */}
               <button className='btn-primary'>Submit</button>
            </form>

            <table>
              <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.list.map((value: any, index: any) => {
                        return<tr id={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td><button className='btn  btn-info' onClick ={this.editRow}>Edit</button></td>
                            <td><button className='btn  btn-danger'>Delete</button></td>
                            </tr>
            })}
           </tbody>
            </table>
            </>
          );
   }
}