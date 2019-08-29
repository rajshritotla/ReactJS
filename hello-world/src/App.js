import React from 'react';
import './App.css';

/**
 * Tried to print 
 * heading
 * parah
 * separately as 2 components
 * Parah - class
 * heading - function inside class - so BIND
 */

class Parah extends React.Component {
  render(){
    return(<p>I am learning react</p>);
  }
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.heading = this.heading.bind(this);       // binding
  }

   heading(){
      return(<h1>Hello, World!!!</h1>);
  }

  render() {
    return(
      <div>
        <this.heading></this.heading>
        <Parah></Parah>
      </div>
      
    );
  }

}


/**
 * Way 1 - using function
 * Way 2 - using class
 */

// WAY 1
/*
    function App() {
      return (
        showmessage
      );
  }
*/
// WAY 2
/*
    class App extends React.Component {
      render() {
        return (showmessage);
      }
}*/

/*
    const showmessage = (
      <div>
        <h1>Hello, World!</h1>
        <p>I am learning react</p>
      </div>
    );
*/


export default App;
