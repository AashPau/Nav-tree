import "./App.css";
import { Nav } from "./Components/Nav";
import menus from "./Components/data";
function App() {
	return (
		<>
			<Nav menus={menus} />
		</>
	);
}

export default App;
