import { useNavigate } from 'react-router-dom';

function Card({ data }) {
  let navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={(e) => {
        e.preventDefault();
        navigate(`/${data.url}`);
      }}
    >
      <div className="heading pb-4 flex items-center justify-between">
        <h1> {data.name} </h1>
        <p className="smallnumber"> 00{data.id}.</p>
      </div>
      <div className="image">
        <img src={require(`../../Assets/Images/${data.img}`)} alt="img-random-quote-machine" className="h-36" />
      </div>
      <div className="explanation">
        <p>
          {' '}
          {data.desc} <span className="accent">{data.textHighlight}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
