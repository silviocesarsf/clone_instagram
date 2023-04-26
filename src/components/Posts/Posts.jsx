import React, { useEffect, useState } from "react";
import { Container } from "../../styles/Container/Container";
import "./styles.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { UserPhoto } from "../../styles/UserPhoto/UserPhoto";
import { UserName } from "../../styles/UserName/UserName";
import { motion } from "framer-motion";

const Posts = () => {
	const [liked, setLiked] = useState(false);
	const [bookmarked, setBookmarked] = useState(false);
	const [randomId, setRandomId] = useState(Math.random());

	const min = 650;
	const max = 6305;
	const randomNumber = Math.floor(
		Math.random() * (max - min + 1) + min
	);
	const [numberLikes, setNumberLikes] = useState(randomNumber);

	const handleLiked = () => {
		setLiked(!liked);
		setNumberLikes(numberLikes + 1);
		if (liked === true) {
			setNumberLikes(numberLikes - 1);
		}
	};

	const handleBookmarked = () => {
		setBookmarked(!bookmarked);
	};

	return (
		<Container
			style={{
				backgroundImage: `url("https://source.unsplash.com/random/?random=${randomId}")`,
			}}
			onLoad={() => console.log("Carregou!")}
			className="post-container"
		>
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
					<Container gap="10px" className="post-username">
						anyUser<span className="post-date">2d</span>
					</Container>
					<div className="post-location">Venceslau</div>
				</Container>
				<div className="post-button_more">...</div>
			</Container>
			<Container
				dir="column"
				justify="flex-start"
				align="space-between"
				gap="10px"
				className="post-details_container"
			>
				<Container
					justify="space-between"
					className="post-details_header"
				>
					<Container gap="20px" className="buttons-details_left">
						{liked ? (
							<AiFillHeart
								onClick={handleLiked}
								style={{ color: "#FF3040" }}
								className="icon-details"
							/>
						) : (
							<AiOutlineHeart
								onClick={handleLiked}
								className="icon-details"
							/>
						)}
						<TbMessageCircle2 className="icon-details" />
						<BsSend
							className="icon-details"
							style={{ fontSize: "1.5em" }}
						/>
					</Container>
					<div className="buttons-details_right">
						{bookmarked ? (
							<BsFillBookmarkFill
								style={{ opacity: "1" }}
								className="icon-details"
								onClick={handleBookmarked}
							/>
						) : (
							<BsBookmark
								onClick={handleBookmarked}
								className="icon-details"
							/>
						)}
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
					e outras{" "}
					<span className="number_likes">{numberLikes}</span>{" "}
					pessoas
				</Container>
				<Container
					justify="left"
					className="post-subtitle_container"
					gap="10px"
				>
					<UserName>silviocesarsf</UserName>
					Subtitle here ! 😁
				</Container>
				<div className="post-comments_container">
					<div className="post-comments_view_more">
						Ver todos os 42 comentários
					</div>
					<Container
						gap="10px"
						justify="left"
						className="comment"
					>
						<UserName>anyUser</UserName>
						Lorem ipsum dolor sit, amet consectetur
					</Container>
					<Container
						gap="10px"
						justify="left"
						className="comment"
					>
						<UserName>anyUser</UserName>
						Lorem ipsum dolor sit, amet consectetur
					</Container>
				</div>
			</Container>
		</Container>
	);
};

export default Posts;
