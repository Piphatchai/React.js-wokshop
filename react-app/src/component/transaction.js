import ItemList from "./item";

function Transaction (props) {

  const {items} = props
    return (
    <ul className="itemlist">  
    {items.map((element) =>{
      return <ItemList {...element} key ={element.id} />
  })}
   </ul>
 
    );
   
}
export default Transaction;