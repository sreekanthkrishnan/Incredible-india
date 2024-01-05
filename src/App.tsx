import styled from "styled-components";
import "./App.css";
import Header from "./components/general/header/Header";
import Spotlight from "./components/spotlight/Spotlight";

function App() {
	return (
		<Container>
			<Header />
			<Spotlight />
		</Container>
	);
}

export default App;
const Container = styled.div``;
