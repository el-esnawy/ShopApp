import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}x </Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amount}>$ {props.totalAmount}</Text>
        {props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}>
            <Ionicons
              name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
              size={23}
              color='red'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "roboto",
    color: "#888",
    fontSize: 16,
    marginRight: 10,
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 16,
  },
  amount: {
    fontFamily: "roboto-bold",
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});
