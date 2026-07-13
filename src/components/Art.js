import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dialog, DialogContent, DialogDescription, DialogTitle, } from "@/components/ui/dialog";
import { useState } from "react";
import { artworks } from "@/constants/index";
const Art = () => {
    const [selectedArt, setSelectedArt] = useState(null);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "image-grid", children: artworks.map((art) => (_jsx("div", { className: `${art.orientation} cursor-pointer`, onClick: () => setSelectedArt(art), children: _jsx("img", { className: art.orientation, src: art.src, alt: art.title }) }, art.src))) }), _jsx(Dialog, { open: !!selectedArt, onOpenChange: () => setSelectedArt(null), children: _jsx(DialogContent, { showCloseButton: false, className: "sm:max-w-6xl bg-transparent shadow-none ring-0 border-0 p-0", children: selectedArt && (_jsxs(_Fragment, { children: [_jsx("img", { src: selectedArt.src, alt: selectedArt.title, className: "max-h-[45vh] flex object-center m-auto object-contain" }), _jsxs("div", { className: "mt-5 text-center", children: [_jsx(DialogTitle, { className: "text-2xl font-semibold text-white", children: selectedArt.title }), _jsx(DialogDescription, { className: "mt-2 max-w-2xl mx-auto text-gray-300", children: selectedArt.description })] })] })) }) })] }));
};
export default Art;
