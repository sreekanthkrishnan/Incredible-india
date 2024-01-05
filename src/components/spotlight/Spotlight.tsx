import React from "react";
import styled from "styled-components";
import BGVideo from "../../assets/videos/spotlight_video.mp4";

function Spotlight() {
	return (
		<Container>
			<Overlay></Overlay>
			<Video autoPlay muted loop>
				<source src={BGVideo} type="video/mp4" />
			</Video>
			<SlideContent>
				<Label>
					<span></span>Experience<span></span>
				</Label>
				<Title>Wildlife</Title>
			</SlideContent>
		</Container>
	);
}

export default Spotlight;
const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
`;
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #0000007b;
	z-index: 99;
`;
const Video = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const SlideContent = styled.div`
	position: relative;
	z-index: 999;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
`;
const Title = styled.h2`
	font-size: 70px;
	font-family: theme-font;
	color: #fff;
`;
const Label = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	span {
		width: 50px;
		height: 2px;
		display: block;
		background-color: #fff;
	}
`;
