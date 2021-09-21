import React, { Component } from 'react';
import Select from 'react-select';
import { Villes } from '../../Services';


  class Testimonial  extends Component {
    constructor(props){
        super(props);
        this.state = {
            fromOptions : [],
           selectedOption :null
        };
    } 
    componentDidMount(){
      
      Villes()
          .then(response =>{
            console.log("helooo"+response)
            const  options = []
            response.map((option,i )=>{
              return options.push({value: option.name,  label: option.label, id: option._id})
            })
            console.log(options)
            this.setState({ fromOptions: options})
            console.log("data has been received!!");

          })
          .catch((err )=>{
            console.log(err)
          });
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
               options={this.state.fromOptions}
            /> 
         </div>
     )
      }
      
 }
 export default Testimonial;