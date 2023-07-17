import React from "react";
import NewsletterCreationForm from "./CreationForm/NewsletterCreationForm";
import NewsletterList from "../NewsletterList";

const Admin = ({ data = {} }) => {
  return (
    <section className="pb-[24px] pt-[30px] sm:pt-[70px] sm:pb-[50px] md:pb-[75px] flex flex-col px-5">
      <NewsletterCreationForm />
      <NewsletterList page="admin" />
    </section>
  );
};

export default Admin;
