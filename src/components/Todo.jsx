import React, { Component } from 'react';
import ListItem from './ListItem';

class Todo extends Component {
    constructor(){
        super()
        this.state={
            userInput:'',
            list: [],
            mounted: true
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

    resetMount = () =>{
        this.setState({
            mounted: true
        })
    }

    deleteItem= () =>{
        this.setState({
            mounted:false
        })
    }

    render() {
        return (
            <div>
                <h1>To-Do List</h1>
                
                <input type="text" 
                value={this.state.userInput}
                onClick={()=>this.resetMount}
                onChange={
                    (event)=>{
                        this.changeUserInput(event.target.value)
                    }}/>

                <button onClick={()=>this.addToList(this.state.userInput)}>Add to the List</button>
                
                <ul>
                    {this.state.list.map((item, i)=>{
                        return this.state.mounted ? <ListItem key={i} item={item} deleteItem={this.deleteItem} /> : null
                    })}
                </ul>

            </div>
        );
    }
}

export default Todo;