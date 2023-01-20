import { MantineProvider, Text } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Register from './pages/Register';

export default function App() {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ colorScheme: 'dark' }}
        >
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='*' element={<Text>Not found</Text>} />
                </Routes>
            </Router>
        </MantineProvider>
    );
}
