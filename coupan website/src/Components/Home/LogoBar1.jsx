import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import './LogoBar1.css';
// import logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";

function LogoBar1({logo}) {
    const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <div className="container logocontainer d-flex p-0">
        <Link href="" className="d-flex align-items-center atag">
            <img src={apiUrl+logo} alt="logo" />
        </Link>
    </div>
  )
}

export default LogoBar1