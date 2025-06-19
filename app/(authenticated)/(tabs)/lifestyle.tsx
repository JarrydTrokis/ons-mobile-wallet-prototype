import { useHeaderHeight } from "@react-navigation/elements";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const Page = () => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}
    >
      <Text>Page</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
});

export default Page;
