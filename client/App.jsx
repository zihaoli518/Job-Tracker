import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState('');

  return (

    <ThemeContext.Provider>
      <UserContext.Provider>
        <div id='appDiv'>
          <Routes>
            <Route path='/' element={<Login setUser={setUser}/>} />
            <Route path='/signup' element= {<Signup />} />
            <Route path='/gamepage' element= {<Gamepage user={user}/>} />
          </Routes>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>

  );
}