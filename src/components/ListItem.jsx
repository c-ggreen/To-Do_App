import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            completed : false,
        }
    }
    complete = () =>{
        this.setState({
            completed : true
        })
    }


    render() {
        return (
            <div>
                <input type="submit" value="Delete" onClick={()=>this.props.deleteItem} />
                <input type="checkbox"  onClick={()=>this.complete()} />
                {this.state.completed ? <span className="strikeThrough">{this.props.item}</span> : <span>{this.props.item}</span> }
            </div>
        );
    }
}

export default ListItem;