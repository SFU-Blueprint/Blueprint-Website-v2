import React, { useEffect, useMemo, useRef, useState } from "react";

const COPIES = 3;

const InteractiveCarousel = ({ children, autoScrollSpeed = 0.7 }) => {
  const trackRef = useRef(null);
  const dragStateRef = useRef({ isDragging: false, startX: 0, startScrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);
  const loopedChildren = useMemo(
    () => Array.from({ length: COPIES }, () => childrenArray).flat(),
    [childrenArray],
  );

  const normalizeLoopPosition = () => {
    const track = trackRef.current;
    if (!track) return;

    const singleLoopWidth = track.scrollWidth / COPIES;
    if (track.scrollLeft <= 0) {
      track.scrollLeft += singleLoopWidth;
    } else if (track.scrollLeft >= singleLoopWidth * 2) {
      track.scrollLeft -= singleLoopWidth;
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track || childrenArray.length === 0) return;

    const singleLoopWidth = track.scrollWidth / COPIES;
    track.scrollLeft = singleLoopWidth;
  }, [childrenArray.length]);

  useEffect(() => {
    if (childrenArray.length === 0) return;

    const intervalId = setInterval(() => {
      const track = trackRef.current;
      if (!track || dragStateRef.current.isDragging) return;

      track.scrollLeft += autoScrollSpeed;
      normalizeLoopPosition();
    }, 16);

    return () => clearInterval(intervalId);
  }, [autoScrollSpeed, childrenArray.length]);

  const handlePointerDown = (event) => {
    const track = trackRef.current;
    if (!track) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    const track = trackRef.current;
    if (!track || !dragStateRef.current.isDragging) return;

    const deltaX = event.clientX - dragStateRef.current.startX;
    track.scrollLeft = dragStateRef.current.startScrollLeft - deltaX;
    normalizeLoopPosition();
  };

  const handlePointerUp = () => {
    dragStateRef.current.isDragging = false;
    setIsDragging(false);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 md:w-48 bg-gradient-to-r from-bp-lightest-grey to-transparent" />

      <div
        ref={trackRef}
        className={`w-full overflow-x-scroll scrollbar-hide-custom ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <ul className="flex w-max gap-2 select-none">
          {loopedChildren.map((child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 md:w-48 bg-gradient-to-l from-bp-lightest-grey to-transparent" />
    </div>
  );
};

export default InteractiveCarousel;