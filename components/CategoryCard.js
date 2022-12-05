import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = ({ title, imgUrl }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{ uri: urlFor(imgUrl).width(200).url() }}
                className="h-20 aspect-square rounded"
            />
            <View className="bg-black/20 h-20 aspect-square absolute top-0 left-0"></View>
            <Text className="text-white font-bold absolute bottom-1 left-1">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CategoryCard;
