import React from "react";
import { View, Image } from "react-native";

const ImageOfShooting = ({image}) => {
 
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
      }}
      key={image.id}
    >
      <Image
        source={{
          uri: image.secureUrl,
        }}
        resizeMode="contain"
        style={{ 
          width: "95%",
          height: 300,
         }}
      />
    </View>

  );
};

export default ImageOfShooting;