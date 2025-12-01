import { userDropdownItems } from '@/layouts/components/data';
import { Link } from 'react-router';
import { Fragment } from 'react';
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import user2 from '@/assets/images/users/user-2.jpg';
const UserProfile = () => {
  return <div className="topbar-item nav-user">
            <Dropdown align="end">
                <DropdownToggle as={'a'} className="topbar-link dropdown-toggle drop-arrow-none px-2">
                    <img src={user2} width="32" height="32" className="rounded-circle d-flex" alt="user-image" />
                </DropdownToggle>
                <DropdownMenu>
                    {userDropdownItems.map((item, idx) => <Fragment key={idx}>
                            {item.isHeader ? <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">{item.label}</h6>
                                </div> : item.isDivider ? <DropdownDivider /> : <DropdownItem as={Link} to={item.url ?? '#'} className={item.class}>
                                    {item.icon && <item.icon className="me-2 fs-17 align-middle" />}
                                    <span className="align-middle">{item.label}</span>
                                </DropdownItem>}
                        </Fragment>)}
                </DropdownMenu>
            </Dropdown>
        </div>;
};
export default UserProfile;