import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProductReq } from '../redux/slices/ProductSlice';
import Header from '../components/Header';
import { addToCart, incrementQuantity, decrementQuantity } from '../redux/slices/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { HomeScreenStyle, CommonStyle } from '../styles';

interface ItemData {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}

interface DataProps {
  getProductReq: () => void;
  productsData: ItemData[];
  navigation: any;
}

const Home: React.FC<DataProps> = ({ getProductReq, productsData, navigation }) => {
  const [productData, setProductData] = useState<ItemData[]>([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);

  const isInCart = (id: number) => cartItems.find((item: any) => item.id === id);

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
    return { subtotal, total: subtotal };
  };

  const totals = calculateTotal();

  const handleCartPress = () => {
    console.log(navigation.navigate('Cart'));
  };

  useEffect(() => {
    getProductReq();
  }, []);

  useEffect(() => {
    if (productsData && productsData.length) {
      setProductData(productsData);
    }
  }, [productsData]);

  const renderItem = ({ item }: { item: ItemData }) => {
    const cartItem = isInCart(item.id);
    return (
      <View style={HomeScreenStyle.itemContainer}>
        <Image source={{ uri: item.image }} style={HomeScreenStyle.image} />
        <View style={HomeScreenStyle.itemDisContainer}>
          <Text style={HomeScreenStyle.title}>{item.title}</Text>
          <Text style={HomeScreenStyle.price}>$ {item.price.toFixed(2)}</Text>
          <Text style={HomeScreenStyle.rating}>Rating: {item.rating.rate} ({item.rating.count} reviews)</Text>
          {cartItem ? (
            <View style={HomeScreenStyle.quantityContainer}>
              <TouchableOpacity style={[HomeScreenStyle.quantityMinButton, HomeScreenStyle.quantityButton]} onPress={() => dispatch(decrementQuantity(item.id))}>
                <Text style={HomeScreenStyle.quantityTextButton}>-</Text>
              </TouchableOpacity>
              <Text style={{ color: '#000000' }}>{cartItem.quantity}</Text>
              <TouchableOpacity style={[HomeScreenStyle.quantityButton, HomeScreenStyle.quantityPlusButton]} onPress={() => dispatch(incrementQuantity(item.id))}>
                <Text style={HomeScreenStyle.quantityTextButton}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={HomeScreenStyle.addButtonStyle}
              onPress={() => dispatch(addToCart({ id: item.id, title: item.title, price: item.price, image: item.image }))}
            >
              <Text style={HomeScreenStyle.addTextStyle}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <Header title="Home" cartItemCount={totals?.total} onCartPress={handleCartPress} />

      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={HomeScreenStyle.listContainer}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => ({
  productsData: state.product.productsData,
  productsLoading: state.product.productsLoading,
  productsErrorMsg: state.product.productsErrorMsg,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProductReq: () => dispatch(getProductReq()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
