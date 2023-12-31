import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';

function AppProfile() {
  const handleClick = (event) =>{
    console.log(event);
    alert("버튼이 클릭됨");
    }
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar 
      image={'https://images.unsplash.com/photo-1703504260184-bd5c5b3719c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'}
      isNew={true}
      />
      
      <Profile 
      image='https://images.unsplash.com/photo-1703504260184-bd5c5b3719c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'
      name='han'
      title='개발자'
      isNew={true}
      />
      <Profile 
      image='https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
      name='jab'
      title='개발자2'
      />
            <Profile 
      image='https://plus.unsplash.com/premium_photo-1703701580129-6c90479fdb36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8'
      name='ian'
      title='개발자3'
      />
    </>

  );
}

export default AppProfile;
