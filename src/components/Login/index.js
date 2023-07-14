import React, { useRef, useState } from "react";
import cx from "classnames";
import { useEffect } from "react";

const Login = ({ data = {} }) => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });
  const [submitState, setSubmitState] = useState(0); // 0: idle, 1: submitting, 2: submitted
  const [error, setError] = useState("");

  return (
    <section className=" flex-col flex  w-full h-screen justify-center items-center bg-lightBlue">
      <div className="w-full max-w-[720px]">
        <div className="w-[72px] h-[3px] rounded-full " />
        <h2 className=" font-bold text-[31.75px] text-deepBlueDark leading-[22.49px] my-[20px] md:my-[25px]">
          Login
        </h2>

        <div className="flex mt-[24px] sm:mt-[50px] flex-col md:flex-row gap-[40px] md:gap-0">
          <div className="flex-1">
            <form action="#" method="POST" onSubmit={""}>
              <div className="flex flex-col xs:flex-row gap-[20px] xs:gap-[30px] w-full">
                <div className="flex-1">
                  {/* enter user here */}
                  <label
                    htmlFor="form-user"
                    className="block font-almarose text-deepBlueDark text-[18px] leading-[30px] font-medium md:ml-[15px] w-fit"
                  >
                    Usuario *
                  </label>
                  <input
                    id="form-user"
                    className={cx(
                      "border border-lightBlue w-full rounded-full py-[10px] px-[20px] mt-[4px] text-deepBlueDark",
                      "text-[18px] leading-[30px]"
                    )}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target?.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="mt-[20px] flex flex-col xs:flex-row gap-[20px] xs:gap-[30px] w-full">
                <div className="flex-1">
                  <label
                    htmlFor="form-Password"
                    className="block font-almarose text-deepBlueDark text-[18px] leading-[30px] font-medium md:ml-[15px] w-fit"
                  >
                    Password *
                  </label>
                  <input
                    type="password"
                    id="form-Password"
                    className={cx(
                      "border border-lightBlue w-full rounded-full py-[10px] px-[20px] mt-[4px] text-deepBlueDark",
                      "text-[18px] leading-[30px]"
                    )}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target?.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="flex w-full  justify-end">
                <input
                  type="submit"
                  className="block mt-[20px] cursor-pointer text-[14px] leading-[16.67px]  font-bold text-white transition-all duration-300 py-[12px] px-[24px] w-max min-w-[160px] text-center rounded-[30px] bg-[#003E2D] hover:bg-white hover:text-[#003E2D] disabled:opacity-60"
                  value={
                    !submitState
                      ? "Log In ⭢"
                      : submitState === 1
                      ? "Submitting..."
                      : "Submitted!"
                  }
                  disabled={submitState >= 1}
                />
              </div>
              {!!error && (
                <p className="text-[16px] leading-[25px] text-[#f47777] mt-[12px]">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
