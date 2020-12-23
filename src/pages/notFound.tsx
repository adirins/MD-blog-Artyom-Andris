import React from 'react';

// @ts-ignore
const NotFound = ({ currentURL }) => {

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>
              {currentURL}  NotFound
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;