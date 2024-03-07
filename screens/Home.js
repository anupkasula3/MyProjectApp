import React from 'react'
import { View, Text, ImageBackground, Button, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


const Home = ({ navigation }) => {
    const handleLoginPress = () => {
        // Navigate to the Login screen
        navigation.navigate('Login');
    };
    return (
        <View className="top-[25%]">
 
            <View className="items-center">
                <ImageBackground className="w-40 h-40 "
                    source={require("../public/images/audiologo.png")}
                />
            </View>
            <View className="mt-5">
                <Text className="text-center text-[#ec4c15] text-[38px] font-extrabold" >Audio</Text>

                <Text className="text-center text-[#202544]  text-[30px] font-medium">Book</Text>
            </View>
            <View className="mt-52 items-center">
                <TouchableOpacity className="bg-[#ec4c15]  text-center  w-[75%] flex gap-2 items-center rounded-md" onPress={() => { navigation.navigate('Login') }}>
                    <Text className="text-white text-lg p-2 mb-1">
                        Get Started
                    </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity className="bg-[#ec4c15] text-center p-3 w-1/2  flex gap-2 items-center rounded-full" onPress={() => { navigation.navigate('Signup') }}>
                    <Text className="text-white text-lg">
                        Signup
                    </Text>
                </TouchableOpacity> */}
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Home