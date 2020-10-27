import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import FloatingButton from "../components/FloatingButton";

export default function TransactionScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#3C3C3E", flex: 1 }}>
      <View style={styles.Header}>
        <Text style={styles.Title}>Transaction</Text>
        <TouchableOpacity
          style={styles.Search}
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <MaterialIcons name="search" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.bg}></View>
      <FloatingButton
        style={styles.floatinBtn}
        onPress={() => navigation.navigate("AddTransactionScreen")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
    marginTop: 50,
    height: 20,
    marginRight: -72.5,
    marginLeft: -72.5,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
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
  floatinBtn: {
    position: "absolute",
    bottom: 25,
    right: 25,
  },
});
