import React, { useState, useEffect } from 'react';

import './styles/HomePage.css';

import Hero from '../components/Hero';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';

const randomNumber = Math.floor(Math.random() * 34) + 1;
const apiUrl = `https://rickandmortyapi.com/api/character?page=${randomNumber}`;

let x = 0;
let y = 0;

function HomePage() {
  document.title = 'The Rick and Morty API';

  const [api, setApi] = useState({ info: {}, results: [] });
  const [isFetch, setIsFetch] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((respons) => respons.json())
      .then((data) => {
        setApi(data);
        setIsFetch(false);
      });
  }, []);

  if (isFetch === false) {
    let e = api.results.length + 1;
    let a = e - 6;
    x = Math.floor(Math.random() * a);
    y = x + 6;
  }

  return (
    <>
      <Hero />
      <div className="characterCards__container">
        {isFetch ? (
          <Loading />
        ) : (
          api.results
            .slice(x, y)
            .map((data) => <CharacterCard {...data} key={data.id} />)
        )}
      </div>
    </>
  );
}

export default HomePage;
