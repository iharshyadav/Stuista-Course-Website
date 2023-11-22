import React from "react"
import Footer1 from "../CSS Files/Footer.css"

const Footer = () => {
  return (
    <>
      <div className="text-black w-full h-48 main-footer mx-auto flex flex-wrap justify-center mt-4">
         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 ml-24">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 ">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <p>About Us</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
      </div>

      <div className=" text-center pb-8">
        <p>&copy; 2023 Your Website</p>
      </div>
    </>
  )
}

export default Footer