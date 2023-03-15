import { useGlobalContext } from "../Context/Context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./Data";

const SideBar = () => {
    const { isSideOpen, closeSideBar } = useGlobalContext();
    console.log(isSideOpen);
    return (
        <aside className={isSideOpen ? "sideBar showSideBar" : "sideBar"}>
            <div className="sideBarHeader">
                <button className="closeBtn" onClick={closeSideBar}><FaTimes /></button>
            </div>
            <ul className="links">
                {links.map(link => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}><a href={url}>{icon}{text}</a></li>
                    )
                })}
            </ul>
            <ul className="icons">
                {social.map(link => {
                    const { id, url, icon } = link;
                    return (
                        <li key={id}><a href={url}>{icon}</a></li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default SideBar;