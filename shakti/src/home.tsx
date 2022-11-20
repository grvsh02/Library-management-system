import React from "react";
import Button from "./components/button";

export default function Home() {

    return (
        <div className="bg-gray-700">
            <Button type={"primary"} size={"sm"} label={"hello"}/>
        </div>
    );
}