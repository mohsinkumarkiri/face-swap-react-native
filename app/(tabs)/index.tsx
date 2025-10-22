/*
import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

*/

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
          FaceSwap — Demo
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
