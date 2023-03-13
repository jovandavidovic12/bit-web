import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getTopStories } from "../services/API";
import Story from "./Story";

export const Stories = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getTopStories().then((ids) => setStoryIds(ids))
    }, []);


    return (
        <div>
            {storyIds.map((item, index) => <Story number={index + 1} key = {index} id={item}> </Story>)}
        </div>
    )
}