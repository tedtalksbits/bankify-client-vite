import { Drawer, Button, Group } from '@mantine/core';
import { useEffect, useState } from 'react';

// tslint:disable-next-line: no-submodule-imports
import { Cookies } from 'react-cookie';

const Dashboard = () => {
    const [opened, setOpened] = useState(false);
    const cookies = new Cookies();
    const token = cookies.get('cookie');
    console.log('token: ', document.cookie);

    useEffect(() => {
        const getAccount = async () => {
            const response = await fetch(
                'http://localhost:8000/api/v1/account',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const json = (await response.json()) || { error: false };
            console.log('json: ', json);
        };
        getAccount();

        return () => {
            console.log('unmounting...');
        };
    }, []);

    return (
        <>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title='Register'
                padding='xl'
                size='xl'
            >
                {/* Drawer content */}
            </Drawer>
            <Group>
                <Button onClick={() => setOpened(true)}>Open Drawer</Button>
            </Group>
        </>
    );
};

export default Dashboard;
