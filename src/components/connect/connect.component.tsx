import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useConnectConfig } from '../../config/app-config-hooks';
import CommonSnackbar, {
  CommonSnackbarState,
  initialCommonSnackbarState,
} from '../common/common-snackbar.component';
import LoadingIndication from '../common/loading-indication.component';
import ConnectMainForm, {
  ConnectMainFormContent,
} from './connect-main-form.component';

export const Connect = () => {
  const { snackbar, request_connection_path, subtitle } = useConnectConfig();

  const isMediumView = useMediaQuery(useTheme().breakpoints.up('md'));

  const [requestPending, setRequestPending] = useState<boolean>(false);
  const [snackbarState, setSnackbarState] = useState<CommonSnackbarState>(
    initialCommonSnackbarState
  );

  const handleOnSubmit = (form: ConnectMainFormContent): void => {
    if (!requestPending && !!form) {
      submitConnectionForm(form);
    }
  };

  const submitConnectionForm = (form: ConnectMainFormContent): void => {
    setRequestPending(true);

    axios
      .post(request_connection_path, form)
      .then(() => {
        setSnackbarState({
          open: true,
          success: true,
          message: snackbar.success_message,
        });
      })
      .catch(() => {
        setSnackbarState({
          open: true,
          success: false,
          message: snackbar.fail_message,
        });
      });

    setRequestPending(false);
  };

  return (
    <Box display="grid" gap="1rem" padding={isMediumView ? '2rem' : '1rem'}>
      <Box>
        <Typography variant="h4">Connect</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Box>
      <Divider></Divider>
      <Box display="grid" width="100%">
        <Box
          display="grid"
          justifySelf="center"
          width="100%"
          maxWidth="1000px"
          padding={isMediumView ? '3rem' : '1rem'}
        >
          <ConnectMainForm
            onSubmit={handleOnSubmit}
            disabled={requestPending}
          />
        </Box>
      </Box>
      {requestPending && <LoadingIndication loadingText="Submitting form..." />}
      <CommonSnackbar
        open={snackbarState.open}
        onClose={() => setSnackbarState(initialCommonSnackbarState)}
        message={snackbarState.message}
        severity={snackbarState.success ? 'success' : 'error'}
      />
    </Box>
  );
};

export default Connect;
