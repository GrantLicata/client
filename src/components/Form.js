import React from 'react'
import styles from './Form.module.css'
import { useState } from 'react'

const Form = (props) => {

    const{boxes, setBoxes} = props
    const[color, setColor] = useState("")
    
    const submitHandler = (e) => {
        e.preventDefault()
        setBoxes([...boxes,{color: color}])
        setColor("")
    }

    return (
    <div className="container d-flex justify-content-center mt-3">
        <form className='d-flex col-6 align-items-center' onSubmit={submitHandler}>
            <label className='me-2'><b>Color</b></label>
            <input className="form-control me-2" type="text" onChange={(e) => setColor(e.target.value)} value={color}/>
            <button className='btn btn-primary'>Add</button>
        </form>
    </div>
    )
}

export default Form