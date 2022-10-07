import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";

import { SIZES } from "../constants";
import { RectButton } from "./Button";
import { TouchableHighlight } from "react-native-gesture-handler";


const ShootingCard = ({ data }) => {

  const navigation = useNavigation();

  return (
    <View>
      {/* Image */}
      <View
        style={{
          width: "100%",
          height: 250,
        }}
        >
          <TouchableHighlight onPress={() => navigation.navigate("Details", { data: data })}>
            <Image
              source={{
                uri: data.pictures[0].secureUrl,
              }}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: SIZES.font,
                borderTopRightRadius: SIZES.font,
              }}
            /> 
         
          </TouchableHighlight>
      </View>
    
    {/* Name of shooting */}
      <View style={{ width: "100%", padding: SIZES.font }}>
        <View
          style={{
           position: "absolute",
            top: -70,
            left: '33%',
          }}
        >
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            name={data.nameOfGallery}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default ShootingCard;
