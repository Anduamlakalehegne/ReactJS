import React, { Component } from 'react'
import '../components/css/style.css';
import { FaHome } from 'react-icons/fa';
import { AiFillCar } from "react-icons/ai";
import { RiGpsFill } from "react-icons/ri";
import { MdMonitor } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiBellAlert } from "react-icons/hi2";
import { HiDocumentReport } from "react-icons/hi";
import { FaRegIdCard } from 'react-icons/fa';
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
export class Wellcome extends Component {
  render() {
    return (
      <div>
        <div className='first'>
          <ul>
            <li>
              <p><span className='title'><FaHome size="2rem" color='white'></FaHome></span></p>
            </li>

            <li>
              <p><span class="title"><AiFillCar size="2rem" color='white'></AiFillCar></span></p>
            </li>
            <li>
              <p><span class="title"><RiGpsFill size="2rem" color='white'></RiGpsFill></span></p>
            </li>
            <li>
              <p><span class="title"><MdMonitor size="2rem" color='white'></MdMonitor></span></p>
            </li>
            <li>
              <p><span class="title"><FaUsers size="2rem" color='white'></FaUsers></span></p>
            </li>
            <li>
              <p><span class="title"><HiBellAlert size="2rem" color='white'></HiBellAlert></span></p>
            </li>
            <li>
              <p><span class="title"><HiDocumentReport size="2rem" color='white'></HiDocumentReport></span></p>
            </li>
            <li>
              <p><span class="title"><FaRegIdCard size="1.8rem" color='white'></FaRegIdCard></span></p>
            </li>
            <li>
              <p> <span class="title"><BsFillChatDotsFill size="1.8rem" color='white'></BsFillChatDotsFill></span></p>
            </li>
            <li>
              <p><span class="title"><FaUserAlt size="1.8rem" color='white'></FaUserAlt></span></p>
            </li>
            <li>
              <p><span class="title"><AiFillSetting size="2rem" color='white'></AiFillSetting></span></p>
            </li>
            <li>
              <p><span class="title"><FiLogOut size="2rem" color='white'></FiLogOut></span></p>
            </li>
          </ul>


        </div>


        <div className='cla'>
          

        </div>


        <div className='third'>

        </div>
      </div>
    )
  }
}

export default Wellcome