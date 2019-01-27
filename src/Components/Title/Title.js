import React from 'react';
import './Title.css';


class Title extends React.Component {
  render() {
    return (
      <div className="Title">
        <header className="Title-header">
          <div>
            <h1>The Beer Ranker</h1>
          </div>
          <div>
            <ul className='Beer-Types'>
              <li><a href='#'>Lager</a></li>
              <li><a href='#'>Stout</a></li>
              <li><a href='#'>Pilsner</a></li>
              <li><a href='#'>Ale</a></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Title;
