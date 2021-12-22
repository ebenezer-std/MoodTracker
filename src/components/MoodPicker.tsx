import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MoodOptionType } from '../type';
import { theme } from '../theme';

const MoodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  const [selectedmood, setSelectedMood] = useState<MoodOptionType>();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> How are you right now?</Text>
      <View style={styles.moodStyle}>
        {MoodOptions.map((item, index) => {
          return (
            <View>
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
                <Text key={item.description} style={styles.moodSize}>
                  {item.emoji}
                </Text>
              </Pressable>
              <Text style={styles.description}>
                {selectedmood?.description === item.description
                  ? item.description
                  : undefined}
              </Text>
            </View>
          );
        })}
      </View>
      <Pressable style={styles.btn}>
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
    justifyContent: 'space-between'
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
