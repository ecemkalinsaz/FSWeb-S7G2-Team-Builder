import './App.css';
import {useState} from 'react';
import Form from './Form';

function App() {
  const [takimListesi, setTakimListesi] = useState([{name: 'Ecem', email: 'ecemm@gmail.com', rol: 'lider'}]);
  
  const handleTakimEkle = (yeniTakim) => {
    setTakimListesi((oncekiTakimListesi) => [...oncekiTakimListesi, yeniTakim]);
  };
  
  return (
    <div className="App">
      {takimListesi.map(takimUyesi => <p key={takimUyesi.email}>{takimUyesi.name}</p>)}
      <Form addTakim={handleTakimEkle} />
    </div>
  );
}

export default App;
