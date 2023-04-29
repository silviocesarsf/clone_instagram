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
import { Input } from "../../styles/Input/Input";
import { TextSpan } from "../../styles/TextSpan/TextSpan";
import { motion } from "framer-motion";

const Posts = ({ nameUser }) => {
	const [liked, setLiked] = useState(false);
	const [bookmarked, setBookmarked] = useState(false);
	const [randomId, setRandomId] = useState(Math.random());

	const minLikes = 650;
	const maxLikes = 11705;
	const randomNumber = Math.floor(
		Math.random() * (maxLikes - minLikes + 1) + minLikes
	);
	const [numberLikes, setNumberLikes] = useState(randomNumber);
	const [backgroundStyle, setBackgroundStyle] = useState({
		backgroundImage: "linear-gradient(to top, black, #272727)",
	});

	const [textComment, setTextComment] = useState("");

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

	const handleImageLoading = () => {
		setTimeout(() => {
			setBackgroundStyle({
				backgroundImage: `url("https://source.unsplash.com/random/?random=${randomId}")`,
			});
		}, 2000);
	};

	const handleTextComment = (e) => {
		setTextComment(e.target.value);
	};

	useEffect(() => {
		handleImageLoading();
	}, []);

	return (
		<Container
			style={backgroundStyle}
			onDoubleClick={handleLiked}
			className="post-container"
		>
			{liked ? (
				<>
					<div className="post-container_liked">
						<motion.div
							initial={{ opacity: "0", scale: "0%" }}
							animate={{ opacity: "1", scale: "100%" }}
						>
							<AiFillHeart className="heart-post_liked" />
						</motion.div>
					</div>
				</>
			) : (
				""
			)}
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
						{nameUser}
						<span className="post-date">2d</span>
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
					<UserName>{nameUser}</UserName>
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
					<Container className="input-comment">
						<Input
							type="text"
							onChange={handleTextComment}
							placeholder="Adicione um comentário"
						/>
						{textComment.length > 0 ? (
							<>
								<TextSpan className="button-post_comment">
									Publicar
								</TextSpan>
							</>
						) : (
							""
						)}
					</Container>
				</div>
			</Container>
		</Container>
	);
};

export default Posts;
