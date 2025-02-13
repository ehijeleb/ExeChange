import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import Cellularconnection from "../assets/cellular-connection"
import Wifi from "../assets/wifi"
// import Cap from "../assets/cap.svg"
import Group2 from "../assets/Group2"

const LaunchScreen = () => {

    return (
        <View style={styles.launchScreen}>
            <View style={[styles.statusBarIphoneParent, styles.frameFlexBox]}>
                <View style={styles.statusBarIphone}>
                    <View style={[styles.frame, styles.frameFlexBox]}>
                    </View>
                </View>
                <View style={styles.groupParent}>
                    <Group2 style={styles.frameChild} width={265} height={56} />
                    <View style={styles.buttonMainParent}>
                        <Pressable style={[styles.buttonMain, styles.buttonFlexBox]} onPress={() => { }}>
                            <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
                        </Pressable>
                        <Pressable style={[styles.buttonSecondary, styles.buttonFlexBox]} onPress={() => { }}>
                            <Text style={[styles.createAccount, styles.signUpTypo]}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    frameFlexBox: {
        justifyContent: "space-between",
        alignItems: "center"
    },

    borderBorder: {
        borderWidth: 1,
        borderStyle: "solid"
    },
    borderPosition: {
        left: "50%",
        position: "absolute"
    },
    buttonFlexBox: {
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 16,
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    },
    signUpTypo: {
        textAlign: "left",
        fontFamily: "Cabinet Grotesk",
        fontWeight: "700",
        lineHeight: 26,
        fontSize: 16
    },
    border: {
        height: "100%",
        marginLeft: -13.65,
        top: "0%",
        bottom: "0%",
        borderRadius: 4,
        borderColor: "#000",
        width: 25,
        opacity: 0.35,
        left: "50%",
        position: "absolute"
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
    levels: {
        paddingLeft: 6,
        paddingRight: 16,
        gap: 7,
        flexDirection: "row",
        flex: 1,
        justifyContent: "center"
    },
    frame: {
        flexDirection: "row",
        alignSelf: "stretch"
    },
    statusBarIphone: {
        height: 50,
        paddingTop: 21,
        alignSelf: "stretch"
    },
    frameChild: {},
    signUp: {
        color: "#fff"
    },
    buttonMain: {
        backgroundColor: "#00523d"
    },
    createAccount: {
        color: "#00523d"
    },
    buttonSecondary: {
        borderColor: "#00523d",
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: "#fff",
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 16
    },
    buttonMainParent: {
        gap: 16,
        alignSelf: "stretch"
    },
    groupParent: {
        width: 342,
        gap: 252,
        alignItems: "center"
    },
    statusBarIphoneParent: {
        top: 0,
        left: 0,
        width: "100%",
        paddingBottom: 32,
        position: "absolute",
        justifyContent: "space-between",
        height: 812
    },
    launchScreen: {
        width: "100%",
        overflow: "hidden",
        height: 812,
        flex: 1,
        backgroundColor: "#fff"
    }
});

export default LaunchScreen;
