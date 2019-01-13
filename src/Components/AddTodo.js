import React, { Component } from 'react';
import {graphql, compose} from'react-apollo'
import {getGoalsQuery, addTodoMutation, getTodosQuery} from '../Queries/Queries'


class AddTodo extends Component {

    constructor(){
        super();
        this.state={
                body: "",
                completed: false,
                goalId: "",
        }
    }

    displayGoals(){
        var data = this.props.getGoalsQuery;
        if(data.loading){
            return( <option disabled>Loading goals</option> );
        } else {
            const mappedData = data.goals.map(goal => {
                return <option key={ goal.id } value={goal.id}>{ goal.name }</option> 
            });
            return mappedData
        }
    }
    

    handleChange(e){
        this.setState({goalId: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()

        this.props.addTodoMutation({
            variables: {
                body: this.state.body,
                completed: this.state.completed,
                goalId: this.state.goalId
            },
            refetchQueries:[{query: getTodosQuery}]
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Todo: </label>
                    <input type="text" 
                        onChange={ (e) => this.setState({ body: e.target.value }) }
                    />
                <br/>
                    <label>completed:</label>
                    <input type="checkbox" 
                        onChange={ (e) => this.setState({ completed: !this.state.completed }) }
                    />
                    <br/>
                    <label>Goal: </label>
                    <select onChange={ (e) => { this.handleChange(e) } }>
                        <option>Select goal</option>
                        { this.displayGoals() }
                    </select>
                    <br/>
                    <button>add todo</button>
                </form>
                

            </div>
        );
    }
}

export default compose(
    graphql(getGoalsQuery, { name: "getGoalsQuery" }),
    graphql(addTodoMutation, { name: "addTodoMutation" })
)(AddTodo);
