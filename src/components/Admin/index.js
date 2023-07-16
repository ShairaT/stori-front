import React, { useRef, useState } from "react";
import cx from "classnames";
import { useEffect } from "react";
import NewsletterCreationForm from "./NewsletterCreationForm";
import NewsletterList from "../NewsletterList";

const Admin = ({ data = {} }) => {
  return (
    <section className="pb-[24px] pt-[30px] sm:pt-[70px] sm:pb-[50px] md:pb-[75px] flex flex-col px-5">
      <NewsletterCreationForm />
      <NewsletterList />
    </section>
  );
};

export default Admin;
