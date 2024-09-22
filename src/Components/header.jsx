import { Link } from "react-router-dom";

function Header () {
    return(
        <>
       <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Ammar Store</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link to={'about'} className="mr-5 hover:text-gray-900">About Us</Link>
      <Link to={'/products'} className="mr-5 hover:text-gray-900">Products</Link>
      <Link to={"/contactUs"} className="mr-5 hover:text-gray-900">Contact Us</Link>
    </nav>
 
    <Link to={"/signin"} className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg mx-3 my-1">Login</Link>
    <Link to={"/signup"} className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg my-1">Sign Up</Link>

  </div>
</header>

        </>
    )
}

export default Header;