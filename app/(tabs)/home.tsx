// app/home.tsx
import { StyleSheet, Text, View } from 'react-native';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎉 This Is Home Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: '600' },
});
