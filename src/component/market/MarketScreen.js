import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LineChart} from 'react-native-gifted-charts';

import {Header, SafeView, featureNotReady} from '../common';
import {Theme} from '../../_data/Styles';
import {GlobalStyle} from '../../_data/Styles';
import {AuthContext} from '../../_context/AuthContext';

const leftIcon = {
  size: 20,
  color: Theme.color.greyLight,
};
const MarketScreen = ({navigation}) => {
  const {height} = useWindowDimensions();
  const {signOut} = useContext(AuthContext);

  return (
    <SafeView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#161f44'} />
      <Header navigation={navigation} headerText="Market" />
      <ScrollView style={[GlobalStyle.container, {height: height - 145}]}>
        <View style={{width: '100%'}}>
          <Text
            style={{
              ...GlobalStyle.textMdBold,
              textAlign: 'left',
              color: Theme.color.white,
              marginTop: Theme.spacing.s,
            }}>
            Trending Traders
          </Text>
          <Text
            style={{
              color: Theme.color.white,
              ...GlobalStyle.textSmaller,
            }}>
            Trending traders in the last 7-days
          </Text>
          {/* 1 */}
          <View
            style={{flexDirection: 'row', gap: 10, marginTop: Theme.spacing.l}}>
            <View
              style={{
                flex: 1,
                backgroundColor: Theme.color.secondColor,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.8}}>
                  <Text
                    style={{
                      color: Theme.color.white,
                      ...GlobalStyle.textMdBold,
                    }}>
                    XRP-USDT
                  </Text>
                  <Text
                    style={{
                      color: Theme.color.white,
                      ...GlobalStyle.textMd,
                    }}>
                    Binance Futures
                  </Text>
                </View>
                <View style={{flex: 0.2}}>
                  <View
                    style={{
                      backgroundColor: '#122499',
                      borderRadius: 10,
                      paddingVertical: 7,
                      paddingHorizontal: 10,
                      width: '100%',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Theme.color.white,
                        ...GlobalStyle.textSm,
                      }}>
                      Copy
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  marginTop: Theme.spacing.m,
                }}>
                <View style={{flex: 0.3}}>
                  <View style={{flexDirection: 'column'}}>
                    <View>
                      <Text
                        style={{
                          color: '#198052',
                          ...GlobalStyle.textMdBold,
                        }}>
                        +622.18%
                      </Text>
                    </View>
                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          color: Theme.color.white,
                          ...GlobalStyle.textSmaller,
                        }}>
                        30D ROI
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{flex: 0.2}}>
                  <View style={{}}>
                    <LineChart
                      initialSpacing={0}
                      data={[
                        {value: 0},
                        {value: 10},
                        {value: 50},
                        {value: 20},
                        {value: 60},
                      ]}
                      height={40}
                      spacing={10}
                      hideDataPoints
                      thickness={3}
                      hideRules
                      hideYAxisText
                      yAxisColor="transparent"
                      showVerticalLines
                      verticalLinesColor="transparent"
                      xAxisColor="transparent"
                      color="#198052"
                      curved
                    />
                  </View>
                </View>
                <View style={{flex: 0.3}}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View>
                      <Text style={styles.optionTextBold}>3514</Text>
                    </View>
                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          color: Theme.color.white,
                          ...GlobalStyle.textSmaller,
                        }}>
                        Copier
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{flex: 0.2}}>
                  <View style={{flexDirection: 'column'}}>
                    <View
                      style={{
                        borderRadius: 3,
                        backgroundColor: '#b3a042',
                        width: 20,
                        alignItems: 'center',
                      }}>
                      <Text style={styles.optionTextBold}>5</Text>
                    </View>
                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          color: Theme.color.white,
                          ...GlobalStyle.textSmaller,
                        }}>
                        Risk
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* 2 */}
          <View
            style={{flexDirection: 'row', gap: 10, marginTop: Theme.spacing.l}}>
            <View
              style={{
                flex: 1,
                backgroundColor: Theme.color.secondColor,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.8}}>
                  <Text
                    style={{
                      color: Theme.color.white,
                      ...GlobalStyle.textMdBold,
                    }}>
                    FTM-USDT
                  </Text>
                  <Text
                    style={{
                      color: Theme.color.white,
                      ...GlobalStyle.textMd,
                    }}>
                    ByBit USDT Perpetual
                  </Text>
                </View>
                <View style={{flex: 0.2}}>
                  <View
                    style={{
                      backgroundColor: '#122499',
                      borderRadius: 10,
                      paddingVertical: 7,
                      paddingHorizontal: 10,
                      width: '100%',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Theme.color.white,
                        ...GlobalStyle.textSm,
                      }}>
                      Copy
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  marginTop: Theme.spacing.m,
                }}>
                <View style={{flex: 0.3}}>
                  <View style={{flexDirection: 'column'}}>
                    <View>
                      <Text
                        style={{
                          color: '#198052',
                          ...GlobalStyle.textMdBold,
                        }}>
                        +292.66%
                      </Text>
                    </View>
                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          color: Theme.color.white,
                          ...GlobalStyle.textSmaller,
                        }}>
                        30D ROI
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{flex: 0.2}}>
                  <View style={{}}>
                    <LineChart
                      initialSpacing={0}
                      data={[
                        {value: 0},
                        {value: 40},
                        {value: 18},
                        {value: 36},
                        {value: 80},
                      ]}
                      height={40}
                      spacing={10}
                      hideDataPoints
                      thickness={3}
                      hideRules
                      hideYAxisText
                      yAxisColor="transparent"
                      showVerticalLines
                      verticalLinesColor="transparent"
                      xAxisColor="transparent"
                      color="#198052"
                      curved
                    />
                  </View>
                </View>
                <View style={{flex: 0.3}}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View>
                      <Text style={styles.optionTextBold}>371</Text>
                    </View>
                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          color: Theme.color.white,
                          ...GlobalStyle.textSmaller,
                        }}>
                        Copier
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{flex: 0.2}}>
                  <View style={{flexDirection: 'column'}}>
                    {/* <View
                      style={{
                        borderRadius: 3,
                        backgroundColor: '#b3a042',
                        width: 20,
                        alignItems: 'center',
                      }}>
                      <Text style={styles.optionTextBold}>5</Text>
                    </View> */}
                    <View>
                      <Text style={styles.optionTextBold}>--</Text>
                    </View>
                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          color: Theme.color.white,
                          ...GlobalStyle.textSmaller,
                        }}>
                        Risk
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* 3 */}
          <View
            style={{flexDirection: 'row', gap: 10, marginTop: Theme.spacing.l}}>
            <View
              style={{
                flex: 1,
                backgroundColor: Theme.color.secondColor,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.8}}>
                  <Text
                    style={{
                      color: Theme.color.white,
                      ...GlobalStyle.textMdBold,
                    }}>
                    ORDI-USDT
                  </Text>
                  <Text
                    style={{
                      color: Theme.color.white,
                      ...GlobalStyle.textMd,
                    }}>
                    ByBit USDT Perpetual
                  </Text>
                </View>
                <View style={{flex: 0.2}}>
                  <View
                    style={{
                      backgroundColor: '#122499',
                      borderRadius: 10,
                      paddingVertical: 7,
                      paddingHorizontal: 10,
                      width: '100%',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Theme.color.white,
                        ...GlobalStyle.textSm,
                      }}>
                      Copy
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  marginTop: Theme.spacing.m,
                }}>
                <View style={{flex: 0.3}}>
                  <View style={{flexDirection: 'column'}}>
                    <View>
                      <Text
                        style={{
                          color: '#198052',
                          ...GlobalStyle.textMdBold,
                        }}>
                        +552%
                      </Text>
                    </View>
                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          color: Theme.color.white,
                          ...GlobalStyle.textSmaller,
                        }}>
                        30D ROI
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{flex: 0.2}}>
                  {/* <FontAwesome5 name="chart-line" size={40} color={'#198052'} /> */}
                  <View style={{}}>
                    <LineChart
                      initialSpacing={0}
                      data={[
                        {value: 0},
                        {value: 20},
                        {value: 18},
                        {value: 36},
                        {value: 60},
                        {value: 0},
                        {value: 20},
                        {value: 18},
                        {value: 36},
                        {value: 60},
                        {value: 0},
                        {value: 20},
                        {value: 18},
                        {value: 36},
                        {value: 60},
                      ]}
                      height={40}
                      spacing={5}
                      hideDataPoints
                      thickness={3}
                      hideRules
                      hideYAxisText
                      yAxisColor="transparent"
                      showVerticalLines
                      verticalLinesColor="transparent"
                      xAxisColor="transparent"
                      color="#198052"
                      curved
                    />
                  </View>
                </View>
                <View style={{flex: 0.3}}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View>
                      <Text style={styles.optionTextBold}>76</Text>
                    </View>
                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          color: Theme.color.white,
                          ...GlobalStyle.textSmaller,
                        }}>
                        Copier
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{flex: 0.2}}>
                  <View style={{flexDirection: 'column'}}>
                    <View
                      style={{
                        borderRadius: 3,
                        backgroundColor: '#5e1a1f',
                        width: 20,
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: Theme.color.white,
                          ...GlobalStyle.textMdBold,
                        }}>
                        9
                      </Text>
                    </View>
                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          color: Theme.color.white,
                          ...GlobalStyle.textSmaller,
                        }}>
                        Risk
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  optionText: {color: Theme.color.white, ...GlobalStyle.textMd},
  optionTextBold: {color: Theme.color.white, ...GlobalStyle.textMdBold},
  balanceText: {color: Theme.color.white, ...GlobalStyle.h3},
  endingOnText: {
    color: Theme.color.white,
    ...GlobalStyle.textSmaller,
    textAlign: 'right',
  },
  iconContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  box: {flex: 1},
  title: {
    ...GlobalStyle.h1,
    textAlign: 'left',
    color: Theme.color.white,
    marginVertical: Theme.spacing.s,
  },
  lineview: {
    marginTop: 20,
    marginBottom: 6,
    borderBottomWidth: 0.5,
    borderColor: Theme.color.grey,
  },
  lineviewText: {
    color: Theme.color.grey,
    paddingBottom: 8,
    ...GlobalStyle.textSm,
  },
  optionBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
  },
});

export default MarketScreen;
