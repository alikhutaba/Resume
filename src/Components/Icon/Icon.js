import React from "react";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { VscMail } from "react-icons/vsc";
import { MdPhoneIphone } from "react-icons/md";

import "./Icon.css";

const linkedinIcon = <SiLinkedin size={70}></SiLinkedin>;
const gitHubIcon = <SiGithub size={70}></SiGithub>;
const mailIcon = <VscMail size={70}></VscMail>;
const phoneIcon = <MdPhoneIphone size={70}></MdPhoneIphone>;


export default function Icon(props) {
    const { myClassName, myHref } = props;
    const icon =
        myClassName === "linkedin"
            ? linkedinIcon
            : myClassName === "github"
                ? gitHubIcon
                : myClassName === "mail"
                    ? mailIcon
                    : myClassName === "phone"
                        ? phoneIcon : null

    return (
        <a
            className={myClassName}
            href={myHref}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </a>
    );
}
