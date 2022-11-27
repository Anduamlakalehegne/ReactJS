import React , {Component} from 'react'
import {FaHome} from 'react-icons/fa'
import { IconName } from "react-icons/ai";
import Wellcome from './components/Wellcome';
import SignIn from './components/SignIn';
import Dashbord from './components/Dashbord';
import Comp from './components/Comp';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
class App extends Component{
  render(){
  return (
    <div className="App">
       
         {/* <Wellcome /> */}
         {/* <SignIn /> */}
         <Dashbord></Dashbord>
         {/* <Comp></Comp> */}

    </div>
    
  );
}
}

export default App;
