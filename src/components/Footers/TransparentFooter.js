/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
          <li>
              <a
                href="/idiom"
              >
                Idiom
              </a>
            </li>
            <li>
              <a
                href="/idiom"
              >
                Record
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            Team
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
