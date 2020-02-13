import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;

export const Login: React.FC = prop => {
    console.log('login');
    return (
        <div>
            <p>You are not logged in. Do that.</p>
        </div>
    );
};

export const LoginStatusButton = (props: any) => {
    const [logInUser, { data }] = useMutation(LOGIN_USER);
    let loggedIn = data?.login || 'Log In';

    return (
        <button
            onClick={e => {
                e.preventDefault();
                logInUser({
                    variables: { email: 'nic@hi.com', password: 'sup' },
                }).then(() => {
                    console.log(data);
                });
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {loggedIn}
        </button>
    );
};
