import { Pressable } from "react-native";
import { SymbolView } from "expo-symbols";
import { Tabs } from "expo-router";

function TabButton({
  children,
  style,
  ...props
}: any) {
  return (
    <Pressable
      {...props}
      style={[
        style,
        {
          flex: 1,
          borderRadius: 10,
          overflow: "hidden",
        },
      ]}
    >
      {children}
    </Pressable>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#ffffff",

        tabBarStyle: {
          height: 60,
          marginHorizontal: 20,
          marginBottom: 16,
          paddingTop: 0,
          paddingBottom: 0,
          borderRadius: 10,
          borderTopWidth: 0,
          backgroundColor: "#33354c",
          overflow: "hidden",
        },

        tabBarItemStyle: {
          padding: 0,
          borderRadius: 10,
          overflow: "hidden",
        },

        tabBarIconStyle: {
          marginBottom: 2,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "400",
        },

        tabBarActiveBackgroundColor: "#419278",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarButton: (props) => <TabButton {...props} />,
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name={{
                ios: "house",
                android: "home",
                web: "home",
              }}
              size={size}
              tintColor={color}
              weight="semibold"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarButton: (props) => <TabButton {...props} />,
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name={{
                ios: "creditcard.fill",
                android: "credit_card",
                web: "credit_card",
              }}
              size={size}
              tintColor={color}
              weight="semibold"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarButton: (props) => <TabButton {...props} />,
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name={{
                ios: "person",
                android: "person",
                web: "person",
              }}
              size={size}
              tintColor={color}
              weight="semibold"
            />
          ),
        }}
      />
    </Tabs>
  );
}