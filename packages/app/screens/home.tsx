import { View, Text } from 'react-native';

export function Home() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-base">
        Edit{' '}
        <Text className="text-base font-bold text-2xl">
          {' '}
          packages/app/screens/home.tsx
        </Text>{' '}
        to edit this screen.
      </Text>
    </View>
  );
}
