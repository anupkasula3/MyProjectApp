import React from 'react'
import { View, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import Search from 'react-native-vector-icons/FontAwesome';
import Key from 'react-native-vector-icons/FontAwesome5';
const Selectfavorite = ({ navigation }) => {
    const loopArray = Array.from({ length: 8 }, (_, index) => index + 1);
    return (
        <SafeAreaView>
            {/* <ScrollView> */}

            <View className="bg-white h-full pt-10">
                <View className="">
                    <View className=" mx-8">
                        <View>
                            <View className="mb-4">
                                <Text className="text-[33px] text-[#202544] font-bold">
                                    Select Favorite
                                </Text>
                            </View>
                            <View className="flex-col ">
                                <View>
                                    <Text className="text-[16px]  text-gray-600">
                                        Choose your <Text className="text-[#ec4c15] font-bold">5</Text> favorite book and we will
                                    </Text>
                                </View>
                                <View>
                                    <Text className="text-[#ec4c15] mt-1 text-[16px] ">
                                        recommended you what to read next
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View className="my-3 w-full flex-row items-center border  rounded-lg border-gray-300">
                            <View className="p-2">
                                <Search name="search" size={20} color="#ec4c15" />
                            </View>
                            <View className="w-full ">
                                <TextInput
                                    className=" text-[#202544] sm:text-sm  block p-2.5 "
                                    // onChangeText={onChangeNumber}
                                    // value={number}
                                    placeholder="Title or Author"

                                // keyboardType="numeric"
                                />
                            </View>
                        </View>

                        {/* {loopArray.map((item, index) => (

                            <View className=" rounded-lg mt-2 w-[31%] overflow-hidden">
                                <TouchableOpacity >
                                    <View >
                                        <ImageBackground className="h-28"
                                            source={require("../public/images/logoin1.jpg")}
                                        />
                                    </View>
                                    <Text className="text-[#ec4c15] text-lg">Title</Text>
                                </TouchableOpacity>
                            </View>
                        ))} */}
                        <ScrollView style={{ height: 480 }} showsVerticalScrollIndicator={true}>
                            {/* <View> */}
                            {loopArray.map((item, index) => (
                                <View >
                                    <View className="flex-row mt-5 ">
                                        <View className=" rounded-lg overflow-hidden w-[23%]">
                                            <ImageBackground className=" h-24"
                                                source={require("../public/images/logoin1.jpg")}
                                            />
                                        </View>

                                        <View className="w-[70%] ml-4 py-3.5">
                                            <Text className="font-bold text-[#ec4c15] text-[20px]">
                                                Title of The Book
                                            </Text>
                                            <Text className="text-[16px] text-gray-700 pt-0.5">
                                                Auther of The Book
                                            </Text>
                                        </View>
                                    </View>
                                    <View className="w-[70%] left-[23%] ml-1 border-b border-b-gray-300 "></View>
                                </View>
                            ))}
                            {/* </View> */}
                        </ScrollView>
                        <View className="flex-row justify-between  my-5 py-2 px-2">
                            <View className="w-[30%]">
                                <View>
                                    <Text className="text-[#ec4c15] text-[18px]">Selected</Text>
                                </View>
                                <View>
                                    <Text className="font-bold text-gray-600 text-[16px]">1 of 5 Book</Text>
                                </View>
                            </View>
                            <View className=" w-[30%]">
                                <TouchableOpacity className="w-full  duration-150 " onPress={() => { navigation.navigate('Index') }}>
                                    <Text className="bg-[#ec4c15] text-white text-center p-3 text-lg  rounded-lg">
                                        Done
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>




            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default Selectfavorite