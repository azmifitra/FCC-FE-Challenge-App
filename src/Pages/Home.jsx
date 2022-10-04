import { Routes, Route, Link } from 'react-router-dom';
import Header from '../Components/Home/Header';
import Card from '../Components/Home/Card';
import '../Assets/Home.scss';

function Home() {
  const dataCard = [
    {
      id: 1,
      name: 'Random Quote Machine',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis diam sit amet interdum iaculis. Etiam dui neque, rhoncus ac metus nec, consectetur dignissim massa',
      textHighlight: 'accent.',
      img: 'img-random-quote-machine.JPG',
      url: 'random-quote-machine',
    },
    {
      id: 2,
      name: 'Markdown Previewer',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis diam sit amet interdum iaculis. Etiam dui neque, rhoncus ac metus nec, consectetur dignissim massa',
      textHighlight: 'accent.',
      img: 'img-markdown-previewer.JPG',
      url: 'markdown-previewer',
    },
    {
      id: 3,
      name: 'Drum Machine',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis diam sit amet interdum iaculis. Etiam dui neque, rhoncus ac metus nec, consectetur dignissim massa',
      textHighlight: 'accent.',
      img: 'img-drum-machine.JPG',
      url: 'drum-machine',
    },
  ];

  return (
    <div className="home">
      <div className="mt-16">
        <Header />
        <div className="w-screen flex justify-evenly">
          {dataCard.map((el) => {
            return <Card data={el} key={el.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
