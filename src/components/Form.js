import React from 'react'
import styles from './Form.module.css'
import { useState } from 'react'

const Form = (props) => {

    const{boxes, setBoxes} = props
    const[color, setColor] = useState("")
    
    const submitHandler = (e) => {
        e.preventDefault()

        const newBox = {
            color: color
        }
        console.log(newBox)
        
        setBoxes([...boxes,{color: color}])

        setColor("")
    }

    return (
    <>
        <form className={styles.form} onSubmit={submitHandler}>
            <label>Color</label>
            <input className="form-control" type="text" onChange={(e) => setColor(e.target.value)} value={color}/>
            <button className='btn btn-primary'>Add</button>
        </form>
    </>
    )
}

export default Form