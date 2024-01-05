import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
	return (
		<Container>
			<LeftSection>
				<Logo to="/">
					<img
						src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/logo.svg"
						alt="Logo"
					/>
				</Logo>
			</LeftSection>
			<MiddleSection>
				<Menu>
					Destinations <DownOutlined />
				</Menu>
				<Menu>
					Experiences <DownOutlined />
				</Menu>
				<Menu>
					Travel <DownOutlined />
				</Menu>
			</MiddleSection>
			<RightSection>
				<Search>
					<SearchOutlined />{" "}
				</Search>
				|
				<Lang>
					En <DownOutlined />
				</Lang>
			</RightSection>
		</Container>
	);
}

export default Header;
const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 20px 5%;
	background: rgb(0, 0, 0);
	background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 99999;
`;
const LeftSection = styled.div``;
const Logo = styled(Link)`
	width: 150px;
	display: block;
	img {
		width: 100%;
		display: block;
	}
`;

const MiddleSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;
`;
const Menu = styled.span`
	color: #fff;
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 14px;
	cursor: pointer;
	svg {
		font-size: 10px;
	}
`;
const RightSection = styled.div`
	color: #fff;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
`;
const Lang = styled.span`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 5px;
	font-size: 14px;
	cursor: pointer;
	svg {
		font-size: 10px;
	}
`;
const Search = styled.span`
	color: #fff;
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 14px;
	cursor: pointer;
	svg {
		font-size: 16px;
	}
`;
