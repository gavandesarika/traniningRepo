import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Forms from './components/Forms';
import About from './components/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
    return ( <
        div className = "App" >
        <
        Router >
        <
        Link to = "" > Home < /Link> <
        Link to = "/about" > About < /Link> <
        Link to = "/forms" > Forms < /Link>

        <
        Route path = ""
        component = { Home } > < /Route> <
        Route path = "/about"
        component = { About } > < /Route> <
        Route path = "/forms"
        component = { Forms } > < /Route>

        <
        /Router> < /
        div >
    );
}

export default App;