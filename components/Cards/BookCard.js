import { View, Text, TouchableOpacity, Image,ImageBackground } from 'react-native'
import React, { useState } from 'react'
// import { HeartIcon } from 'react-native-heroicons/solid'

export default function BookCard({category}) {

  return (
    <View className="mx-2 overflow-hidden w-[140px] rounded-[15px]" >
        
        {/* <View className="flex-row justify-center" style={{boxShadow: '0px 120px 100px -40px rgba(0, 0, 0, 1)'}}> */}
        <View className="flex-row justify-center rounded-[15px] overflow-hidden" style={{
            shadowColor: category.shadow,
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.6,
            }}>
            <Image source={{uri:category.image}} className="w-full h-48 "  />
        </View>
    
        <View className="p-1">
            <Text className="font-semibold text-lg  text-[#ec4c15] shadow">{category.name}</Text>
            {/* <Text className="text-md text-gray-600 shadow   ">$ {category.price}</Text> */}
        </View>
    </View>
  )
}