import { View, Text, ImageBackground, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <SafeAreaView>

            <View className="flex-row ">
                <DrawerContentScrollView {...props} style={{ height: '100%',}} contentContainerStyle={{ backgroundColor: "#E5E4E2" }}>
                    <View className="relative">

                        <ImageBackground source={require('../public/images/bg.jpg')} className="p-24" />
                        {/* </ImageBackground> */}
                        <View className="absolute left-2 top-10">
                            <Image source={require('../public/images/profile.jpg')} className="h-20 w-20  rounded-full " />
                            <View>
                                <Text className="text-lg text-white mx-4"> Name</Text>
                            </View>
                        </View>
                    </View>

                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
                {/* <View>
                <Text>Our Custom Text</Text>
            </View> */}
            </View>
        </SafeAreaView>
    )
}

export default CustomDrawer