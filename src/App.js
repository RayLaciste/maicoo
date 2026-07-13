import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Home, About, Contact, Art, Exhibitions } from "./components";
function App() {
    return (_jsxs(Router, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/art", element: _jsx(Art, {}) }), _jsx(Route, { path: "/exhibitions", element: _jsx(Exhibitions, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] })] }));
}
export default App;
