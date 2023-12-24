import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import { useAppDispatch } from './redux/hooks/useTypeSelector';
import { fetchProducts } from './redux/reducer/productSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <Header/>
      <Products/>
    </>
  )
}

export default App
