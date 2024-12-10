import { Stack } from 'expo-router'

import {
  useFonts,
  Rubik_600SemiBold as Rubik600SemiBold,
  Rubik_400Regular as Rubik400Regular,
  Rubik_500Medium as Rubik500Medium,
  Rubik_700Bold as Rubik700Bold,
} from '@expo-google-fonts/rubik'

import { colors } from '@/styles/colors'
import { Loading } from '@/components/loading'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik600SemiBold,
    Rubik400Regular,
    Rubik500Medium,
    Rubik700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] },
      }}
    />
  )
}
