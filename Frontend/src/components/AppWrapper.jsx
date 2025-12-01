import { LayoutProvider } from '@/context/useLayoutContext';
import { NotificationProvider } from '@/context/useNotificationContext';
const AppWrapper = ({
  children
}) => {
  return <LayoutProvider>
            <NotificationProvider>{children}</NotificationProvider>
        </LayoutProvider>;
};
export default AppWrapper;