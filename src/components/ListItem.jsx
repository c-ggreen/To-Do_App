import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            completed : false

        }
    }
    checkedStyle = () =>{
        this.setState({
            completed : true
        })
    }


    render() {
        return (
            <div>
                <input type="checkbox"  onClick={()=>this.checkedStyle()} />
                {this.state.completed ? <span className="strikeThrough">{this.props.item}</span> : <span>{this.props.item}</span> }
            </div>
        );
    }
}

export default ListItem;