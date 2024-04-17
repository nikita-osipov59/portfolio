import React from "react";

import footerStyle from "./footer.module.scss";

const Footer = () => {
  return (
    <section className={footerStyle.footer}>
      <footer>
        <p className="pink">© 2024</p>
      </footer>
    </section>
  );
};

export default Footer;
