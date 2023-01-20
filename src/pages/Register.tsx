import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container size={620} my={40}>
            <Title
                align='center'
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 900,
                })}
            >
                Sign Up
            </Title>
            <Text color='dimmed' size='sm' align='center' mt={5}>
                Already have an account? <Link to='/'>Login</Link>
            </Text>

            <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                <Container display={'flex'} p={'0'}>
                    <TextInput
                        label='First Name'
                        placeholder='Ex. John'
                        required
                    />
                    <TextInput
                        label='Middle Name'
                        placeholder='Optional'
                        ml={'md'}
                    />
                    <TextInput
                        label='Last Name'
                        placeholder='Ex. Does'
                        required
                        ml={'md'}
                    />
                </Container>
                <TextInput
                    label='Username'
                    placeholder='Your username'
                    required
                    mt={'md'}
                />
                <TextInput
                    label='Email'
                    placeholder='you@mantine.dev'
                    required
                    mt={'md'}
                />
                <PasswordInput
                    label='Password'
                    placeholder='Your password'
                    required
                    mt={'md'}
                />

                <Button fullWidth mt='xl'>
                    Continue
                </Button>
            </Paper>
        </Container>
    );
};

export default Register;
