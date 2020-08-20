import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white rounded-sm">
        {children}
      </div>
    </div>
  )
};

export default Layout;