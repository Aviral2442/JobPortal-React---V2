import SimpleBar from 'simplebar-react';
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import { LuBell, LuBug, LuCalendarClock, LuCircleX, LuCloudCog, LuFileWarning, LuMail } from 'react-icons/lu';
import user3 from '@/assets/images/users/user-3.jpg';
import user4 from '@/assets/images/users/user-4.jpg';
const notifications = [{
  id: 'notification-1',
  type: 'notification',
  icon: LuCloudCog,
  title: 'Backup completed successfully',
  time: 'Just now'
}, {
  id: 'notification-2',
  type: 'notification',
  icon: LuBug,
  title: 'New bug reported in Payment Module',
  time: '8 minutes ago'
}, {
  id: 'message-1',
  type: 'message',
  avatar: user3,
  title: 'Olivia Bennett',
  description: 'shared a new report in Weekly Planning',
  time: '2 minutes ago',
  isActive: true
}, {
  id: 'message-2',
  type: 'message',
  avatar: user4,
  title: 'Lucas Gray',
  description: 'mentioned you in Sprint Standup',
  time: '14 minutes ago'
}, {
  id: 'message-3',
  type: 'notification',
  icon: LuFileWarning,
  description: 'Security policy update required for your account',
  time: '22 minutes ago'
}, {
  id: 'notification-6',
  type: 'notification',
  icon: LuMail,
  title: "You've received a new support ticket",
  time: '18 minutes ago'
}, {
  id: 'notification-7',
  type: 'notification',
  icon: LuCalendarClock,
  title: 'System maintenance starts at 12 AM',
  time: '1 hour ago'
}];
const NotificationDropdown = () => {
  return <div className="topbar-item">
            <Dropdown align="end">
                <DropdownToggle as={'button'} className="topbar-link dropdown-toggle drop-arrow-none">
                    <LuBell className="fs-xxl" />
                    <span className="badge badge-square text-bg-success topbar-badge">9</span>
                </DropdownToggle>

                <DropdownMenu className="p-0 dropdown-menu-lg">
                    <div className="px-3 py-2 border-bottom">
                        <Row className="align-items-center">
                            <Col>
                                <h6 className="m-0 fs-md fw-semibold">Notifications</h6>
                            </Col>
                            <Col className="text-end">
                                <a href="#" className="badge text-bg-light badge-label py-1">
                                    9 Alerts
                                </a>
                            </Col>
                        </Row>
                    </div>

                    <SimpleBar style={{
          maxHeight: '300px'
        }}>
                        {notifications.map(notification => <DropdownItem className="notification-item py-2 text-wrap" key={notification.id}>
                                <span className="d-flex gap-2">
                                  {notification.avatar && <span className="flex-shrink-0">
                                      <img src={notification.avatar} className="avatar-md rounded-circle" alt="User Avatar" width={36} height={36} />
                                    </span>}
                                    {notification.icon && <span className="avatar-md flex-shrink-0">
                                      <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-22">
                                        <notification.icon className="fs-xl fill-primary" />
                                      </span>
                                    </span>}
                                    <span className="flex-grow-1 text-muted">
                                    {notification.type === 'message' ? <>
                                            <span className="fw-medium text-body">{notification.title}</span>
                                            {notification.description}
                                        </> : <span className="fw-medium text-body">{notification.title ? notification.title : notification.description}</span>}
                                        <br />
                                    <span className="fs-xs">{notification.time}</span>
                                  </span>
                                  <button type="button" className="flex-shrink-0 text-muted btn shadow-none btn-link p-0">
                                    <LuCircleX className="fs-xxl" />
                                  </button>
                                </span>
                            </DropdownItem>)}
                    </SimpleBar>

                    <a href="javascript:void(0);" className="dropdown-item text-center text-reset text-decoration-underline link-offset-2 fw-bold notify-item border-top border-light py-2">
                        View All Notifications
                    </a>
                </DropdownMenu>
            </Dropdown>
        </div>;
};
export default NotificationDropdown;