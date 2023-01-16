import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {ThemeProvider} from 'styled-components';

import theme from './global/styles/theme';

import StackRoutes from './routes/stack.routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <StackRoutes />
    </ThemeProvider>
  );
}
