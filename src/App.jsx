import Daisyui from './assets/daisyuinav'
import Navbar from './assets/navbar'
import Pdata from './assets/pricingdata'
import './App.css'
import ResultChart from './assets/resultChart'
import { Suspense } from 'react';


const pricingPromise = fetch('pricingdata.json').then(res=>res.json());

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Suspense>
                <Pdata pricingPromise={pricingPromise}></Pdata>
       </Suspense>

       <ResultChart></ResultChart>
       
    </div>
  )
}

export default App
