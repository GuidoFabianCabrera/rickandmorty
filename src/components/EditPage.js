import React from 'react';

import './styles/EditPage.css';

function EditPage() {
  return (
    <div className="edit__container">
      <a className="edit" href="/">
        <svg
          className="edit__pencil"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 14 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path>
        </svg>
        edit this page
      </a>
    </div>
  );
}

export default EditPage;
