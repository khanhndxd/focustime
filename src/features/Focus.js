import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');
  const handlePress = () => {
    if (subject.toString().trim() === '') {
      console.log('Không được để công việc trống!');
    } else {
      addSubject(subject);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="Công việc nào bạn cần tập trung?"
          mode="outlined"
          onChangeText={(value) => {
            setSubject(value);
          }}
        />
        <RoundedButton
          size={50}
          title="+"
          handlePress={handlePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
  },
  inputContainer: {
    padding: spacing.md,
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'top',
    alignItems: 'center',
  },
});
