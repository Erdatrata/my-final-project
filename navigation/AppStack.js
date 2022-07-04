import React,{useContext} from 'react';
import {View,LogBox, TouchableOpacity, Text,  StyleSheet,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomDrawer from '../components/CustomDrawer';
import {AuthContext} from './AuthProvider';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import Add_hook_post from '../screens/Add_hook_post';
import add_alcohol from '../screens/add_alcohol_post';
import add_food_post from '../screens/add_food_post';
import MessagesScreen from '../screens/MessagesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import getin_function from '../screens/Getin_function';
import menu from '../screens/MainTabScreen';
import who_h from '../screens/who_h';
import user_come from '../screens/user_come';
import hookeh_fun from '../screens/hook_order';
import alcohol_fun from '../screens/Alcohol_fouction';
import Food_function from '../screens/Food_function';
import about_us from '../screens/A_us';
import Log_Out from '../screens/Logout_page';
import map_fun from '../screens/ExploreScreen';
import muisc_function from '../screens/Main_muisc';
import refresh_user_come from '../screens/refresh_user_come';
import refresh_music from '../screens/Refresh_music';

const Stack = createStackNavigator();
const Tab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();
//for tast
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
//rata
const FeedStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="DNA BAR"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
      }}
    />
        <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
     <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);
const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
 <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen 
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />

  </Stack.Navigator>
);
const Getin_function = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="GETIN"
      component={getin_function}
      options={{
        headerShown: false,
      }}
    />
 

  </Stack.Navigator>
);
const Menu_founction=({navigation}) => (
  <Stack.Navigator>
  <Stack.Screen
    name="menu"
    component={menu}
    options={{
      headerShown: false,
    }}
  />
  <Stack.Screen
  name="hookah"
  component={hookeh_fun}
  options={{
    headerTitle: 'Menu hookah',
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#fff',
      shadowColor: '#fff',
      elevation: 0,
    },
    headerRight: () => (
      <View style={{marginRight: 10}}>
        <FontAwesome5.Button
          name="plus"
          size={22}
          backgroundColor="#fff"
          color="#2e64e5"
          onPress={() => navigation.navigate('Add_hook_post')}
        />
      </View>
    ),
  }}
/>
<Stack.Screen
      name="Add_hook_post"
      component={Add_hook_post}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  



 <Stack.Screen
  name="Alcohol"
  component={alcohol_fun}
  options={{
    headerTitle: 'Menu Alcohol',
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#fff',
      shadowColor: '#fff',
      elevation: 0,
    },
    headerRight: () => (
      <View style={{marginRight: 10}}>
        <FontAwesome5.Button
          name="plus"
          size={22}
          backgroundColor="#fff"
          color="#2e64e5"
          onPress={() => navigation.navigate('add_alcohol')}
        />
      </View>
    ),
  }}
/>
<Stack.Screen
      name="add_alcohol"
      component={add_alcohol}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />



<Stack.Screen
  name="food"
  component={Food_function}
  options={{
    headerTitle: 'Menu Food',
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#fff',
      shadowColor: '#fff',
      elevation: 0,
    },
    headerRight: () => (
      <View style={{marginRight: 10}}>
        <FontAwesome5.Button
          name="plus"
          size={22}
          backgroundColor="#fff"
          color="#2e64e5"
          onPress={() => navigation.navigate('add_food')}
        />
      </View>
    ),
  }}
/> 

<Stack.Screen
      name="add_food"
      component={add_food_post}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
</Stack.Navigator>
);
const Map_function = ({navigation}) => (
  <Stack.Navigator>
  <Stack.Screen
    name="free ride_1"
    component={map_fun}
    options={{
      headerShown: false,
    }}
  />
  </Stack.Navigator>
);
const How_here =({navigation})=>(
    <Stack.Navigator>
       <Stack.Screen
         name="who_here"
         component={who_h}
         options={{
           headerShown: false,
         }}

       />
   
       <Stack.Screen 

         name="user_come"
         component={user_come}
         options={{
           headerTitle: 'Who coming',
           headerBackTitleVisible: false,
           headerTitleAlign: 'center',
           headerStyle: {
             backgroundColor: '#fff',
             shadowColor: '#fff',
             elevation: 0,
           },
           headerRight: () => (
            <View style={{marginRight: 10}}>
              <FontAwesome5.Button
                name="trash-alt"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => navigation.navigate('refresh')}
              />
            </View>
          ),
         }}
         
       />
       <Stack.Screen
      name="refresh"
      component={refresh_user_come}
      options={{
        title: 'who_coming',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
   
      }}
    />
   
     </Stack.Navigator>
   
);
const Music_function = ({navigation}) => (
  <Stack.Navigator>
        <Stack.Screen 

          name="Music"
          component={muisc_function}
          options={{
            headerTitle: 'Music',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
              shadowColor: '#fff',
              elevation: 0,
            },
            headerRight: () => (
            <View style={{marginRight: 10}}>
              <FontAwesome5.Button
                name="trash-alt"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => navigation.navigate('refresh_music')}
              />
            </View>
          ),
          }}

          />
        <Stack.Screen
      name="refresh_music"
      component={refresh_music}
      options={{
        title: 'who_coming',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
   
      }}
    />

  </Stack.Navigator>
);

const AppStack = () => {
  const {user, logout} = useContext(AuthContext);
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };
  return(
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
   
      <Drawer.Screen
      // name="Home"
      // component={FeedStack}
    
      name="Home"
      component={FeedStack}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="home" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
      <Drawer.Screen
      name='Message'
      component={MessageStack}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="wechat" style={{fontSize:size,color:color}}/>
            
          ),
        }}
   
      />
      <Drawer.Screen
      name="Profile"
      component={ProfileStack}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="user" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
      <Drawer.Screen
      name="GETIN"
      component={Getin_function}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="ils" style={{fontSize:size,color:color}}/>   
          ),   
        }}
      />
      <Drawer.Screen
      name="Menu"
      component={Menu_founction}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="glass" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
      <Drawer.Screen
      name="who_here"
      component={How_here}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="users" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />

      <Drawer.Screen
      name="Location"
      component={ Map_function}
      options={{
        drawerIcon:({focused,color,size})=>(
            <MaterialCommunityIcons name="car-back" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
     <Drawer.Screen
      name="Music"
      component={Music_function}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="music" style={{fontSize:size,color:color}}/>
            
          ),
        }}
      />
      
      <Drawer.Screen
      name="About us"
      component={about_us}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="handshake-o" style={{fontSize:size,color:color}}/>
          ),
        }}
      />
    <Drawer.Screen
      name="Log_Out"
      component={Log_Out}
      options={{
        drawerIcon:({focused,color,size})=>(
            <Icon name="sign-out" style={{fontSize:size,color:color}}/>
            
          ),
          
        }}
      />
      
    </Drawer.Navigator>
  
 
  );
}

export default AppStack;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
}
});