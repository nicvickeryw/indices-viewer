import React from 'react';
import { NavBar, NavBarLink } from './navbar/Navbar';
import { Sticky, StickyChildArgs, StickyContainer } from 'react-sticky';
import { Route, Switch } from 'react-router';
import { IndicesContainer } from './indices/IndicesContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import { CryptosContainer } from './cryptos/CryptosContainer';

const LEFT_HEADER_LINKS: NavBarLink[] = [
    // {
    //     title: 'Home',
    //     url: '',
    //     id: 1,
    // },
    {
        title: 'Indices',
        url: '/indices',
        id: 2,
        component: IndicesContainer,
    },
    {
        title: 'Crypto-currencies',
        url: '/cryptos',
        id: 3,
        component: CryptosContainer,
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
                                <NavBar leftHeaderLinks={LEFT_HEADER_LINKS} />
                            </header>
                        )}
                    </Sticky>
                    {/* The router switch is dynamically rendered for the container */}
                    <div className="container mx-auto">
                        <Switch>
                            {LEFT_HEADER_LINKS.map(link => (
                                <Route key={link.id} path={link.url}>
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
