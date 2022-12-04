import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    const CATEGORY_DATA = {
        id: "1",
        title: "Pizza",
        imgUrl: "https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/47c289a9f4/pizza-wide.jpg",
    };
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            {Array(8)
                .fill(CATEGORY_DATA)
                .map((_, index) => (
                    <CategoryCard
                        key={index}
                        title={_.title}
                        imgUrl={_.imgUrl}
                    />
                ))}
        </ScrollView>
    );
};

export default Categories;
