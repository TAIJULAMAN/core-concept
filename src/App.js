// import logo from './logo.svg';
import './App.css';


 const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'sopno'},
  {name: 'shuvro', job: 'pathor'}
]


function App() {

  const nayoks = ['Rubel', 'Bappa raj', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anwar'];

  return (
    <div className="App">
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      <Friend name="kala jahangir" phone="01777"></Friend>
      <Friend name="daud ibrahim" phone="01999"></Friend>
    </div>
  );
}

function Person(props){
  return (
    <div className="person">
      <h1>{props.name}</h1>
  </div>
  )
}

function Friend(props){
  // console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.name}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}

export default App;