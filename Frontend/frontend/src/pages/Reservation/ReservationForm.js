 
import SelectOption from './SelectOption/SelectOption';
import React, { useState } from 'react';
import Select from 'react-select';


 
const Reservation = () =>{
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
        const [selectedOption, setSelectedOption] = useState(null);
      
        return (
          <div className="container"> 
          <h1 className="text-center" style={{paddingTop:"30%"}}>
            <Select
           className="basic-single"
           classNamePrefix="select"
           defaultValue={selectedOption}
           onChange={setSelectedOption}
           options={options}
            />  
         
        );  
       
            Testimonial lhabs 
        </h1>
    </div>
    );

}
export default Reservation;

