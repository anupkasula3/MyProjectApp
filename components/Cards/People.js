import { View, Text, TouchableOpacity, Image,ImageBackground } from 'react-native'
import React, { useState } from 'react'
// import { HeartIcon } from 'react-native-heroicons/solid'

export default function People({people}) {

  return (
    <View className="mx-1 overflow-hidden w-[95px] " >
        
        {/* <View className="flex-row justify-center" style={{boxShadow: '0px 120px 100px -40px rgba(0, 0, 0, 1)'}}> */}
        <View className="flex-row justify-center rounded-full overflow-hidden">
            <Image source={{uri:people.image}} className="w-16 h-16 rounded-full"  />
        </View>
    
        <View className="p-1">
            <Text className="font-semibold text-[14px] text-center text-[#ec4c15] shadow">{people.name}</Text>
            {/* <Text className="text-lg text-gray-600 shadow   ">$ {people.price}</Text> */}
        </View>
    </View>
  )
}