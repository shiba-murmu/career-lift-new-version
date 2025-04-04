import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
function Footer() {
  return (
    <>
      
      <div className="footer bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="footer-left">
                <div className="footer-logo mb-4">
                  <a href="index.html">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Logo" className="h-12" />
                  </a>
                </div>
                <ul className="space-y-2">
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: 2B0J0@example.com</li>
                </ul>
                <div className="footer-social mt-4">  
                  <a href="#" className="text-blue-500 mx-2">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="text-pink-500 mx-2">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="text-blue-400 mx-2">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="text-red-600 mx-2">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>  
              </div>
            </div>  
            <div className="w-full md:w-1/2">
              <div className="footer-widget">
                <h2 className="text-xl font-bold mb-2">Newsletter</h2>
                <p className="mb-4">Stay updated with our latest trends</p>
                <form action="#" className="flex">
                  <input type="text" placeholder="Email" className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none" />
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">Subscribe</button>
                </form>
              </div>
            </div>
          </div>  
        </div>
        <div className="copyright-reserved mt-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="copyright-text">
                <p>   
                  &copy; {new Date().getFullYear()} All rights reserved | This template is made with
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by
                  <a href="https://colorlib.com" target="_blank" className="text-blue-500">Colorlib</a>
                </p>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer