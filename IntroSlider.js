import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    image: require('./image/slide1.png'), // Thay thế bằng đường dẫn hình ảnh
    title: 'Scan, Pay & Enjoy!',
    description: 'Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!',
  },
  {
    id: 2,
    image: require('./image/slide3.png'), // Thay thế bằng đường dẫn hình ảnh
    title: 'Track Your Purchases',
    description: 'Keep track of all your purchases effortlessly. Access your payment history anytime, anywhere, and manage your shopping like never before',
  },
  
];

const IntroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={slides}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveIndex(index)}
      />

      {/* Các dấu chấm chỉ thị slide */}
      <View style={styles.dotContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: activeIndex === index ? '#000' : '#ccc' },
            ]}
          />
        ))}
      </View>

      {/* Nút Start chỉ hiện ở slide cuối */}
      {activeIndex === slides.length - 1 && (
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF6F6', // Màu nền pastel
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250, // Điều chỉnh kích thước hình ảnh nhỏ hơn
    height: 250,
    marginBottom: 60,
    marginTop:100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight:23.52,

  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 150, // Đặt dấu chấm giữa mô tả và nút Start
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  startButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#AC5865',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  startButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default IntroSlider;
