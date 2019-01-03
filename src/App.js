import React, { Component } from 'react';


class App extends Component {
  componentDidMount(){
    fetch(process.env.REACT_APP_TEST)
    .then(r=>r.json())
    .then(data=>console.log(data))
  }


  render() {
    console.log(process.env.REACT_APP_KEY);
    return (
      <div >


      </div>
    );
  }
}

export default App;
