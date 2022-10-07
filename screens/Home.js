import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList } from "react-native";

import { ShootingCard } from "../components";

const Home = () => {

  const [isLoading, setLoading] = useState(true);
  const [shootings, setShootings] = useState([]);

  const getShootings = async () => {
    try {
     const response = await fetch('https://photographyy.herokuapp.com/api/shooting');
     const json = await response.json();
     setShootings(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
   getShootings();
 }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            data={shootings}
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
