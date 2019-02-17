import React from 'react';
import {Field} from 'redux-form';

const GetNames = ({names, deleteByIndex}) => {
    return(
        <table>
            <tbody>
            <tr>
                <th>First Name</th>
                <th>Second Name</th>
                <th>Third Name</th>
                <th></th>
            </tr>
            {(names || []).map((n, index) => {
                return (
                    <tr key={`row-${index}`}>
                        <td>{n.fname}</td>
                        <td>{n.sname}</td>
                        <td>{n.tname}</td>
                        <td onClick={() => deleteByIndex(index)}>X</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
);

const FormUI = props => {
    const {names, deleteByIndex, addName, handleSubmit} = props;
    return(
        <div>
            <form onSubmit={handleSubmit(addName)}>
                <Field name="fname" component={renderField} type="text" />&nbsp; - 
                <Field name="sname" component={renderField} type="text" />&nbsp; -
                <Field name="tname" component={renderField} type="text" />
                <br/>
                <button type="submit">Add</button>
            </form>
            <br/>
            <GetNames names={names} deleteByIndex={deleteByIndex}/>
        </div> 
    )
}

export default FormUI;