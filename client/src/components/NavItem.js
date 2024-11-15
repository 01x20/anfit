import { NavLink } from 'react-router-dom';

const NavItem = ({ to, text, boxClass }) => (
    <li className={boxClass}>
        <NavLink to={to} className={({ isActive }) => (isActive ? 'active btn' : 'btn')}>
            {text}
        </NavLink>
    </li>
);

export default NavItem;