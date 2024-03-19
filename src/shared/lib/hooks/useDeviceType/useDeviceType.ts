import { useCallback, useEffect, useState } from 'react';

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState('');

  const handleResizeWindowWidth = useCallback(() => {
    if (window.innerWidth < 500) {
      setDeviceType('mobile');
    } else if (window.innerWidth >= 500 && window.innerWidth <= 1024) {
      setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  useEffect(() => {
    handleResizeWindowWidth();

    window.addEventListener('resize', handleResizeWindowWidth);
    return () => {
      window.removeEventListener('resize', handleResizeWindowWidth);
    };
  }, [handleResizeWindowWidth]);

  return deviceType;
}
