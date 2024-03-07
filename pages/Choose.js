import React from 'react'
import { View, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Key from 'react-native-vector-icons/FontAwesome5';
const Choose = ({ navigation }) => {
    const loopArray = Array.from({ length: 15 }, (_, index) => index + 1);
    return (
        <SafeAreaView>
            <View className="bg-white h-full pt-10">
                
                <View className=" ">
                    <View className=" mx-8">

                        <View>
                            <View className="mb-4">
                                <Text className="text-[33px]   font-bold">
                                    Choose Interests
                                </Text>
                            </View>
                            <View className="flex-col ">
                                <View>
                                    <Text className="text-[20px] text-gray-600">
                                        Which type of book are you
                                    </Text>
                                </View>
                                <View>
                                    <Text className="text-gray-600 text-[20px] ">
                                        interested in ?
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={true}>
                            <View className="flex-row justify-between  mt-5 flex-wrap">
                                {loopArray.map((item, index) => (

                                    <View className=" rounded-lg mt-2 w-[31%] overflow-hidden">
                                        <TouchableOpacity >
                                            <View >
                                                <ImageBackground className="h-28"
                                                    source={require("../public/images/logoin1.jpg")}
                                                />
                                            </View>
                                            <Text className="text-[#ec4c15] text-lg">Title</Text>
                                        </TouchableOpacity>

                                        {/* <View className=" rounded-lg mt-2 w-[31%] overflow-hidden">
                                    <ImageBackground className="h-28"
                                        source={require("../public/images/logoin1.jpg")}
                                    />
                                </View> */}
                                    </View>


                                ))}

                                {/* <View className=" rounded-lg overflow-hidden w-[31%]">
                            <ImageBackground className=" h-28"
                                source={require("../public/images/logoin1.jpg")}
                            />
                        </View>
                        <View className=" rounded-lg w-[31%] overflow-hidden">
                            <ImageBackground className=" h-28"
                                source={require("../public/images/logoin1.jpg")}
                            />
                        </View> */}
                            </View>
                        </ScrollView>

                        <View className="my-10" >
                            <TouchableOpacity className="w-full  duration-150 " onPress={() => { navigation.navigate('Selectfavorite') }}>
                                <Text className="bg-[#ec4c15] mb-5 text-white text-center p-3 text-lg flex gap-2 rounded-lg">
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>




            </View>
        </SafeAreaView>
    )
}

export default Choose