import { useEffect, useRef } from "react";
import { Animated } from "react-native";

import { IUsersResponse } from "../../interfaces";
import { UserProfileBanner } from "./components/UserProfileBanner";

interface AnimatedUserProfileBannerProps {
  users: IUsersResponse;
  index: number;
}

export const AnimatedUserProfileBanner = ({
  users,
  index,
}: AnimatedUserProfileBannerProps) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);
  return (
    <Animated.View style={{ opacity }}>
      <UserProfileBanner
        avatar={users.avatar}
        username={users.name}
        avatarImage={false}
      />
    </Animated.View>
  );
};
