import React from "react";
import "tailwindcss/tailwind.css";
import cx from "classnames";
import Card from "./Card";
import AdminCard from "./AdminCard";

function NewsletterList() {
  return (
    <section className="bg-lightBlue ">
      <div className="flex flex-col gap-5 ">
        <h2 className="text-5xl my-10">NewsLetters</h2>
      </div>
      <div className="flex flex-col gap-5">
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
      </div>
    </section>
  );
}

export default NewsletterList;
