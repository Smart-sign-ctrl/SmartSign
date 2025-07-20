import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Images } from "../../theme";

const backButton = (onPress,) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={Images.icCloseSquare} />
        </TouchableOpacity>
    )
}

export {
    backButton
}