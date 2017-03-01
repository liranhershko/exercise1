import React, { Component } from 'react';
import CommentAdd from './commentAdd';
import CommentList from './commentList';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <CommentAdd />
        <CommentList />
      </div>
    );
  }
}
