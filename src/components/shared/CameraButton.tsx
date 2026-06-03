import React, { useEffect, useRef } from 'react';
import { ReactComponent as CameraIcon } from '../../assets/icons/camera-white.svg';
import cameraSound from '../../assets/camera.sound.mp3';
import { useWebHaptics } from 'web-haptics/react';
import { defaultPatterns } from 'web-haptics';

const MOBILE_MEDIA_QUERY = '(max-width: 767px)';

const CameraButton = ({ onClick }: { onClick: () => void }) => {
  const { trigger } = useWebHaptics();
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadSound = async () => {
      try {
        const response = await fetch(cameraSound);
        const arrayBuffer = await response.arrayBuffer();
        const decodeContext = new AudioContext();
        const buffer = await decodeContext.decodeAudioData(arrayBuffer);
        await decodeContext.close();

        if (!cancelled) {
          audioBufferRef.current = buffer;
        }
      } catch {
        // Ignore decode/network errors; button still works without sound.
      }
    };

    void loadSound();

    return () => {
      cancelled = true;
      audioBufferRef.current = null;
      void audioContextRef.current?.close();
      audioContextRef.current = null;
    };
  }, []);

  const playCameraSound = () => {
    const buffer = audioBufferRef.current;
    if (!buffer) return;

    void (async () => {
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContext();
        }

        const context = audioContextRef.current;
        if (context.state === 'suspended') {
          await context.resume();
        }

        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.start(0);
      } catch {
        // Ignore playback errors (e.g. autoplay restrictions).
      }
    })();
  };

  const handleClick = () => {
    playCameraSound();
    onClick();

    if (window.matchMedia(MOBILE_MEDIA_QUERY).matches) {
      trigger(defaultPatterns.success);
    }
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
