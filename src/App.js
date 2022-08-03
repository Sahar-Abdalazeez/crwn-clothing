import {Routes,Route} from 'react-router-dom';
import Home from './routes/Home/home.component';
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component';

const Shop = ()=>{
  return (<h1>hello this is h1 </h1>)
}


const  App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>} />
      <Route path='/Shop' element={<Shop/>} />
      <Route path='/auth' element={<Authentication/>} />

    </Route>
  </Routes>
  )
}

export default App;
