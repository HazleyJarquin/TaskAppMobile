import { Image, StyleSheet, View, Text } from "react-native";

import { getFirstAndLastInitials } from "../../../../utils";
import { Avatar } from "loren-ui";

interface UserProfileBannerProps {
  avatar: string;
  username: string;
  avatarImage?: boolean;
}

export const UserProfileBanner = ({
  avatar,
  username,
  avatarImage = true,
}: UserProfileBannerProps) => {
  return (
    <View style={styles.container}>
      {avatarImage ? (
        <Avatar
          size={60}
          variant="avatarImage"
          source={{ uri: avatar }}
          isBorder
          borderContainerStyle={{ borderColor: "#fff" }}
        />
      ) : (
        <Avatar
          size={60}
          variant="avatarText"
          avatarText={getFirstAndLastInitials(username)}
          isBorder
          borderContainerStyle={{ borderColor: "#FF7043" }}
        />
      )}

      <Text
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 20,
          width: "50%",
        }}
      >
        {username}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#201F1F",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
});
