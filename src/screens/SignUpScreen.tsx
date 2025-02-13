import * as React from "react";
import { Text, StyleSheet, View, Image, ScrollView, Pressable } from "react-native";
import Left2svgrepocom from "../assets/left2-svgrepocom"
import Eye from "../assets/eye"
import Check from "../assets/check"
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
type NavigationProp = StackNavigationProp<RootStackParamList, "SignUp">;

const SignupScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={styles.signupScreen}>
            <View style={styles.statusBarIphoneParent}>
                <View style={styles.statusBarIphone}>
                    <View style={styles.frame}>
                        <View style={[styles.levels, styles.timeFlexBox]}>
                        </View>
                    </View>
                </View>
                <View style={styles.frameWrapper}>
                    <View style={styles.frameParent}>
                        <View style={[styles.left2SvgrepocomWrapper, styles.left2FlexBox]}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Left2svgrepocom style={styles.left2SvgrepocomIcon} width={25} height={25} />
                            </Pressable>

                        </View>
                        <View style={styles.frameContainer}>

                        </View>
                    </View>
                </View>
                <View style={styles.frameWrapper}>
                    <Text style={styles.whatsYourEmail}>What’s your email address?</Text>
                </View>
                <ScrollView style={styles.frameScrollview}>
                    <ScrollView style={styles.frameGroup}>
                        <View style={styles.parentFlexBox}>
                            <Text style={styles.stayUpdatedOn}>{`Stay updated on likes, sales, and promotions—
                    										no spam.`}</Text>
                            <View style={styles.textBorder}>
                                <Text style={styles.enterPassword}>Personal Email</Text>
                            </View>
                        </View>
                        <View style={styles.frameView}>
                            <View style={styles.parentFlexBox}>
                                <Text style={styles.stayUpdatedOn}>Verify your account with a valid university address.</Text>
                                <View style={styles.textBorder}>
                                    <Text style={styles.enterPassword}>University Email</Text>
                                </View>
                                <View style={[styles.frameParent1, styles.parentFlexBox]}>
                                    <Check style={[styles.frameChild, styles.eyeIconLayout]} width={20} height={20} />
                                    <Text style={[styles.youllNeedTo, styles.youllNeedToTypo]}>You’ll need to verify your university email before accessing all features</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.frameView}>
                            <View style={styles.parentFlexBox}>
                                <Text style={styles.stayUpdatedOn}>Choose a secure password</Text>
                                <View style={styles.textFieldWrapper}>
                                    <View style={[styles.textField2, styles.textBorder]}>
                                        <Text style={styles.enterPassword}>{`Password `}</Text>
                                        <Eye style={styles.eyeIconLayout} width={20} height={20} />
                                    </View>
                                </View>
                                <View style={styles.parentFlexBox}>
                                    <View style={[styles.frameParent1, styles.parentFlexBox]}>
                                        <Check style={[styles.frameChild, styles.eyeIconLayout]} width={20} height={20} />
                                        <Text style={[styles.youllNeedTo, styles.youllNeedToTypo]}>Must be 8 characters</Text>
                                    </View>
                                    <View style={[styles.frameParent1, styles.parentFlexBox]}>
                                        <Check style={[styles.frameChild, styles.eyeIconLayout]} width={20} height={20} />
                                        <Text style={[styles.youllNeedTo, styles.youllNeedToTypo]}>Must include letters (A-Z)</Text>
                                    </View>
                                    <View style={[styles.frameParent1, styles.parentFlexBox]}>
                                        <Check style={[styles.frameChild, styles.eyeIconLayout]} width={20} height={20} />
                                        <Text style={[styles.youllNeedTo, styles.youllNeedToTypo]}>Must include numbers (0-9)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
                <View style={styles.frameParent6}>
                    <View style={styles.parentFlexBox}>
                        <Pressable style={[styles.buttonMain, styles.buttonFlexBox]} onPress={() => { }}>
                            <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
                        </Pressable>
                        <Text style={[styles.bySigningUp, styles.youllNeedToTypo]}>By signing up, you agree to our Terms of Service and Privacy Policy</Text>
                    </View>
                    <View style={[styles.buttonSecondary, styles.buttonFlexBox]}>
                        <Text style={[styles.alreadyHaveAnContainer, styles.signUpTypo]}>
                            <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
                            <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
                            <Text style={[styles.text, styles.textTypo]}>
                                <Text style={styles.login1}>Login</Text>.
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    timeFlexBox: {
        justifyContent: "center",
        alignItems: "center"
    },
    capIconPosition: {
        left: "50%",
        position: "absolute"
    },
    left2FlexBox: {
        padding: 5,
        borderRadius: 98,
        flexDirection: "row",
        alignItems: "center"
    },
    parentFlexBox: {
        gap: 8,
        alignSelf: "stretch"
    },
    eyeIconLayout: {
        overflow: "hidden"
    },
    youllNeedToTypo: {
        fontSize: 13,
        color: "#000a0a",
        textAlign: "left",
        fontFamily: "Cabinet Grotesk"
    },
    textBorder: {
        paddingVertical: 12,
        borderColor: "#92a6a2",
        backgroundColor: "#f4f6f5",
        borderRadius: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderStyle: "solid",
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    },
    buttonFlexBox: {
        paddingHorizontal: 10,
        borderRadius: 16,
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    },
    signUpTypo: {
        lineHeight: 26,
        fontSize: 16,
        textAlign: "left"
    },
    textTypo: {
        fontWeight: "700",
        fontFamily: "Cabinet Grotesk"
    },
    time1: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: "600",
        fontFamily: "SF Pro",
        color: "#000",
        textAlign: "center"
    },
    time: {
        paddingLeft: 16,
        paddingRight: 6,
        flexDirection: "row",
        flex: 1
    },
    dynamicIslandSpacer: {
        width: 124,
        height: 10
    },
    cellularConnectionIcon: {},
    wifiIcon: {},
    border: {
        height: "100%",
        marginLeft: -13.65,
        top: "0%",
        bottom: "0%",
        borderRadius: 4,
        borderColor: "#000",
        opacity: 0.35,
        width: 25,
        borderWidth: 1,
        borderStyle: "solid",
        left: "50%",
        position: "absolute"
    },
    capIcon: {
        marginLeft: 12.35,
        top: "36.78%",
        bottom: "31.68%",
        maxHeight: "100%",
        opacity: 0.4
    },
    capacity: {
        height: "69.23%",
        marginLeft: -11.65,
        top: "15.38%",
        bottom: "15.38%",
        borderRadius: 3,
        backgroundColor: "#000",
        width: 21
    },
    battery: {
        width: 27,
        height: 13
    },
    levels: {
        paddingLeft: 6,
        paddingRight: 16,
        gap: 7,
        flexDirection: "row",
        flex: 1
    },
    frame: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    },
    statusBarIphone: {
        height: 50,
        paddingTop: 21,
        alignSelf: "stretch"
    },
    left2SvgrepocomIcon: {
        borderRadius: 13,
        overflow: "hidden"
    },
    left2SvgrepocomWrapper: {
        backgroundColor: "#e0fff7"
    },
    left2SvgrepocomContainer: {
        backgroundColor: "#bdbdbd",
        display: "none"
    },
    frameContainer: {
        width: 36,
        height: 36,
        flexDirection: "row",
        alignItems: "center"
    },
    frameParent: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "stretch"
    },
    frameWrapper: {
        width: 342
    },
    whatsYourEmail: {
        fontSize: 40,
        letterSpacing: -2.4,
        lineHeight: 40,
        textAlign: "left",
        color: "#00523d",
        fontFamily: "Cabinet Grotesk",
        fontWeight: "700",
        alignSelf: "stretch"
    },
    stayUpdatedOn: {
        fontSize: 14,
        color: "#000a0a",
        textAlign: "left",
        fontFamily: "Cabinet Grotesk",
        alignSelf: "stretch"
    },
    enterPassword: {
        lineHeight: 24,
        fontFamily: "Aventa",
        color: "#92a6a2",
        fontSize: 16,
        textAlign: "left"
    },
    frameChild: {
        borderRadius: 83
    },
    youllNeedTo: {
        flex: 1
    },
    frameParent1: {
        flexDirection: "row",
        alignItems: "center"
    },
    frameView: {
        width: 343
    },
    textField2: {
        justifyContent: "space-between"
    },
    textFieldWrapper: {
        alignSelf: "stretch"
    },
    frameGroup: {
        gap: 32,
        alignSelf: "stretch",
        flex: 1
    },
    frameScrollview: {
        maxWidth: 343,
        width: 343,
        flex: 1
    },
    signUp: {
        color: "#fff",
        fontFamily: "Cabinet Grotesk",
        fontWeight: "700"
    },
    buttonMain: {
        backgroundColor: "#00523d",
        paddingVertical: 16
    },
    bySigningUp: {
        alignSelf: "stretch"
    },
    alreadyHaveAn: {
        fontFamily: "Cabinet Grotesk"
    },
    text: {
        fontFamily: "Cabinet Grotesk"
    },
    login1: {
        textDecorationLine: "underline"
    },
    alreadyHaveAnContainer: {
        color: "#00523d",
        lineHeight: 26
    },
    buttonSecondary: {
        paddingVertical: 0,
        backgroundColor: "#fff"
    },
    frameParent6: {
        paddingVertical: 0,
        paddingHorizontal: 16,
        alignSelf: "stretch"
    },
    statusBarIphoneParent: {
        top: 0,
        left: 0,
        width: "100%",
        height: 811,
        paddingBottom: 32,
        gap: 17,
        alignItems: "center",
        position: "absolute"
    },
    signupScreen: {
        width: "100%",
        height: 812,
        overflow: "hidden",
        flex: 1,
        backgroundColor: "#fff"
    }
});

export default SignupScreen;
