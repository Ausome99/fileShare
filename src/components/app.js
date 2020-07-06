import React, { Component } from 'react';

import FileShare from "./pages/fileShare/fileShare";
import Auth from "./pages/login/auth";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Auth />
      </div>
    );
  }
}
