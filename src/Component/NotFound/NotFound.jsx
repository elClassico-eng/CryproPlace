import React from "react";

import { Title } from "../LandingPage/Title/Title";
import { Navbar2 } from "../../Component/Dashboard/Navbar2/Navbar2";

export const NotFound = () => {
    return (
        <>
            <div className="flex justify-center items-center h-full w-full overflow-hidden text-black">
                <Title title={"Page not found :("} justify={true} />
            </div>
            <Navbar2 />
        </>
    );
};
