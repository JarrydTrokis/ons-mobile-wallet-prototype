import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const HelpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>FAQ</Text>
        <Text style={styles.question}>How do I send funds?</Text>
        <Text style={styles.answer}>
          To send funds, navigate to the Send screen and enter the recipient's
          address and amount.
        </Text>

        <Text style={styles.question}>How do I receive funds?</Text>
        <Text style={styles.answer}>
          Share your wallet address with the sender or show them your QR code
          from the Receive screen.
        </Text>

        <Text style={styles.question}>Is my wallet secure?</Text>
        <Text style={styles.answer}>
          Your wallet is protected by advanced encryption. Never share your
          private keys or recovery phrase.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Contact Support</Text>
        <Text style={styles.text}>
          Need more help? Contact our support team at support@example.com
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    color: "#444",
  },
  answer: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: "#666",
  },
});

export default HelpScreen;
