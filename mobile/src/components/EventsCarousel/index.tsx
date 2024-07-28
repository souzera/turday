import { styles } from "./style";
import { View } from "react-native";
import PagerView from "react-native-pager-view";
import EventCarouselItem from "../EventCarouseItem";
import { CarouselProps } from "./interface";
import { useEffect, useState } from "react";
import { THEME } from "../../theme";
("react-native-pager-view");

export default function EventsCarousel({ events }: CarouselProps){

  const [ activeIndex, setActiveIndex ] = useState(0);

  const onScrollPage = (event: any) => {
    setActiveIndex(event.nativeEvent.position);
  }

  return (
    <View style={styles.center}>
      <PagerView style={styles.slide} onPageScroll={onScrollPage} useNext={false}>
        {events.map((item) => (
          <View key={item.id} style={{padding:10}}>
            <EventCarouselItem item={item} style={{...styles.page}}/>
          </View>
        ))}
      </PagerView>

      <View style={{flexDirection: "row", justifyContent: "center"}}>
        {events.map((_, index) => (
          <View
            key={index}
            style={{
              width: 30,
              height: 8,
              borderRadius: 30,
              backgroundColor: activeIndex === index ? THEME.COLORS.DARKGRAY : THEME.COLORS.LIGTHGRAY,
              margin: 5,
            }}
          />
        ))}
    </View>

    </View>
  );
};
