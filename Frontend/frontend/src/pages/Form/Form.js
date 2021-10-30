import React, { useState } from "react";
import "./Form.css";
import StepNavigation from "./StepNavigation/stepNavigation";

import "./DatePicker.css";
import DatePicker, { utils } from "norama-react-modern-calendar-datepicker";
 
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'


const myCustomLocale = {
  // months list by order
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],

  // week days by order
  weekDays: [
    {
      name: "Domingo", // used for accessibility
      short: "D", // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
    {
      name: "Lunes",
      short: "L",
    },
    {
      name: "Martes",
      short: "M",
    },
    {
      name: "Miércoles",
      short: "Mi",
    },
    {
      name: "Jueves",
      short: "J",
    },
    {
      name: "Viernes",
      short: "V",
    },
    {
      name: "Sábado",
      short: "S",
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
  nextMonth: "Próximo Mes",
  previousMonth: "Mes Anterior",
  openMonthSelector: "Selector de Mes Abierto",
  openYearSelector: "Selector de Año Abierto",
  closeMonthSelector: "Cerrar Selector de Mes",
  closeYearSelector: "Selector de Año Cerrado",
  defaultPlaceholder: "Seleccione...",

  // used for input value when multi dates are selected
  digitSeparator: ",",

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
};




const Form = () => {
  const labelArray = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentStep, UpdateCurrentStep] = useState(1);
  
  
  function updateStep(step) {
    UpdateCurrentStep(step);
  }

 function emailValidation(email){
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email || regex.test(email) === false){
        return false
    }  
  else{
    return true
  }  
        
}
  const [selectedDay, setSelectedDay] = useState(utils().getToday());
  const handleSubmitForm = (event) => {
    event.preventDefault();
    event.stopPropagation();
   
    console.log(
      "month :" +
        selectedDay.month +
        " day: " +
        selectedDay.day +
        " year : " +
        selectedDay.year
    );
  };
 
  const [dateSelected, setDateSelected] = useState()
  const [emailSelected,setEmailSelected] = useState()
  return (
    <form onSubmit={(e) => handleSubmitForm(e)}>
      <div className="Box">
        <div className="UnderBox">
          <div className="step-progress">
            <StepNavigation
              labelArray={labelArray}
              currentStep={currentStep}
              updateStep={updateStep}
            ></StepNavigation>
            {currentStep === 1 ? (
              <div className="FirstStep">
                <label className="FirstLabelDate">Fecha</label>
                <DatePicker
                  className=" DatePicker___input"
                  minimumDate={utils().getToday()}
                  value={selectedDay}
                  onChange={(value) => setSelectedDay(value)}
                  locale={myCustomLocale} // custom locale object
                />
              </div>
            ) : currentStep === 2 ? (
              <div  className="Second">
                
                 
                    
                 <div className="Input-text ">

                     <PhoneInput
                     country='es'
                     regions={'europe'}
                    international
                    countryCallingCodeEditable={false}
                    placeholder={"Nombre"}
                    enableSearch
                    value={dateSelected}
                    onChange={setDateSelected}
                    
              />
              <div className="EmailSection">

                 <label className="specialLableEmail">Email</label>
               <input className="EmailInput" type="email" id="email" placeholder="Email" value={dateSelected}
                    onChange={setDateSelected} required>
               </input>
                 </div>
              </div>
                
              </div>
            ) : currentStep === 3  ? (
              <div>
                    <div className="LocalisationSection">

                  <label className="LabelDirections">Dirección Recogida
                  </label>
                <input className="FirstInput" type="text"  placeholder="Dirección Recogida" required>
                </input>
                  </div>


                  <div className="LocalisationSection">
                    <label className="LabelDirections">Dirección Entrega
                    </label>

                  <input className="FirstInput" type="text"  placeholder="Dirección Entrega" required>
                  </input>
                    </div>
                </div>
              
            ) : currentStep === 4 ? (
              <div className="ForthSection">
                <label className="labelComments">comentarios</label>
                <textarea className="textArea"   rows="4" cols="43"/>

              </div>
            ) : (
              ""
            )}
            <div className="bar_Bottons">
              {currentStep > 1 && currentStep < 5 ? (
                <button
                  className="primaryButtonPrv"
                  onClick={() => updateStep(currentStep - 1)}
                >
                  {" "}
                  Previous Step
                </button>
              ) : (
                ""
              )}
              {currentStep >= 1 && currentStep < 4 ? (
                <button
                  className="primaryButtonNext"
                  onClick={() => updateStep(currentStep + 1)}
                >
                  {" "}
                  Next Step
                </button>
              ) : (
                ""
              )}
              {currentStep === 4 ? (
                <button className="primaryButtonSubmit"> Submit</button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
