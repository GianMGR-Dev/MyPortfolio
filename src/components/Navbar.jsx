import Button from './Button.jsx';

const Navbar = () => {
    return <nav className='bg-purple-300 flex justify-center gap-4 p-4'>
        <Button link='/'>Home</Button>
        <Button link='/WorksPage'>Works</Button>
        <Button link='/ExperiencePage'>Experience</Button>
    </nav>;
}

export default Navbar;