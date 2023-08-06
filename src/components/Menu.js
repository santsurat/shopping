import {View, Text, Pressable, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import styles from '../styles';
import logo from '../../assets/icons/Image.png'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBoxes,
  faCartShopping,
  faCheck,
  faCheckCircle,
  faChevronRight,
  faHeart,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import Svg, {Path} from 'react-native-svg';

const Menu = ({navigationRef}) => {
  console.log(navigationRef.current?.getCurrentRoute());

  return (
    <View style={styles.menu}>
      <View style={styles.menuTop}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
       <Image  source={logo} style={{height:20,width:20,left:10,}}  />
        <Text style={styles.headerText}> RAVI DAIRY</Text>
      </View>
          
      </View>

      <View style={styles.menuOptions}>
        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigationRef.navigate('Dashboard')}>
          <FontAwesomeIcon icon={faHome} />
          <Text style={styles.menuText}>Home</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigationRef.navigate('Wishlist')}>
          <FontAwesomeIcon icon={faHeart} />
          <Text style={styles.menuText}>Wishlist</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigationRef.navigate('Cart')}>
          <FontAwesomeIcon icon={faCartShopping} />
          <Text style={styles.menuText}>Cart</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigationRef.navigate('Category')}>
          <FontAwesomeIcon icon={faBoxes} />
          <Text style={styles.menuText}>Categories</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigationRef.navigate('Orders')}>
          <FontAwesomeIcon icon={faCheckCircle} />
          <Text style={styles.menuText}>Orders</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
