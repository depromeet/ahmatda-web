import useListeningAppMessage from '../bridge/useListeningAppMessage';

const useGetFCMTokenFromApp = () => {
  useListeningAppMessage({
    targetType: 'FCM_TOKEN',
    handler: ({ data }) => {
      localStorage.setItem('fcm_token', JSON.stringify(data));
    },
  });
};

export default useGetFCMTokenFromApp;
