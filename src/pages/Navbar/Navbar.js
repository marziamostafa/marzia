import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-100 -mb-6">
            <div className="flex-1">
                <a href='/#' className="btn btn-ghost normal-case text-xl">Leadzen</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <a href='/#'>
                            Info

                        </a>

                    </li>
                    <li><a href='/#'>Blog</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;