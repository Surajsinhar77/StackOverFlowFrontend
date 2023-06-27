import React from "react";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";
import './RightSidebar.css'

function RightSlidebar() {
    return(
        <aside className="right-Slidebar">
            <Widget/>
            <WidgetTags/>
        </aside>
    )
}

export default RightSlidebar;
