import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { OnsColors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";

// Mock data - replace with actual API data later
const mockSurveys = [
  {
    id: "1",
    title: "Shopping Habits Survey",
    reward: 50,
    closeDate: "2025-07-01",
  },
  {
    id: "2",
    title: "Travel Experience Feedback",
    reward: 75,
    closeDate: "2025-06-30",
  },
  {
    id: "3",
    title: "Digital Banking Survey",
    reward: 100,
    closeDate: "2025-06-25",
  },
];

const SurveyCard = ({ title, reward, closeDate, onPress }: any) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.detailsContainer}>
      <Text style={styles.reward}>£{reward} Reward</Text>
      <Text style={styles.date}>
        Closes: {new Date(closeDate).toLocaleDateString()}
      </Text>
    </View>
  </TouchableOpacity>
);

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  const handleSurveyPress = (survey: any) => {
    setSelectedSurvey(survey);
    // Add navigation or modal logic here
  };

  return (
    <View style={{ ...styles.container, paddingTop: headerHeight }}>
      <Text style={styles.header}>Available Surveys</Text>
      <FlatList
        data={mockSurveys}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SurveyCard {...item} onPress={() => handleSurveyPress(item)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reward: {
    fontSize: 16,
    color: OnsColors.onsColorLeafGreenVibrant,
    fontWeight: "500",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
});

export default Page;
