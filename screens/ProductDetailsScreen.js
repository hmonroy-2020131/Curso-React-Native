import { Button, FlatList } from "react-native";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const products = [
  {
    id: "1",
    name: "Producto 1",
    price: 100,
    image:
      "https://fastly.picsum.photos/id/550/200/300.jpg?blur=5&hmac=jdbIJbctWUQQYmvZ1m7dT1-yPNfxCHfBaTJgMWjKwCo",
  },
  {
    id: "2",
    name: "Producto 2",
    price: 100,
    image:
      "https://fastly.picsum.photos/id/550/200/300.jpg?blur=5&hmac=jdbIJbctWUQQYmvZ1m7dT1-yPNfxCHfBaTJgMWjKwCo",
  },
  {
    id: "3",
    name: "Producto 3",
    price: 100,
    image:
      "https://fastly.picsum.photos/id/550/200/300.jpg?blur=5&hmac=jdbIJbctWUQQYmvZ1m7dT1-yPNfxCHfBaTJgMWjKwCo",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.price}>$ {item.price}</Text>

            <Button
              title="Ver Detalles"
              color="#4A90E2"
              onPress={() => navigation.navigate("ProductDetails", { product: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#F5F7FA",
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e1e4e8",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#00000020",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
    borderRadius: 12,
    marginBottom: 12,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    marginBottom: 6,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 12,
  },
});

export default HomeScreen;
