import React from 'react';
import './App.css';

// importing Button CSS
import './assets/Button.css';

class Button extends React.Component{
    // constructor for Button component
    constructor(props){
        super();


        // setting the initial flag as false 
        this.state={
            flag: false
        };

        // binding the current instant with the function call
        this.handleMouseIn=this.handleMouseIn.bind(this);
        this.handleMouseOut=this.handleMouseOut.bind(this);
    }

// this function calls when mouse hovers on button
    handleMouseIn() {
        this.setState({ flag: true });
    }

// this function calls when mouse unhovers from button
    handleMouseOut() {
        this.setState({ flag: false });
    }

    // rendering the button
  render(){

    // if flag true, display->block otherwise none
    const toolTipVisibility={display:this.state.flag?"block":"none"};
    // fetching position from props
    const { position } = this.props;
   
    return (
        <div className="App">

            <button
                onMouseOver={this.handleMouseIn}
                onMouseOut={this.handleMouseOut}>

                Hover Me
                {/* div for tooltip Box */}
                <div className={position} style={toolTipVisibility}>
                    {this.props.position+" tooltip"}
                </div>
            </button>
        </div>
    );
  }

}

// exporting Button Component
export default Button;
