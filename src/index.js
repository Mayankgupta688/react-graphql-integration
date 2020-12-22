import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

var client =  new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

export const GET_POSTS = gql`
  query getEmployeeData {
    employeeList {
      name
      id
    }
  }   
`;

ReactDOM.render(
  <React.StrictMode>
    
    <App></App>
    
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <ApolloProvider client={client}>
      <Query query={GET_POSTS}>
      {({ loading, data }) => {
        debugger;
        return (!loading && (
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.employeeList.map(post => (
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        ))}}
      </Query>
    </ApolloProvider>
  )
}

