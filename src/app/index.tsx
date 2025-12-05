import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/chatbot/dist/css/main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import { ThemeProvider } from '@app/utils/ThemeContext';
import { FeatureFlagsProvider } from '@app/utils/FeatureFlagsContext';
import { UserProfileProvider } from '@app/utils/UserProfileContext';
import '@app/app.css';

// Get the base path from the build-time environment variable
// This will be '/rh-ai-prototype/' for GitHub Pages, or '/' for local development
const basename = process.env.ASSET_PATH || '/';

const App: React.FunctionComponent = () => (
  <FeatureFlagsProvider>
    <UserProfileProvider>
      <ThemeProvider>
        <Router basename={basename}>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </Router>
      </ThemeProvider>
    </UserProfileProvider>
  </FeatureFlagsProvider>
);

export default App;
