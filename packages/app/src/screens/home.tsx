import { Text, View } from 'react-native'

export function Home() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-base">
        Edit{' '}
        <Text className="text-2xl text-base font-bold">
          {' '}
          packages/app/screens/home.tsx
        </Text>{' '}
        to edit this screen.
      </Text>
    </View>
  )
}
