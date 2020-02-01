import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!) {
        login(email: $email)
    }
`;

export const Login: React.FC = prop => {
    return (
        <div>
            <p>You are not logged in. Do that.</p>
        </div>
    );
};
