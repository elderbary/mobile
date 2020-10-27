import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Picker,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";

export default function AddTransactionScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#3C3C3E", flex: 1 }}>
      <View style={styles.Header}>
        <Text style={styles.Title}>Add Transaction</Text>
      </View>
      <View style={styles.bg}>
        <View style={styles.SwitchView}>
          <SwitchSelector
            style={styles.SelectorSwitch}
            initial={0}
            onPress={(value) => alert(value)}
            textColor="#000000"
            selectedColor="#FFF"
            buttonColor="#3C3C3E"
            borderColor="#FFF"
            height={60}
            fontSize={18}
            valuePadding={0}
            borderRadius={20}
            hasPadding
            options={[
              { label: "Expenses", value: "Expenses" },
              { label: "Incomes", value: "Incomes" },
            ]}
          />
        </View>
        <View style={styles.PlaceHolderView}>
          <TextInput style={styles.Input} placeholder="0 zł" />
        </View>
        <View style={styles.Form}>
          <View
            style={{
              marginTop: 30,
              borderWidth: 1.1,
              paddingRight: 10,
              paddingLeft: 10,
              borderRadius: 15,
              borderColor: "#3C3C3E",
            }}
          >
            <Picker style={styles.PickerStyle}>
              <Picker.Item value="" label="Kategorie" />
              <Picker.Item label="Car" value="Car" />
              <Picker.Item label="Car" value="Car" />
              <Picker.Item label="Shopping" value="Shopping" />
              <Picker.Item label="Groceries" value="Groceries" />
              <Picker.Item label="Restaurant" value="Restaurant" />
              <Picker.Item label="Health" value="Health" />
              <Picker.Item label="Work" value="Work" />
              <Picker.Item label="Clothes" value="Clothes" />
              <Picker.Item label="Leisure" value="Leisure" />
              <Picker.Item label="Transport" value="Transport" />
            </Picker>
          </View>
        </View>
      </View>
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
  SwitchView: {
    marginTop: 60,
    alignItems: "center",
  },
  SelectorSwitch: {
    width: 280,
  },
  PlaceHolderView: {
    alignItems: "center",
    marginTop: 40,
    justifyContent: "center",
  },
  Input: {
    width: 300,
    height: 90,
    fontSize: 45,
    textAlign: "center",
  },
  Form: {
    marginTop: 0,
    alignItems: "center",
  },
  PickerStyle: {
    width: 200,
    height: 50,
  },
  bg: {
    backgroundColor: "#F3F4F6",
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
});
``;
