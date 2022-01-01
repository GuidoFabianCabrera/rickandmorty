import { useEffect, useState } from 'react';

const FirstSeen = (URL) => {
  const [firstSeen, setFirstSeen] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((respons) => respons.json())
      .then((data) => {
        setFirstSeen(data.name);
      });
  }, [URL]);

  return firstSeen;
};

export default FirstSeen;
