import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import Colors from "../../constants/Colors";
import { addToCart } from "../../store/reducers/cartReducer";
import { useAppDispatch, useAppSelector } from "../../store/store";

const ProductDetailScreen = (props) => {
  const productId = props.route.params.productId;
  const cart = useAppSelector((state) => state.cart);

  const product = useAppSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId),
  );

  const dispatch = useAppDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.actions}>
        <Button
          title='Add To Cart'
          onPress={() => {
            dispatch(addToCart({ ...product }));
          }}
          color={Colors.primary}
        />
      </View>
      <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.route.params.title,
  };
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },

  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
