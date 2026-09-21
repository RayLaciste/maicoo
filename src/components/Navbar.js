import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (_jsxs("nav", { children: [_jsx("div", { id: "logo", children: _jsx(NavLink, { to: "/", children: "Michael Robles" }) }), _jsxs("ul", { children: [_jsx("li", { children: _jsx(NavLink, { to: "/art", children: "Art" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/exhibitions", children: "Exhibitions" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/about", children: "About" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/contact", children: "Contact" }) })] })] }));
};
export default Navbar;
