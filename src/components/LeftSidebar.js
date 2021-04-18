import React from 'react';
import {
    FcHome,
    FcReading,
    FcTodoList,
    FcVideoCall,
    FcAbout,
    FcIdea,
    FcShop,
    FcLike,
    FcBriefcase,
    FcDisclaimer,
    FcBusinessContact,
  } from "react-icons/fc";
  import { AiFillAudio } from "react-icons/ai";
  import { FaTags, FaDev } from "react-icons/fa";
  import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
  import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
  import { CgShapeHexagon } from "react-icons/cg";
  import { GrFormClose } from "react-icons/gr";
  

const LeftSidebar = () => {
    return (

        <aside className="leftBar">
            <nav className="leftBar__menu">
                <ul>
            {/* Video last left at 4:51 for state of toggle if user want more options or not */}
                    <li>
                        <a href="/home">
                            <i>
                                <FcHome />
                            </i>
                        Home
                    </a>
                    </li>
                    <li>
                        <a href="/list">
                            <i>
                                <FcReading />
                            </i>
                        Home
                    </a>
                    </li>
                    <li>
                        <a href="/podcast">
                            <i>
                                <AiFillAudio />
                            </i>
                        Podcast
                    </a>
                    </li>
                    <li>
                        <a href="/videos">
                            <i>
                                <FcVideoCall />
                            </i>
                        Video
                    </a>
                    </li>
                    <li>
                        <a href="/tags">
                            <i>
                                <FaTags />
                            </i>
                        Tags
                    </a>
                    </li>
                  <li>
                      <i></i>
                        <a href="#">More ...</a>

                  </li>


                </ul>
            </nav>

        </aside>
    )
}

export default LeftSidebar;