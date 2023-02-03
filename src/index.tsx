// Router
import ReactDOM from "react-dom/client"

// Style
import "./index.css"

// Library
import { BrowserRouter } from "react-router-dom"

// Component
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
