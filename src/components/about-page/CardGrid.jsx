import React, { useMemo, useState } from "react";
import CardItem from "./CardItem";
import { ParagraphTitle } from "../Common";
/**
 * CardGrid component to display a grid of cards.
 * @param {Object} props - The props object.
 * @param {string} props.gridName - The name of the grid section.
 * @param {Array} props.cardList - The list of card items to display.
 * @returns {JSX.Element} JSX representation of the CardGrid component.
 */
const CardGrid = (props) => {
  const [visibleCount, setVisibleCount] = useState(20);
  const items = useMemo(() => props.cardList.slice(0, visibleCount), [props.cardList, visibleCount]);

  const canLoadMore = visibleCount < props.cardList.length;

  return (
    <div>
      <ParagraphTitle className="!text-bp-black !font-bold mb-2">
        {props.gridName}
      </ParagraphTitle>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center">
        {items.map((card, index) => (
          <CardItem
            key={index}
            img={card.img}
            title={card.title}
            linkedin={card.linkedin}
            position={card.position}
            lastPosition={card.lastPosition}
          />
        ))}
      </div>
      {canLoadMore && (
        <div className="flex justify-center mt-6">
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => setVisibleCount((c) => Math.min(c + 20, props.cardList.length))}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default CardGrid;
