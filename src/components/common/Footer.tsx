// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-no-repeat bg-center bg-cover custom-bg-blue py-12 px-[2%]">
            <div className="container mx-auto flex flex-wrap text-white auto-container">
                <div className="w-full md:w-1/4 px-[2%] mb-8 md:mb-0">
                    <h4 className="text-xl mb-4">Contact</h4>
                    <p><strong>Phone:</strong> +1 (347)-674-1640</p>
                    <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                    {/* <div className="mt-5">
                        <h4 className="text-xl mb-4">Follow us</h4>
                        <div className="flex space-x-4">
                            <FaFacebook className="text-2xl hover:text-gray-400" />
                            <FaTwitter className="text-2xl hover:text-gray-400" />
                            <FaInstagram className="text-2xl hover:text-gray-400" />
                            <FaYoutube className="text-2xl hover:text-gray-400" />
                        </div>
                    </div> */}
                </div>
                <div className="w-full md:w-1/4 px-[2%] mb-8 md:mb-0">
                    <h4 className="text-xl mb-4">About</h4>
                    <a href="#plans" className="block mb-2 text-gray-300 hover:text-white">Plans</a>
                    <a href="#markets" className="block mb-2 text-gray-300 hover:text-white">Top Pricing List</a>
                    <a href="#whychooseus" className="block mb-2 text-gray-300 hover:text-white">Why Choose us</a>
                    <a href="#reviews" className="block mb-2 text-gray-300 hover:text-white">What Clients say</a>
                    {/* <a href="#" className="block mb-2 text-gray-300 hover:text-white">Delivery Information</a>
                    <a href="#" className="block mb-2 text-gray-300 hover:text-white">Privacy Policy</a>
                    <a href="#" className="block mb-2 text-gray-300 hover:text-white">Terms & Conditions</a>
                    <a href="#" className="block mb-2 text-gray-300 hover:text-white">Contact Us</a> */}
                </div>
                <div className="w-full md:w-1/4 px-[2%] mb-8 md:mb-0">
                    <h4 className="text-xl mb-4">My Account</h4>
                    <a href="/auth/login" className="block mb-2 text-gray-300 hover:text-white">Sign In</a>
                    <a href="/auth/register" className="block mb-2 text-gray-300 hover:text-white">Sign Up</a>
                    {/* <a href="#" className="block mb-2 text-gray-300 hover:text-white">View Cart</a>
                    <a href="#" className="block mb-2 text-gray-300 hover:text-white">My wishlist</a>
                    <a href="#" className="block mb-2 text-gray-300 hover:text-white">Track My Order</a>
                    <a href="#" className="block mb-2 text-gray-300 hover:text-white">Help</a> */}
                </div>
                <div className="w-full text-center mt-8">
                    <div className="text-sm">&copy; 2023 All Rights Reserved</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
