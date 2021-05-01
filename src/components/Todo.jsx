import React, { Component } from 'react';

class Todo extends Component {
    constructor(){
        super()
        this.state={
            userInput:'',
            list: []

        }
    }

    changeUserInput = (input)=>{
        this.setState({
            userInput: input
        })

    }

    addToList(input){
        let listArray = this.state.list

        listArray.push(input)

        this.setState({
            list: listArray,
            userInput: ''
        })
    }


    render() {
        return (
            <div>
                <h1>To-Do List</h1>
                
                <input type="text" 
                value={this.state.userInput}
                onChange={
                    (event)=>{
                        this.changeUserInput(event.target.value)
                    }}/>

                <button onClick={()=>this.addToList(this.state.userInput)}>Add Todo to the List</button>
                
                <ul>
                    {this.state.list.map((itemInTheList, i)=>{
                        return <li key={i}>{itemInTheList}</li>
                    })}

                </ul>

            </div>
        );
    }
}

export default Todo;