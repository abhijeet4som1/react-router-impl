import {connect} from 'react-redux';
import {reduxForm, SubmissionError} from 'redux-form';

import FormUI from './FormUI';
import {addNames, deleteName} from './formActions';

const mapStateToProps = state => ({
    names: state.formmani.names
});

const mapDispatchToProps = dispatch => ({
    addName : (values, reset) => {
        const {fname, sname, tname} = values;
        if(!fname){
            throw new SubmissionError({fname: "First name is required"});
        }
        dispatch(addNames({fname, sname, tname}));
        dispatch(reset());
    },
    deleteByIndex : index => dispatch(deleteName(index))
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    addName: values => dispatchProps.addName(values, stateProps.reset)
});

let NewFormUI = reduxForm({
    form: 'simple'
})(FormUI);
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewFormUI);
