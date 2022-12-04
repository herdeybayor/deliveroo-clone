import { View, Text, ScrollView } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4 mt-4">
                <Text className="text-lg font-bold">{title}</Text>
                <Icons.ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                className="pt-4"
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
            >
                {/* Restaurant Cards... */}
                {Array(10)
                    .fill(0)
                    .map((_, i) => (
                        <RestaurantCard
                            key={i}
                            id={"1"}
                            title={"Yo! Sushi"}
                            imgUrl={"https://links.papareact.com/gn7"}
                            rating={"4.5"}
                            genre={"Japanese"}
                            address={"1-3-5, Ginza, Chuo-ku, Tokyo"}
                            short_description={"Sushi, Japanese, Asian"}
                            dishes={["Sushi", "Sashimi", "Tempura", "Ramen"]}
                            long={"139.763"}
                            lat={"35.671"}
                        />
                    ))}
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
