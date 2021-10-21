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



 
 /*
 import StepZilla from "react-stepzilla";

 const Step1=()=>{
    return (
        <div>
        <p>
            This simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more 
            recently with desktop publishing
        </p>
    </div>
    )
}
const Step2=()=>{
    return (
        <div>
        <p>
            A Terms and Conditions agreement is not legally required. However, having one
            comes with a number of important benefits for both you and your users/customers.
            The benefits include increasing your control over your business/platform,
            while helping your users understand your rules, requirements and restrictions.
        </p>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Accept</label>
        </div>
    </div>
    )
}
const Step3=()=>{
    return (
        <div>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>    
            </div>
        </form>
    </div>
    )
}
const Step4=()=>{
    return (
        <div>
        <p>
            This simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more 
            recently with desktop publishing
        </p>
    </div>
    )
}
 const steps =
 [
   {name: 'Step 1', component: <Step1 />},
   {name: 'Step 2', component: <Step2 />},
   {name: 'Step 3', component: <Step3 />},
   {name: 'Step 4', component: <Step4 />},
   
 ]
export default class Form extends React.Component { 

    render() { 
        return (
            <div className="test">

            <div style={{ background: "inherit",padding:'20px 50px',margin:'10px 20px' }}>
            <div className='step-progress'>
                <StepZilla steps={steps}/>
            </div>
                 
            </div>
            </div>
        );
    }
}
*/