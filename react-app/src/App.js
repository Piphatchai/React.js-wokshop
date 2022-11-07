import './App.css';
import FormComponent from './component/FormComponent';
import Transaction from './component/transaction';
import {useState,useEffect} from "react";
import DataContext from './data/datacontext';
import ReportComponent from './component/ReportComponent';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function App() {


const [items,setItem] = useState ([])

   const [ReportIncome,setReportIncome] =useState (0)
   const [ReportExpenses,setReporExpenses] =useState (0)

    const onAddNewItem = (newItem) => {
      setItem ((prevItem) => {
        return [newItem,...prevItem]
      })
    }

    useEffect (()=>{
        const amounts = items.map(items => items.price)
        const InCome  = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
        const ExPenses  = (amounts.filter(element=>element<0).reduce((totle,element)=>totle+=element,0))*-1
        setReportIncome((InCome).toFixed(2))
        setReporExpenses((ExPenses).toFixed(2))
      
    },[items,ReportIncome,ReportExpenses])

  return (
        <DataContext.Provider value={
          {Income : ReportIncome, expenditure : ReportExpenses}}>
          <div className='list'>
                <h2>เว็บบัญชีรายรับ-รายจ่าย</h2> 
              <Router>
                <div>
                  <ul className='horizontal-menu'>
                    <li>
                      <Link to ="/">ข้อมูลบัญชี</Link>
                    </li>
                    <li>
                      <Link to ="/insert">บันทึกข้อมูล</Link>
                    </li>
                  </ul>
                </div>
                <Routes>
                    <Route path='/' element={
                      <ReportComponent/>}/>
                    <Route path='/insert'element={
                        <>
                      <FormComponent onAddItem = {onAddNewItem}/>
                      <Transaction items = {items}/>
                        </>
                      }/>
                </Routes>
              </Router>            
          </div>
        </DataContext.Provider>
       

);  
}  
export default App;
