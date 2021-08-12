import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div className="App">
        <div className="post">
          <div className="post__content">
            <strong>Javascript</strong>
            <div>
              JavaScript is programming language
            </div>
          </div>
          <div className="post__btn">
            <button>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}
