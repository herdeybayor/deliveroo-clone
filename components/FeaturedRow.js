import { View, Text, ScrollView, ImageComponent } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";

import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description, restaurants }) => {
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
                {restaurants &&
                    restaurants.map(
                        ({
                            _id,
                            name,
                            image,
                            rating,
                            type,
                            address,
                            short_description,
                            dishes,
                            lat,
                            long,
                        }) => (
                            <RestaurantCard
                                key={_id}
                                id={_id}
                                title={name}
                                imgUrl={image}
                                rating={rating}
                                genre={type?.name}
                                address={address}
                                short_description={short_description}
                                dishes={dishes}
                                long={long}
                                lat={lat}
                            />
                        )
                    )}
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
