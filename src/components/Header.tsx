import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CartIcon from '../assets/svg/carticon.svg'
import { horizontalScale, moderateScale, verticalScale } from '../utils/Matrics';

interface HeaderProps {
    cartItemCount: number;
    onCartPress: () => void;
    title: String
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartPress, title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.cartContainer} onPress={onCartPress}>
                <CartIcon width={20} height={20} />
                {cartItemCount > 0 && (
                    <View style={styles.cartBadge}>
                        <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    cartContainer: {
        position: 'relative',
    },
    cartBadge: {
        position: 'absolute',
        right: -7,
        top: -5,
        backgroundColor: 'red',
        width: horizontalScale(15),
        height: verticalScale(15),
        borderRadius: moderateScale(7),
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartBadgeText: {
        color: '#fff',
        fontSize: moderateScale(12),
        fontWeight: 'bold',
    },
});

export default Header;
