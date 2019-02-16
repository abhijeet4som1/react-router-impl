import React, {Component} from 'react';
import {CustomTextBox} from '../share/CustomTextBox';
import { Button, Table } from 'react-bootstrap';

class FormManipulation extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            sname: '',
            tname: '',
            names: [],
            isEditing: false,
            update:0,
            updateIndex:undefined
        }
    }

    addName = () => {
        const {fname, sname, tname, names} = this.state;
        let newNames = [...names];
        newNames.push({fname, sname, tname});
        this.setState({fname:'', sname:'', tname:'', names:newNames});
    }

    updateNames = () => {
        const {fname, sname, tname, names, update, updateIndex} = this.state;
        let newNames = [...names];
        newNames[updateIndex] = {fname, sname, tname};

        this.setState({names: newNames, isEditing:false, update:update + 1, fname:'', sname:'', tname:''});
    }

    setTextBoxValue = (key, value) => {
        this.setState({[key]: value});
    }

    deleteNamesByIndex = index => {
        let newNames = [...this.state.names];
        newNames.splice(index, 1);
        this.setState({names: newNames})
    }

    editNames = index => {
        const {fname, sname, tname} = this.state.names[index];
        this.setState({fname,sname,tname, isEditing:true, updateIndex: index});
    }

    getMyNames = () => {
        return(
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Last Name</th>
                    <th></th>
                    <th></th>
                </tr>
               {
                   this.state.names.map((n, index) => <tr key={`tr-${index}-${this.state.update}`}>
                        <td>{n.fname}</td>
                        <td>{n.sname}</td>
                        <td>{n.tname}</td>
                        <td onClick={() => this.deleteNamesByIndex(index)}>X</td>
                        <td onClick={() => this.editNames(index)}>Edit</td>
                   </tr>)
               }
            </table>
        )
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <CustomTextBox
                    name='fname'
                    value={this.state.fname}
                    onChange={this.setTextBoxValue}
                    label="First Name"
                />
                
                &nbsp;- <CustomTextBox
                    name='sname'
                    value={this.state.sname}
                    onChange={this.setTextBoxValue}
                    label="Second Name"
                />
                &nbsp;- <CustomTextBox
                    name='tname'
                    value={this.state.tname}
                    onChange={this.setTextBoxValue}
                    label="Last Name"
                />
                {this.state.isEditing ?
                <Button onClick={this.updateNames}>Update</Button>:
                <Button onClick={this.addName}>Add</Button>
                }
                <br/>
                {this.getMyNames()}
            </div>
        )
    }
}

export default FormManipulation;