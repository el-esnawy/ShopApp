import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import moment from "moment";
import CartItem from "./CartItem";
import Colors from "../../constants/Colors";
import { ProductType } from "../../models/Product";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>$ {props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>
          {moment(props.date).format("MMMM Do YYYY, hh:mm ")}
        </Text>
      </View>
      <Button
        title={showDetails ? "Hide Details" : "Show Details"}
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
        color={Colors.primary}
      />
      {showDetails && (
        <View style={styles.detailScreen}>
          {props.items.map((cartItem: ProductType) => {
            return (
              <CartItem
                key={cartItem.id}
                quantity={cartItem.quantityInCart}
                totalAmount={(cartItem.price * cartItem.quantityInCart).toFixed(
                  2,
                )}
                title={cartItem.title}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 15,
  },
  totalAmount: {
    fontFamily: "roboto-bold",
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: "roboto",
    color: "#888",
  },
  detailScreen: {
    width: "100%",
  },
});
