import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";

export default function SummaryScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#3C3C3E", flex: 1 }}>
      <View style={styles.Header}>
        <Text style={styles.Title}>Summary</Text>
      </View>
      <View style={styles.bg}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
    marginTop: 50,
    height: 20,
    marginRight: 0,
    marginLeft: 25,
    height: 60,
    flexDirection: "row",
  },
  Title: {
    fontSize: 22,
    color: "#FFF",
  },
  bg: {
    backgroundColor: "#F3F4F6",
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
});
