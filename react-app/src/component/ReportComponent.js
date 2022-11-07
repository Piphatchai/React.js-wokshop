import "./ReportCompnent.css"
import { useContext } from "react";
import DataContext from "../data/datacontext";




const ReportComponent = () =>{

        const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

        const {Income,expenditure} = useContext(DataContext)
    return (
        <div>
               <div className="report-container">
                    <div>
                        <h3>รายได้ทั้งหมด</h3> 
                            <p className="income-report">฿{formatNumber(Income)}</p>
                    </div>
                    <div>
                        <h3>รายจ่ายทั้งหมด</h3>
                            <p className="expenditure-report">฿{formatNumber(expenditure)}</p>
                    </div>
                </div>
                <div className="block">
                <h4>ยอดคงเหลือ  (บาท)</h4>
                <h1>฿{formatNumber((Income-expenditure).toFixed(2))}</h1>
                </div>
        </div>
  
    );
}

export default ReportComponent