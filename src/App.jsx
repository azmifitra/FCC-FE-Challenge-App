import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import RandomQuote from './Pages/RandomQuote';
import MarkdownPreviewer from './Pages/MarkdownPreviewer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-quote-machine" element={<RandomQuote />} />
        <Route path="/markdown-previewer" element={<MarkdownPreviewer />} />
      </Routes>
    </div>
  );
}

export default App;
