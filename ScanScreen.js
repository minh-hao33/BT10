import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ScanScreen = ({ navigation }) => {
  const productImageUri = 'https://github.com/minh-hao33/BT8/blob/dev/image/juice.png?raw=true'; // Đường dẫn đến hình ảnh sản phẩm
  const productName = 'Lauren’s Orange Juice';
  const productPrice = 149; // Giá sản phẩm

  const addToCart = () => {
    // Điều hướng đến CartScreen và truyền thông tin sản phẩm
    navigation.navigate('CartScreen', {
      product: { name: productName, brand: "Lauren's", price: productPrice },
    });
  };

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Khung quét */}
      <View style={styles.scanArea}>
        <Image source={{ uri: productImageUri }} style={styles.scannedImage} />
        <View style={styles.overlay} />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfoContainer}>
        <Image source={{ uri: productImageUri }} style={styles.productImage} />
        <Text style={styles.productName}>{productName}</Text>
        <TouchableOpacity style={styles.addButton} onPress={addToCart}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FDF6F6',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'transparent',
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#4F8EF7',
  },
  scanArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  scannedImage: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    borderWidth: 2,
    borderColor: '#4F8EF7',
    borderRadius: 10,
    opacity: 0.5,
  },
  productInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  productName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default ScanScreen;
