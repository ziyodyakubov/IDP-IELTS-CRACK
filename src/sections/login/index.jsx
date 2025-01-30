import './style.css'
import 'boxicons'
import IDP from "../../assets/images/png/idp-ielts.webp";
import BackButton from "../../assets/images/svg/back-button.svg";


const App = () => {
    return (
        <>
            <main className='pr-[55px]'>

                <div className='flex justify-between '>
                    <div className='pt-[75px] flex flex-col items-start text-[#fff] pl-[75px] one-div'>
                        <img src={BackButton} alt="BackButton" className='w-[23px] cursor-pointer relative bottom-[40px] right-[30px]' />
                        <h1 className='text-[51px] font-[600] leading-[62px] mb-[100px]'>Log in to IDP <br></br> IELTS</h1>

                        <h3 className='text-[22px] mb-[80px] leading-[25px]'>Got an IDP IELTS account? Log in<br></br> using email.</h3>

                        <h2 className='text-[22px] font-[600] mb-[20px]'>Don’t have an account?</h2>

                        <button className='w-[275px] h-[60px] font-[700] hover:text-[#fff] duration-150 transition-all hover:border-[1px] hover:bg-[#A2071F] hover:border-[#fff] bg-[#fff] rounded-[5px] text-[#A2071F] text-[20px]'>Create an account</button>
                    </div>

                    <div className='mt-[165px] mr-[140px]'>
                        <h1 className='text-[22px] font-[600] mb-[35px]'>Log in with your email</h1>

                        <div className='flex flex-col items-center mb-[20px]'>
                            <input type="text" className='outline-none w-[315px] bg-[#FAFAFA] h-[60px] border-[#00000041] pl-[25px] rounded-t-[10px] border-t-[1px] border-l-[1px] border-r-[1px]' placeholder='yourname@gmail.com' />
                            <div className='outline-none pr-[5px] flex justify-between items-center w-[315px] bg-[#FAFAFA] h-[60px] border-[#00000041] pl-[25px] rounded-b-[10px] border-[1px]'>
                                <input type="password" className='outline-none w-[250px] bg-[#FAFAFA]' placeholder="********" />
                                <i className='bx text-[17px] cursor-pointer text-[#00000078] bxs-hide'></i>
                            </div>
                        </div>

                        <span className='text-[13px] mb-[70px] text-[#656565] hover:text-[#656565d0] flex justify-end cursor-pointer'>Forgot your password?</span>

                        <button className='w-[270px] h-[60px] rounded-[2px] text-[21px] text-[#C0BFC0] hover:bg-[#05AAAD] hover:text-[#fff] transition-all duration-200 font-[700] bg-[#919191]'>Log in</button>
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