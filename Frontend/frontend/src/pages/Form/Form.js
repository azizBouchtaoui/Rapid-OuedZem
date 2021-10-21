import React, { useState } from 'react';  
 import './Form.css'
import StepNavigation from './StepNavigation/stepNavigation';
 
 const Form =()=>{
     const labelArray=['Step 1', 'Step 2','Step 3','Step 4']
    const [currentStep, UpdateCurrentStep]= useState(1)
    function updateStep(step){

        UpdateCurrentStep(step)
    }
    return(
        <div className="test">

        <div style={{ background: "inherit",padding:'20px 50px',margin:'10px 20px' }}>
        <div className='step-progress'>
             <StepNavigation labelArray={labelArray} 
             currentStep={currentStep}
             updateStep={updateStep}> </StepNavigation>
            <p> selected Step : {currentStep}</p>
            {(currentStep > 1 && currentStep < 5)?(  <button className="primaryButton" onClick={() => updateStep(currentStep-1)}> Previous Step</button>): ('')} 
            {(currentStep>=1 && currentStep <4) ?(   <button className="primaryButton" onClick={() => updateStep(currentStep+1)}> Next Step</button>):('')} 
        </div>
             
        </div>
        </div>
        )
}

export default Form


 