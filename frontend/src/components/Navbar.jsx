import logo from '../assets/logo.png'

export default function NavBar () {
    return (
        <nav className="flex justify-around items-center text-sm font-semibold">
            <a href="./index.html"><img src={logo} alt="logo" className='h-8 object-contain' /></a>
            <a href="#">Food</a>
        </nav>
    )
}