import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {

  const handleLogin = () => {
  };
  return (
    <SafeAreaView className="bg-white">
      <ScrollView contentContainerClassName={"h-full"}>
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain"/>
        <View className="flex flex-col items-center justify-center h-2/6 px-2">
          <Text className="text-base text-center uppercase font-rubik text-black-200">Welcome to Lysto</Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to Lysto with Google
          </Text>
          <TouchableOpacity onPress={handleLogin}
                            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 mb-10">
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik text-black-300 ml-2 text-center">
                Sign In with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn
