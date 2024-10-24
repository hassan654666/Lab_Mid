import {
    StyleSheet, Image, View, Text,
    FlatList, Pressable
  } from 'react-native';
import React, { useEffect, useState } from 'react';
import GetAPICustomHook from './GetAPICustomHook';
import urllist from './apiurllist';

export default function ApiFlatlist() {
    let url = urllist.baseURL+urllist.productslist;

    const {data} = GetAPICustomHook(url);

    const renderItem = ({ item, index }: { item: any, index: number }) => {
      const isSecondColumn = index % 2 !== 0; // Check if it's an item in the second column
      return (
        <View
          style={[
            styles.renderitem,
            isSecondColumn && styles.secondColumnItem // Apply offset for second column
          ]}
        >
          {/* <Text>{item.title}</Text> */}
          <Pressable >
          {/*style={[
              styles.renderitem,
              isSecondColumn && styles.secondColumnItem // Apply offset for second column
            ]}> */}
            {/* style={styles.renderitem}> */}
             {/* onPress={testingFontandSize}> */}
            <Image source={{ uri: 'https://as1.ftcdn.net/v2/jpg/01/33/61/72/1000_F_133617244_dWdivRXwoLVzowl1kn3iFP9JGcuNd8n6.jpg' }} style={styles.image} />
            <Text style={styles.title}>ID: {item.id}</Text>
            <Text style={styles.title}>Name: {item.name}</Text>
            <Text style={styles.title}>Category: {item.category}</Text>
            <Text style={styles.title}>In Stock: {item.instock}</Text>
          </Pressable>

        </View>
      );
    };

    return (
        <View style={styles.container}>
          {/* {console.log('I am in Return')} */}
          {/* <Text style={{fontSize:40}}> {global.noofpizza} </Text> */}
          <FlatList
            data={data}
          //  renderItem={renderItem}
            renderItem={({ item, index }:{item: any, index: number}) => 
            // <Item title={item} />
            (
              <Pressable style={[styles.renderitem,
               index %2 !==0 && styles.secondColumnItem]}>
                 {/* onPress={testingFontandSize}> */}
                <Image source={{ uri: 'https://as1.ftcdn.net/v2/jpg/01/33/61/72/1000_F_133617244_dWdivRXwoLVzowl1kn3iFP9JGcuNd8n6.jpg' }} style={styles.image} />
                <Text style={styles.title}>ID: {item.id}</Text>
                <Text style={styles.title}>Name: {item.name}</Text>
                <Text style={styles.title}>Category: {item.category}</Text>
                <Text style={styles.title}>In Stock: {item.instock}</Text>
              </Pressable>
            )
          }
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle = {{gap:10, padding:10}}
            columnWrapperStyle = {{gap:10}}
          />
        </View>
      );

}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor:'grey',
       width: '100%',
       //padding: 15,
       //justifyContent: 'center',
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode:'contain'
    },
    title: {
      fontSize: 22
    },
    renderitem:{
      flex:1,
      backgroundColor:'lightgrey',
      height: '100%',
      maxWidth:'50%',
      // marginRight:10,
      alignItems: 'center',
      borderRadius: 20,
    },
    secondColumnItem: {
      marginTop: 50, // Control how much lower the second column starts
      //marginBottom:50,
    },
  });