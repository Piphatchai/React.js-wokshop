import './item.css'


function ItemList (props) {
    const {expenses,price} = props 
    const status = price<0 ?"expenditure" : "income"
    const symbol = price<0 ?"-" :"+"  
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


        return (
            <li className = {status}>{expenses}<span>{symbol}{formatNumber(Math.abs(price))}</span></li>
        );
}
export default ItemList;






 















