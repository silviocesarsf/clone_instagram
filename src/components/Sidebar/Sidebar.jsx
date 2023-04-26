import React from "react";
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

const Sidebar = () => {
	return (
		<Container
			justify="flex-start"
			align="left"
			className="sidebar"
			padding="1.25rem 1.2rem"
			dir="column"
		>
			<div className="logo-instagram">
				<img src={logoInsta} alt="" />
			</div>
			<div className="navlinks">
				<ul>
					<div style={{ fontWeight: "bold" }}>
						<AiFillHome className="icon-navlink" /> Página
						inicial
					</div>
					<div>
						<BiSearch className="icon-navlink" /> Pesquisa
					</div>
					<div>
						<MdOutlineExplore className="icon-navlink" />{" "}
						Explorar
					</div>
					<div>
						<BiMoviePlay className="icon-navlink" /> Reels
					</div>
					<div>
						<RiMessengerLine className="icon-navlink" />{" "}
						Mensagens
					</div>
					<div>
						<AiOutlineHeart className="icon-navlink" />{" "}
						Notificações
					</div>
					<div>
						<CgAddR className="icon-navlink" />
						Criar
					</div>
					<div>
						<UserPhoto width="30px" height="30px" />
						Perfil
					</div>
				</ul>
			</div>
			<Container gap="1rem" className="button-more_sidebar">
				<HiOutlineMenu style={{ fontSize: "1.8em" }} />
				Mais
			</Container>
		</Container>
	);
};

export default Sidebar;
