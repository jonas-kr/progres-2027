import { Text, View } from "react-native";
import { SafeArea } from "../../components/safe-area";

export default function ProfileScreen() {
  return (
    <SafeArea className="flex-1 bg-[#f4f4f2]" edges={["top"]}>
      <View className="flex-1 px-5">
        <Text className="mt-2 text-3xl font-bold text-[#1e1e1d]">Profile</Text>
        <View className="flex-1 items-center justify-center">
          <Text className="text-base text-[#8d8b85]">Profile coming soon</Text>
        </View>
      </View>
    </SafeArea>
  );
}
