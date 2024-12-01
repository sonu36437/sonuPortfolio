import { useEffect } from 'react';


const ScrollSound = () => {
  useEffect(() => {
    let audio;
    let isInitialized = false;

    const initAudio = () => {
      if (!isInitialized) {
        audio = new Audio('./scroll-sound.mp3');
        audio.onerror = (e) => console.error('Audio loading error:', e);
        isInitialized = true;
        document.removeEventListener('click', initAudio);
      }
    };

    const handleScroll = () => {
      if (!audio) return; // Skip if audio isn't initialized yet
      
      // Prevent multiple sounds playing at once
      if (audio.currentTime > 0 && !audio.paused) {
        audio.currentTime = 0;
      }
      audio.volume = 0.2; // Adjust volume as needed
      audio.play().catch(err => console.log('Audio play failed:', err));
    };

    // Throttle the scroll event to prevent too many sound triggers
    let isScrolling;
    const throttledScroll = () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        handleScroll();
      }, 100); // Adjust this delay as needed
    };

    // Add click listener to initialize audio
    document.addEventListener('click', initAudio);

    window.addEventListener('scroll', throttledScroll);

    return () => {
    //   document.removeEventListener('click', initAudio);
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return null;
};

export default ScrollSound; 