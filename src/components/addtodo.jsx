export const items = [
    {
        todo: "Buy Milk",
        date: "4/10/2025",
        deleted: 0
    },
    {
        todo: "Go to college",
        date: "4/10/2025",
        deleted: 0
    }
]

function Addtodo(object){
    return <div className="row align-items-center">
        <div className="col-5 todo-text">
            <p>{object.todo}</p>
        </div>
        <div className="col-5 todo-date">
            <p>{object.date}</p>
        </div>
        <div className="col-2" >
            <button className="btn btn-danger add-button" onClick={()=>deleteItem(object.index)}>Delete</button>
        </div>
    </div>
};

function RenderTodo(){
    return <div className="container text-center">
        {items.map((item, index) => (
            <Addtodo key={index} index={index} todo={item.todo} date={item.date} /> 
        ))}
    </div>
}

function deleteItem(index){
    items[index].deleted = 1;
    console.log(items);
    RenderTodo();
} 
export default RenderTodo;
