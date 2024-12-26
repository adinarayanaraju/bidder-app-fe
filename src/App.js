import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Button } from 'reactstrap';
import { useEffect } from 'react';
import { fetchTestData } from './redux/slices/testSlice';
function App() {
  const dispatch = useDispatch();
  const {data, isLoading, error} = useSelector((state)=> state.test)
  console.log('data is', data)
  // useEffect(()=>{
  //   dispatch(fetchTestData())
  // },[])
  return (
   <div className='mt-4'>
    <Button>Click me</Button>
   </div>
  );
}

export default App;
