import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Button } from 'reactstrap';
import { useEffect } from 'react';
import { fetchTestData } from './redux/slices/testSlice';
import Signup from './views/auth/Signup';
function App() {
  const dispatch = useDispatch();
  const {data, isLoading, error} = useSelector((state)=> state.test)
  console.log('data is', data)
  useEffect(()=>{
    dispatch(fetchTestData())
  },[])
  return (
   <div className='mt-4'>
    <Signup />
   </div>
  );
}

export default App;
