"use client";

import { useNavigate } from "react-router-dom";
import "../style.css";
import IDP from "../assets/images/png/idp-ielts.webp";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();
    return (
        <>
            <main className="pr-[55px] lg:pl-[0px] bg-[#fff]">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="pt-[70px] items-center flex-col relative lg:left-[0px] lg:top-[0px] flex lg:flex-row lg:flex-col lg:items-start text-[#fff] lg:pl-[76px] one-div">
                        <h1 className="lg:text-[51px] text-[35px] font-[600] leading-[62px] mb-[98px]">
                            Create your <span className="inline lg:block">account</span>
                        </h1>

                        <h3 className="text-[22px] hidden lg:block mb-[80px]">
                            Create an account using email.
                        </h3>

                        <h2 className="text-[17px] text-[#000] lg:text-start text-center lg:relative lg:text-[22px] absolute top-[400px] lg:top-[0px] lg:text-[#fff] font-[600] mb-[20px]">
                            Already have an IDP IELTS account?
                        </h2>

                        <button
                            onClick={() => navigate("/login")}
                            className="w-[275px] h-[60px] absolute top-[450px] lg:top-[0px] text-[#FFf] bg-[#00AAAD] lg:relative font-[700] hover:text-[#fff] duration-150 transition-all hover:border-[1px] hover:bg-[#A2071F] hover:border-[#fff] lg:bg-[#fff] rounded-[5px] lg:text-[#A2071F] text-[20px]"
                        >
                            Log in
                        </button>
                    </div>

                    <div className="mt-[30px] pl-[35px] lg:mt-[165px] lg:mr-[140px] mr-[0px]">
                        <h1 className="text-[18px] text-center lg:text-start lg:text-[22px] font-[600] mb-[27px]">
                            Sign-up using your email
                        </h1>

                        <div className="flex items-center">
                            <input
                                type="text"
                                required
                                className="outline-none border-[#00000020] rounded-l-[10px] border-[1px] pt-[15px] pb-[10px] pl-[17px] pr-[73px]"
                                placeholder="example@mail.com"
                            />
                            <button type="submit" className="p-[11px] outline-none hover:text-[#fff] duration-200 transition-all text-[20px] w-[75px] rounded-r-[10px] font-[700] text-[#BFC0C0] bg-[#919191]">
                                Next
                            </button>
                        </div>
                    </div>

                    <div>
                        <img className="w-[220px] mt-[15px] hidden lg:block" src={IDP} alt="idp" />
                    </div>
                </div>

                <Outlet />
            </main>
        </>
    );
};

export default Layout;
