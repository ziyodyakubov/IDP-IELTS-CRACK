"use client";

import 'react';
import "../../style.css";
import IELTS from "./../../assets/images/png/ielts-2.png";

const Layout = () => {
    return (
        <div className="bg-[#fff] min-h-screen">
            <header className="mb-[180px] sticky top-[0] bg-[#Fff] pl-[90px] shadow-xl z-30">
                <div className="flex items-center justify-between">
                    <div className="left flex items-center gap-[115px]">
                        <img className="w-[115px] cursor-pointer" src={IELTS} alt="IELTS logo" />

                        <div className="flex items-center gap-[25px]">
                            <div className="flex relative top-[5px] flex-col gap-[5px] ">
                                <div className="flex items-start gap-[12px]">
                                    <h2 className="cursor-pointer text-[15px] text-[#E31837]">My account</h2>
                                    <i className='bx cursor-pointer text-[25px] relative bottom-[3px] font-[700] text-[#E31837] bx-chevron-down'></i>
                                </div>

                                <div className="ajoyib h-[5px] w-[110px] rounded-[5px]">

                                </div>
                            </div>

                            <div className="flex gap-[10px]">
                                <h2 className="cursor-pointer text-[15px]">My tests</h2>
                                <i className='bx cursor-pointer text-[25px] bx-chevron-right'></i>
                            </div>
                        </div>
                    </div>

                    <div className="right flex items-center gap-[20px]">
                        <div className="user flex items-center gap-[17px]">
                            <img className="cursor-pointer" src="https://book.ielts.idp.com/assets/images/login-header.svg" alt="logo" />
                            <p className="text-[16px] cursor-pointer">Nodirbek</p>
                            <i className='bx bxs-chevron-down font-[600] cursor-pointer text-[25px] curso text-[#E31837]'></i>
                        </div>

                        <button className="flex cursor-pointer py-[38px] px-[50px] transition-all duration-150 hover:text-[#000] text-[18px] text-[#fff] ajoyib font-[600] items-center gap-[10px]"><i className='bx text-[20px] bx-calendar' ></i> Book a test</button>
                    </div>
                </div>
            </header>

            <main>
                <div className="container">
                    <h1 className="text-[30px] font-[600] text-[#2C2C33] mb-[10px]">Your latest score</h1>

                    <div className="ajoyib w-[80px] h-[5px] rounded-[5px]">

                    </div>

                    <div className="bgred flex items-start pt-[40px] drop-shadow-xl pl-[45px] mt-[30px] w-[1060px] h-[305px] rounded-b-[5px] rounded-r-[5px] bg-[#fff]">
                        <div>
                            <h2 className="text-[27px] relative top-[25px] font-[600]">Overall score</h2>

                            <h1 className="text-[117px] relative top-[10px] p-[0] m-[0] text-[#e31837]">7.0</h1>

                            <p className="text-[20px] font-[600]">1-Feb-2 IELTS on Computer Academic</p>
                        </div>

                        <div className="relative flex items-center gap-[30px] right-[0px] top-[30px]">
                            <div className="w-[140px] py-[30px] text-center px-[5px] h-[140px] bg-[#fff] drop-shadow-xl rounded-[10px]">
                                <h1 className="text-[25px] font-[600]">Listening</h1>
                                <h2 className="text-[#e31837] text-[36px] font-[700]">7.5</h2>
                            </div>

                            <div className="w-[140px] py-[30px] text-center px-[5px] h-[140px] bg-[#fff] drop-shadow-xl rounded-[10px]">
                                <h1 className="text-[25px] font-[600]">Reading</h1>
                                <h2 className="text-[#e31837] text-[36px] font-[700]">7.0</h2>
                            </div>

                            <div className="w-[140px] py-[30px] text-center px-[5px] h-[140px] bg-[#fff] drop-shadow-xl rounded-[10px]">
                                <h1 className="text-[25px] font-[600]">Writing</h1>
                                <h2 className="text-[#e31837] text-[36px] font-[700]">6.0</h2>
                            </div>

                            <div className="w-[140px] py-[30px] text-center px-[5px] h-[140px] bg-[#fff] drop-shadow-xl rounded-[10px]">
                                <h1 className="text-[25px] font-[600]">Speaking</h1>
                                <h2 className="text-[#e31837] text-[36px] font-[700]">6.5</h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-[65px] mb-[100px] cursor-pointer justify-end items-center gap-[20px]">
                        <h1 className="text-[18px] font-[600]">View my tests</h1>

                        <i className='bx text-[27px] bx-chevron-right-circle'></i>
                    </div>

                    <div className="mb-[40px]">
                        <h1 className="text-[27px] mb-[15px] font-[600]">Ask IELTS</h1>
                        <div className="ajoyib w-[80px] h-[5px] rounded-[5px]"></div>
                    </div>

                    <div className="w-[1060px] px-[60px] py-[45px] h-[320px] bg-[#fff] shadow-xl rounded-[10px] mb-[65px]">
                        <div className="pb-[30px] cursor-pointer flex items-start justify-between border-b-[1px] border-b-[#65656596]">
                            <h1 className="text-[23px] text-[#2C2C33] font-[600]">Where can I take an IELTS test?</h1>
                            <i className='bx text-[40px] text-[#E31837] bxs-chevron-up'></i>
                        </div>

                        <div className="pb-[30px] pt-[30px] cursor-pointer flex items-start justify-between border-b-[1px] border-b-[#65656596]">
                            <h1 className="text-[23px] text-[#2C2C33] font-[600]">Will I get a better band score, if I keep practising sample tests?</h1>
                            <i className='bx text-[40px] text-[#E31837] bxs-chevron-up'></i>
                        </div>

                        <div className="pt-[30px] pb-[30px] cursor-pointer flex items-start justify-between">
                            <h1 className="text-[23px] text-[#2C2C33] font-[600]">How is my IELTS test marked?</h1>
                            <i className='bx text-[40px] text-[#E31837] bxs-chevron-up'></i>
                        </div>
                    </div>

                    <p className="text-[22px] font-[600] mb-[65px]">Your test centre or the IELTS partners will not accept any responsibility in the event that your provisional result fail to display here, whether due to technical fault or administrative procedures.</p>
                </div>
            </main>
        </div>
    );
};

export default Layout;
