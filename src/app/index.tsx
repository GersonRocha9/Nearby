import { Text, View } from 'react-native'
import { colors } from '../styles/colors'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: colors.red.base,
        }}
      >
        Hello Nearby
      </Text>
    </View>
  )
}
