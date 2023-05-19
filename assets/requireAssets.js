import {Image} from "react-native";
import React from "react";

const requireAssets = [
    {
        "assetName": "medalAward",
        "assetContent": <Image source={require("./medalAward.gif")} style={{"height": 150, "width": 150} } />
    }
];

export default requireAssets;