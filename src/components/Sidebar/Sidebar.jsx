import React, { useEffect } from "react";
import "./styles.css";
import { Container } from "../../styles/Container/Container";
import logoInsta from "../../assets/logo_instagram.png";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { UserPhoto } from "../../styles/UserPhoto/UserPhoto";
import { useMediaQuery } from "react-responsive";
import MobileBar from "../MobileBar/MobileBar";
import { NotificationSpan } from "../../styles/NotificationSpan/NotificationSpan";

const Sidebar = () => {
	const mobileScreen = useMediaQuery({
		query: "(max-width: 768px)",
	});

	return (
		<>
			{mobileScreen ? (
				<MobileBar />
			) : (
				<Container
					justify="flex-start"
					align="left"
					className="sidebar"
					padding="1.25rem 1.2rem"
					dir="column"
				>
					<div className="logo-instagram">
						<img src={logoInsta} alt="Logo instagram" />
					</div>
					<div className="navlinks">
						<ul>
							<div
								className="navlink-container"
								style={{ fontWeight: "bold" }}
							>
								<AiFillHome className="icon-navlink" />{" "}
								<p>Página inicial</p>
							</div>
							<div className="navlink-container">
								<BiSearch className="icon-navlink" />
								<p> Pesquisa</p>
							</div>
							<div className="navlink-container">
								<MdOutlineExplore className="icon-navlink" />{" "}
								<p>Explorar</p>
							</div>
							<div className="navlink-container">
								<BiMoviePlay className="icon-navlink" />{" "}
								<p>Reels</p>
							</div>
							<div className="navlink-container">
								<NotificationSpan>1+</NotificationSpan>
								<RiMessengerLine className="icon-navlink" />{" "}
								<p>Mensagens</p>
							</div>
							<div className="navlink-container">
								<AiOutlineHeart className="icon-navlink" />{" "}
								<p>Notificações</p>
							</div>
							<div className="navlink-container">
								<CgAddR className="icon-navlink" />
								<p>Criar</p>
							</div>
							<div className="navlink-container">
								<UserPhoto
									className="user-photo icon-navlink"
									width="30px"
									height="30px"
								/>
								<p>Perfil</p>
							</div>
						</ul>
					</div>
					<Container gap="1rem" className="button-more_sidebar">
						<HiOutlineMenu style={{ fontSize: "1.8em" }} />
						Mais
					</Container>
				</Container>
			)}
		</>
	);
};

export default Sidebar;
