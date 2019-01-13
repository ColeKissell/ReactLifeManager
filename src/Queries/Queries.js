import {gql} from 'apollo-boost'


const getTodosQuery = gql`
    {
        todos{
            body
            id
        }
}`

const getGoalsQuery = gql`
    {
        goals {
            id
            name
        }
    }
`;

const addTodoMutation = gql`
    mutation AddTodo(
        $body: String!, $completed: Boolean, $goalId: ID){
            addTodo(body: $body, completed: $completed, goalId: $goalId){
                id
                body
            }
        }
`;

const getTodoQuery = gql`
    query($id: ID){
        todo(id: $id) {
            id
            body
            goal {
                id
                name
                todos {
                    body
                    id
                }
            }
        }
    }
`;

export {getTodosQuery, getGoalsQuery, addTodoMutation, getTodoQuery};