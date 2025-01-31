import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import icons from "@/constants/icons"
import images from "@/constants/images"
import {settings} from "@/constants/data";

interface SettingsItemProps {
  icon: any,
  title: string,
  onPress?: () => void,
  textStyle?: any,
  showArrow?: boolean
}
const SettingsItem = ({icon, title, onPress, textStyle, showArrow = true} : SettingsItemProps) => (
  <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-3">
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6"/>
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}> {title}</Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className="size-5" /> }
  </TouchableOpacity>
)
const Profile = () => {
  const handleLogout = async () => {};
  return(
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>
        <View className="flex-row justify-center flex mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image source={images.japan} className="size-44 relative rounded-full"/>
            <TouchableOpacity className="absolute bottom-11 right-2 bg-white rounded-lg p-2">
              <Image source={icons.edit} className="size-8" />
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-bold mt-4">Dragon | DRH</Text>
          </View>
        </View>
        <View className="flex flex-col mt-10">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-gray-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {... item} />
            ))}
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-gray-200">
          <SettingsItem icon={icons.logout} title="Logout" onPress={handleLogout} textStyle="text-danger" showArrow={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Profile
