import { TamaguiProvider, View, createTamagui, Text } from '@tamagui/core'
import config from '@tamagui/config/v3'
import { useFonts } from 'expo-font'
import { UserCircle, Heart, MessageSquare, Share, Bookmark, Home, Search, PlusCircle, Video, User } from '@tamagui/lucide-icons';
import { ScrollView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const tamaguiConfig = createTamagui(config)

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style={{ flex: 1}}/>

        {/* Header */}
        <View flexDirection="row" justifyContent="space-between" padding={10} backgroundColor="white">
          <Text fontWeight="bold" fontSize={20}>Instagram</Text>
          <View flexDirection="row">
            <Heart size={24} />
            <MessageSquare size={24} marginLeft={15} />
          </View>
        </View>

        {/* Main Content */}
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

          {/* Stories */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 10, backgroundColor: 'white' }}>
            {[...Array(5)].map((_, index) => (
              <View alignItems="center" marginHorizontal={10} key={index}>
                <UserCircle size={60} color="#ccc" />
                <Text fontSize={12}>billyprtmaa</Text>
              </View>
            ))}
          </ScrollView>

          {/* Notification */}
          <View padding={10} backgroundColor="white" borderBottomWidth={1} borderColor="#ccc" alignItems="center">
            <Text fontSize={14} color="#888" textAlign="center">You've seen all new posts from the past 3 days from accounts you follow.</Text>
          </View>

          {/* Suggested for You */}
          <View padding={10} backgroundColor="white" borderColor="green" borderWidth={0} marginHorizontal={10} marginTop={0}>
            <View flexDirection="row" justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold" fontSize={16}>Suggested for you</Text>
              <Text fontSize={14} color="#0095f6">Older posts</Text>
            </View>
            <View flexDirection="row" justifyContent="space-between" alignItems="center" marginTop={10}>
              <View flexDirection="row" alignItems="center">
                <Image source={{ uri: 'https://example.com/folkative.jpg' }} style={{ width: 50, height: 50, borderRadius: 25 }} />
                <Text fontSize={14} marginLeft={10}>folakative</Text>
              </View>
              <Text fontWeight="bold" fontSize={14} color="#0095f6">Follow</Text>
            </View>
          </View>

          {/* Post 1 */}
          <View padding={10} backgroundColor="white" borderBottomWidth={1} borderColor="#ccc">
            <Image source={{ uri: 'https://banggaikep.go.id/portal/wp-content/uploads/2024/03/jokowi-1.jpg' }} style={{ width: '100%', height: 200 }} />
            
            {/* Icons and Interactions */}
            <View flexDirection="row" justifyContent="space-between" marginTop={10}>
              <View flexDirection="row">
                <TouchableOpacity>
                  <Heart size={24} color="#222" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 15 }}>
                  <MessageSquare size={24} color="#222" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 15 }}>
                  <Share size={24} color="#222" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Bookmark size={24} color="#222" />
              </TouchableOpacity>
            </View>
            
            {/* Likes and Caption */}
            <Text fontWeight="bold" fontSize={14} marginTop={10}>123 likes</Text>
            <Text marginTop={5}>
              <Text fontWeight="bold">folakative </Text>
              Hari ini, tanggal 7 Agustus jadi hari badut sedunia. 🤡
            </Text>
            <Text color="#999" marginTop={5} fontSize={12}>View all 4 comments</Text>
          </View>

          {/* Post 2 */}
          <View padding={10} backgroundColor="white" borderBottomWidth={1} borderColor="#ccc">
            <Image source={{ uri: 'https://banggaikep.go.id/portal/wp-content/uploads/2024/03/jokowi-1.jpg' }} style={{ width: '100%', height: 200 }} />
            
            {/* Icons and Interactions */}
            <View flexDirection="row" justifyContent="space-between" marginTop={10}>
              <View flexDirection="row">
                <TouchableOpacity>
                  <Heart size={24} color="#222" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 15 }}>
                  <MessageSquare size={24} color="#222" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 15 }}>
                  <Share size={24} color="#222" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Bookmark size={24} color="#222" />
              </TouchableOpacity>
            </View>
            
            {/* Likes and Caption */}
            <Text fontWeight="bold" fontSize={14} marginTop={10}>123 likes</Text>
            <Text marginTop={5}>
              <Text fontWeight="bold">folakative </Text>
              Hari ini, tanggal 7 Agustus jadi hari badut sedunia. 🤡
            </Text>
            <Text color="#999" marginTop={5} fontSize={12}>View all 4 comments</Text>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View flexDirection="row" justifyContent="space-around" paddingVertical={10} borderTopWidth={1} borderColor="#ccc">
          <TouchableOpacity>
            <Home size={24} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Search size={24} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity>
            <PlusCircle size={24} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Video size={24} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity>
            <User size={24} color="#222" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TamaguiProvider>
  );
}
