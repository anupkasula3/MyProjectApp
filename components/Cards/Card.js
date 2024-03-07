import { View, Text, TouchableOpacity, Image,ImageBackground } from 'react-native'
import React, { useState } from 'react'
// import { HeartIcon } from 'react-native-heroicons/solid'

export default function Card({category}) {

  return (
    <View style={{backgroundColor: category.color(1)}} className="mx-2 relative overflow-hidden w-[175px] rounded-[15px]" >
        
        {/* <View className="flex-row justify-center" style={{boxShadow: '0px 120px 100px -40px rgba(0, 0, 0, 1)'}}> */}
        <View className="flex-row justify-center overflow-hidden" style={{
            shadowColor: category.shadow,
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.6,
            }}>
            <Image source={{uri:category.image}} className="w-full h-28 "  />
        </View>
    
        <View className="ml-4 my-8 absolute items-center">
            <Text className="font-bold text-xl text-center text-white shadow">{category.name}</Text>
            {/* <Text className="font-bold text-lg text-white shadow tracking-wide  ">$ {category.price}</Text> */}
        </View>
    </View>
  )
}