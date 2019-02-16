import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';

class FormManipulationRedux extends Component {

    render(){
        return (
            <form>
            <Field
                name='fname'
                component='input'
                type="text"
            />
            <Field
                name='sname'
                component='input'
                type="text"
            />
            <Field
                name='tname'
                component='input'
                type="text"
            />
        </form>
        );
    }

}

FormManipulationRedux = reduxForm({
    form: 'namesman'
})(FormManipulationRedux);

export default connect()(FormManipulationRedux);