import ListItem from "./ListItem";
// props = {
//     data : Array <{
//         id:Number,
//         text:String,
//         icon:<Component/>,
//         active: true
//     }
// }

function List(props){
    return (
        <ul>
            {props.data.map((obj)=>(
                <ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active}/>
            ))}
        </ul>
    )
}

export default List;