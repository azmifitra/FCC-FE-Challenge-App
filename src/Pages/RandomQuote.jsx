import '../Assets/RandomQuote.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomQuote() {
  const [currentQuote, setCurrentQuote] = useState({
    quote: '',
    author: '',
  });

  const fetchQuote = () => {
    axios.get(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`).then((res) => {
      console.log(res.data);
      const randomNum = Math.round(Math.random() * 100);
      setCurrentQuote({
        quote: res.data.quotes[randomNum].quote,
        author: res.data.quotes[randomNum].author,
      });
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchQuote();
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="RandomQuote">
      <h1 className="font-semibold text-white text-5xl pb-10">``Random Quote Machine``</h1>
      <div id="quote-box" className="bg-white px-20 py-12 rounded-md shadow-md w-1/2">
        <div>
          <h1 id="text" className="text-blue-900 font-bold text-xl">
            "{currentQuote.quote}"
          </h1>
          <p id="author" className="pt-2.5">
            - {currentQuote.author}
          </p>
          <button id="new-quote" className="bg-sky-900 py-2 px-4 mt-4 rounded-lg text-white" onClick={handleSubmit}>
            New Quote!
          </button>
        </div>
        <div className="w-16">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${currentQuote.quote}" - ${currentQuote.author}`} target={'_blank'} rel="noreferrer">
            <img src="https://img.icons8.com/color/48/FFFFFF/twitter--v1.png" alt="icon-twitter" />
          </a>
        </div>
      </div>
      <div>
        <p className="text-white font-medium mt-4">By Azmi Fitra</p>
        <p className="text-white font-medium mt-4">
          Challenged by{' '}
          <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine" rel="noreferrer" target="_blank" style={{ color: '#1a1a1a' }}>
            <u>freecodecamp.org</u>
          </a>
        </p>
      </div>
    </div>
  );
}

export default RandomQuote;
