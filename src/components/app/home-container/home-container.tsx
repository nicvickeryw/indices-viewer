import React from 'react';
import { Navbar, NavBarLink } from './navbar/navbar';
import { Sticky, StickyChildArgs, StickyContainer } from 'react-sticky';
import { Route, Switch } from 'react-router';
import { IndicesContainer } from './indices/indices';
import { BrowserRouter as Router } from 'react-router-dom';
import { CryptosContainer } from './cryptos/cryptos-container';
import { DashboardContainer } from './dashboard/dashboard-contanier';

/**
 * Links to appear in the left-side of the site nav bar.
 */
const LEFT_HEADER_LINKS: NavBarLink[] = [
    {
        title: 'Home',
        url: '/',
        id: 1,
        component: <DashboardContainer />,
        options: {
            isExactPath: true,
        },
    },
    {
        title: 'Indices',
        url: '/indices',
        id: 2,
        component: <IndicesContainer />,
        options: {
            isExactPath: false,
        },
    },
    {
        title: 'Crypto-currencies',
        url: '/cryptos',
        id: 3,
        component: <CryptosContainer />,
        options: {
            isExactPath: false,
        },
    },
];

export const HomeContainer: React.FC = () => {
    return (
        <div className="root-container">
            <Router>
                {/* react-sticky provides sticky nav bar utility */}
                <StickyContainer>
                    <Sticky>
                        {({ style }: StickyChildArgs) => (
                            <header style={style}>
                                <Navbar leftHeaderLinks={LEFT_HEADER_LINKS} />
                            </header>
                        )}
                    </Sticky>
                    {/* The router switch is dynamically rendered for the container */}
                    <div className="container mx-auto">
                        <Switch>
                            {LEFT_HEADER_LINKS.map(link => (
                                <Route
                                    key={link.id}
                                    path={link.url}
                                    exact={link.options.isExactPath}
                                >
                                    {link.component}
                                </Route>
                            ))}
                        </Switch>
                    </div>
                </StickyContainer>
            </Router>
        </div>
    );
};
