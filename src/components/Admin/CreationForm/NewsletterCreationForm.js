import React, { useState } from "react";
import cx from "classnames";
import { createNewsletters } from "../../../api";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import 'react-multi-email/dist/style.css';

const NewsletterCreationForm = ({ data = {} }) => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    subscribers: [],
    image_file: null,
  });
  const [submitState, setSubmitState] = useState(0);
  const [error, setError] = useState("");
  const [focused, setFocused] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState(1);

    try {
      console.log("formData", formData);
      const parsedFormData = {...formData, subscribers: JSON.stringify(formData["subscribers"])}
      const response = await createNewsletters(parsedFormData);
      console.log(response.status);
      if (response.status === 201) {
        setSubmitState(2);
        window.location.reload();
      }
    } catch (error) {
      setSubmitState(0);
      setError("Error al crear el newsletter. Por favor, inténtalo de nuevo.");
    }
  };

  const submitButtonText = () => {
    if (submitState === 1) {
      return "Creando...";
    } else if (submitState === 2) {
      return "Creado!";
    } else {
      return "Crear Newsletter ⭢";
    }
  };

  return (
    <section className=' flex-col flex justify-center items-center '>
      <div className='w-full max-w-[1120px]'>
        <div className='w-[72px] h-[3px] rounded-full ' />
        <h2 className=' font-bold text-[31.75px] text-deepBlueDark leading-[22.49px] my-[20px] md:my-[25px]'>
          Creación de Newsletters!
        </h2>

        <div className='flex mt-[24px] sm:mt-[50px] flex-col md:flex-row gap-[40px] md:gap-0'>
          <div className='flex-1'>
            <form action='#' method='POST' onSubmit={handleSubmit}>
              <div className='flex flex-col xs:flex-row gap-[20px] xs:gap-[30px] w-full'>
                <div className='flex-1'>
                  {/* enter title here */}
                  <label
                    htmlFor='form-title'
                    className='block font-almarose text-deepBlueDark text-[18px] leading-[30px] font-medium md:ml-[15px] w-fit'
                  >
                    Título *
                  </label>
                  <input
                    id='form-title'
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
                <div className='flex-1'>
                  <label
                    htmlFor='form-author'
                    className='block font-almarose text-deepBlueDark text-[18px] leading-[30px] font-medium md:ml-[15px] w-fit'
                  >
                    Autor *
                  </label>
                  <input
                    id='form-author'
                    className={cx(
                      "border border-lightBlue w-full rounded-full py-[10px] px-[20px] mt-[4px] text-deepBlueDark",
                      "text-[18px] leading-[30px]"
                    )}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target?.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className='mt-[20px] flex flex-col xs:flex-row gap-[20px] xs:gap-[30px] w-full'>
                <div className='flex-1'>
                  <label
                    htmlFor='form-author'
                    className='block font-almarose text-deepBlueDark text-[18px] leading-[30px] font-medium md:ml-[15px] w-fit'
                  >
                    Lista de Emails
                  </label>
                  {/* <input
                    id='form-emailList'
                    className={cx(
                      "border border-lightBlue w-full rounded-full py-[10px] px-[20px] mt-[4px] text-deepBlueDark",
                      "text-[18px] leading-[30px]"
                    )}
                    onChange={(e) =>
                      setFormData({ ...formData, emailList: e.target?.value })
                    }
                  /> */}
                  <ReactMultiEmail
                    placeholder='Input your email'
                    emails={formData.subscribers}
                    onChange={(_emails) => {
                      setFormData({ ...formData, subscribers: _emails });
                    }}
                    autoFocus={true}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    getLabel={(email, index, removeEmail) => {
                      return (
                        <div data-tag key={index}>
                          <div data-tag-item>{email}</div>
                          <span
                            data-tag-handle
                            onClick={() => removeEmail(index)}
                          >
                          </span>
                        </div>
                      );
                    }}
                  />
                </div>
              </div>

              <div className='mt-[20px] flex-1'>
                <label
                  htmlFor='form-description'
                  className='block font-almarose text-deepBlueDark text-[18px] leading-[30px] font-medium md:ml-[15px] w-fit'
                >
                  Descripción
                </label>
                <textarea
                  id='form-description'
                  className={cx(
                    "border border-lightBlue w-full rounded-[36px] py-[10px] px-[20px] mt-[4px] min-h-[116px] text-deepBlueDark",
                    "text-[18px] leading-[30px] "
                  )}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target?.value })
                  }
                  required
                />
              </div>
              <div className='flex w-full flex-wrap justify-between'>
                <input
                  type='file'
                  className='block mt-[20px] cursor-pointer text-[14px] leading-[16.67px]  font-bold text-white transition-all duration-300 py-[12px] px-[24px] w-max min-w-[160px] text-center rounded-[30px] bg-[#003E2D] hover:bg-white hover:text-[#003E2D] disabled:opacity-60'
                  // // value={"Add Bulletin"}
                  // value={selectedFile}
                  onChange={(e) =>
                    setFormData({ ...formData, image_file: e.target.files[0] })
                  }
                  accept='image/png, image/jpg, image/jpeg'
                  disabled={submitState >= 1}
                  required
                />
                <input
                  type='submit'
                  className='block mt-[20px] cursor-pointer text-[14px] leading-[16.67px]  font-bold text-white transition-all duration-300 py-[12px] px-[24px] w-max min-w-[160px] text-center rounded-[30px] bg-[#003E2D] hover:bg-white hover:text-[#003E2D] disabled:opacity-60'
                  value={submitButtonText()}
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

export default NewsletterCreationForm;
