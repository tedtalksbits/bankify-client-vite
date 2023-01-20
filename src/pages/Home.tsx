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
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    const [username, setUsername] = React.useState(
        '' || localStorage.getItem('username')
    );
    const [password, setPassword] = React.useState('');
    const [remember, setRemember] = React.useState(false);
    const [apiError, setApiError] = React.useState({
        error: false,
        status: 0,
        errorMsg: '',
    });

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const rememberMe = (event: React.ChangeEvent<HTMLInputElement>) => {
        // save username in local storage
        setRemember(event.target.checked);
    };

    // handle submit onclick
    const handleSubmit = () => {
        // check if username and password are correct
        if (!username || !password) {
            alert('Please enter your username and password');
        }
        // if correct, redirect to dashboard

        // save username in local storage
        if (remember) {
            localStorage.setItem('username', username as string);
        } else {
            localStorage.removeItem('username');
        }

        const url = 'http://localhost:8000/api/v1/auth/login';

        const data = {
            username: username as string,
            password: password,
        };
        login(url, data);
    };
    const login = async (
        url: string,
        data: { username: string; password: string }
    ) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const json = (await response.json()) || { error: false };
        // get token from response header cookie: token=...
        const headers = response.headers.get('content-type');

        console.log('headers: ', headers);

        console.log('response: ', response);
        console.log('json: ', json);
        if (json.error) {
            return setApiError({
                error: json.error,
                status: json.status,
                errorMsg: json.errorMsg,
            });
        }
        // redirect
        navigate('/dashboard');
    };
    return (
        <Container size={420} my={40}>
            <Title
                align='center'
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 900,
                })}
            >
                Welcome back!
            </Title>
            <Text color='dimmed' size='sm' align='center' mt={5}>
                Do not have an account yet?{' '}
                <Link to='/register'>Create account</Link>
            </Text>

            <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                <TextInput
                    label='Username'
                    placeholder='Your username'
                    required
                    onChange={handleUsername}
                    value={username || ''}
                />
                <PasswordInput
                    label='Password'
                    placeholder='Your password'
                    required
                    mt='md'
                    onChange={handlePassword}
                    value={password || ''}
                />
                <Group position='apart' mt='lg'>
                    <Checkbox
                        label='Remember me'
                        sx={{ lineHeight: 1 }}
                        onChange={rememberMe}
                        checked={remember}
                    />
                    <Anchor<'a'>
                        onClick={(event) => event.preventDefault()}
                        href='#'
                        size='sm'
                    >
                        Forgot password?
                    </Anchor>
                </Group>
                <Button fullWidth mt='xl' onClick={handleSubmit}>
                    Sign in
                </Button>
                {apiError.error && (
                    <Text color='red' size='sm' align='center' mt={5}>
                        {apiError.errorMsg}
                    </Text>
                )}
            </Paper>
        </Container>
    );
};

export default Home;
