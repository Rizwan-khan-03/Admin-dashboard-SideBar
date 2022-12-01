import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div> 
      <div className="">
    <div className="">
    <NavLink to="layout/link1">
            <div className="">
                <p>link1</p>
            </div>
        </NavLink>

        <NavLink to="layout/link2">
            <div className="">
                <p>link2</p>
            </div>
        </NavLink>

        <NavLink to="layout/link3">
            <div className="">
                <p>link3</p>
            </div>
        </NavLink>
    </div>
    
</div>
</div>
  )
}

export default SideBar
// update  UI of Module Account pages ,
// Add Suppler,
// Add Consignor,
// Add Consignee ,
// Add unit
// Add Vehicle,
// and 
// add custom validation in register page for email,

// in Account Module 
// pending points is 

// Driver,
// Vendors