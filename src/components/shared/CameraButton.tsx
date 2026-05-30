import React, { useEffect, useRef } from 'react';
import { ReactComponent as CameraIcon } from '../../assets/icons/camera-white.svg';
import cameraSound from '../../assets/camera.sound.mp3';
import { useWebHaptics } from 'web-haptics/react';

const AUDIO_POOL_SIZE = 4;

const CameraButton = ({ onClick }: { onClick: () => void }) => {
  const { trigger } = useWebHaptics();
  const audioPoolRef = useRef<HTMLAudioElement[]>([]);
  const poolIndexRef = useRef(0);

  useEffect(() => {
    audioPoolRef.current = Array.from({ length: AUDIO_POOL_SIZE }, () => {
      const audio = new Audio(cameraSound);
      audio.preload = 'auto';
      return audio;
    });
  }, []);

  const playCameraSound = () => {
    const pool = audioPoolRef.current;
    if (!pool.length) return;

    const audio = pool[poolIndexRef.current % pool.length];
    poolIndexRef.current += 1;
    audio.currentTime = 0;
    void audio.play().catch(() => {});
  };

  const handleClick = () => {
    playCameraSound();
    onClick();
    void trigger("nudge");
  };

  return (
    <button
      onClick={handleClick}
      className={`w-20 h-18 md:w-28 md:h-24 flex flex-col text-bp-white rounded-[10px] cursor-pointer
      bg-bp-black hover:bg-bp-darkest-grey active:bg-bp-dark-grey`}
    >
      {/* CONTENT */}
      <div className="flex flex-col items-center justify-center gap-[5px] md:gap-[7px] 
        px-[21px] pt-[14px] pb-[9px] md:px-[30px] md:pb-[12px] md:pt-[19px]">
        <CameraIcon className="w-9 h-7 md:w-12 md:h-9" />
        <p className="font-poppins text-bp-white uppercase text-center justify-start text-[10px] md:text-sm font-medium">click</p>
      </div>
    </button>
  );
};

export default CameraButton;
