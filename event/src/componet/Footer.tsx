import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h5 className="text-lg font-semibold mb-2">About</h5>
          <p className="text-sm">Learn more about our company and our mission to provide the best products for you.</p>
        </div>

        <div className="mb-4 md:mb-0">
          <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
          <p>Email: <a href="mailto:info@mystore.com" className="hover:underline">info@mystore.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a></p>
        </div>

        <div className="mb-4 md:mb-0">
          <h5 className="text-lg font-semibold mb-2">More Information</h5>
          <ul className="list-none">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
