import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import{ Badge } from 'react-native-elements';
import { StyleSheet, View, ImageBackground, Animated, Dimensions, Easing, TextInput, TouchableOpacity, ScrollView, Text, TouchableHighlight, Platform, Keyboard, Image, AsyncStorage } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import FitImage from 'react-native-fit-image';

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const slideWidth = Dimensions.get('window').width;
export default class ProductDesc extends Component {
    // _carousel ;
    constructor(props) {
        super(props);
        this.state = {
            showingBottomSheet: false,
            activeIn:1,
            entries: [
                {
                    img: require('./icons/imgpsh_fullsize_anim.png'),
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://i.imgur.com/UYiroysl.jpg'
                },
                {
                    img: require('./icons/imgpsh_fullsize_anim.png'),
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
                },
                {
                    img: require('./icons/imgpsh_fullsize_anim.png'),
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                    illustration: 'https://i.imgur.com/MABUbpDl.jpg'
                },
                {
                    img: require('./icons/imgpsh_fullsize_anim.png'),
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
                },
                {
                    img: require('./icons/imgpsh_fullsize_anim.png'),
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
                },
                {
                    img: require('./icons/imgpsh_fullsize_anim.png'),
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/lceHsT6l.jpg'
                }
            ]
        }
    };
    showBox() {
       // alert(this.state.showingBottomSheet)
        if (this.state.showingBottomSheet) {
            this.setState({ showingBottomSheet: false })
        } else {
            this.setState({ showingBottomSheet: true })
        }
    }
  
    _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, position: 'relative' }}>
                <ImageBackground source={item.img} style={{ width: '100%', height: '100%',flex:1 }}>
                </ImageBackground>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* header section */}
                <View style={{ width: '100%', height: 55, padding: 4, justifyContent: 'space-around', textAlign: 'center', alignContent: 'center',borderBottomWidth:2,borderColor:'grey', backgroundColor: '#fff', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ paddingTop: 8, paddingBottom: 8,marginTop:7 }}>
                        <Image source ={require('./icons/bak11.png')} />
                    </TouchableOpacity>
                    <View style={{ width: '70%', }}>
                        <Text style={{ fontFamily: 'JTMarnie-Bold', fontSize: 18 }}>Twin Arkz Residence</Text>
                        <View style={{ flexDirection: 'row', textAlign: 'left' }}>
                            <Text style={{ fontFamily: 'JTMarnie-Medium', fontSize: 12 }}>Bukit Jail / </Text><Image source={require('./icons/2.png')} style={{ marginTop: 5, marginRight: 5 }} /><Text style={{ fontFamily: 'JTMarnie-Medium', fontSize: 12 }}>Far from 1.5 km</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ borderColor: '#4acfd4', borderWidth: 0.5, paddingHorizontal: 13, paddingVertical: 5, borderRadius: 5,height:35,marginTop:6 }}>
                        <Image source={require('./icons/1.png')} />
                    </TouchableOpacity>
                </View>
                {/* slider section */}
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flex: 1, height: 173 }}>
                        
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.entries}
                            renderItem={this._renderItem}
                            sliderWidth={slideWidth}
                            itemWidth={slideWidth}
                            layout={'default'}
                            inactiveSlideScale={1}
                            onSnapToItem={(slideIndex) => this.setState({activeIn: slideIndex +1})}
                            //loop={true}
                        />
                        <View style={{ position: 'absolute', width: 50, height: 25, backgroundColor: '#a1dbf3', top: 0, right: 0, bottom: 0, justifyContent: 'flex-end', }}>
                            <Text style={{ textAlign: 'center', paddingVertical: 1.5, color: '#00519b', fontSize: 13 }}>{this.state.activeIn}/{this.state.entries.length}</Text>
                        </View>
                        <TouchableOpacity onPress={() => { setTimeout(() => this._carousel.snapToNext(), 250) }} style={{ position: 'absolute', top: '40%', width: 16, height: 43, right: 0, bottom: 0, justifyContent: 'flex-end', }}>
                            <Image source={require('./icons/back2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setTimeout(() => this._carousel.snapToPrev(), 250) }} style={{ position: 'absolute', top: '40%', width: 16, height: 43, left: 0, bottom: 0, justifyContent: 'flex-end', }}>
                            <Image source={require('./icons/back1.png')} />
                        </TouchableOpacity>
                    </View>
                    {/* Desc section */}
                    <View style={{ width: '100%', backgroundColor: '#fff' }}>
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <View style={{ width:'50%', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: 'JTMarnie-Regular', fontSize: 24, color: '#00c892' }}>RM. 3500/-</Text>
                                <Text style={{ fontFamily: 'FontsFree-Net-SFProDisplay-Regular', fontSize: 14, color: '#7c7e7f' }}>{`\u2022`} Partially Furnished</Text>
                                <Text style={{ fontFamily: 'FontsFree-Net-SFProDisplay-Regular', fontSize: 12, color: '#242d38' }}>Available Date: 12/08/2019</Text>
                            </View>
                            <View style={{ width:'50%',paddingTop:10,flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ marginRight: 15 }}><Image source={require('./icons/7.png')} /></TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 15 }}><Image source={require('./icons/8.png')} /></TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 15 }}><Image source={require('./icons/9.png')} /></TouchableOpacity>
                                <TouchableOpacity style={{}}><Image source={require('./icons/10.png')} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.descButtonCont}>
                            <TouchableOpacity style={styles.descButton}>
                                <Image source={require('./icons/3.png')} />
                                <Text style={styles.iconText}> 04</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.descButton}>
                                <Image source={require('./icons/4.png')} />
                                <Text style={styles.iconText}> 04</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.descButton}>
                                <Image source={require('./icons/6.png')} />
                                <Text style={styles.iconText}> 03</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.descButton}>
                                <Image source={require('./icons/5.png')} style={{width:22,height:19}}/>
                                <Text style={styles.iconText}> 2200 sqft</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'FontsFree-Net-SFProDisplay-Semibold', fontSize: 16, color: '#393b3d' }}>Description</Text>
                            <Text style={{ fontFamily: 'FontsFree-Net-SFProDisplay-Regular', fontSize: 14, color: '#393b3d' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ...  MORE</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Image source={require('./icons/img.png')} style={{marginTop:10,width:40,height:40}}/>
                            <View style={{ paddingLeft: 20,paddingTop:3 }}>
                                <Text style={{ fontFamily: 'JTMarnie-Regular', fontSize: 16, color: '#545454',paddingTop:4 }}>Adam Nurul Mohamed</Text>
                                <Text style={{ fontFamily: 'JTMarnie-Regular', fontSize: 10, color: '#17a1e5' }}>VERIFIED OWNER</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', alignSelf: 'center', backgroundColor: '#f6f7fb' }}> 
                        <View style={{ flexDirection: 'row', backgroundColor: '#fff', paddingHorizontal: 10, paddingBottom: 5, paddingTop: 10 }}>
                            <Image source={require('./icons/11.png')} style={{marginTop:4,marginLeft:2}}/>
                            <Text style={{ fontFamily: 'JTMarnie-Regular', fontSize: 14, color: '#242d38' }}>  Comments(1) </Text>
                            {/* <TouchableOpacity onPress={() => this.showBox()}><Image source={require('./icons/12.png')} style={{ marginLeft: 18, marginTop: 6 }} /></TouchableOpacity> */}

                        </View>
                        {/* Form section */}
                         <View style={{ backgroundColor: '#fff', flex: 1 }}>
                            <View style={{ padding: 15 }}>
                                <View style={[styles.textContainer, { height: 40 }]}>
                                    <Image source={require('./icons/user.png')} style={{ alignSelf: 'center' }} />
                                    <TextInput
                                        style={[styles.textcontainerC, { alignItems: 'flex-start', marginLeft: '2%' }]}
                                        placeholder='Name'
                                        autoCapitalize='none'
                                        onChangeText={(text) => { this.setState({ email: text }) }}
                                    />

                                </View>
                                <View style={[styles.textContainer, { height: 40 }]}>
                                    <Image source={require('./icons/email.png')} style={{ alignSelf: 'center' }} />
                                    <TextInput
                                        style={[styles.textcontainerC, { alignItems: 'flex-start', marginLeft: '2%' }]}
                                        placeholder='Email'
                                        autoCapitalize='none'
                                        multiline={false}
                                        onChangeText={(text) => { this.setState({ email: text }) }}
                                    />

                                </View>
                                <View style={styles.textContainer}>
                                    <TextInput
                                        style={[styles.textcontainerC, { textAlignVertical: 'top' }]}
                                        multiline={true}
                                        autoCapitalize='none'
                                        placeholder='Write your comment'
                                        numberOfLines={3}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', padding: 10 }}>
                                    <Image source={require('./icons/img21.png')}style={{marginTop:6}} />
                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={{ fontFamily: 'JTMarnie-Regular', fontSize: 14, color: '#545454' }}>Mr. Vincet</Text>
                                        <Text style={{ fontFamily: 'JTMarnie-Regular', fontSize: 9, color: '#707070' }}>Just Guest</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#f6f7fb', borderRadius: 15 }}>
                                    <Text style={{ padding: 10, color: '#707070', fontFamily: 'FontsFree-Net-SFProDisplay-Regular', fontSize: 13 }}>Is this still Available?? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simple dummy</Text>
                                </View>
                            </View>
                        </View> 
                    </View>
                </ScrollView>
                <View style={{ width: '100%', justifyContent: 'flex-end', alignSelf: 'center', backgroundColor: '#f6f7fb', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff' }}>
                            <TouchableOpacity style={{ backgroundColor: '#4acfd4',justifyContent:'center',flexDirection: 'row', borderTopRightRadius: 15, width: '50%', marginRight: 10, padding: 10,  }}>
                                <Image source={require('./icons/phone.png')} style={{alignSelf:'center'}}/>
                                <Text style={{ textAlign: 'center', alignSelf:'center',fontFamily: 'JTMarnie-Medium', fontSize: 15, color: '#ffffff' }}> Call Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#f89345', justifyContent:'center',alignSelf:'center',flexDirection: 'row', borderTopLeftRadius: 15, width: '50%', marginLeft: 10, padding: 10, alignItems: 'center', alignContent: 'center' }}>
                                <Image source={require('./icons/email1.png')} />
                                <Text style={{ textAlign: 'center', fontFamily: 'JTMarnie-Medium', fontSize: 15, color: '#ffffff' }}> Enquiry</Text>
                            </TouchableOpacity>
                        </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', backgroundColor: '#002747', padding: 10 }}>
                        <TouchableOpacity style={{alignItems:'center',paddingVertical:5}}><Image source={require('./icons/home.png')} style={{width:21,height:25}}/></TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center',paddingVertical:5}}><Image source={require('./icons/heart.png')} /></TouchableOpacity>
                        {/* <Badge value="99+" status="error" /> */}
                        <TouchableOpacity style={{alignItems:'center',paddingVertical:5}}><Image source={require('./icons/bell.png')} /></TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center',paddingVertical:5}}><Image source={require('./icons/user1.png')} /></TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center',paddingVertical:10}}><Image source={require('./icons/menu.png')} /></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    descButtonCont: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        width: '100%',
    },
    textcontainerC: {
        fontFamily: 'JTMarnie-Medium', fontSize: 13, color: '#999999', width: '100%'
    },
    modalContent: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 0,
        flexShrink: 1,
        justifyContent: 'flex-start',
    },
    textContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
        // height: '25%',
        borderWidth: 1,
        borderColor: '#c2c2c2'
    },

    descButton: {
        flexDirection: 'row',
        backgroundColor: '#f1f8fe',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 10
    },
    playBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'yellow',
        padding: 10,
        width: '20%'
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    iconText: {
        fontFamily: 'JTMarnie-Medium', fontSize: 14, color: '#00519b',
    }
})



