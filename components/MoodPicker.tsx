import React from "react"
import {View, Text,StyleSheet} from 'react-native'


const MoodOptions= [
    { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
]

export const MoodPicker: React.FC = () => {
    return (
        <View style={styles.container}>
            {MoodOptions.map((item,index) => {
                return (
                    <Text key={index} style={styles.moodSize}>
                        {item.emoji}
                    </Text>
                    
                )
            })}
        </View>
        
    )
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems:'center'
        
        
    },
    moodSize: {
        fontSize: 50,
        paddingHorizontal: 10,
        
        
    }

})