import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Divyanshu Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;