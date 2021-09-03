import './App.css';
import Carousel from './component/carousel/carousel';

function App() {
  const images = [{
    img: 'https://pbs.twimg.com/profile_images/1218430337325232129/JEf_b9uG_400x400.jpg',
    alt: 'Racoon'
  },{
    img: 'https://i.natgeofe.com/k/6496b566-0510-4e92-84e8-7a0cf04aa505/red-fox-portrait_16x9.jpg?w=1200',
    alt: 'Fox'
  },{
    img: 'https://naturalsciences.org/calendar/wp-content/uploads/2020/08/Virginia-Opossum-NC-Wildlife-Resources-Commission.jpg',
    alt: 'Opossum'
  }]
  return (
    <div className="App">
      <header className="App-header">
        <h1>URL Image Carousel</h1>
        <Carousel imgs={images} size={3} />
      </header>
    </div>
  );
}

export default App;
