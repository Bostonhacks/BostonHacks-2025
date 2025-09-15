'use client';

import { useState, useEffect } from 'react';
import Window from './Window';
import Link from 'next/link';

const dueDate = "September 28";

const WarningBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const bannerDismissed = localStorage.getItem('applicationBannerDismissed');
    if (!bannerDismissed || bannerDismissed !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('applicationBannerDismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-5 bottom-[170px] z-300">
      <Window
        title={
          <span className="text-md mr-3">⚠️ Application Reminder</span>
        }
        onClose={handleClose}
        initialPosition={{ x: 0, y: 0 }}
        initialSize={{ width: 320, height: 130 }}
        closable={true}
        minimizable={false}
        maximizable={false}
        resizable={false}
      >
        <div className="p-4 flex items-center h-full">
          <span className="font-ms-sans-serif text-md">
            Applications are due <span className="font-bold text-red-700">{dueDate}, 11:59 PM EST</span>. If you haven&apos;t applied yet, go apply <Link className="text-blue-600" href="/login">here</Link>!
          </span>
        </div>
      </Window>
    </div>
  );
};

export default WarningBanner;
