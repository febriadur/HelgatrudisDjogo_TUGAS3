import React from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>toko Bunga</Text>
      <TextInput placeholder="Cari produk..." />
      <ScrollView>
        <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydbWT0RkFUj6zpiOKyZmx_2E_950mLIKOIRpyS8KqIA&s'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://millionbloom.com/cdn/shop/articles/sejarah-mawar-putih-bunga-yang-melambangkan-kesetiaan-489073.jpg?v=1684327753'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'hhttps://awsimages.detik.net.id/community/media/visual/2023/10/28/bunga-2.png?w=612'}}style={{width:200,height:200}}/>
      </ScrollView>
      <Button title="Beli" onPress={() => ('Produk telah ditambahkan ke keranjang belanja')} />
    </View>
  );
};

export default App;