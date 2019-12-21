import React from 'react';
import { Link } from 'react-router-dom';

export interface NavBarLink {
    id: number;
    url: string;
    title: string;
    component: React.FC;
    options: {
        isExactPath: boolean;
    };
    children?: NavBarLink[];
}

export interface NavProps {
    leftHeaderLinks: NavBarLink[];
}

export const Navbar: React.FC<NavProps> = (props: NavProps) => {
    const { leftHeaderLinks } = props;
    const linkElements = leftHeaderLinks.map(link => (
        <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            to={link.url}
            key={link.id}
        >
            {link.title}
        </Link>
    ));

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">
                    Indices Viewer
                </span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">{linkElements}</div>
                <div>
                    <p>GitHubLink</p>
                </div>
            </div>
        </nav>
    );
};
