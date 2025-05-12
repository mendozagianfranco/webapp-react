import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='container container-header'>
                <div>Logo</div>
                <NavLink to='/'>Home</NavLink>
            </div>
        </header>
    );
}