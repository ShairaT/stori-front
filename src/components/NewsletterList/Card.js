import React from "react";
import "tailwindcss/tailwind.css";
import cx from "classnames";

function Card({newsletter}) {
  return (
    <div className="justify-center items-center flex px-5">
      <div className="bg-white flex flex-col h-full  md:justify-start md:flex-row p-[22px] gap-[15px] sm:gap-[30px] md:gap-[50px] lg:gap-[30px] w-full max-w-[1200px] ">
        <div className="flex justify-center">
          <img
            alt=""
            className=" w-[387px] h-[300px] object-cover"
            src={newsletter?.image_url_path}
          />
        </div>

        <div className="flex flex-col w-full  md:max-w-[700px] justify-between text-start items-center md:text-start  md:items-start">
          <div>
            <h2 className=" font-normal text-4xl lg:pt-[5px]">
              {newsletter?.title}
            </h2>

            <div className="flex flex-col">
              <p className="font-bold mt-3 text-xl">May, 2023</p>

              <p className="font-normal text-xl pt-[15px] lg:pt-[25px] max-w-[590px]">
                {newsletter?.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap sm:flex-row  w-full justify-between sm:items-end">
            <button
              className="relative border transition-all duration-300 py-[5px] w-max rounded-[30px] group hover:bg-[#4AC1E0] mt-[15px] px-[15px] border-[#4AC1E0] "
              target="_self"
              href={"/"}
            >
              <div className="flex items-center">
                <span className="text-lg  transition-all duration-300 text-[#4AC1E0] group-hover:text-white  font-bold ">
                  Último boletin
                </span>
                <span className="text-lg mt-1 ml-2 transition-all duration-300 leading-[25.2px] group-hover:text-white text-[#4AC1E0] font-bold ">
                  ⭢
                </span>
              </div>
            </button>
            <form className="flex items-end flex-wrap gap-3">
              <input
                className={cx(
                  "border border-lightBlue h-[41px] rounded-full  px-[20px]  !focus:border-lightBlue ",
                  "text-[18px]  text-[#4AC1E0] border-lightBlue"
                )}
                // onChange={(e) =>
                //   setFormData({ ...formData, email: e.target?.value })
                // }
                // required
              />
              <button
                className="relative border transition-all duration-300 py-[5px] w-max rounded-[30px] group hover:bg-[#4AC1E0] mt-[15px] px-[15px] border-[#4AC1E0] "
                type="submit"
              >
                <div className="flex items-center">
                  <span className="text-lg  transition-all duration-300 text-[#4AC1E0] group-hover:text-white  font-bold ">
                    Suscribirse
                  </span>
                  <span className="text-lg mt-1 ml-2 transition-all duration-300 leading-[25.2px] group-hover:text-white text-[#4AC1E0] font-bold ">
                    ⭢
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
