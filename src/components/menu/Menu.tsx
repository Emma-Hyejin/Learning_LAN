import { useState } from "react";
import { Link } from "react-router-dom";

import { menuIdxStyle } from "./menuStyle";

const Menu = () => {
	const [selectTab, setSelectTab] = useState("home");

	const handleClickTab = (menu: string) => {
		setSelectTab(menu);
	};

	return (
		<div className="bg-zinc-500 min-w-52">
			<ul className="flex flex-col">
				<Link to="/">
					<li
						className={`${menuIdxStyle} ${selectTab === "home" ? "text-white bg-indigo-500" : ""}`}
						onClick={() => handleClickTab("home")}
					>
						홈
					</li>
				</Link>
				<li
					className={`${menuIdxStyle} ${selectTab === "lang" ? "text-white bg-indigo-500" : ""}`}
					onClick={() => handleClickTab("lang")}
				>
					문법
				</li>
				<li
					className={`${menuIdxStyle} ${selectTab === "etc" ? "text-white bg-indigo-500" : ""}`}
					onClick={() => handleClickTab("etc")}
				>
					기타
				</li>
			</ul>
		</div>
	);
};

export default Menu;
