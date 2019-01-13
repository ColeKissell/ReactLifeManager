import React, { Component } from 'react';
import TodoList from './Components/TodoList'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import AddTodo from './Components/AddTodo'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h3>Testing backend for life manager app</h3>

          <TodoList/>

          <AddTodo></AddTodo>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
