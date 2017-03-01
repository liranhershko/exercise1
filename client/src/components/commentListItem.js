import React from 'react';

export default (props) => {
  return (
    <li className="list-group-item">
      <img
        src={`https://www.gravatar.com/avatar/${props.comment.hash}`}
        className="img-rounded"
      />
      <div className="details">
          <strong>{props.comment.email}</strong>
          <div className="">{props.comment.message}</div>
      </div>
    </li>
  );
}
