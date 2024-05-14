import React from 'react';
import { ScrollView } from 'react-native';
import favicon from '../../assets/favicon.png';
import { Button } from '../../src/components/screen/button';
import { Input } from '../../src/components/screen/input';
import { Container, Content, Logo, Title } from './styles';
export const SignIn: React.FunctionComponent = () => {
    return (
  <ScrollView
    keyboardShouldPersistTaps="handled"
  contentContainerStyle={{ flex: 1 }}
    >
    <Container>
  <Content>
  <Logo source={favicon}/>
  <Title>Login</Title>
  <Input placeholder="Email"/>
  <Input placeholder="Senha"/>
  <Button title='Entrar'/>
  </Content>
  </Container>
  </ScrollView>
  );
};
