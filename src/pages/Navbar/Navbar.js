import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href='/#' className="btn btn-ghost normal-case text-xl">Leadzen</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/#'>Item 1</a></li>
                    <li tabIndex={0}>
                        <a href='/#'>
                            Parent

                        </a>

                    </li>
                    <li><a href='/#'>Item 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;