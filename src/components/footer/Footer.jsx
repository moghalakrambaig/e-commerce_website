import React from 'react';
import { Button, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white -mt-2 py-10 px-4">
      {/* Grid layout using Tailwind */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {/* Column 1 */}
        <div>
          <Typography variant="h6" gutterBottom>Company</Typography>
          <div className="flex flex-col gap-2">
            <Button color="inherit" sx={{ textTransform: 'none' }}>About Us</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Blog</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>News</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Careers</Button>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <Typography variant="h6" gutterBottom>Support</Typography>
          <div className="flex flex-col gap-2">
            <Button color="inherit" sx={{ textTransform: 'none' }}>Contact</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Help Center</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Shipping</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Returns</Button>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <Typography variant="h6" gutterBottom>Legal</Typography>
          <div className="flex flex-col gap-2">
            <Button color="inherit" sx={{ textTransform: 'none' }}>Privacy Policy</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Terms</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Security</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Cookies</Button>
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="mt-10 text-center">
        <Typography variant="body2" color="white">
          &copy; 2025 E-commerce. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
