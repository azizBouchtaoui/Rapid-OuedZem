 
import SelectOption from './SelectOption/SelectOption';
import React, { useState } from 'react';
import Select from 'react-select';
import Testimonial from '../Testimonial/Testsimonial';
import ResultatDeRecherche from '../Testimonial/ResultatComponent/ResultatDeRecherche';


 
const Reservation = () =>{
 
        const [selectedOption, setSelectedOption] = useState(null);
      
        return (
          <div className="container"> 
          <Testimonial/>
          <ResultatDeRecherche/>
    </div>
    );

}
export default Reservation;

