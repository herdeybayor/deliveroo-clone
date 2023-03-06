import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { urlFor } from "../sanity";
import * as Icons from "react-native-heroicons/outline";
import * as SolidIcons from "react-native-heroicons/solid";

const RestaurantScreen = ({ route }) => {
    const navigation = useNavigation();
    const {
        id,
        title,
        imgUrl,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    } = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);
    return (
        <SafeAreaView className="bg-white">
            <ScrollView>
                <View className="relative">
                    <Image
                        source={{ uri: urlFor(imgUrl).url() }}
                        className="w-full h-64"
                    />
                    <View className="bg-black/10 h-full w-full absolute"></View>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute left-4 top-4 bg-white rounded-full p-2"
                    >
                        <Icons.ArrowLeftIcon
                            strokeWidth={2}
                            color="#00CCBB"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <View className="px-4 mt-3">
                    <Text className="font-bold text-2xl">{title}</Text>
                    {/* <View className="flex-row items-center">
                    <Text className="flex-row items-start">
                        <SolidIcons.StarIcon
                            color="green"
                            opacity={0.5}
                            size={15}
                        />
                        <Text className="text-green-500 ml-1">{rating}</Text>
                        <Text className="text-gray-500"> . {genre}</Text>
                    </Text>
                    <Text className="flex-row items-center">
                        <SolidIcons.MapPinIcon
                            color="gray"
                            opacity={0.5}
                            size={15}
                        />
                        <Text className="text-gray-500 ml-1 break-word">
                            {address}
                        </Text>
                    </Text>
                </View> */}
                    <View className="px-3 pb-4">
                        <Text className="font-bold text-lg pt-2">{title}</Text>
                        <View className="flex-row items-center space-x-1">
                            <SolidIcons.StarIcon
                                color="green"
                                size={22}
                                opacity={0.5}
                            />
                            <Text className="text-xs text-gray-500 ">
                                <Text className="text-green-500">{rating}</Text>{" "}
                                . {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1 w-56">
                            <Icons.MapPinIcon
                                color="gray"
                                size={22}
                                opacity={0.4}
                            />
                            <Text className="text-sm text-gray-500 break-words">
                                Nearby . {address}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RestaurantScreen;
