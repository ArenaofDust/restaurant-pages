import "./styles/style.css"
import loadHomeTab from "./components/home";
import loadAboutTab from "./components/about";
import loadMenuTab from "./components/menu";

const buttonListener = () =>  {
    document.getElementById("home").addEventListener("click", loadHomeTab);
    document.getElementById("about").addEventListener("click", loadAboutTab);
    document.getElementById("menu").addEventListener("click", loadMenuTab);

};


loadHomeTab();
buttonListener();