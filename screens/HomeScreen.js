import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    View,
} from "react-native";
import * as Icons from "react-native-heroicons/outline";

import { Categories, FeaturedRow } from "../components";
import sanityClient from "../sanity";

export default function HomeScreen() {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = React.useState([]);

    React.useEffect(() => {
        const getFeaturedCategories = async () => {
            try {
                const data = await sanityClient.fetch(
                    `
                *[_type == "featured"] {
                ...,
                restaurant[]->{
                    ...,
                    dishes[]->,
                    type-> {
                    name
                    },
                } | order(rating desc),
                }
            `
                );
                setFeaturedCategories(data);
            } catch (error) {
                console.error(error);
                console.log("Error fetching featured categories");
            }
        };
        getFeaturedCategories();
    }, []);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <SafeAreaView className="bg-white">
            {/* Header */}
            <View className="flex-row py-3 items-center space-x-2 px-4">
                <Image
                    source={{ uri: "https://links.papareact.com/wru" }}
                    className="h-7 aspect-square rounded-full p-4 bg-gray-300"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <Icons.ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <Icons.UserIcon size={35} color="#00CCBB" />
            </View>

            {/* Search */}
            <View className="flex-row justify-between space-x-2 items-center pb-2 px-4">
                <View className="bg-gray-200 flex-1 relative flex-row items-center">
                    <Icons.MagnifyingGlassIcon
                        className="absolute left-2"
                        color="#777777"
                        strokeWidth={2}
                    />
                    <TextInput
                        className="pl-10 py-2 flex-1"
                        placeholder="Restaurants and cuisine"
                        keyboardType="default"
                    ></TextInput>
                </View>
                <Icons.AdjustmentsHorizontalIcon color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100">
                {/* Categories */}
                <Categories />

                {/* Featured */}
                {featuredCategories?.map((category) => (
                    <FeaturedRow
                        key={category._id}
                        title={category.name}
                        description={category.short_description}
                        restaurants={category.restaurant}
                    />
                ))}
            </ScrollView>

            <StatusBar style="light" />
        </SafeAreaView>
    );
}
