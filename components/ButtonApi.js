import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";


const ButtonApi = () => {

    const [quote, setQuote] = useState({});

    const generateQuote = () => {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => setQuote(data))
    }
    const ApiButton = styled.TouchableOpacity`
    font-weight: 700;
    width: 50%;
    background-colour:grey; 
`
    useEffect(()=> {
        generateQuote();
    }, []);

    return (
        <View>
            <Text> {quote.content} </Text>
            <Text> {quote.author} </Text>
            <ApiButton onPress={generateQuote}>
                <Text>New quote</Text>
            </ApiButton>
        </View>
    )
}


export default ButtonApi;