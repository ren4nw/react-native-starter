import React from 'react';
import { Container, Content, Text, Header, Left, Button, Icon, Body, Title, Right, Input, Item, Form } from 'native-base';
import { StyleSheet } from 'react-native';
import useHome from '../../hooks/Home';
import { View } from 'native-base';

export default function Home() {

    const home = useHome();

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Login</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
            <Content padder>
                {/* <Text>Hello</Text> */}
                <Form>
                    <Item>
                        <Input placeholder="Usuário" />
                    </Item>
                    <Item>
                        <Input secureTextEntry placeholder="Senha" />
                    </Item>
                </Form>
                <Button primary>
                    <Text style={{ color: '#000', }}> Login </Text>
                </Button>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});