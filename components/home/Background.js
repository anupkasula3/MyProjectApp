import React, { Children } from 'react'
import { View, Text, ImageBackground } from 'react-native'

const Background = ({ children }) => {
    return (
        <View className="top-[30%]">
            <View className="items-center">
                <ImageBackground className="w-40 h-40 "
                    source={require("../../public/images/logo.svg")}
                />
            </View>
            <View className="absolute">
                {children}
            </View>
        </View>
    )
}

export default Background