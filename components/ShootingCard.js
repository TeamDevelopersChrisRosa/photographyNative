import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Button } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { RectButton } from "./Button";
import { TouchableHighlight } from "react-native-gesture-handler";

const ShootingCard = ({ data }) => {

  console.log('data dans shootingCard', data);

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
              source={data.images[1].path}
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
            left: 140,
          }}
        >
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            name={data.name}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default ShootingCard;
