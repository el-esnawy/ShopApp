import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/HeaderButton";
import CartScreen from "../screens/shop/CartScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OrderScreen from "../screens/shop/OrderScreen";
import UserProductScreen from "../screens/user/UserProductScreen";

import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerLeft: (prop) => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title='Drawer'
                  iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                  color={
                    prop.tintColor === Colors.primary ? "white" : Colors.primary
                  }
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },

          headerTitleStyle: {
            fontFamily: "roboto-bold",
          },
          headerBackTitleStyle: {
            fontFamily: "roboto-bold",
          },
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primary : "white",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        };
      }}>
      <Stack.Screen
        name='Products'
        component={ProductsOverviewScreen}
        options={({ navigation, route }) => {
          return {
            headerRight: (prop) => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title='Cart'
                  color={
                    prop.tintColor === Colors.primary ? "white" : Colors.primary
                  }
                  iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                  onPress={() => {
                    navigation.navigate("cart");
                  }}
                />
              </HeaderButtons>
            ),
            headerTitle: "All Products",
          };
        }}
      />

      <Stack.Screen
        name='Product Details'
        component={ProductDetailScreen}
        options={({ route }: typeof route) => ({
          headerTitle: route.params.productTitle,
        })}
      />
      <Stack.Screen
        name='cart'
        component={CartScreen}
        options={({ navigation, route }) => {
          return {
            title: "Your Cart",
          };
        }}
      />
    </Stack.Navigator>
  );
};

const AdminNavigatorScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerLeft: (prop) => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title='Drawer'
                  iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                  color={
                    prop.tintColor === Colors.primary ? "white" : Colors.primary
                  }
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },

          headerTitleStyle: {
            fontFamily: "roboto-bold",
          },
          headerBackTitleStyle: {
            fontFamily: "roboto-bold",
          },
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primary : "white",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        };
      }}>
      <Stack.Screen
        name='Products'
        component={UserProductScreen}
        options={({ navigation }) => {
          return {
            title: "Admin Screen",
          };
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: Colors.primary,
        headerShown: false,
        headerTitleStyle: {
          fontFamily: "roboto-bold",
        },

        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}>
      <Drawer.Screen
        name='All Products'
        component={StackNavigator}
        options={({ navigation }) => {
          return {
            drawerIcon: (props) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                size={23}
                color={props.color}
              />
            ),
          };
        }}
      />

      <Drawer.Screen
        name='Orders'
        component={OrderScreen}
        options={({ navigation }) => {
          return {
            drawerIcon: (prop) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-list" : "ios-list"}
                size={23}
                color={prop.color}
              />
            ),
            title: "Your Orders",
            headerShown: true,
            headerRight: (prop) => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title='Cart'
                  color={
                    prop.tintColor === Colors.primary ? "white" : Colors.primary
                  }
                  iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                  onPress={() => {
                    navigation.navigate("cart");
                  }}
                />
              </HeaderButtons>
            ),

            headerLeft: (prop) => {
              return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title='Drawer'
                    iconName={
                      Platform.OS === "android" ? "md-menu" : "ios-menu"
                    }
                    color={
                      prop.tintColor === Colors.primary
                        ? "white"
                        : Colors.primary
                    }
                    onPress={() => {
                      navigation.toggleDrawer();
                    }}
                  />
                </HeaderButtons>
              );
            },
          };
        }}
      />

      <Drawer.Screen
        name='Admin'
        component={AdminNavigatorScreen}
        options={({ navigation }) => {
          return {
            drawerIcon: (prop) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-create" : "ios-create"}
                size={23}
                color={prop.color}
              />
            ),

            headerShown: false,
            headerRight: (prop) => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title='Cart'
                  color={
                    prop.tintColor === Colors.primary ? "white" : Colors.primary
                  }
                  iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                  onPress={() => {
                    navigation.navigate("cart");
                  }}
                />
              </HeaderButtons>
            ),

            headerLeft: (prop) => {
              return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title='Drawer'
                    iconName={
                      Platform.OS === "android" ? "md-menu" : "ios-menu"
                    }
                    color={
                      prop.tintColor === Colors.primary
                        ? "white"
                        : Colors.primary
                    }
                    onPress={() => {
                      navigation.toggleDrawer();
                    }}
                  />
                </HeaderButtons>
              );
            },
          };
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
