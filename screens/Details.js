import React from "react";
import { View, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { SIZES, assets } from "../constants";
import { CircleButton, ImageOfShooting } from "../components";


const DetailsHeader = ({ navigation }) => (
  <View style={{ width: "100%", height: 50 }}>
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={15}
    />
  </View>
);


const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <FlatList
        data={data.images} 
        renderItem={({ item }) => <ImageOfShooting image={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
          </React.Fragment>
        )} 
      />
    </SafeAreaView>
  );
};

export default Details;
