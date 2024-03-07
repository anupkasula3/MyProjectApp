import React, { useState } from 'react'
import { View, Text, FlatList, Animated, ScrollView, Dimensions, Image, ImageBackground, TextInput, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import Card from '../components/Cards/Card';
import BookCard from '../components/Cards/BookCard';
import People from '../components/Cards/People';


// import {ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon} from 'react-native-heroicons/solid'
const Index = () => {


    const featuredcategorys = [
        {
            name: 'Australian Orange',
            price: "12.30",
            stars: 4,
            desc: 'Sweet and juicy',
            shadow: 'orange',
            image: "https://imagepasal.com/watermark/IMG_9980-image-pasal-2023-09-11.jpg",
            color: opacity => `rgba(251, 216, 146, ${opacity})`
        },
        {
            name: 'Flesh Nectari',
            shadow: 'red',
            price: "12",
            stars: 3,
            desc: 'Sweet and juicy',
            image: "https://buffer.com/library/content/images/2023/10/free-images.jpg",
            color: opacity => `rgba(255, 170, 157, ${opacity})`
        },

        {
            name: 'Black Grapes',
            price: "40",
            stars: 4,
            desc: 'Sweet and juicy',
            shadow: 'purple',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHqVr-CbHrt6TbZXYpaO7TR1weVwUFpOoK7EWtnNG&s',
            color: opacity => `rgba(214, 195, 246, ${opacity})`
        },


        {
            name: 'Red Grapecategory',
            price: "30",
            stars: 4,
            desc: 'Sweet and juicy',
            shadow: 'red',
            image: "https://buffer.com/library/content/images/2023/10/free-images.jpg",
            color: opacity => `rgba(255, 163, 120, ${opacity})`
        },
        {
            name: 'Green Apple',
            price: "10.5",
            stars: 4,
            desc: 'Sweet and juicy',
            shadow: 'green',
            image: "https://imagepasal.com/watermark/IMG_9980-image-pasal-2023-09-11.jpg",
            color: opacity => `rgba(139, 243, 139, ${opacity})`
        },


    ]



    return (
        <SafeAreaView>
            <ScrollView >

                <View className="bg-white h-full pt-10">
                    <View className="">
                        <View className="">
                            {/* category  */}
                            <View>
                                <View className="flex-row items-center justify-between mx-5">
                                    <View className=" ">
                                        <Text className="text-2xl text-[#ec4c15]">Categories</Text>
                                    </View>
                                    <View>
                                        <Text className="text-gray-600 text-[16px]">see all </Text>
                                    </View>
                                </View>

                                {/* carousel */}
                                <View className="carousel mt-5 mx-1">
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {
                                            featuredcategorys.map((category, index) => {
                                                return (
                                                    <Card category={category} key={index} />
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            </View>

                            {/* Popular  Author  */}
                            <View className="my-5">
                                <View className="flex-row items-center justify-between mx-5">
                                    <View className=" ">
                                        <Text className="text-xl text-[#ec4c15]">Popular Author</Text>
                                    </View>
                                    <View>
                                        <Text className="text-gray-600 text-[16px]">see all </Text>
                                    </View>
                                </View>

                                {/* carousel */}
                                <View className="carousel mt-5 mx-1">
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {
                                            featuredcategorys.map((category, index) => {
                                                return (
                                                    <People people={category} key={index} />
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            </View>

                            {/* Featured Audio book  */}
                            <View className="my-5">
                                <View className="flex-row items-center justify-between mx-5">
                                    <View className=" ">
                                        <Text className="text-xl text-[#ec4c15]">Featured Audio Books</Text>
                                    </View>
                                    <View>
                                        <Text className="text-gray-600 text-[16px]">see all </Text>
                                    </View>
                                </View>

                                {/* carousel */}
                                <View className="carousel mt-5 mx-1">
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {
                                            featuredcategorys.map((category, index) => {
                                                return (
                                                    <BookCard category={category} key={index} />
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            </View>

                            {/* Featured  book  */}
                            <View className="my-5">
                                <View className="flex-row items-center justify-between mx-5">
                                    <View className=" ">
                                        <Text className="text-xl text-[#ec4c15]">Featured Books</Text>
                                    </View>
                                    <View>
                                        <Text className="text-gray-600 text-[16px]">see all </Text>
                                    </View>
                                </View>

                                {/* carousel */}
                                <View className="carousel mt-5 mx-1">
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {
                                            featuredcategorys.map((category, index) => {
                                                return (
                                                    <BookCard category={category} key={index} />
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            </View>



                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Index