import React from "react";

import vklink from "../../../Images/Icons/Socials/vk.png";
import tglink from "../../../Images/Icons/Socials/telegram.png";

export const Socials = () => {
    return (
        <div className="flex items-center gap-5 justify-center">
            <a href="https://vk.com/yanedlb" target="_blank">
                <img src={vklink} alt="VK" />
            </a>
            <a href="https://t.me/paytina_f" target="_blank">
                <img src={tglink} alt="TG" />
            </a>
        </div>
    );
};
