import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useNavigation,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import FloatingButton from "../components/FloatingButton";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#3C3C3E", flex: 1 }}>
      <View style={styles.TopSection}>
        <Image
          style={{ width: 45, height: 45, marginTop: -8 }}
          source={require("../src/images/avatar.png")}
        />
        <Text style={styles.WelcomeName}>Hi, Suzy</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
          <MaterialIcons name="menu" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.BGTitle}>
        <Text style={styles.Cashe}>zł</Text>
        <Text style={styles.CasheTitle}>2 360</Text>
      </View>
      <View style={styles.bg}>
        <Text></Text>
      </View>
      <FloatingButton
        style={styles.floatinBtn}
        onPress={() => navigation.navigate("AddTransactionScreen")}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  TopSection: {
    marginTop: 50,
    marginLeft: -20,
    marginRight: -20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  WelcomeName: {
    fontSize: 22,
    color: "#FFF",
  },
  BGTitle: {
    height: 125,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  Cashe: {
    color: "#FFF",
    marginRight: 3,
    fontSize: 16,
    marginBottom: 40,
  },
  CasheTitle: {
    alignItems: "center",
    color: "#FFF",
    fontSize: 55,
  },
  bg: {
    backgroundColor: "#F3F4F6",
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  floatinBtn: {
    position: "absolute",
    bottom: 25,
    right: 25,
  },
});
