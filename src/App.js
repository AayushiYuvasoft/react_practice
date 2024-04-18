import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import ExampleComponent from './redux/Example';
import ErrorBoundary from './components/ErrorBoundry';
import useFetchList from './hooks/useFetchList';
import Cbc from './components/Cbc';
import Parent from './redux/ParentComponent';
import ProductPage from './components/Peoduct';
import FactorialCalculator from './components/Calculator';
import { Link, useNavigate } from 'react-router-dom';
import Counting from './components/Counting';
import MyInput from './components/MyInput';
import Counterr from './components/Counterr';
import Page from './components/Getdata';
import ResumeBuilder from './components/ResumeBuilder';
import Dummy from './components/Dummy';
import Counter from './Counter';
import News from './news';
import Timer from './Timer';
import LoadMore from './components/LoadMore';
import Slider from './components/Slider';

function App() {
  const navigate=useNavigate()
  const [number, setNumber] = useState("")
  const [data ,setdata]=useState([])
  const [click ,setClick]=useState(false)
  const renderCount = useRef(0);
// const {data ,loading ,error}=useFetchList()

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1
  // })
// 
  // async function fetchdata() {
  //   try {
  //     const controller=new AbortController()
  //     const {signal}=controller
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts' ,{signal});
  //     if (!res.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const resdata = await res.json()
  //     setdata(resdata)
  //   } catch (error) {
  //   // setData({ error: error.message });
  //   }
  // }


  // useEffect(() => {
  //   const controller = new AbortController(); 
  //   const { signal } = controller; 

  //   async function fetchdata() {
  //     try {
  //       const res = await fetch('https://jsonplaceholder.typicode.com/posts', { signal }); 

  //       if (!res.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const resdata = await res.json();
  //       setdata(resdata);
  //     } catch (error) {
  //       // Handle error
  //     }
  //   }

  //   fetchdata();

  //   return () => {
  //     controller.abort(); 
  //   };
  // }, []);

  // const clicktrue=()=>{
  //   setClick((previousState)=>!previousState)
  // }
  // console.log(data)
  return (
    <>
      {/* <h1>{renderCount.current}</h1>
      <input name="number" value={number} onChange={(e) => setNumber(e.target.value)} /> */}
       {/* <Parent/>  */}
       {/* <ProductPage/> */}
       {/* <FactorialCalculator /> */}
      {/* <ErrorBoundary>
        <ExampleComponent />
      </ErrorBoundary> */}
{/* <h1>Home page</h1>
<ul><li onClick={()=>{navigate("/home")}}>Home</li></ul>
      { data && 
        data?.map((ele)=>{
          return(
            <li>{ele?.title}</li>
          )
        })
      } */}
      {/* <Counting/> */}
      {/* <MyInput/> */}
      {/* <Counter/> */}
      {/* <News/> */}
      {/* <Timer/> */}
      {/* <Counterr/> */}
      {/* <Page/> */}
      {/* <ResumeBuilder/> */}
      {/* <Dummy/> */}
      {/* <LoadMore/> */}
      <Slider/>
       {/* <Cbc/>  */}
      {/* <button onClick={clicktrue}>clike me</button> */}
    </>
  );
}

export default App;
