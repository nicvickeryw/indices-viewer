import React from 'react';
import '../../tailwind.css';
import { HomeContainer } from './home-container/home-container';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: process.env.REACT_APP_ENTRY_POINT,
});

const App: React.FC = () => (
    <ApolloProvider client={client}>
        <HomeContainer />
    </ApolloProvider>
);
export default App;
