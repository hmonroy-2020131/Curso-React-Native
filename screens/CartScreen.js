import React, { useState, useEffect } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const CartScreen = ({ route }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const product = route.params?.product;
    if (product && !cart.some((item) => item.id === product.id)) {
      setCart((prevCart) => [...prevCart, product]);
    }
  }, [route.params?.product]);

  const placeOrder = () => {
    alert("Pedido realizado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Carrito</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={cart.length === 0 && styles.flatListEmpty}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() =>
                setCart((prev) => prev.filter((p) => p.id !== item.id))
              }
            >
              <Text style={styles.removeButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Tu carrito está vacío 😞</Text>
        }
      />

      {cart.length > 0 && (
        <View style={styles.buttonContainer}>
          <Button
            title="Realizar pedido (Contra entrega)"
            color="#FF6B6B"
            onPress={placeOrder}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
    textAlign: "center",
  },
  flatListEmpty: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  itemPrice: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF6B6B",
  },
  removeButton: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  emptyText: {
    fontSize: 18,
    color: "#999",
    fontStyle: "italic",
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
});

export default CartScreen;
