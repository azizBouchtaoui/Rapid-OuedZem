 
import React,{useState} from 'react'
import '../Form.css'
const Step = (props) =>{
    return (
        <div className={"stepBlock" + (props.selected ?" selected":'' )}>

        <div className={"circleWrapper"} onClick={()=>props.updateStep(props.index+1)}>
            <div className="circle"> {props.index+1}</div>
        </div>
        </div>
    )
}
export default Step;