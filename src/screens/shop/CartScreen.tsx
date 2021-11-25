import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../../components/shop/CartItem";
import Colors from "../../constants/Colors";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ProductType } from "../../models/Product";
import { clearCart, removeFromCart } from "../../store/reducers/cartReducer";
import { addOrder } from "../../store/reducers/ordersReducer";

const CartScreen = (props) => {
  const { totalAmount, items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>$ {totalAmount}</Text>
        </Text>
        <Button
          title='Order Now'
          onPress={() => {
            dispatch(addOrder({ totalAmount, items }));
            dispatch(clearCart());

            props.navigation.navigate("Orders");
          }}
          color={Colors.accent}
          disabled={items.length === 0 ? true : false}
        />
      </View>
      {items.length === 0 || !items ? (
        <Text>Your Cart is Empty</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: ProductType }) => {
            return (
              <CartItem
                title={item.title}
                price={item.price}
                quantity={item.quantityInCart}
                deletable
                totalAmount={(item.quantityInCart * item.price).toFixed(2)}
                onRemove={() => {
                  dispatch(removeFromCart(item.id));
                }}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    marginBottom: 20,
    padding: 10,

    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "roboto-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});
