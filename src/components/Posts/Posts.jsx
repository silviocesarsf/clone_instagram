import React from "react";
import { Container } from "../../styles/Container/Container";
import "./styles.css";
import userPlaceholder from "../../assets/user_placeholder.png";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { UserPhoto } from "../../styles/UserPhoto/UserPhoto";
import { UserName } from "../../styles/UserName/UserName";

const Posts = () => {
	return (
		<Container className="post-container">
			<Container
				justify="left"
				align="flex-start"
				width="100%"
				heigth="30px"
				className="post-header"
			>
				<div className="post-photo_user">
					<UserPhoto width="40px" height="40px" />
				</div>
				<Container
					className="post-col_name"
					align="left"
					dir="column"
				>
					<div className="post-username">
						anyUser <span className="post-date">2 d</span>
					</div>
					<div className="post-location">Venceslau</div>
				</Container>
				<div className="post-button_more">...</div>
			</Container>
			<Container
				dir="column"
				justify="flex-start"
				align="space-between"
				className="post-details_container"
			>
				<Container
					justify="space-between"
					className="post-details_header"
				>
					<Container gap="10px" className="buttons-details_left">
						<AiOutlineHeart />
						<TbMessageCircle2 />
						<BsSend />
					</Container>
					<div className="buttons-details_right">
						<BsBookmark />
					</div>
				</Container>
				<Container justify="left" className="post-details_likes">
					<UserPhoto
						style={{ marginRight: "10px" }}
						height="15px"
						width="15px"
					/>
					Curtido por{" "}
					<UserName style={{ margin: "0 4px" }}>
						anyUser
					</UserName>{" "}
					e outras <span className="number_likes">9.142</span> pessoas
				</Container>
			</Container>
		</Container>
	);
};

export default Posts;
