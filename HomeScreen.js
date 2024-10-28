// HomeScreen.js
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.helloText}>Hello 👋</Text>
      </View>

      {/* Your Insights Section */}
      <Text style={styles.yourInsightsText}>Your Insights</Text>

      <View style={styles.insightsContainer}>
        <TouchableOpacity 
          style={styles.insightBox} 
          onPress={() => navigation.navigate('Scan')} // Điều hướng tới ScanScreen
        >
          <Icon name="scan-outline" size={50} color="#4F8EF7" />
          <Text>Scan new</Text>
        </TouchableOpacity>
        <View style={styles.insightBox}>
          <Icon name="alert-outline" size={50} color="#FF6347" />
          <Text>Counterfeits</Text>
        </View>
        <View style={styles.insightBox}>
          <Icon name="checkmark-circle-outline" size={50} color="#32CD32" />
          <Text>Success</Text>
        </View>
        <View style={styles.insightBox}>
          <Icon name="calendar-outline" size={50} color="#1E90FF" />
          <Text>Directory</Text>
        </View>
      </View>

      {/* Explore More Section */}
      <Text style={styles.exploreMoreText}>Explore More</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.exploreMoreContainer}>
        <View style={styles.insightBoxHorizontal}>
          <Icon name="pricetag-outline" size={40} color="#FFD700" />
          <Text>Offers</Text>
        </View>
        <View style={styles.insightBoxHorizontal}>
          <Icon name="gift-outline" size={40} color="#FF1493" />
          <Text>Rewards</Text>
        </View>
        <View style={styles.insightBoxHorizontal}>
          <Icon name="trending-up-outline" size={40} color="#32CD32" />
          <Text>Trends</Text>
        </View>
        <View style={styles.insightBoxHorizontal}>
          <Icon name="barbell-outline" size={40} color="#FF4500" />
          <Text>Workouts</Text>
        </View>
        <View style={styles.insightBoxHorizontal}>
          <Icon name="medkit-outline" size={40} color="#1E90FF" />
          <Text>Health</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={30} color="#000" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications-outline" size={30} color="#000" />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Scan')}>
          <Icon name="scan-outline" size={30} color="#000" />
          <Text style={styles.navText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
          <Icon name="time-outline" size={30} color="#000" />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={30} color="#000" />
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 40,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  yourInsightsText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
    marginLeft: 20,
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  insightBox: {
    width: '45%',
    height: 150,
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  exploreMoreText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
  },
  exploreMoreContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  insightBoxHorizontal: {
    width: 150,
    height: 120,
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginRight: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0, // Cách đáy màn hình
    left: 0,
    right: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;