
import './App.css';

import Header from './components/header';
import PortfolioContainer from './components/PortfolioContainer';

import { Provider } from 'react-redux';
import appStore from './Utils/store';

function App() {
 

  return (
    <Provider  store={appStore}>
      <div>
          <div  style={{backgroundColor:"rgba(33,33,36,1)"}} className=" w-[1440px] h-[920px] text-white ">
              <Header/>
              <PortfolioContainer/>
            
          </div>
      
      </div>

    </Provider>
    
  )
}

export default App
