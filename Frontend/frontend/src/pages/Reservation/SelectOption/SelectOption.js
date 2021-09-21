import React, { useState } from 'react'
import Select from 'react-select'


const SelectOption = () =>{
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>
  
    
      <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      />
  </>
  );
}
export default SelectOption;