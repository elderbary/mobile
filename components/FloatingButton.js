import React from "react";
import { View, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default (props) => (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
    <View
      style={{
        backgroundColor: "#3C3C3E",
        width: 60,
        height: 60,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons name="add" size={38} color="#FFF" />
    </View>
  </TouchableOpacity>
);
