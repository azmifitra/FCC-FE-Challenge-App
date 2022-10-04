import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import RandomQuote from './Pages/RandomQuote';
import MarkdownPreviewer from './Pages/MarkdownPreviewer';
import DrumMachine from './Pages/DrumMachine';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-quote-machine" element={<RandomQuote />} />
        <Route path="/markdown-previewer" element={<MarkdownPreviewer />} />
        <Route path="/drum-machine" element={<DrumMachine />} />
      </Routes>
    </div>
  );
}

export default App;
