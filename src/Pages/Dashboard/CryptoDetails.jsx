import React from "react";

import { useParams } from "react-router-dom";

export const CryptoDetails = () => {
    const { uuid } = useParams();
    console.log(uuid);
    return <div>Ск{uuid}</div>;
};
