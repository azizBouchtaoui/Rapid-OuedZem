import React, { Component } from 'react';
import Select from 'react-select';



  class Testimonial  extends Component {
    constructor(props){
        super(props);
        this.state = {
            options : [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ],
           selectedOption :null
        };
        

    } 
         
      render(){
            return (
          <div className="container"> 
          <h1 className="text-center" style={{paddingTop:"30%"}}>
           
         
         
       
                  Testimonial
             </h1> 
              <Select
               className="basic-single"
               classNamePrefix="select"
               defaultValue={this.state.selectedOption}
               onChange={this.setState.selectedOption}  
               options={this.state.options}
            /> 
         </div>
     )
      }
      
 }
 export default Testimonial;