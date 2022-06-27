import logo from './logo.svg';
import './App.css';
import Logo from "./assets/logo.svg";
import Chevron from "./assets/chevron-right.svg";
import Shipping from "./assets/shipping-graphic.svg";
import Wallet from "./assets/wallet-graphic.svg";
import { Transition } from "react-transition-group";
import { useEffect, useState } from "react";

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function App() {

  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className='min-h-screen bg-[#DCCFB4] grid gap-0 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1' >

      <Transition in={inProp} timeout={1000} appear={true} >
        {state => (
          <div  >
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }} className=' flex  h-[100%] flex-col items-center justify-evenly md:border-r-[4px] md:border-[#2F5B48]' >
              <img src={Logo} />
              <p className='w-3/4 md:w-3/5 text-[#1E392D] ' >
                <span className='font-bold text-[#CC6957]' > An NFT collection of 100 photographs </span>
                shot in 2021-2022 capturing the intricately carved temples and architecture of Hampi, Madurai and Thanjavur.
              </p>
            </div>
          </div>

        )}
      </Transition>

      <Transition in={inProp} timeout={1000} appear={true} >
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }} className=' flex  flex-col items-center justify-evenly' >
            <div>
              <button className=' mt-16 md:mt-0 px-32 py-4 bg-[#2F5B48] text-[#DCCFB4] shadow-[-6px_6px_0px_#CC6957]' onClick={() => window.open("https://opensea.io/collection/templesofsouthernindia", "_blank")} >
                <p className='animate-bounce' >Buy on opensea</p>
              </button>
              <div className='mt-16' >
                <p className='text-[#1E392D]' >Bought an NFT ? connect your wallet to order print</p>
                <div className='flex flex-row mt-2 md:mt-1 cursor-pointer items-center ' >
                  <p className='font-bold text-[#2F5B48] text-[18px] ' >Connect wallet</p>
                  <img src={Chevron} />
                </div>
              </div>
            </div>
            <div className=' mt-8 md:mt-0  w-3/4 md:w-1/2 py-8 md:py-0 ' >
              <div className='flex flex-row items-center ' >
                <img src={Shipping} className="animate-bounce" />
                <p className='text-[14px] text-[#1E392D] ml-4' >
                  For every NFT you own, get a 9X12 framed print shipped with no additional shipping charges.
                </p>
              </div>
              <div className='flex flex-row items-center mt-4 ' >
                <img src={Wallet} className="animate-bounce"/>
                <p className='text-[14px] text-[#1E392D] ml-4' >
                  Connect from the address which contains the NFT.
                </p>
              </div>
            </div>
          </div>

        )}
      </Transition>


    </div>
  );
}

export default App;
