import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MoodOptionType } from '../type';
import { theme } from '../theme';

const MoodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'Studious' },
  { emoji: '🤔', description: 'Pensive' },
  { emoji: '😊', description: 'Happy' },
  { emoji: '🥳', description: 'Celebratory' },
  { emoji: '😤', description: 'Frustrated' },
];

type MoodPickerProps = {
  handleSelectedMood: (moodOption: MoodOptionType) => void;
  
};


export const MoodPicker: React.FC<MoodPickerProps> = ({
  handleSelectedMood,
}) => {
  const [selectedmood, setSelectedMood] = useState<MoodOptionType>();

  const handleSelect = React.useCallback(() => {
    if (selectedmood) {
      handleSelectedMood(selectedmood)
      setSelectedMood(undefined)
    }
  },[selectedmood, handleSelectedMood])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> How are you right now?</Text>
      <View style={styles.moodStyle}>
        {MoodOptions.map((item, index) => {
          return (
            <View key={item.description}>
              <Pressable
                onPress={() => {
                  setSelectedMood(item);
                }}
                style={[
                  styles.moodItem,
                  selectedmood?.emoji === item.emoji
                    ? styles.selectedMood
                    : undefined,
                ]}>
                <Text style={styles.moodSize}>{item.emoji}</Text>
              </Pressable>
              <Text style={styles.description}>
                {selectedmood?.description === item.description
                  ? item.description
                  : undefined}
              </Text>
            </View>
          );
        })}
        {console.log(selectedmood)}
      </View>
      <Pressable
        style={styles.btn}
        onPress={
         handleSelect
        }>
        <Text style={styles.btnText}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    borderWidth: 3,
    margin: 10,
    borderRadius: 10,
    borderColor: theme.colorPurple,
  },
  moodStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodSize: {
    fontSize: 30,
    paddingHorizontal: 5,
  },
  moodItem: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedMood: {
    backgroundColor: '#454C73',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: theme.colorWhite,
  },
  description: {
    color: '#454C73',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textAlign: 'center',
    marginBottom: 20,
  },
  btnText: {
    textAlign: 'center',
    color: theme.colorWhite,
    fontWeight: 'bold',
  },
});
