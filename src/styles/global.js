import EStyleSheet from 'react-native-extended-stylesheet';

// StyleSheet
EStyleSheet.build({
  $text: '#1a1a1a',
  $bgColor: '#fff',
});

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$bgColor',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '$text',
  },
  inputGroup: {
    width: '50%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    marginBottom: 15,
  },
});
