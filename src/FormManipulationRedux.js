import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {connect} from 'react-redux';

import {addNames, deleteName} from './formActions';

class FormManipulation extends Component {

    addNames = (values) => {
        const {dispatch, reset} = this.props;
        const {fname, sname, tname} = values;
        if(!fname){
            throw new SubmissionError({fname: "First name is required"});
        }
        console.log(values);
        dispatch(addNames({fname, sname, tname}));
        dispatch(reset());
    }

    deleteByIndex = index => {
        this.props.dispatch(deleteName(index));
    }

    getNames = () => {
        return(
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Third Name</th>
                    <th></th>
                </tr>
                {(this.props.names || []).map((n, index) => {
                    return (
                        <tr key={`row-${index}`}>
                            <td>{n.fname}</td>
                            <td>{n.sname}</td>
                            <td>{n.tname}</td>
                            <td onClick={() => this.deleteByIndex(index)}>X</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div>
          <label>{label}</label>
          <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
          </div>
        </div>
    );

    render(){
        const {handleSubmit} = this.props;
        return(
            <div>
                <form onSubmit={handleSubmit(this.addNames)}>
                    <Field name="fname" component={this.renderField} type="text" />&nbsp; - 
                    <Field name="sname" component={this.renderField} type="text" />&nbsp; -
                    <Field name="tname" component={this.renderField} type="text" />
                    <br/>
                    <button type="submit">Add</button>
                </form>
                <br/>
                {this.getNames()}
            </div>           
        )
    }
}

FormManipulation = reduxForm({
    form: 'simple'
})(FormManipulation);

const mapStateToProps = state => ({
    names: state.formmani.names
})

export default connect(mapStateToProps)(FormManipulation);