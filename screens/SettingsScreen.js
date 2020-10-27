import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { ListItem, Icon } from "react-native-elements";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#3C3C3E", flex: 1 }}>
      <View style={styles.Header}>
        <Text style={styles.Title}>Settings</Text>
      </View>
      <ScrollView style={styles.bg}>
        <View style={styles.Content}>
          <Text style={styles.SectionTitle}>USER</Text>
          <View>
            {user.map((item, i) => (
              <ListItem key={i}>
                <ListItem.Content style={styles.ListItem}>
                  <ListItem.Title style={{ fontSize: 17, marginLeft: 15 }}>
                    {item.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </View>
        <View style={styles.Content}>
          <Text style={styles.SectionTitle}>GLOBAL</Text>
          <View>
            {global.map((item, i) => (
              <ListItem key={i}>
                <ListItem.Content style={styles.ListItem}>
                  <ListItem.Title style={{ fontSize: 17, marginLeft: 15 }}>
                    {item.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </View>
        <View style={styles.Content}>
          <Text style={styles.SectionTitle}>DATA</Text>
          <View>
            {data.map((item, i) => (
              <ListItem key={i}>
                <ListItem.Content style={styles.ListItem}>
                  <ListItem.Title style={{ fontSize: 17, marginLeft: 15 }}>
                    {item.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </View>
        <View style={styles.Content}>
          <Text style={styles.SectionTitle}>ABOUT</Text>
          <View>
            {about.map((item, i) => (
              <ListItem key={i}>
                <ListItem.Content style={styles.ListItem}>
                  <ListItem.Title style={{ fontSize: 17, marginLeft: 15,}}>
                    {item.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </View>
        <View style={styles.Footer}>
          <Text style={{ color: "#BCBCBC", fontSize: 12 }}>Frugal</Text>
          <Text style={{ color: "#BCBCBC", fontSize: 10 }}>1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const user = [
  {
    title: "Name",
  },
  {
    title: "Avatar",
  },
];

const global = [
  {
    title: "Default currency",
  },
  {
    title: "Categories managment",
  },
];

const data = [
  {
    title: "Export data to CSV",
  },
];

const about = [
  {
    title: "Support",
  },
  {
    title: "Licenses",
  },
];

const styles = StyleSheet.create({
  Header: {
    height: 100,
  },
  Title: {
    marginLeft: 35,
    fontSize: 22,
    color: "#FFF",
    marginTop: 45,
  },
  bg: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  Content: {
    marginTop: 20,
    marginLeft: 35,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginRight: 35,
  },
  SectionTitle: {
    fontSize: 13,
    color: "#BCBCBC",
    marginTop: 10,
  },
  ListItem: {
    marginTop: 0,
    height: 55,
    borderRadius: 25,
    borderWidth: 1,
  },
  Footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
