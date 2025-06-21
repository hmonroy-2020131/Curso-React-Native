import { Button, StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
      <Button
        title="Agregar al carrito"
        color="#4A90E2"
        onPress={() => navigation.navigate("Cart", { product })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    shadowColor: "#00000020",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#222",
    marginBottom: 12,
    textAlign: "center",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 25,
    textAlign: "center",
  },
});

export default ProductDetailsScreen;
