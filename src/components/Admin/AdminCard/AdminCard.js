import React, { useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import cx from "classnames";
import { createArticle, sendArticle, subscribeEmail } from "../../../api";
import "./AdminCard.css";

function AdminCard({ newsletter }) {
  const inputFileRef = useRef(null);
  const [error, setError] = useState("");
  const [errorSubscribe, setErrorSubscribe] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState(0);

  const [formDataArticle, setFormData] = useState({
    subject: "",
    article_file: null,
    newsletter_id: newsletter.uuid,
  });

  const onFilechange = (e) => {
    setFormData({
      ...formDataArticle,
      article_file: e.target.files[0],
    });
    setSelectedFile(e.target.files[0]);
  };
  const handleClick = () => {
    inputFileRef.current.click();
  };

  const sendArticleForm = async (e) => {
    e.preventDefault();
    setSubmitState(1)
    try {
      const response = await createArticle(formDataArticle);
      if (response.status === 201) {
        await sendArticle(response.data.article_id);
        setSubmitState(0)
        alert("Envío exitoso");
      }
    } catch (error) {
      setError("Error al enviar el artículo. Por favor, inténtelo de nuevo");
    }
  };
  const handleSubscribeEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await subscribeEmail(newsletter.uuid, email);
      if (response.status === 204) {
        setErrorSubscribe("El email ya está suscrito");
      } else {
        setErrorSubscribe("");
        alert("Email subscripto con éxito");
      }
    } catch (error) {
      console.log(error);
      setErrorSubscribe(
        "Error al suscribir el email. Por favor, inténtelo de nuevo."
      );
    }
  };

  return (
    <div className='justify-center items-center flex px-5'>
      <div className='bg-white flex flex-col h-full  md:justify-start md:flex-row p-[22px] gap-[15px] sm:gap-[30px] md:gap-[50px] lg:gap-[30px] w-full max-w-[1200px] '>
        <div className='flex justify-center'>
          <img
            alt=''
            className='w-[387px] h-[300px] object-cover'
            src={newsletter.image_url_path}
          />
        </div>

        <div className='flex flex-col w-full  md:max-w-[700px] justify-between text-start items-center md:text-start  md:items-start'>
          <div>
            <h2 className='font-normal text-4xl lg:pt-[5px]'>
              {newsletter.title}
            </h2>

            <div className='flex flex-col'>
              <p className='font-normal text-xl pt-[15px] lg:pt-[25px] max-w-[590px]'>
                {newsletter.description}
              </p>
            </div>
          </div>
          <form
            key='sendArticle'
            className='flex items-end flex-wrap gap-3'
            action='#'
            method='POST'
            onSubmit={sendArticleForm}
          >
            <input
              placeholder='Asunto'
              className={cx(
                "border border-lightBlue h-[41px] rounded-full  px-[20px]  !focus:border-lightBlue ",
                "text-[18px]  text-[#4AC1E0] border-lightBlue"
              )}
              onChange={(e) =>
                setFormData({ ...formDataArticle, subject: e.target?.value })
              }
              required
            />
            <button
              className={cx(
                "relative border transition-all duration-300 py-[5px] w-max rounded-[30px] group hover:bg-[#4AC1E0] mt-[15px] px-[15px] border-[#4AC1E0] ",
                {
                  "opacity-50 cursor-not-allowed": selectedFile,
                }
              )}
              key='btn-send-article'
              type='button'
              onClick={handleClick}
            >
              <input
                ref={inputFileRef}
                onChange={onFilechange}
                type='file'
                className={`block mt-[20px] relative border transition-all duration-300 py-[5px] w-max rounded-[30px] group hover:bg-[#4AC1E0] mt-[15px] px-[15px] border-[#4AC1E0] hide-input`}
                accept='image/png, .pdf'
                required
              />
              <span
                className={cx(
                  "text-lg transition-all duration-300 group-hover:text-white font-bold ",
                  {
                    "text-black": selectedFile, // Cambiar el color del texto si hay una imagen seleccionada
                  }
                )}
              >
                {selectedFile ? "Imagen seleccionada" : "Agregar imagen"}
              </span>
            </button>
            <button
              className={submitState === 0 ? "relative border transition-all duration-300 py-[5px] w-max rounded-[30px] group hover:bg-[#4AC1E0] mt-[15px] px-[15px] border-[#4AC1E0]" : "relative border transition-all duration-300 py-[5px] w-max rounded-[30px] group hover:bg-[#9bd8e8] mt-[15px] px-[15px] border-[#9bd8e8]"}
              type='submit'
              disabled={submitState === 1}
            >
              <div className='flex items-center'>
                <span className='text-lg transition-all duration-300 text-[#4AC1E0] group-hover:text-white font-bold'>
                  {submitState === 0 ? "Enviar newsletter" : "Enviando newsletter..."}
                </span>
                <span className='text-lg mt-1 ml-2 transition-all duration-300 leading-[25.2px] group-hover:text-white text-bold'>
                  ⭢
                </span>
              </div>
            </button>
            {!!error && (
              <p className='text-[16px] leading-[25px] text-[#f47777] mt-[12px]'>
                {error}
              </p>
            )}
          </form>
          <div className='flex justify-center flex-col flex-wrap sm:flex-row  w-full md:justify-between sm:items-end'>
            <form
              key='subscribeEmail'
              action='#'
              method='POST'
              className='flex items-end flex-wrap gap-3'
              onSubmit={handleSubscribeEmail}
            >
              <input
                type='email'
                className={cx(
                  "border border-lightBlue h-[41px] rounded-full  px-[20px]  !focus:border-lightBlue ",
                  "text-[18px]  text-[#4AC1E0] border-lightBlue"
                )}
                onChange={(e) => setEmail(e.target?.value)}
                placeholder='Email'
                required
              />
              <button
                className='relative border transition-all duration-300 py-[5px] w-max rounded-[30px] group hover:bg-[#4AC1E0] mt-[15px] px-[15px] border-[#4AC1E0] '
                type='submit'
                key='btn-subscribe'
              >
                <div className='flex items-center'>
                  <span className='text-lg  transition-all duration-300 text-[#4AC1E0] group-hover:text-white  font-bold '>
                    Subscribir usuario
                  </span>
                  <span className='text-lg mt-1 ml-2 transition-all duration-300 leading-[25.2px] group-hover:text-white text-[#4AC1E0] font-bold '>
                    ⭢
                  </span>
                </div>
              </button>
              {!!errorSubscribe && (
                <p className='text-[16px] leading-[25px] text-[#f47777] mt-[12px]'>
                  {errorSubscribe}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
