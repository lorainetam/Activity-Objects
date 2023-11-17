import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import StudentDetails from './StudentDetails';

const windowWidth = Dimensions.get('window').width;

const students = [
  {"id":1,"first_name":"Hyunsuk","last_name":"Choi","nick_name":"Hamster","course":"Treasure","year":2},
  {"id":2,"first_name":"Yoshi","last_name":"Kanemoto","nick_name":"Yosh","course":"Treasure","year":2},
  {"id":3,"first_name":"Chaeyeon","last_name":"Lee","nick_name":"Feather","course":"IZ*ONE","year":3},
  {"id":4,"first_name":"Jeongwoo","last_name":"Park","nick_name":"Baby","course":"Treasure","year":2},
  {"id":5,"first_name":"Jennie","last_name":"Kim","nick_name":"Baby Princess","course":"BLACKPINK","year":7},
  {"id":6,"first_name":"Rose","last_name":"Park","nick_name":"Golden Voice","course":"BLACKPINK","year":7},
  {"id":7,"first_name":"Lalisa","last_name":"Manoban","nick_name":"Main Dancer","course":"Blackpink","year":7},
  {"id":8,"first_name":"Jisoo","last_name":"Kim","nick_name":"Jisooyah","course":"BLACKPINK","year":7},
  {"id":9,"first_name":"Sakura","last_name":"Miyawaki","nick_name":"Sakura","course":"Leserafim","year":1},
  {"id":10,"first_name":"Jihoon","last_name":"Park","nick_name":"SKY","course":"Treasure","year":2},
  {"id":11,"first_name":"Junkyu","last_name":"Kim","nick_name":"Cutie","course":"Treasure","year":2},
  {"id":12,"first_name":"Jaehyuk","last_name":"Yoon","nick_name":"Handsome Face","course":"Treasure","year":2},
  {"id":13,"first_name":"Asahi","last_name":"Hamada","nick_name":"Joker","course":"Treasure","year":2},
  {"id":14,"first_name":"Doyoung","last_name":"Kim","nick_name":"Prince","course":"Treasure","year":2},
  {"id":15,"first_name":"Haruto","last_name":"Watanabe","nick_name":"Face Genius","course":"Treasure","year":2},
  {"id":16,"first_name":"Junghwan","last_name":"So","nick_name":"Baby Cow","course":"Treasure","year":2},
  {"id":17,"first_name":"Mashiho","last_name":"Takata","nick_name":"Unique Voice","course":"Treasure","year":2},
  {"id":18,"first_name":"Yedam","last_name":"Bang","nick_name":"Soothing Voice","course":"Treasure","year":2},
  {"id":19,"first_name":"Tyler","last_name":"Chua","nick_name":"","course":"Hori7on","year":1},
  {"id":20,"first_name":"Jungkook","last_name":"Jeon","nick_name":"Golden Maknae","course":"BTS","year":8},
  {"id":21,"first_name":"Namjoon","last_name":"Kim","nick_name":"Leadernim","course":"BTS","year":8},
  {"id":22,"first_name":"Jimin","last_name":"Park","nick_name":"Sexy","course":"BTS","year":8},
  {"id":23,"first_name":"Hoseok","last_name":"Jung","nick_name":"J-Hope","course":"BTS","year":8},
  {"id":24,"first_name":"Seokjin","last_name":"Kim","nick_name":"Worldwide Handsome","course":"BTS","year":8},
  {"id":24,"first_name":"Taehyung","last_name":"Kim","nick_name":"VBear","course":"BTS","year":8},
  {"id":24,"first_name":"Yoongi","last_name":"Min","nick_name":"Suga","course":"BTS","year":8},
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedItem(item)} style={styles.item}>
      <Text style={{ fontSize: 16 }}>{item.nick_name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={students}
          renderItem={renderItem}
          keyExtractor={(item) => item.nick_name}
        />
      </ScrollView>
      {selectedItem && (
        <StudentDetails
          visible={true}
          onClose={() => setSelectedItem(null)}
          data={selectedItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: 16,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 2,
    width: windowWidth - 40, // Adjust width to fit the screen
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
