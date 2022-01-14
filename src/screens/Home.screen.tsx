import React from 'react';
import { View, Text, StyleSheet, TextComponent } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionWithTimeStamp, MoodOptionType } from '../type';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimeStamp[]>([]);

  const handleSelectedMood = React.useCallback(
    (mood: MoodOptionType) => {
      setMoodList(current => [
        ...current,
        { mood, timeStamp: Date.now() },
      ]);
      //setMoodList(current => [...current, { mood, timestamp: Date.now() }]);
      console.log(moodList)
    },
    [],  
  );
  

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectedMood={handleSelectedMood} />
      {
        moodList.map(item => (
          <Text key={item.timeStamp}>
            {item.mood.emoji} {new Date(item.timeStamp).toString()}
          </Text>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
