// app/registration.tsx
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function RegistrationPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  const handleRegister = () => {
    console.log({ name, email, phone: `${countryCode} ${phone}` });
    // You can add your backend or API call here
    //router.push('/home'); // 👈 navigate after registration
  };

  const handleSkip = () => {
    //router.push('/home'); // 👈 skip registration
  };

  return (
    <LinearGradient colors={['#8E2DE2', '#4A00E0']} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.form}>
            <Text style={styles.title}>Register</Text>

            {/* Name */}
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#ccc"
              value={name}
              onChangeText={setName}
            />

            {/* Email */}
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            {/* Phone with Country Picker */}
            <View style={styles.phoneRow}>
              <View style={styles.countryPicker}>
                <Picker
                  selectedValue={countryCode}
                  onValueChange={(itemValue) => setCountryCode(itemValue)}
                  style={styles.picker}
                  dropdownIconColor="#fff"
                >
                  <Picker.Item label="🇺🇸 +1" value="+1" />
                  <Picker.Item label="🇬🇧 +44" value="+44" />
                  <Picker.Item label="🇮🇳 +91" value="+91" />
                  <Picker.Item label="🇨🇦 +1" value="+1" />
                  <Picker.Item label="🇦🇺 +61" value="+61" />
                </Picker>
              </View>

              <TextInput
                style={[styles.input, { flex: 1, marginLeft: 10 }]}
                placeholder="Phone Number"
                placeholderTextColor="#ccc"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>

            {/* Register Button */}
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            {/* Skip Button */}
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipText}>Skip for now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  countryPicker: {
    width: 110,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    overflow: 'hidden',
  },
  picker: {
    color: '#fff',
    height: 50,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    marginTop: 10,
  },
  buttonText: {
    color: '#6A0DAD',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  skipText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
