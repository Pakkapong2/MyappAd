import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Explore = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>👓 Glasses Store</Text>
        <Text style={styles.subtitle}>แว่นตาแฟชั่นยอดนิยม</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🕶️</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Aviator Classic</Text>
            <Text style={styles.itemDescription}>แว่นกันแดดทรงนักบิน ดีไซน์คลาสสิก</Text>
            <Text style={styles.itemPrice}>฿1,250</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>👓</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Retro Round</Text>
            <Text style={styles.itemDescription}>ทรงกลมวินเทจ ใส่ได้ทั้งหญิงและชาย</Text>
            <Text style={styles.itemPrice}>฿980</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🕶️</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Wayfarer Pro</Text>
            <Text style={styles.itemDescription}>สไตล์ทันสมัย น้ำหนักเบา</Text>
            <Text style={styles.itemPrice}>฿1,590</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>👓</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Blue Light Protect</Text>
            <Text style={styles.itemDescription}>กรองแสงหน้าจอ เหมาะกับคนทำงานคอม</Text>
            <Text style={styles.itemPrice}>฿1,200</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🕶️</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Sport Active</Text>
            <Text style={styles.itemDescription}>เหมาะสำหรับเล่นกีฬา ป้องกัน UV</Text>
            <Text style={styles.itemPrice}>฿1,450</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>👓</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Minimal Frame</Text>
            <Text style={styles.itemDescription}>เรียบหรู น้ำหนักเบา สวมใส่สบาย</Text>
            <Text style={styles.itemPrice}>฿1,050</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#2C3E50',
    padding: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#dcdcdc',
  },
  menuContainer: {
    padding: 15,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ecf0f1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    fontSize: 40,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
})
