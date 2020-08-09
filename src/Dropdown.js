import React from 'react';
import './App.css';

// importing dropdown css
import './assets/Dropdown.css';

// importing Button component and use it here
import Button from './Button';


class Dropdown extends React.Component{
  // constructor for dropdown component
  constructor(){
    super();
    // initializing state as top
    this.state={
      position:"top"
    };
  }

  // this funtion calls when user select any item from dropdown
  handleChange=(e)=>{

    // setting the position after fetcing from event target value
    this.setState({
      position: e.target.value
    });
  };


  render(){
    return (
        <div className="App">
          {/* Dropdown List */}
            <select className="drop-down" onChange={this.handleChange}>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            </select>

            {/* Passing position as props in Button compenent  */}
            <Button position={this.state.position}/>
        </div>
    );
  }

}


// exporting the dropdown component
export default Dropdown;
