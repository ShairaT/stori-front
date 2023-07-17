import React, { useState } from "react";
import cx from "classnames";
import { login } from "../../api";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submitState, setSubmitState] = useState(0); // 0: idle, 1: submitting, 2: submitted
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData);
      if (response.status === 200) {
        navigate("/admin");
      }
    } catch (error) {
      setSubmitState(0);
      setError("El email o contraseña es incorrecta");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className='flex-col flex w-full h-screen justify-center items-center bg-lightBlue'>
      <div className='w-full max-w-[720px]'>
        <div className='w-[72px] h-[3px] rounded-full ' />
        <h2 className='font-bold text-[31.75px] text-deepBlueDark leading-[22.49px] my-[20px] md:my-[25px]'>
          Login
        </h2>

        <div className='flex mt-[24px] sm:mt-[50px] flex-col md:flex-row gap-[40px] md:gap-0'>
          <div className='flex-1'>
            <form action='#' method='POST' onSubmit={handleSubmit}>
              <div className='flex flex-col xs:flex-row gap-[20px] xs:gap-[30px] w-full'>
                <div className='flex-1'>
                  {/* enter user here */}
                  <label
                    htmlFor='form-user'
                    className='block font-almarose text-deepBlueDark text-[18px] leading-[30px] font-medium md:ml-[15px] w-fit'
                  >
                    Email *
                  </label>
                  <input
                    id='form-user'
                    type='email'
                    name='email'
                    className={cx(
                      "border border-lightBlue w-full rounded-full py-[10px] px-[20px] mt-[4px] text-deepBlueDark",
                      "text-[18px] leading-[30px]"
                    )}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className='mt-[20px] flex flex-col xs:flex-row gap-[20px] xs:gap-[30px] w-full'>
                <div className='flex-1'>
                  <label
                    htmlFor='form-Password'
                    className='block font-almarose text-deepBlueDark text-[18px] leading-[30px] font-medium md:ml-[15px] w-fit'
                  >
                    Contraseña *
                  </label>
                  <div className='relative'>
                    <input
                      type={showPassword ? "text" : "password"}
                      id='form-Password'
                      name='password'
                      className={cx(
                        "border border-lightBlue w-full rounded-full py-[10px] px-[20px] mt-[4px] text-deepBlueDark",
                        "text-[18px] leading-[30px]"
                      )}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      type='button'
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer'
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 text-gray-400'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 4v.01M12 8v.01M12 12v.01M12 16v.01M4.93 4.93l.01-.011M7.76 7.76l.01-.011M4.93 19.07l.01-.011M7.76 16.24l.01-.011M16.24 16.24l-.01-.011M19.07 19.07l-.01-.011M16.24 7.76l-.01-.011M19.07 4.93l-.01-.011'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 text-gray-400'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 5a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V7a2 2 0 00-2-2h-4zm0 0V5a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2h-4a2 2 0 01-2-2zm0 0l-1 1m1-1l1-1'
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex w-full  justify-end'>
                <input
                  type='submit'
                  className='block mt-[20px] cursor-pointer text-[14px] leading-[16.67px]  font-bold text-white transition-all duration-300 py-[12px] px-[24px] w-max min-w-[160px] text-center rounded-[30px] bg-[#003E2D] hover:bg-white hover:text-[#003E2D] disabled:opacity-60'
                  value={
                    !submitState
                      ? "Log In ⭢"
                      : submitState === 1
                      ? "Loggeando..."
                      : "Loggeado!"
                  }
                  disabled={submitState >= 1}
                />
              </div>
              {!!error && (
                <p className='text-[16px] leading-[25px] text-[#f47777] mt-[12px]'>
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
