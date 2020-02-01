import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const STOCKS = gql`
    {
        stocks {
            title
            value
        }
    }
`;

export const IndicesContainer: React.FC = props => {
    // Get stock data from the API
    const { data } = useQuery(STOCKS);

    console.log(data);

    return (
        <ul>
            {data?.stocks.map((stock: any) => (
                <li>
                    {stock.title}: {stock.value}
                </li>
            ))}
        </ul>
    );
};
