import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
const languages = [
    { id: 71, name: 'Python', avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg' },
    { id: 62, name: 'Java', avatar: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
    { id: 50, name: 'C', avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' },
    { id: 54, name: 'C++', avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
    { id: 63, name: 'JS', avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
    { id: 73, name: 'Rust', avatar: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/rust-1.png' },
    { id: 60, name: 'Go', avatar: 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg' },
];
const SelectLanguages = ({ onChange, value }) => {
    const [selected, setSelected] = useState(languages[0]);
    useEffect(() => {
        const selectedLanguage = languages.find((lang) => lang.id === value);
        if (selectedLanguage)
            setSelected(selectedLanguage);
    }, [value]);
    const handleChange = (language) => {
        setSelected(language);
        onChange(language.id);
    };
    return (_jsx(Listbox, { value: selected, onChange: handleChange, children: _jsxs("div", { className: "relative", children: [_jsxs(ListboxButton, { className: "relative w-[150px] cursor-default rounded-md bg-dark py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-accent sm:text-sm sm:leading-6", children: [_jsxs("span", { className: "flex items-center", children: [selected?.avatar && _jsx("img", { src: selected.avatar, alt: "Selected language", className: "h-5 w-5 flex-shrink-0 rounded-full" }), _jsx("span", { className: "ml-3 block truncate", children: selected?.name })] }), _jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2", children: _jsx(ChevronUpDownIcon, { "aria-hidden": "true", className: "h-5 w-5 text-gray-400" }) })] }), _jsx(ListboxOptions, { className: "absolute z-10 mt-1 max-h-56 w-[150px] overflow-auto rounded-md bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: languages.map((language) => (_jsxs(ListboxOption, { value: language, className: "group relative cursor-default select-none py-2 pl-3 pr-9 text-white hover:cursor-pointer data-[focus]:bg-accent data-[focus]:text-white", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: language.avatar, alt: language.name, className: "h-5 w-5 flex-shrink-0 rounded-full" }), _jsx("span", { className: "ml-3 block truncate font-normal group-data-[selected]:font-semibold", children: language.name })] }), _jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-4 text-accent group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden", children: _jsx(CheckIcon, { "aria-hidden": "true", className: "h-5 w-5" }) })] }, language.id))) })] }) }));
};
export default SelectLanguages;
