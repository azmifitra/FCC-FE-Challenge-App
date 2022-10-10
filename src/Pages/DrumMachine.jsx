import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrum } from '@fortawesome/free-solid-svg-icons';
import '../Assets/DrumMachine.scss';
import { bankOne, bankTwo } from '../Helper/constant.js';

function DrumPad({ data, updateDisplay, power, bank, volume }) {
  const [activePad, setActivePad] = useState(false);

  const playSound = () => {
    if (power) {
      const sound = document.getElementById(data.keyTrigger);
      sound.volume = volume / 100;
      sound.currentTime = 0;
      sound.play();
      setActivePad(true);
      setTimeout(() => setActivePad(false), 150);
      updateDisplay(data.id.replace(/-/g, ' '));
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === data.keyCode) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [power, bank, volume]);

  useEffect(() => {
    if (volume) {
      updateDisplay('Volume: ' + volume);
    }
  }, [volume]);

  useEffect(() => {
    if (power) {
      updateDisplay('Power On');
    } else {
      updateDisplay('Power Off');
    }
  }, [power]);

  useEffect(() => {
    if (bank[0].id === 'Heater-1') updateDisplay('Heater Kit');
    else updateDisplay('Smooth Piano Kit');
  }, [bank]);

  return (
    <div id={`drum-pad-${data.keyTrigger}`} className={`drum-pad shadow-xl ${activePad ? 'active' : ''}`} value={data.keyCode} tabIndex="0" onClick={playSound} onKeyDown={handleKeyDown}>
      <span>{data.keyTrigger}</span>
      <audio id={data.keyTrigger} className="clip" src={data.url} />
    </div>
  );
}

function DrumMachine() {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(bankOne);
  const [volume, setVolume] = useState(50);
  const [currentDisplay, setCurrentDisplay] = useState('Hit The Drum!');

  const updateDisplay = (params) => {
    setCurrentDisplay(params);
  };

  const handleChangeVolume = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div id="drum-machine" className="DrumMachine">
      <div className="header">
        <FontAwesomeIcon icon={faDrum} size="3x" className="mb-4" />
        <h1 className="font-semibold text-5xl pb-10">Drum Machine</h1>
      </div>
      <div className="container-drum">
        <div className="w-1/2 contwrap grid grid-cols-3 gap-4">
          {bank.map((el) => {
            return <DrumPad key={el.id} data={el} power={power} bank={bank} volume={volume} updateDisplay={updateDisplay} />;
          })}
        </div>
        <div className="w-1/2 contwrap">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold">Power</p>
            <input type="checkbox" id="toggle-power" defaultChecked={power} onChange={() => setPower(!power)} />
            <label htmlFor="toggle-power"></label>
          </div>
          <div id="display" className="display">
            <span>{currentDisplay}</span>
          </div>
          <input type="range" className="range-style" min="0" max="100" step={1} value={volume} onChange={handleChangeVolume}></input>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold">Bank</p>
            <input
              type="checkbox"
              id="toggle-bank"
              defaultChecked={power}
              onChange={() => {
                bank === bankOne ? setBank(bankTwo) : setBank(bankOne);
              }}
            />
            <label htmlFor="toggle-bank"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
