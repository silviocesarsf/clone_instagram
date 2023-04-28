import React from "react";
import "./styles.css";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { Container } from "../../styles/Container/Container";
import { CgAddR } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

const MobileBar = () => {
	return (
		<Container
			justify="space-around"
			className="mobile-bar"
			width="100%"
		>
			<AiFillHome className="mobile-bar_icon" />
			<BiSearch className="mobile-bar_icon"h />
			<MdOutlineExplore className="mobile-bar_icon" />
			<BiMoviePlay className="mobile-bar_icon" />
			<RiMessengerLine className="mobile-bar_icon" />
			<AiOutlineHeart className="mobile-bar_icon" />
			<CgAddR className="mobile-bar_icon" />
		</Container>
	);
};

export default MobileBar;
