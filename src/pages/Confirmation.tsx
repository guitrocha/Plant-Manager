import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native'

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>
                😁
            </Text>

            <Text style={styles.title}>
                Prontinho
            </Text>
            <Text style={styles.subtitle}>
                Agora vamos começar a cuidar das suas plantinhas com muito cuidado
            </Text>
            <View style={styles.footer}>
                <Button
                    title="Começar"
                        
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    emoji: {
        fontSize: 64,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 20
    },
    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
        paddingVertical: 20
    },
    footer: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 40
    }
})