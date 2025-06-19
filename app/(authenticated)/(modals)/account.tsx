import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { BlurView } from "expo-blur";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const useUser = () => {
  // Mock implementation of useUser hook
  return {
    user: {
      firstName: "John",
      lastName: "Doe",
      imageUrl: "https://example.com/avatar.jpg",
      update: async (data: any) => {
        console.log("User updated:", data);
      },
      setProfileImage: async (image: string) => {
        console.log("Profile image set:", image);
      },
    },
  };
};

const useAuth = () => {
  // Mock implementation of useAuth hook
  return {
    signOut: () => {
      console.log("User signed out");
    },
  };
};

const Page = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [edit, setEdit] = useState(false);

  const onSaveUser = async () => {
    try {
      await user?.update({ firstName: firstName!, lastName: lastName! });
      setEdit(false);
    } catch (error) {
      console.error(error);
    } finally {
      setEdit(false);
    }
  };

  const onCaptureImage = async () => {
    // Mock implementation of image capture
    const image = "https://example.com/new-avatar.jpg"; // Replace with actual image capture logic
    await user?.setProfileImage(image);
  };

  return (
    <BlurView
      intensity={80}
      tint={"dark"}
      style={{ flex: 1, paddingTop: 100, backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={onCaptureImage} style={styles.captureBtn}>
          {user?.imageUrl && (
            <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
          )}
        </TouchableOpacity>

        <View style={{ flexDirection: "row", gap: 6 }}>
          {!edit && (
            <View style={styles.editRow}>
              <Text style={{ fontSize: 26, color: "#fff" }}>
                {firstName} {lastName}
              </Text>
              <TouchableOpacity onPress={() => setEdit(true)}>
                <Ionicons name="ellipsis-horizontal" size={24} color={"#fff"} />
              </TouchableOpacity>
            </View>
          )}
          {edit && (
            <View style={styles.editRow}>
              <TextInput
                placeholder="First Name"
                value={firstName || ""}
                onChangeText={setFirstName}
                style={[styles.inputField]}
              />
              <TextInput
                placeholder="Last Name"
                value={lastName || ""}
                onChangeText={setLastName}
                style={[styles.inputField]}
              />
              <TouchableOpacity onPress={onSaveUser}>
                <Ionicons name="checkmark-outline" size={24} color={"#fff"} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn} onPress={() => signOut()}>
          <Ionicons name="log-out" size={24} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18 }}>Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="person" size={24} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18 }}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="bulb" size={24} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18 }}>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="megaphone" size={24} color={"#fff"} />
          <Text style={{ color: "#fff", fontSize: 18, flex: 1 }}>Inbox</Text>
          <View
            style={{
              backgroundColor: Colors.primary,
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12 }}>14</Text>
          </View>
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  editRow: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
  },
  captureBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: 140,
    height: 44,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  actions: {
    backgroundColor: "rgba(256, 256, 256, 0.1)",
    borderRadius: 16,
    gap: 0,
    margin: 20,
  },
  btn: {
    padding: 14,
    flexDirection: "row",
    gap: 20,
  },
});
export default Page;
