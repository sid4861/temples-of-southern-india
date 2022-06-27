
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';

export default function OrderPrint() {

    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className='min-h-screen bg-[#DCCFB4] flex flex-col items-center justify-around' >

            <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_xmk8txsz.json"
                style={{ height: '300px', width: '300px' }}
            >
            </Player>

            <form onSubmit={(e) => {
                e.preventDefault();
            }} >
                <div>
                    <p className='text-[18px] text-[#1E392D]' ><label for="address">Shipping address</label></p>
                    <textarea value={address} onChange={(e) => setAddress(e.target.value)} id="address" name="address" rows="4" cols="40" className="text-[#1E392D] mt-3 p-4 rounded-md outline-0 focus:outline-[#2F5B48] focus:outline focus:outline-2" ></textarea>
                </div>
                <div className='mt-8' >
                    <p className='text-[18px] text-[#1E392D]' ><label for="email">Email</label></p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" className="w-[100%] text-[#1E392D] mt-3 p-4 rounded-md outline-0 focus:outline-[#2F5B48] focus:outline focus:outline-2" />
                </div>


                <button type="submit" className='block mt-16 md:mt-8 px-36 py-4 bg-[#2F5B48] text-[#DCCFB4] shadow-[-6px_6px_0px_#CC6957]' >
                    <p className='animate-bounce' >Get it shipped</p>
                </button>
            </form>
        </div>
    )
}