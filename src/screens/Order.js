import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAddressCard,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Order = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{padding: 10, backgroundColor: '#fff'}}>
        <Text
          style={{fontFamily: 'Poppins-SemiBold', fontSize: 22, color: '#000'}}>
          Order Information
        </Text>
        <Text
          style={{fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000'}}>
          Delivery to
        </Text>

        <View
          style={{
            borderRadius: 5,
            borderColor: '#ccc',
            borderWidth: 1,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 100, height: 100, marginRight: 10}}
            source={{
              uri: 'https://img.freepik.com/premium-vector/folded-location-map-with-marker-city-map-with-pin-pointer_349999-746.jpg?w=2000',
            }}
          />
          <View>
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon
                style={{marginTop: 5}}
                color="grey"
                icon={faAddressCard}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 16,
                  color: '#000',
                  width: 180,
                  marginLeft: 10,
                }}>
                chhota govindpur near vivek vidyalaya dayalbagh education istitute
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon
                style={{marginTop: 5}}
                color="grey"
                icon={faUser}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#000',
                  width: 180,
                  marginLeft: 10,
                }}>
                Sant Surat
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon
                style={{marginTop: 5}}
                color="grey"
                icon={faPhone}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#000',
                  width: 180,
                  marginLeft: 10,
                }}>
                +91 9798073407
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#eee',
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: '#000'}}>
          Delivery Time
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular', color: '#000'}}>
          10:11 AM
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular', color: '#000'}}>
          Oct 6, 2022
        </Text>
      </View>

      <View style={{backgroundColor: '#fff', padding: 10}}>
        <View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 5, marginRight: 10}}
              source={{
                uri: 'https://user-content.wepik.com/uploads/105217393/upscaled.png?GoogleAccessId=fc-wepik-bucket-sa%40fc-wepik-pro-rev1.iam.gserviceaccount.com&Expires=1801740334&Signature=kMi9pbrwNIUiKVJCSqF1L1YIdGVoi0GOy6i48OYeI7J%2BrkqovNeziDTKKPZQuFynWoPhxJCt7sC93lXv%2F33hVKse4JsiYIQxLUSab0yRAVpC5eu6qIZQRgqW8Wg77zeEWlnmXS1TIofn%2BRnJB19TvVavqLx7nGHWB3PKR%2Bf%2FQyQc8RqERBoJgxhKRxRu3nl%2FFzcnuyHXRE54YA1XgDbWTSrJh1kocN83wz%2BDtiik0H4YuVWNk3epT30XBjs55HSxqta%2FCYpEIlhw%2FU1SaqMq8ILTqboAjSyNg2ugZkpguuTEbVdJpZWRXJnJjiVCnM59wkFHKEwpganI9BHla3Kjlw%3D%3D',
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  color: '#000',
                }}>
                Cow Milk
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color:'#000'
                }}>
                56 /ltr
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 5, marginRight: 10}}
              source={{
                uri: 'https://static.wixstatic.com/media/1a2594_238ac51e79d143bb882f894011f5be29~mv2.jpg/v1/fill/w_560,h_554,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1a2594_238ac51e79d143bb882f894011f5be29~mv2.jpg',
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  color: '#000',
                }}>
                Buffalo Milk
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color:'#000'
                }}>
                70 /ltr
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 5, marginRight: 10}}
              source={{
                uri: 'https://i.ibb.co/ZKhmB76/Designer-4.png',
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  color: '#000',
                }}>
                Paneer
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color:'#000'
                }}>
                430 /kg
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: '#000',
            }}>
            Subtotal (3 item)
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color:'#000'
            }}>
            ₹556.0
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: '#000',
            }}>
            Shipping Fee
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color:"#000"
            }}>
            ₹10.0
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: '#000',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color:'#000'
            }}>
            ₹566.0
          </Text>
        </View>
      </View>

      <View
        style={{backgroundColor: '#eee', flexDirection: 'row', padding: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: '#000'}}>
          Note
        </Text>
      </View>

      <View style={{backgroundColor: '#fff', flex: 1, padding: 10}}>
        <Text
          style={{
            backgroundColor: '#f7f7f7',
            height: 70,
            padding: 10,
            borderRadius: 5,
            color:'#000'
          }}>
          Standard Delivery charges are free for orders ₹999 or more.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Order;
