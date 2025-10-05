import { Provider } from 'react-redux';
import './App.css'
import Body from "./components/Body";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />} >
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
