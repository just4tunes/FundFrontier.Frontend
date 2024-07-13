import { Link } from 'react-router-dom'

function SpecialHeader() {
    return (
        <nav className='custom-bg-lightblue flex max-h-screen justify-between p-4 items-center px-[3%]'>
            <Link to="/" className='flex-none w-10'>
                <h1 className='text-[#2a3547] text-3xl font-bold'>BitWealth</h1>
            </Link>
        </nav>
    )
}

export default SpecialHeader