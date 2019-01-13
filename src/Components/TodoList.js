import React, { Component } from 'react';
import {graphql} from'react-apollo'
import {getTodosQuery} from '../Queries/Queries'
import TodoDetails from '../Components/TodoDetail'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }


    displayTodos(){
        var data=this.props.data
        if(data.loading){
            return(<div>Loading Todo list...</div>)
        }else{
            return data.todos.map(todo =>{
                return(
                    <li key={todo.id} onClick={ (e) => this.setState({ selected: todo.id }) }>
                        Body: {todo.body}
                    </li>
                )
            })
        }

    }



    render() {
        return (
            <div>
                <ul>
                    {this.displayTodos()}
                </ul>
                <TodoDetails todoId={this.state.selected}></TodoDetails>
            </div>
        );
    }
}

export default graphql(getTodosQuery)(TodoList);