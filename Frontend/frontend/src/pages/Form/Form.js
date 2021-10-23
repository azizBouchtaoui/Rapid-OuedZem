import React, { useState } from 'react';  
 import './Form.css'
import StepNavigation from './StepNavigation/stepNavigation';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker,{ utils } from "react-modern-calendar-datepicker";



const myCustomLocale = {
    // months list by order
    months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    ],
    
    // week days by order
    weekDays: [
      {
        name: 'Domingo', // used for accessibility 
        short: 'D', // displayed at the top of days' rows
        isWeekend: true, // is it a formal weekend or not?
      },
      {
        name: 'Lunes',
        short: 'L',
      },
      {
        name: 'Martes',
        short: 'M',
      },
      {
        name: 'Miércoles',
        short: 'Mi',
      },
      {
        name: 'Jueves',
        short: 'J',
      },
      {
        name: 'Viernes',
        short: 'V',
      },
      {
        name: 'Sábado',
        short: 'S',
        isWeekend: true,
      },
    ],
  
    // just play around with this number between 0 and 6
    weekStartingIndex: 0,
  
    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject) {
      return gregorainTodayObject;
    },
  
    // return a native JavaScript date here
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day);
    },
  
    // return a number for date's month length
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate();
    },
  
    // return a transformed digit to your locale
    transformDigit(digit) {
      return digit;
    },
  
    // texts in the date picker
    nextMonth: 'Next Month',
    previousMonth: 'Previous Month',
    openMonthSelector: 'Open Month Selector',
    openYearSelector: 'Open Year Selector',
    closeMonthSelector: 'Close Month Selector',
    closeYearSelector: 'Close Year Selector',
    defaultPlaceholder: 'Select...',
  
    // for input range value
    from: 'from',
    to: 'to',
  
  
    // used for input value when multi dates are selected
    digitSeparator: ',',
  
    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,
  
    // is your language rtl or ltr?
    isRtl: false,
  }

 const Form =()=>{
     const labelArray=['Step 1', 'Step 2','Step 3','Step 4']
    const [currentStep, UpdateCurrentStep]= useState(1)
    function updateStep(step){

        UpdateCurrentStep(step)
    }
    const [selectedDay, setSelectedDay] = useState(null);

    return(
        <div className="Box">

        <div className="UnderBox">

        <div style={{  }}>
        <div className='step-progress'>
             <StepNavigation labelArray={labelArray} 
             currentStep={currentStep}
             updateStep={updateStep}>

                 
                  </StepNavigation>
                {(currentStep===1)? (
                    <div>
                     <DatePicker
                       minimumDate={utils().getToday()}
                    value={selectedDay}
                    onChange={setSelectedDay}
                     
                    locale="en" // add this
                    />
                </div>): (currentStep === 2)? (<div>
                    Second  
                </div>) : (currentStep === 3)? (<div>
                    Third 
                </div>) :  (currentStep === 4)? (<div>
                    Forth 
                </div>) : ('') }
                <div className="bar_Bottons">

                    {(currentStep > 1 && currentStep < 5)?(  <button className="primaryButtonPrv" onClick={() => updateStep(currentStep-1)}> Previous Step</button>): ('')} 
                    {(currentStep>=1 && currentStep <4) ?(   <button className="primaryButtonNext" onClick={() => updateStep(currentStep+1)}> Next Step</button>):('')} 
                    {(currentStep==4 ) ?(   <button className="primaryButtonSubmit"  > Submit</button>):('')} 
                    
                </div>
                </div>
             
             
        </div>
        </div>
                    </div>
        )
}

export default Form


 