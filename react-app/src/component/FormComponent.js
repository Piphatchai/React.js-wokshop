import { useState,useEffect } from 'react';
import './FormComponent.css'; 
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {

  const [expenses , setExpenses] = useState ('')
  const [price , setPrice] = useState (0)
  const [fromValid, setfromValid]  = useState (false)


const InputExpenses= (event) =>{
    setExpenses(event.target.value); 
}

const InputPrice = (event) => {
    setPrice(event.target.value);
}

const saveItem = (event) => {
    event.preventDefault()
    const ItemData = {
        id : uuidv4(),
        expenses : expenses ,
        price : Number(price)
    } 
    props.onAddItem(ItemData)
    setExpenses ('')
    setPrice (0)
}

useEffect (()=>{
    const checkData = expenses.trim().length>0 && price !==0
        setfromValid(checkData)
},[expenses,price])

    return (
            <div className='form-container'>
                <form onSubmit={saveItem}>
                    <div className="expenses">
                        <label>ชื่อรายการ :</label>
                        <input type='text' placeholder="ระบุชื่อรายการของคุณ" onChange={InputExpenses} value= {expenses}/>
                    </div>
                    <div className="price">
                        <label>จำนวนเงิน :</label>
                        <input type='number' placeholder="(+รายรับ,-รายจ่าย)"onChange={InputPrice} value = {price}/>
                    </div>
                    <div className="button-item">
                        <button  className = "button-1" type='submit' disabled = {!fromValid}>เพิ่มข้อมูล</button>
                    </div>
                </form>
             </div>
    )         
}

export default FormComponent;