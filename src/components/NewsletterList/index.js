import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import cx from "classnames";
import Card from "./Card";
import AdminCard from "./AdminCard";
import { fetchNewsletters } from "../../api";

// const newsletterData = { title: "Title", description: "some description", imageUrl: "https://firebasestorage.googleapis.com/v0/b/stori-7daed.appspot.com/o/articles%2F5b7e5e9e-5768-4a90-a26e-fee3a6e1705e?alt=media"}

function NewsletterList() {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newslettersData = await fetchNewsletters();
        console.log(newslettersData);
        setNewsletters(newslettersData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-lightBlue ">
      <div className="flex flex-col gap-5 ">
        <h2 className="text-5xl my-10">NewsLetters</h2>
      </div>
      <div className="flex flex-col gap-5">
      {newsletters.map((newsletter) => (
          <Card key={newsletter.uuid} newsletter={newsletter} />
        ))}
      </div>
    </section>
  );
}

export default NewsletterList;
