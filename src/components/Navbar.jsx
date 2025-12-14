import Button from './NavButton.jsx';

const Navbar = () => {
    return (
        <nav className='w-full bg-[var(--primary-color)]'>
            <div className='w-full flex flex-row justify-center items-center p-2 md:gap-4 md:py-3'>
                <Button link='/'>Home</Button>
                <Button link='/works'>Works</Button>
                <Button link='/experience'>Experience</Button>
                <Button link='/contact'>Contact</Button>
            </div>
        </nav>
    );
}

export default Navbar;