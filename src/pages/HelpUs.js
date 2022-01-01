import React, { useEffect } from 'react';

import './styles/HelpUs.css';

import EditPage from '../components/EditPage';

import buttonImage from '../images/1.png';

function HelpUs() {
  useEffect(() => {
    document.title = 'Help Us';
  }, []);

  return (
    <>
      <div className="help">
        <div className="help__info">
          <h1 className="help__title">Support The Rick and Morty API</h1>
          <p className="help__subTitle">
            Help to maintain The Rick and Morty API's infrastructure!
          </p>
          <p className="help__text">
            If you are using the API for your app, your online tutorials or your
            coding challenges, please consider supporting us to help keep the
            project alive.
          </p>
          <p className="help__text">
            We are not getting any money from this and we use our free time to
            keep the API running and the data up to date. Every contribution,
            however big or small, is super valuable for our future.
          </p>
          <p className="help__text">Thanks!</p>
          <a className="" href="/">
            <img className="help__btn" src={buttonImage} alt="" />
          </a>
        </div>
        <EditPage />
      </div>
    </>
  );
}

export default HelpUs;
