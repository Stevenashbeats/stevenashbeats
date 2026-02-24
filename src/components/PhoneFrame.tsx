import React from 'react';
import { cn } from '@/lib/utils';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className }) => {
  return (
    <div className={cn("relative mx-auto", className)}>
      <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
        <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black rounded-full w-40 h-7 mt-2"></div>
          </div>
          
          <div className="bg-[#3C3535] rounded-[2.5rem] overflow-hidden" style={{ paddingTop: '2rem' }}>
            {children}
          </div>
          
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
            <div className="bg-gray-800 rounded-full w-1 h-12 mb-2"></div>
            <div className="bg-gray-800 rounded-full w-1 h-8 mb-2"></div>
            <div className="bg-gray-800 rounded-full w-1 h-8"></div>
          </div>
          
          <div className="absolute right-0 top-1/3 transform translate-x-1">
            <div className="bg-gray-800 rounded-full w-1 h-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
