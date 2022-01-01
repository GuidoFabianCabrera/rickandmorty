import React, { useEffect } from 'react';

import './styles/About.css';

import EditPage from '../components/EditPage';
// import reactDom from "react-dom";

function About() {
  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <>
      <div className="about">
        <h3 className="about__title">What is this?</h3>
        <p className="about__text">
          The Rick and Morty API is a RESTful and GraphQL API based on the
          television show{' '}
          <a className="about__link" href="/">
            Rick and Morty
          </a>
          . You will have access to about hundreds of characters, images,
          locations and episodes. The Rick and Morty API is filled with
          canonical information as seen on the TV show.
        </p>
        <a className="about__link" href="/">
          Check out the documentation to get started
        </a>
        <h3 className="about__title">Who are you?</h3>
        <p className="about__text">
          We are{' '}
          <a className="about__link" href="/">
            Axel Fuhrmann
          </a>
          , a guy who likes to develop things and{' '}
          <a href="/" className="about__link">
            Talita
          </a>
          , the "Rick and Morty data scientist" and hardcore fan.
        </p>
        <h3 className="about__title">Why did you build this?</h3>
        <p className="about__text">
          Because we were really interested in the idea of writing an open
          source project and also because Rick and Morty is our favorite show at
          the moment, so why not?
        </p>
        <h3 className="about__title">Technical stuff?</h3>
        <p className="about__text">
          We use{' '}
          <a className="about__link" href="/">
            Node
          </a>{' '}
          and{' '}
          <a className="about__link" href="/">
            MongoDB
          </a>{' '}
          to serve the API. All the data is formatted in{' '}
          <a className="about__link" href="/">
            json
          </a>{' '}
          and the entire project is hosted on{' '}
          <a className="about__link" href="/">
            Digital Ocean
          </a>{' '}
          and{' '}
          <a className="about__link" href="/">
            Netlify
          </a>
          .
        </p>
        <h3 className="about__title">How can I contribute to the project?</h3>
        <p className="about__text">
          You can{' '}
          <a className="about__link" href="/">
            help us to keep the project alive
          </a>{' '}
          and you can also contribute on{' '}
          <a className="about__link" href="/">
            GitHub
          </a>
          .
        </p>
        <h3 className="about__title">Copyright?</h3>
        <p className="about__text">
          Rick and Morty is created by Justin Roiland and Dan Harmon for{' '}
          <a className="about__link" href="/">
            Adult Swim
          </a>
          . The data and images are used without claim of ownership and belong
          to their respective owners.
        </p>
        <p className="about__text">
          This API is open source and uses a BSD license.
        </p>
      </div>
      <EditPage />
    </>
  );
}

export default About;
