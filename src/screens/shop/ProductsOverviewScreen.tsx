import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store/store";
import ProductItem from "../../components/shop/ProductItem";
import { addToCart } from "../../store/reducers/cartReducer";
import { Button } from "react-native";
import Colors from "../../constants/Colors";

const ProductsOverviewScreen = (props) => {
  const products = useAppSelector((state) => state.products.availableProducts);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const viewDetails = (id, title) => {
    props.navigation.navigate({
      name: "Product Details",
      params: {
        productId: id,
        productTitle: title,
      },
    });
  };

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          product={itemData.item}
          onSelect={() => {
            viewDetails(itemData.item.id, itemData.item.title);
          }}>
          <Button
            title='View Details'
            color={Colors.primary}
            onPress={() => {
              viewDetails(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            title='To Cart'
            color={Colors.primary}
            onPress={() => {
              dispatch(addToCart({ ...itemData.item }));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
