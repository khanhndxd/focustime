import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ handleChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton
        size={75}
        title="10"
        handlePress={() => handleChangeTime(10)}
      />
      <RoundedButton
        size={75}
        title="20"
        handlePress={() => handleChangeTime(20)}
      />
      <RoundedButton
        size={75}
        title="30"
        handlePress={() => handleChangeTime(30)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
