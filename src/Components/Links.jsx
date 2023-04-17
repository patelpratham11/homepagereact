import "../Style/Links.css";
import { useEffect, useState } from "react";

const Link = ({ name, link }) => {
  return (
    <div className="link-container">
      <a href={link}>{name}</a>
    </div>
  );
};

const Links = () => {
  let data = [
    { name: "Canvas", link: "https://canvas.pitt.edu" },
    {
      name: "Mathys Lab",
      link: "https://drive.google.com/drive/u/0/folders/1QBG2OvbZ2L7Az2kG03pSQaUATKEaV5ah",
    },
    { name: "1520", link: "https://people.cs.pitt.edu/~nlf4/cs1520/#policies" },
    { name: "Github", link: "https://github.com/patelpratham11" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/patelpratham11/" },
    { name: "Personal Website", link: "https://prathampatel.netlify.app" },
    { name: "YouTube", link: "https://youtube.com" },
  ];
  let allLinks = data?.map((index, i) => (
    <Link key={index.name} name={index.name} link={index.link} />
  ));
  return (
    <div className="all-links-container">
      <h1>Links</h1>
      {allLinks}
    </div>
  );
};

export default Links;
