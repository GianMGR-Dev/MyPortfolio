import Link from 'next/link';

const SocialNetworks = () => {
    return (
        <div className="p-2 rounded-3xl flex flex-row justify-center items-center gap-4">

            <a className="bg-white p-2 rounded-full transition-transform duration-100 ease-in-out hover:scale-115" href='https://www.linkedin.com/in/gian-gutierrez-7a859737b/?locale=en_US' target="_blank" rel="noopener noreferrer">
                <svg width="30" height="30">
                    <use href="/sprite.svg#linkedin" />
                </svg>
            </a>
            
            <a className="bg-gray-950 p-2 rounded-full transition-transform duration-100 ease-in-out hover:scale-115" href='https://github.com/GianMGR-Dev' target="_blank" rel="noopener noreferrer">
                <svg width="30" height="30">
                    <use href="/sprite.svg#github" />
                </svg>
            </a>

        </div>
    )
}

export default SocialNetworks;