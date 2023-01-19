import { CardItem } from './CardItem';

export const Cards = ({ cards, changeAction, setActive }) => {
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
            description2={card.description2}
            description3={card.description3}
            style={card.style}
            status={card.status}
            changeAction={changeAction}
            setActive={setActive}
          />
        );
      })}
    </>
  );
};
