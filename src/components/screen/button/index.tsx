import React from "react";

import { PropsWithChildren } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}


export const Button: React.FunctionComponent<ButtonProps> = ({ title, ...otherProps }:
    PropsWithChildren<ButtonProps>) => {

        return <Container{ ...otherProps}>
        <title>{title}</title>
        </Container>
    }