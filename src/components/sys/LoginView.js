// /**
//  * Created by targetcloud on 2016/12/17.
//  */
// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TextInput
// } from 'react-native';
//
// var Dimensions = require('Dimensions');
// var {width,height} = Dimensions.get('window');
//
// class LoginView extends Component {
//     constructor(props) {
//         super(props);
//         this.state={}
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 {/*<Image source={require('./img/targetcloud.png')} style={styles.tgIconStyle}/>*/}
//                 <TextInput placeholder={'请输入用户名'}  style={styles.tgTextInputStyle} />
//                 <TextInput placeholder={'请输入密码'}  password={true}  style={styles.tgTextInputStyle} />
//                 <View style={styles.tgLoginBtnStyle}>
//                     <Text style={{color:'white'}}>登录</Text>
//                 </View>
//                 <View style={styles.tgSettingStyle}>
//                     <Text>无法登录</Text>
//                     <Text>新用户</Text>
//                 </View>
//                 <View style={styles.tgOtherLoginStyle}>
//                     <Text>其他登录方式: </Text>
//                     {/*<Image  source={require('./img/icon2.png')}  style={styles.tgOtherImageStyle} />*/}
//                     {/*<Image  source={require('./img/icon3.png')}  style={styles.tgOtherImageStyle} />*/}
//                     {/*<Image  source={require('./img/icon4.png')}  style={styles.tgOtherImageStyle} />*/}
//                 </View>
//             </View>
//         );
//     }
//
//
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems:'center'
//     },
//
//     tgIconStyle:{
//         width:80,
//         height:80,
//         marginTop:60,
//         marginBottom:30,
//         borderRadius:40,
//         borderWidth:1,
//         borderColor:'grey'
//     },
//
//     tgTextInputStyle:{
//         width:width*0.8,
//         height:38,
//         borderColor: 'lightgrey',
//         borderWidth: 1,
//         marginBottom:8,
//         borderRadius:4,
//         textAlign:'left',
//         alignSelf:'center'
//     },
//
//     tgLoginBtnStyle:{
//         height:38,
//         width:width*0.8,
//         backgroundColor:'#00BB00',
//         marginTop:8,
//         marginBottom:20,
//         justifyContent:'center',
//         alignItems:'center',
//         borderRadius:4
//     },
//
//     tgSettingStyle:{
//         flexDirection:'row',
//         width:width*0.8,
//         justifyContent:'space-between'
//     },
//
//     tgOtherLoginStyle:{
//         flexDirection:'row',
//         alignItems:'center',
//         position:'absolute',
//         bottom:width*0.1,
//         left:width*0.1
//     },
//
//     tgOtherImageStyle:{
//         width:40,
//         height:40,
//         borderRadius:20,
//         marginLeft:8
//     }
// });
// export default LoginView;
