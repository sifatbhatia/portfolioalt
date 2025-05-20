import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#030a1f]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d1cdc2]"></div>
  </div>
);

export default LoadingSpinner;
