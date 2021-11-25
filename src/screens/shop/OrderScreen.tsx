import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { orderType } from "../../store/reducers/ordersReducer";
import { useAppSelector } from "../../store/store";
import OrderItem from "../../components/shop/OrderItem";

const OrderScreen = () => {
  const { orders } = useAppSelector((state) => state.orders);
  return (
    <SafeAreaView>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={(itemData: { item: orderType }) => {
          return (
            <OrderItem
              amount={itemData.item.amount}
              date={itemData.item.date}
              items={itemData.item.items}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
