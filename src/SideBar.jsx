import { NavLink } from "react-router";
import comingSoon from "./assets/icons/commingSoon.svg";
import favourite from "./assets/icons/favourite.svg";
import newRelease from "./assets/icons/newRelease.svg";
import trending from "./assets/icons/trending.svg";
import watchLater from "./assets/icons/watchLater.svg";

export default function SideBar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#00d991" : "",
              color: isActive ? "#000" : "",
            })}
          >
            <img src={trending} width="24" height="24" alt="trending" />
            <span>Trending</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new_release"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#00d991" : "",
              color: isActive ? "#000" : "",
            })}
          >
            <img src={newRelease} width="24" height="24" alt="new release" />
            <span>New Releases</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            to="/coming_soon"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#00d991" : "",
              color: isActive ? "#000" : "",
            })}
          >
            <img src={comingSoon} width="24" height="24" alt="coming soon" />
            <span>Coming Soon</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            to="/favourite"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#00d991" : "",
              color: isActive ? "#000" : "",
            })}
          >
            <img src={favourite} width="24" height="24" alt="favourite" />
            <span>Favourites</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            to="/watch_later"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#00d991" : "",
              color: isActive ? "#000" : "",
            })}
          >
            <img src={watchLater} width="24" height="24" alt="watch Later" />
            <span>Watch Later</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
