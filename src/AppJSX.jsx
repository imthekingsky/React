import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'han';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className='orange'>{`hello! ${name}`}</h1>
      <ul>
        {
          list.map(item => <li>{item}</li>)
        }
      </ul>
      <img
      style={{width:'200px',height:'200px'}}
      src='https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
      alt=''></img>
      
    </>

  );
}

export default AppJSX;
