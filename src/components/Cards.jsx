import { CardItem } from './CardItem';

export const Cards = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        return (
          <CardItem
            key={card.id}
            id={card.id}
            upper={card.upper}
            name={card.name}
            type={card.type}
            present={card.present}
            count={card.count}
            units={card.units}
            description={card.description}
          />
        );
      })}
    </>
  );
};
