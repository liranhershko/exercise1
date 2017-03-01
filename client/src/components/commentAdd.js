import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { addComment } from '../actions';

class CommentAdd extends Component {
  render() {
    const { handleSubmit, fields: { email, message } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <input {...email} className="form-control" placeholder="Email" />
          <div className="text-help">
            {email.touched ? email.error : ''}
          </div>
        </fieldset>
        <fieldset className="form-group">
          <textarea
            rows="3"
            {...message}
            className="form-control"
            placeholder="Message"
          />
          <div className="text-help">
            {message.touched ? message.error : ''}
          </div>
        </fieldset>
        <button action="submit" className="btn btn-primary pull-right">
          Submit
        </button>
      </form>
    );
  }

  handleFormSubmit({ email, message }) {
    this.props.addComment({ email, message });
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is missing';
  }
  if (!values.message) {
    errors.message = 'Enter a message';
  }

  return errors;
}

export default reduxForm(
  {
    form: 'commentAddForm',
    fields: ['email', 'message'],
    validate
  },
  null,
  { addComment }
)(CommentAdd);
