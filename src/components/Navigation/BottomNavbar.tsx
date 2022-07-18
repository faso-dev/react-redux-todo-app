import {Routes} from "../../config";

export const BottomNavbar = () => {
    return (
        <>
            <ul className="items">
                {Object.entries(Routes).map(([_, route], index) => (
                    <li className="items__item" key={index}>
                        <a href={route.path} className="items__item_link">
                            {route.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}