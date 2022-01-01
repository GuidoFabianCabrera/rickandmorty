import React from 'react';

import './styles/CharacterCard.css';

import Status from './services/Status';

import FirstSeen from '../components/services/FirstSeen';

const CharacterCard = (props) => {
  const asd = FirstSeen(props.episode[0]);

  return (
    <div className="characterCard">
      <div className="characterCard__container-image">
        <img className="characterCard__image" src={props.image} alt="" />
      </div>
      <div className="characterCard__content">
        <div className="content__info">
          <a className="link" href={props.url} target="_blank" rel="noreferrer">
            <h2 className="content__name">{props.name}</h2>
          </a>
          <div className="content__status">
            <div>
              <div className={Status(props.status)}></div>
              {props.status} - {props.species} {}
            </div>
          </div>
        </div>
        <div className="content__location">
          <div className="text-gray">Last known location:</div>
          <a
            className="link"
            href={props.location.url}
            target="_blank"
            rel="noreferrer">
            {props.location.name}
          </a>
        </div>
        <div className="content___seen">
          <div className="text-gray">First seen in:</div>
          <a
            className="link"
            href={props.episode[0]}
            target="_blank"
            rel="noreferrer">
            {asd}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
