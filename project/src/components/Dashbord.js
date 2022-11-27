import React, { Component } from 'react'
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
import './style1.css';
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/> */ }
class Dashbord extends Component {
    render() {
        return (
            <div class="containerr">
                <div class="navigation">
                    <ul>
                        <li>
                            <span class="title"><FaHome size="2rem" color='white'></FaHome></span>
                        </li>

                        <li>
                            <span class="title"><AiFillCar size="2rem" color='white'></AiFillCar></span>
                        </li>
                        <li>
                            <span class="title"><RiGpsFill size="2rem" color='white'></RiGpsFill></span>
                        </li>
                        <li>
                            <span class="title"><MdMonitor size="2rem" color='white'></MdMonitor></span>
                        </li>
                        <li>
                            <span class="title"><FaUsers size="2rem" color='white'></FaUsers></span>
                        </li>
                        <li>
                            <span class="title"><HiBellAlert size="2rem" color='white'></HiBellAlert></span>
                        </li>
                        <li>
                            <span class="title"><HiDocumentReport size="2rem" color='white'></HiDocumentReport></span>
                        </li>
                        <li>
                            <span class="title"><FaRegIdCard size="1.8rem" color='white'></FaRegIdCard></span>
                        </li>
                        <li>
                            <span class="title"><BsFillChatDotsFill size="1.8rem" color='white'></BsFillChatDotsFill></span>
                        </li>
                        <li>
                            <span class="title"><FaUserAlt size="1.8rem" color='white'></FaUserAlt></span>
                        </li>
                        <li>
                            <span class="title"><AiFillSetting size="2rem" color='white'></AiFillSetting></span>
                        </li>
                        <li>
                            <span class="title"><FiLogOut size="2rem" color='white'></FiLogOut></span>
                        </li>
                    </ul>
                </div>
                <div>

                </div>
                <div className='second'>
                    <p>Total Number Of Vehicles</p>
                    <p><AiFillCar size="2rem" color='white' align-item='center'></AiFillCar></p>
                </div>
                <div className='second'>
                    <p>List Of users</p>
                    <p><FaUsers size="2rem" color='white' align-item='center'></FaUsers></p>

                </div>
                <div className='second'>
                    <p>Monitor Vehicles</p>
                    <p><MdMonitor size="2rem" color='white' align-item='center'></MdMonitor></p>

                </div>
                <div className='second'>
                    <p>Alert</p>
                    <p><HiBellAlert size="2rem" color='white' align-item='center'></HiBellAlert></p>

                </div>
                <div className='second'>
                    <p>Registration</p>
                    <p><FiLogOut size="2rem" color='white' align-item='center'></FiLogOut></p>
                </div>

            </div>

        )
    }
}


export default Dashbord