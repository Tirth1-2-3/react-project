

function Todo(){
    return (<div className="container text-center">
        <div className="row align-items-center">
            <div className="col-5">
                <input className="form-control input-button" placeholder="Enter todo" />
            </div>
            <div className="col-5 date">
                <input type="date" className="form-control input-date-button"/>
            </div>
            <div className="col-2">
                <button className="btn btn-success add-button" >Add</button>
            </div>
        </div>
    </div>);
}
export default Todo;