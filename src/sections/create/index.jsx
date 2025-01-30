import './style.css'
import IDP from "./../../assets/images/png/idp-ielts.webp";


const App = () => {
    return (
        <>
            <main className='pr-[55px]'>

                <div className='flex justify-between '>
                    <div className='pt-[70px] flex flex-col items-start text-[#fff] pl-[76px] one-div'>
                        <h1 className='text-[51px] font-[600] leading-[62px] mb-[98px]'>Create your <br></br> account</h1>

                        <h3 className='text-[22px] mb-[80px]'>Create an account using email.</h3>

                        <h2 className='text-[22px] font-[600] mb-[20px]'>Already have an IDP IELTS account?</h2>

                        <button className='w-[275px] h-[60px] font-[700] hover:text-[#fff] duration-150 transition-all hover:border-[1px] hover:bg-[#A2071F] hover:border-[#fff] bg-[#fff] rounded-[5px] text-[#A2071F] text-[20px]'>Log in</button>
                    </div>

                    <div className='mt-[165px] mr-[140px]'>
                        <h1 className='text-[22px] font-[600] mb-[27px]'>Sign-up using your email</h1>

                        <div className='flex items-center'>
                            <input type="text" className='outline-none border-[#00000020] rounded-l-[10px] border-[1px] pt-[15px] pb-[10px] pl-[17px] pr-[73px]' placeholder='example@mail.com' />
                            <button className='p-[11px] outline-none hover:text-[#fff] duration-200 transition-all text-[20px] w-[75px] rounded-r-[10px] font-[700] text-[#BFC0C0] bg-[#919191]'>Next</button>
                        </div>
                    </div>

                    <div>
                        <img className='w-[220px] mt-[15px]' src={IDP} alt="idp" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;