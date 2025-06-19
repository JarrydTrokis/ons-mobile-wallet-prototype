import Colors, { OnsColors } from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Rect,
  Text as SvgText,
} from "react-native-svg";

import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import activities from "@/mock/activity";

const Page = () => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}
    >
      <View style={styles.account}>
        <View style={styles.cardContainer}>
          <Svg height="200" width="320" viewBox="0 0 320 200">
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <Stop
                  offset="0"
                  stopColor={OnsColors.onsColorNightBlue}
                  stopOpacity="1"
                />
                <Stop
                  offset="1"
                  stopColor={OnsColors.onsColorLeafGreen}
                  stopOpacity="1"
                />
              </LinearGradient>
            </Defs>
            <Rect
              x="0"
              y="0"
              width="320"
              height="200"
              rx="20"
              ry="20"
              fill="url(#grad)"
            />
            <SvgText
              x="20"
              y="40"
              fill="white"
              fontSize="16"
              fontFamily="System"
            >
              ONS Wallet
            </SvgText>
            <SvgText
              x="20"
              y="100"
              fill="white"
              fontSize="48"
              fontFamily="System"
              fontWeight="bold"
            >
              £100.00
            </SvgText>
            <SvgText
              x="280"
              y="160"
              fill="white"
              fontSize="14"
              fontFamily="System"
              textAnchor="end"
            >
              John Doe
            </SvgText>
            <SvgText
              x="280"
              y="180"
              fill="white"
              fontSize="12"
              fontFamily="System"
              textAnchor="end"
            >
              0x1234567890abcdef
            </SvgText>
          </Svg>
        </View>
      </View>

      <View style={styles.actionRow}></View>

      <Text style={defaultStyles.sectionHeader}>Activity</Text>
      <View style={styles.transactions}>
        {activities.map((transaction) => (
          <View
            key={transaction.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
            }}
          >
            <View style={styles.circle}>
              <Text style={{ color: Colors.primary, fontWeight: "bold" }}>
                {transaction.emoji || "💰"}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "400" }}>{transaction.title}</Text>
              <Text style={{ color: Colors.gray, fontSize: 12 }}>
                {transaction.date.toLocaleString()}
              </Text>
            </View>
            <Text>
              {transaction.amount < 0
                ? `-£${Math.abs(transaction.amount)}`
                : `£${transaction.amount}`}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    alignItems: "center",
  },
  account: {
    marginTop: 40,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 20,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Page;
