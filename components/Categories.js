import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            {Array(10)
                .fill(0)
                .map((_, i) => (
                    <CategoryCard
                        key={i}
                        title={"Pizza"}
                        imgUrl={
                            "https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/47c289a9f4/pizza-wide.jpg"
                        }
                    />
                ))}
        </ScrollView>
    );
};

export default Categories;
