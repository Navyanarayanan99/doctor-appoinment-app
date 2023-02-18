import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button,Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';

const BookingForm = () => {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [startDate, setStartDate] = useState(null);

  const handleBooking = () => {
    
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Patient Name</Text>
      <TextInput
        style={styles.input}
        value={patientName}
        onChangeText={setPatientName}
      />
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.label}>Appointment Date</Text>
      <TextInput
        style={styles.input}
        value={appointmentDate}
        onChangeText={setAppointmentDate}
        placeholder="YYYY-MM-DD"
        keyboardType="numeric"
      />
    {/* <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      includeDates={[new Date(), addDays(new Date(), 1)]}
      placeholderText="This only includes today and tomorrow"
    /> */}
      <Text style={styles.label}>Doctor ID</Text>
      <TextInput
        style={styles.input}
        value={doctorId}
        onChangeText={setDoctorId}
        keyboardType="numeric"
      />
      <Button
        title="Book Appointment"
        onPress={handleBooking}
        disabled={!patientName || !age || !appointmentDate || !doctorId || new Date(appointmentDate) < new Date()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

export default BookingForm;