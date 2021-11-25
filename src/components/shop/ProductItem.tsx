import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { ProductType } from "../../models/Product";

interface ProductItemProps {
  product: ProductType;
  onSelect: () => void;
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
  let ToucableComponent: any =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableOpacity
      : TouchableNativeFeedback;

  return (
    <ToucableComponent onPress={props.onSelect} useForeground>
      <View style={styles.product}>
        <Image source={{ uri: props.product.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{props.product.title}</Text>
          <Text style={styles.price}>$ {props.product.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>{props.children}</View>
      </View>
    </ToucableComponent>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    padding: 5,
    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    // overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: "roboto-bold-italic",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  details: {
    alignItems: "center",
    height: "25%",
    padding: 10,
  },
});
