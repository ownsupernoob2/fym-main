import * as Route from 'constants/routes';
import logo from 'images/logo-full.png';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { POLICY } from 'constants/routes';

import { Link } from 'react-router-dom';


const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            Contacts <br />
            email : sabashopservice@gmail.com
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
              <h5>
          &copy;&nbsp;
      Saba Shop {new Date().getFullYear()}. All Rights Reserved 
          
        </h5>
      </div>
      <div className="footer-col-3">
        <strong>
          <span>
          <Link to={POLICY}>
              Privacy Policy
            </Link>
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
