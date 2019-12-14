import React from 'react';
import { NavBar, NavBarLink } from './navbar/Navbar';
import { Sticky, StickyChildArgs, StickyContainer } from 'react-sticky';

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
            <StickyContainer>
                <Sticky>
                    {({ style }: StickyChildArgs) => (
                        <header style={style}>
                            <NavBar leftHeaderLinks={links}></NavBar>
                        </header>
                    )}
                </Sticky>
                <div className="container mx-auto">
                    <div className="flex mb-4">
                        <p style={{ marginBottom: '10000px' }}>
                            Testing contents!
                        </p>
                    </div>
                </div>
            </StickyContainer>
        </div>
    );
};
