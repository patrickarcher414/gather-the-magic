import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="block" id="contactFooter">
      <footer className="footer">
        <ul className="flex-right">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/patrickarcher414/proj-3"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
