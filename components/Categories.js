import { View, Text, ScrollView } from "react-native";
import React from "react";

import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";

const Categories = () => {
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await sanityClient.fetch(
                    `*[_type == "category"] | order(name asc)`
                );
                setCategories(data);
            } catch (error) {
                console.error(error);
                console.log("Error fetching categories");
            }
        };
        getCategories();
    }, []);

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            {categories?.map(({ _id, name, image }) => (
                <CategoryCard key={_id} title={name} imgUrl={image} />
            ))}
        </ScrollView>
    );
};

export default Categories;
