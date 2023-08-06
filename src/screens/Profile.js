import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import styles from '../styles';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBoxes,
  faCartShopping,
  faCheck,
  faCheckCircle,
  faChevronRight,
  faCreditCard,
  faHeart,
  faHome,
  faLocation,
  faLocationPin,
  faReceipt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Profile = ({navigation}) => {
  return (
    <View>
      <View style={styles.profile}>
        <Image
          style={{width: 150, height: 150}}
          source={{
            uri: 'https://i.iheart.com/v3/catalog/artist/38602266?ops=fit(480%2C480)%2Crun(%22circle%22)',
          }}
        />
        <Text style={styles.profileName}>Ravi Kumar</Text>
      </View>

      <View style={styles.menuOptions}>
        <Pressable style={styles.menuOption}>
          <FontAwesomeIcon color="#ccc" icon={faUser} />
          <Text style={styles.menuText}>Edit Profile</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </Pressable>

        <Pressable style={styles.menuOption}>
          <FontAwesomeIcon color="#ccc" icon={faLocationPin} />
          <Text style={styles.menuText}>Shopping Address</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </Pressable>

        <Pressable style={styles.menuOption}>
          <FontAwesomeIcon color="#ccc" icon={faHeart} />
          <Text style={styles.menuText}>Wishlist</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </Pressable>

        <Pressable style={styles.menuOption}>
          <FontAwesomeIcon color="#ccc" icon={faReceipt} />
          <Text style={styles.menuText}>Orders</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </Pressable>

        <Pressable style={styles.menuOption}>
          <FontAwesomeIcon color="#ccc" icon={faCreditCard} />
          <Text style={styles.menuText}>Cards</Text>
          <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;
