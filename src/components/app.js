import React, { Component } from 'react';

import FileShare from "./pages/fileShare/fileShare";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <FileShare />
      </div>
    );
  }
}
