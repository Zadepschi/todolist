import { Component } from "react";
import  pic  from './check.gif';
import Swal from 'sweetalert2';


export class List extends Component {

    state = {
        userInput: "",
        toDoList: []

    }

onChangeEvent(event) {
    this.setState({userInput: event})
}

addItem(input) {
    if (input === "") {
        Swal.fire({
            title: 'Error!',
            text: 'What do you plan to do today?',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
    else {
    let listArray = this.state.toDoList;
    listArray.push(input)
    this.setState({toDoList: listArray, userInput: ""});
    console.log(listArray)
}
}

deleteItem() {
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList: listArray});
}


crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed")
}

formSubmit(e) {
    e.preventDefault();
}

    render() {
        return (
            <div className="box">
        
             <form onSubmit={this.formSubmit}>
            <div className="container">
             <input type="text"
                placeholder='What do you plan to do?' 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} />
            </div> 
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
            </div>
            <ul>
            {this.state.toDoList.map((item,index) =>   (<li onClick={this.crossedWord}  key={index}> 
            <img src={ pic} width="30px" alt="icon"/>
            {item} </li>)     )}
            </ul>
            <div className="container">
                <button onClick={() =>  this.deleteItem()} className="delete">Delete</button>
            </div>
            </form>
         </div> 
        
        )
    }
}