import img from '../assets/img/cat.png';

export const CardItem = ({
  id,
  upper,
  name,
  type,
  present,
  count,
  units,
  description,
  description2,
  description3,
  style,
  status,
  changeAction,
}) => {
  return (
    <>
      <div className="card__item" onClick={() => changeAction(id)}>
        <div className={status === 'enabled' ? style : style + ' ' + status}>
          <div className="card__front">
            <div className="text">
              <p className="text__upper">{upper}</p>
              <p className="text__name">{name}</p>
              <p className="text__type">{type}</p>
              <p className="text__present">{present}</p>
            </div>
            <img className="image-cat" src={img} alt="cat"></img>
            <div className="circle">
              <p className="circle__count">{count}</p>
              <p className="circle__units">{units}</p>
            </div>
          </div>
        </div>
        <div className="description">
          <p
            className={
              status === 'enabled'
                ? 'description__text'
                : 'description__text disabled'
            }
          >
            {status === 'enabled'
              ? style === 'card__background'
                ? description
                : description2
              : description3}
          </p>
        </div>
      </div>
    </>
  );
};
