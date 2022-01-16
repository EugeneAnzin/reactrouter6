import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

// const setActive = ({ isActive }) => isActive ? 'active-link' : '';

const Layout = () => {
    return (
        <>
            {/* <header>
                <NavLink to="/" className={setActive}>Home</NavLink>
                <NavLink to="/posts" className={setActive}>Blog</NavLink>
                <NavLink to="/about" className={setActive}>About</NavLink>
            </header> */}

            {/* <header>
                <NavLink to="/" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Home</NavLink>
                <NavLink to="/posts" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Blog</NavLink>
                <NavLink to="/about" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>About</NavLink>
            </header> */}

            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>

            <main className='container'>
                <Outlet />
            </main>

            <footer className='container'>React Router 2021</footer>
        </>
    );
};

export { Layout };