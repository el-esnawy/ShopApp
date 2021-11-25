import React from "react";
import { FlatList, StyleSheet, Button } from "react-native";

import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import { deleteFromCart } from "../../store/reducers/cartReducer";

import { deleteUserProduct } from "../../store/reducers/productsReducer";

import { useAppDispatch, useAppSelector } from "../../store/store";

const UserProductScreen = (props) => {
  const userProducts = useAppSelector((state) => state.products.userProducts);
  const dispatch = useAppDispatch();

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <ProductItem product={itemData.item} onSelect={() => {}}>
            <Button title='Edit' color={Colors.accent} onPress={() => {}} />
            <Button
              title='Delete'
              color={Colors.primary}
              onPress={() => {
                dispatch(deleteUserProduct(itemData.item.id));
                dispatch(deleteFromCart(itemData.item.id));
              }}
            />
          </ProductItem>
        );
      }}
    />
  );
};

export default UserProductScreen;

const styles = StyleSheet.create({});
