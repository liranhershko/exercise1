import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, onFilterChange } from '../actions/index';
import { Link } from 'react-router';
import CommentListItem from './commentListItem';

class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.state = { filter: '' };
  }

  componentWillMount() {
    this.props.fetchComments();
  }

  renderComments() {
    return this.props.comments.map(comment => {
      return <CommentListItem key={comment._id} comment={comment} />;
    });
  }

  render() {
    return (
      <div className="commentList">
        <div className="form-group has-feedback">
          <input
            value={this.state.filter}
            onChange={event => this.onInputChange(event.target.value)}
            type="text"
            className="form-control"
            placeholder="Filter"
          />
          <span className="glyphicon glyphicon-search form-control-feedback" />
        </div>
        <ul className="list-group">
          {this.renderComments()}
        </ul>
      </div>
    );
  }

  onInputChange(filter) {
    this.setState({ filter });
    this.props.onFilterChange(filter);
  }
}

function mapStateToProps(state) {
  const { all, filter } = state.comments;
  const filtered = all.filter(item => item.email.indexOf(filter) !== -1).reverse();
  return { comments: filtered };
}

export default connect(mapStateToProps, { fetchComments, onFilterChange })(
  CommentsList
);
