import Button from './NavButton.jsx';

const Navbar = () => {
    return <nav className='b flex justify-center gap-4 p-4'>
        <Button link='/home'>Home</Button>
        <Button link='/works'>Works</Button>
        <Button link='/experience'>Experience</Button>
        <Button link='/experience'>Contact</Button>
    </nav>;
}

export default Navbar;