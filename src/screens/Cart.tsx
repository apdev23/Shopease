import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, clearCart } from '../redux/slices/CartSlice';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Matrics';

interface cartProps {
  navigation: any
}{ }
const Cart: React.FC<cartProps> = ({ navigation }) => {
  const { items, gstRate } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    const subtotal = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
    const gst = (subtotal * gstRate) / 100;
    return { subtotal, gst, total: subtotal + gst };
  };

  const totals = calculateTotal();

  return (
    <View style={styles.container}>
      {
        items?.length == 0 ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text style={{ fontSize: 22, color: '#000' }}>Cart is Empthy</Text>
            <TouchableOpacity style={{ width: 70, height: 27, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue', borderRadius: 20, marginTop: 15 }}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={{ color: '#ffffff' }}>Shop Now</Text>
            </TouchableOpacity>
          </View> : <View style={{flex: 1}}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={styles.itemDisContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity style={[styles.quantityMinButton, styles.quantityButton]} onPress={() => dispatch(decrementQuantity(item.id))}>
                        <Text style={styles.quantityTextButton}>-</Text>
                      </TouchableOpacity>
                      <Text style={{ color: '#000000' }}>{item.quantity}</Text>
                      <TouchableOpacity style={[styles.quantityButton, styles.quantityPlusButton]} onPress={() => dispatch(incrementQuantity(item.id))}>
                        <Text style={styles.quantityTextButton}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            />
            <View style={styles.totalContainer}>
              <Text style={{ color: '#000' }}>Subtotal: $ {totals.subtotal.toFixed(2)}</Text>
              <Text style={{ color: '#000' }}>GST ({gstRate}%): $ {totals.gst.toFixed(2)}</Text>
              <Text style={{ color: '#000' }}>Total: $ {totals.total.toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={() => dispatch(clearCart())}>
              <Text style={styles.clearCart}>Clear Cart</Text>
            </TouchableOpacity>
          </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  itemContainer: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  title: { fontSize: 16, color: '#000' },
  price: { fontSize: 14, color: '#000' },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: horizontalScale(60),
    backgroundColor: '#999999',
    borderRadius: moderateScale(30),
    marginTop: verticalScale(5)
  },
  quantityButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  quantityPlusButton: {
    backgroundColor: 'green'
  },
  quantityTextButton: {
    fontSize: moderateScale(20),
    color: '#ffffff'
  },
  totalContainer: { marginTop: 20 },
  clearCart: { color: 'red', textAlign: 'center', marginTop: 10 },
  image: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  itemDisContainer: {
    flex: 1
  }, quantityMinButton: {
    backgroundColor: 'red'
  },
});

export default Cart;
