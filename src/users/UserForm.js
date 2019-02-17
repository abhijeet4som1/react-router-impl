import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {loadUserData} from './usersActions';

class UserForm extends Component{

    componentDidMount(){
        if(0 === this.props.users.length){
            console.log("calling load user");
            this.props.dispatch(loadUserData());
        }
    }

    onSubmit = (values) => {
        console.log(values);
        if(!values.name){
            throw new SubmissionError({name: 'Name is mandatory'})
        }
        this.props.history.push('/');
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
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" component={this.renderField} type="text" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <Field name="phone" component={this.renderField} type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

UserForm = reduxForm({
    form: 'userForm'
})(UserForm);
export default connect(state => ({users: state.users.users}))(UserForm);