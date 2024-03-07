import React from 'react'
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Key from 'react-native-vector-icons/FontAwesome5';
const Login = ({ navigation }) => {
    return (
        <SafeAreaView >
            {/* <ScrollView className="bg-white"> */}

            <View className="bg-white w-full h-full">
                <View className=" relative">
                    <View className="">
                        <ImageBackground className="w-full object-contain h-64 "
                            source={require("../public/images/logoin1.jpg")}
                        />
                    </View>
                    <View className="absolute top-28 left-8">
                        <View>
                            <Text className="text-[30px] text-white  font-bold">
                                Welcome
                            </Text>
                        </View>
                        <View>
                            <Text className=" text-[30px] text-white  font-bold">
                                Back
                            </Text>
                        </View>
                        <View className="mt-5">
                            <Text className=" text-[15px]  text-white  font-bold">
                                Sign in to continue ...
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="px-8 mt-6">
                    {/* test  */}
                    {/* <View className="my-5 w-full flex-row items-center border-b  rounded-lg border-gray-300">
                    <View className="p-2">
                        <Icon name="email" size={30} color="#9E9C9B" />
                    </View>
                    <View className="w-full ">
                        <TextInput
                            className=" text-[#202544] sm:text-sm  block p-2.5 "
                            placeholder="Enter Your email"
                            keyboardType='email-address'
                        />
                    </View>
                </View> */}

                    {/* email  */}
                    <View className="my-5 w-full flex-row items-center bg-gray-50 border  rounded-lg border-gray-300">
                        <View className="p-2 border-r border-r-[#ec4c15]">
                            <Icon name="email" size={30} color="#ec4c15" />
                        </View>
                        <View className="w-full ">
                            <TextInput
                                className=" text-[#202544] sm:text-sm  block p-2.5 "
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="Enter Your email"
                                keyboardType='email-address'
                            // keyboardType="numeric"
                            />
                        </View>
                    </View>
                    {/* password  */}
                    <View className=" w-full flex-row items-center bg-gray-50 border  rounded-lg border-gray-300">
                        <View className="p-2 border-r border-r-[#ec4c15]">
                            <Key name="key" size={30} color="#ec4c15" />
                        </View>
                        <View className="w-full ">
                            <TextInput
                                className=" text-[#202544] sm:text-sm  block p-2.5 "
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="Enter Your Password"

                            // keyboardType="numeric"
                            />
                        </View>
                    </View>
                    {/* forgot password  */}
                    <View className="my-3 mb-9">
                        <TouchableOpacity>
                            <Text className="text-[#202544] text-lg text-right">
                                Forgot Password ?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity className="w-full  duration-150 " onPress={() => { navigation.navigate('Choose') }}>
                        <Text className="bg-[#ec4c15] mb-5 text-white text-center p-3 text-lg flex gap-2 rounded-lg">
                            Login
                        </Text>
                    </TouchableOpacity>

                    <View className="my-3">
                        <View>
                            <Text className=" w-fit text-sm bg-red px-2 mb-5 text-center inset-x-0 mx-auto">Or
                                continue with</Text>
                        </View>

                        <View className="flex-row  justify-between w-full ">
                            <View className="w-[48%] mr-1">
                                <TouchableOpacity className="w-full  py-2.5 border rounded-lg duration-150 " onPress={navigation.navigate.openDrawer}  >
                                    <Text className="text-[#ec4c15] text-center text-lg p-2 mb-1">
                                        Google
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View className="w-[48%]">
                                <TouchableOpacity className="w-full py-2.5 border rounded-lg duration-150 " >
                                    <Text className="text-[#ec4c15] text-center text-lg p-2 mb-1">
                                        Facebook
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>

                <View className="px-8 my-16">
                    <View>
                        <Text className="text-center">Dont't have an account ? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
                            <Text className="text-center underline text-lg text-[#ec4c15]">Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>




    )
}

export default Login