import React from 'react';
import appConfig from '../../config/config.json';

/**
 * This context provides the application configuration data.
 */
export const AppConfigContext = React.createContext(appConfig);
