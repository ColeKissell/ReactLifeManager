import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getTodoQuery } from '../Queries/Queries';

class TodoDetails extends Component {
    displayTodoDetails(){
        const { todo } = this.props.data;
        if(todo){
            return(
                <div>
                    <h2>{ todo.body }</h2>
                    <p>{ todo.id }</p>
                    <p>{ todo.completed }</p>
                    <p>{todo.description}</p>
                    {todo.goal ? 
                    <div>
                        <p>Goal name: {todo.goal.name}</p> 
                        <p>All todos on this goal:</p>
                        <ul>
                            { todo.goal.todos.map(item => {
                                return <li key={ item.id }>{ item.body }</li>
                            })}
                        </ul>
                    </div>
                        : null}
                    
                    
                </div>
            );
        } else {
            return( <div>No todo selected...</div> );
        }
    }
    render(){
        return(
            <div>
                { this.displayTodoDetails() }
            </div>
        );
    }
}

export default graphql(getTodoQuery, {
    options:(props) =>{
        return{
            variables:{
                id:props.todoId
            }
        }
    }
})(TodoDetails);
