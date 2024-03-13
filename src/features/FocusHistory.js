import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/color';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {

  const renderItem = ({item}) => {
    return <Text style={styles.item}>- {item}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách công việc đã tập trung:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.gray,
  },
  title: {
    color: colors.black,
    fontSize: fontSizes.md,
  },
});
