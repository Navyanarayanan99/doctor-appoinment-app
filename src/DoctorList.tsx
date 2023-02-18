import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DoctorsList = () => {
  const navigation = useNavigation();
  const [doctors, setDoctors] = useState([
    { id: '1', name: 'Dr. John Doe', specialization: 'Cardiologist' },
    { id: '2', name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
    { id: '3', name: 'Dr. Alex Johnson', specialization: 'Pediatrician' },
    { id: '4', name: 'Dr. Sarah Lee', specialization: 'Oncologist' },
    { id: '5', name: 'Dr. Michael Brown', specialization: 'Neurologist' },
    { id: '6', name: 'Dr. Alex Johnson', specialization: 'Pediatrician' },
    { id: '7', name: 'Dr. Sarah Lee', specialization: 'Oncologist' },
    { id: '8', name: 'Dr. Michael Brown', specialization: 'Neurologist' },
  ]);


  const bookAppointment = (doctorName: any) => {
    console.log(`Booking appointment with ${doctorName}`);
    
  };

  const renderItem = ({ item }) => (
    
    <View style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => bookAppointment(item.name)}
      >
        <Text style={styles.buttonText} onPress={()=> navigation.navigate('BookingForm')}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={doctors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: 16,
    color: '#777',
  },
  buttonContainer: {
    backgroundColor: '#039be5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DoctorsList;