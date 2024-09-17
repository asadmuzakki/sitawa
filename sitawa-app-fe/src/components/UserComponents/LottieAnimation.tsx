// LottieAnimation.tsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieAnimation: React.FC = () => {
  return (
    <Player
    className='lottie w-[100px]'
      src="https://lottie.host/75d6a9d9-2183-4f29-9e92-708b7d142c4f/czGmOyQ1kL.json"
      background="#ffffff"
      speed={1}
      
      loop
      autoplay
      controls
    />
  );
};

export default LottieAnimation;
