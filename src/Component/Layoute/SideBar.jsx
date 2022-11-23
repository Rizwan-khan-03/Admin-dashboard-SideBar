import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div> <div className="secondDash">
    <div className="sidebar2">
    <NavLink to="/layout/link1">
            <div className="sMenu_adds">
                <p>link1</p>
            </div>
        </NavLink>

        <NavLink to="/layout/link2">
            <div className="sMenu_adds">
                <p>link2</p>
            </div>
        </NavLink>

        <NavLink to="/layout/link3">
            <div className="sMenu_adds">
                <p>link3</p>
            </div>
        </NavLink>
    </div>
</div></div>
  )
}

export default SideBar