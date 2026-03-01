import React, { useState } from 'react';
import { ReactComponent as CameraIcon } from '../../assets/icons/camera-white.svg';

type CameraButtonProps = {
  onClick?: () => void;
  className?: string;
  size?: 'desktop' | 'mobile';
  'aria-label'?: string;
};

const CameraButton = ({
  onClick,
  className = '',
  size = 'desktop',
  'aria-label': ariaLabel = 'Upload photo',
}: CameraButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isDesktop = size === 'desktop';
  const dimension = isDesktop ? 'w-[120px] h-[120px]' : 'w-[72px] h-[72px]';

  let bgClass = 'bg-blueprint-linkHover';
  let iconColor = 'white';
  if (pressed) {
    bgClass = 'bg-blueprint-accent-lightBlue';
    iconColor = '#0146BE';
  } else if (hovered) {
    bgClass = 'bg-blueprint-accent-veryLightBlue';
    iconColor = '#0146BE';
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className={`flex items-center justify-center rounded-[10px] cursor-pointer transition-colors duration-150 ${bgClass} ${dimension} ${className}`}
      style={{ '--stroke-0': iconColor, '--fill-0': iconColor } as React.CSSProperties}
    >
      <CameraIcon className="w-[52%] h-[43%]" />
    </button>
  );
};

export default CameraButton;
