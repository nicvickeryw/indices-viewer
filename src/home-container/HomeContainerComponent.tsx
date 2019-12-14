import React from 'react';
import { NavBar, NavBarLink } from './navbar/Navbar';

export const HomeContainer: React.FC = () => {
    const links: NavBarLink[] = [
        {
            title: 'Blog',
            url: '',
        },
        {
            title: 'Test 2',
            url: '',
        },
        {
            title: 'Test3',
            url: '',
        },
    ];
    return (
        <div className="root-container">
            <NavBar leftHeaderLinks={links}></NavBar>
            <div className="container mx-auto">
                <div className="flex mb-4">
                    <p>Testing contents!</p>
                </div>
            </div>
        </div>
    );
};
