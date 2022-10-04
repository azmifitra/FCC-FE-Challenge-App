import '../Assets/DrumMachine.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrum } from '@fortawesome/free-solid-svg-icons';

function DrumMachine() {
  const [currentQuote, setCurrentQuote] = useState({
    quote: '',
    author: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="drum-machine" className="DrumMachine">
      <div className="header">
        <FontAwesomeIcon icon={faDrum} size="3x" className="mb-4" />
        <h1 className="font-semibold text-5xl pb-10">Drum Machine</h1>
      </div>
      <div className="container-drum">
        <div className="w-1/2 contwrap grid grid-cols-3 gap-4">
          <div id="drum-pad-q" className="drum-pad shadow-xl">
            Q
          </div>
          <div id="drum-pad-w" className="drum-pad shadow-xl">
            W
          </div>
          <div id="drum-pad-e" className="drum-pad shadow-xl">
            E
          </div>
          <div id="drum-pad-a" className="drum-pad shadow-xl">
            A
          </div>
          <div id="drum-pad-s" className="drum-pad shadow-xl">
            S
          </div>
          <div id="drum-pad-d" className="drum-pad shadow-xl">
            D
          </div>
          <div id="drum-pad-z" className="drum-pad shadow-xl">
            Z
          </div>
          <div id="drum-pad-x" className="drum-pad shadow-xl">
            X
          </div>
          <div id="drum-pad-c" className="drum-pad shadow-xl">
            C
          </div>
        </div>
        <div className="w-1/2 contwrap">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold">Power</p>
            <input type="checkbox" id="toggle-power" />
            <label for="toggle-power"></label>
          </div>
          <div id="display" className="display">
            <span>Drum 123</span>
          </div>
          <input type="range" class="range-style"></input>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold">Bank</p>
            <input type="checkbox" id="toggle-bank" />
            <label for="toggle-bank"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
