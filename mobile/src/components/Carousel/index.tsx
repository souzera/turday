import { styles } from "./style";
import { View, Text } from "react-native";
import PagerView from "react-native-pager-view";

const Carousel = () => {
  return (
    <View style={styles.center}>
      <PagerView style={styles.slide}>
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
};

export default Carousel;
