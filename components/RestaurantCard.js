import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";
import * as SolidIcons from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
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
}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Restaurant", {
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
                });
            }}
            className="bg-white mr-3 shadow rounded-sm"
        >
            <Image
                source={{ uri: urlFor(imgUrl).width(256).height(256).url() }}
                className="w-64 aspect-square rounded-sm"
            />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <SolidIcons.StarIcon
                        color="green"
                        size={22}
                        opacity={0.5}
                    />
                    <Text className="text-xs text-gray-500 ">
                        <Text className="text-green-500">{rating}</Text> .{" "}
                        {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1 w-56">
                    <Icons.MapPinIcon color="gray" size={22} opacity={0.4} />
                    <Text className="text-sm text-gray-500 break-words">
                        Nearby . {address}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RestaurantCard;
