import React,{useState} from 'react';
import { View, Text, ScrollView } from 'react-native'
import {Avatar,Button} from 'react-native-paper';
import { TouchableOpacity} from 'react-native';
import { colors, defaultStyle } from '../styles/styles'

import Header from '../components/Header'
import SearchModal from '../components/SearchModal';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const categories = [
    {category:"Nice", _id: "sdnjskad"},
    {category:"Nice2", _id: "sdnjskad2"},
    {category:"Nice3", _id: "sdnjskad3"},
    {category:"Nice4", _id: "sdnjskad4"},
    {category:"Nice5", _id: "sdnjskad5"},
    {category:"Nice6", _id: "sdnjskad6"},
    {category:"Nice7", _id: "sdnjskad7"}
  ];

  const products = [
    {
      price:256863,
      name: "Chairs",
      _id:"saderiuplkjd",
      images:[
          {
            url : "https://img.freepik.com/free-vector/home-furniture-set_74855-15461.jpg",
           url:"https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-1866149.jpg&fm=jpg"
          }
      ]
    },
    
  ];

  const navigate = useNavigation();
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  return (

    <>

   {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
   
     <View style={defaultStyle}>
      <Header/>
      {/**heading row start */}
        <View  style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
       {/*heading*/}
        <View>
          <Text style={{ fontSize:25 }}>Our</Text>
          <Text  style={{ fontSize:25,fontWeight:"900" }}>Products</Text>
        </View>
      {/*search bar*/}

    <View>
      <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)} style={{ paddingTop:10 }}>
        <Avatar.Icon
          icon={"magnify"}
          size={50}
          color={"gray"}
          style={{ backgroundColor: colors.color2, elevation: 15 }}
        />
      </TouchableOpacity>
    </View>
    </View>
      {/**heading row end */}
        
     <View style={{
            flexDirection: "row",
            height: 80,
          }}>

        <ScrollView
           horizontal
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
        >
        {
          categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor: category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
             onPress={() => categoryButtonHandler(item._id)}>
                <Text
                  style={{
                    fontSize: 13,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))
            
          }
        </ScrollView>
       


     </View>
    
     </View>
  </>
  )
}

export default Home