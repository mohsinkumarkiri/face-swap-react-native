import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';


const { width } = Dimensions.get('window');

export default function Index() {
  // Fade-in and slide animation for content
  const fadeAnim = useSharedValue(0);
  const translateY = useSharedValue(20);

  // Scale animation for button
  const scale = useSharedValue(1);

  useEffect(() => {
    fadeAnim.value = withTiming(1, { duration: 1000 });
    translateY.value = withTiming(0, { duration: 1000 });

    // Pulse animation for the Start button
    scale.value = withRepeat(
      withSequence(withTiming(1.05, { duration: 1000 }), withTiming(1, { duration: 1000 })),
      -1,
      true
    );
  }, []);

  const animatedContainer = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
    transform: [{ translateY: translateY.value }],
  }));

  const animatedButton = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <LinearGradient colors={['#4A00E0', '#8E2DE2']} style={styles.container}>
      <Animated.View style={[styles.content, animatedContainer]}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>to the Photobooth</Text>

        <Animated.View style={[animatedButton]}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => console.log('Start pressed')}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#6A0DAD',
    fontSize: 18,
    fontWeight: '600',
  },
});


/*
import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TabOneScreen() {
  const [visible, setVisible] = useState(false);
  const { width, height } = Dimensions.get("window");
  const isTablet = Math.min(width, height) >= 600;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={[styles.title, isTablet && styles.titleTablet]}>
          FaceSwap — Demoo
        </Text>

        <View style={[styles.card, isTablet && styles.cardTablet]}>
          <Text style={[styles.instructions, isTablet && styles.instructionsTablet]}>
            Tap the button to toggle the greeting
          </Text>

          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.button, isTablet && styles.buttonTablet]}
            onPress={() => setVisible((s) => !s)}
          >
            <Text style={[styles.buttonText, isTablet && styles.buttonTextTablet]}>
              {visible ? "Hide" : "Say Hello"}
            </Text>
          </TouchableOpacity>

          {visible && <Text style={[styles.hello, isTablet && styles.helloTablet]}>👋 Hello!</Text>}
        </View>

        <Text style={styles.footer}>
          Device: {Math.round(width)} × {Math.round(height)} {Platform.OS}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");
const baseFont = Math.max(14, width * 0.04);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f6f7fb" },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingTop: 28,
    backgroundColor: "#f6f7fb",
  },
  title: {
    fontSize: baseFont + 6,
    fontWeight: "700",
    marginBottom: 18,
    color: "#111827",
  },
  titleTablet: {
    fontSize: baseFont + 12,
  },
  card: {
    width: "100%",
    maxWidth: 720,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  cardTablet: {
    padding: 28,
  },
  instructions: {
    fontSize: baseFont,
    textAlign: "center",
    marginBottom: 14,
    color: "#374151",
  },
  instructionsTablet: {
    fontSize: baseFont + 4,
  },
  button: {
    width: "60%",
    minHeight: 48,
    backgroundColor: "#2563eb",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  buttonTablet: {
    width: "45%",
    minHeight: 56,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: baseFont,
  },
  buttonTextTablet: {
    fontSize: baseFont + 2,
  },
  hello: {
    marginTop: 12,
    fontSize: baseFont + 6,
    fontWeight: "800",
    color: "#0f172a",
  },
  helloTablet: {
    fontSize: baseFont + 12,
  },
  footer: {
    marginTop: 30,
    color: "#6b7280",
    fontSize: 12,
  },
});

*/