import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Button } from "react-native";

import { ShootingCard } from "../components";
import { COLORS, ShootingData } from "../constants";

const Home = () => {
  const [shootingData, setShootingData] = useState(ShootingData);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            data={shootingData}
            renderItem={({ item }) => < ShootingCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default Home;
