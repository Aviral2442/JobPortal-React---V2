import SimpleBar from 'simplebar-react';
import { Link } from 'react-router';
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import { TbChevronDown } from 'react-icons/tb';
const megaMenuItems = [{
  title: 'Workspace Tools',
  links: [{
    label: 'My Dashboard',
    url: ''
  }, {
    label: 'Recent Activity',
    url: ''
  }, {
    label: 'Notifications Center',
    url: ''
  }, {
    label: 'File Manager',
    url: ''
  }, {
    label: 'Calendar View',
    url: ''
  }]
}, {
  title: 'Team Operations',
  links: [{
    label: 'Team Overview',
    url: ''
  }, {
    label: 'Meeting Schedule',
    url: ''
  }, {
    label: 'Timesheets',
    url: ''
  }, {
    label: 'Feedback Hub',
    url: ''
  }, {
    label: 'Resource Allocation',
    url: ''
  }]
}, {
  title: 'Account Settings',
  links: [{
    label: 'Profile Settings',
    url: ''
  }, {
    label: 'Billing & Plans',
    url: ''
  }, {
    label: 'Integrations',
    url: ''
  }, {
    label: 'Privacy & Security',
    url: ''
  }, {
    label: 'Support Center',
    url: ''
  }]
}];
const MegaMenu = () => {
  return <div className="topbar-item d-none d-md-flex">
            <Dropdown>
                <DropdownToggle as={'button'} className="topbar-link btn shadow-none btn-link px-2 dropdown-toggle drop-arrow-none">
                    Mega Menu
                    <TbChevronDown className="ms-1" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-xxl p-0">
                    <SimpleBar className="h-100" style={{
          maxHeight: '380px'
        }}>
                        <Row className="g-0">
                            {megaMenuItems.map((item, idx) => <Col md={4} key={idx}>
                                    <div className="p-3">
                                        <h5 className="fw-semibold fs-sm dropdown-header">{item.title}</h5>
                                        <ul className="list-unstyled">
                                            {item.links.map((link, index) => <li key={index}>
                                                    <Link to={link.url} className="dropdown-item">
                                                        {link.label}
                                                    </Link>
                                                </li>)}
                                        </ul>
                                    </div>
                                </Col>)}
                        </Row>
                    </SimpleBar>
                </DropdownMenu>
            </Dropdown>
        </div>;
};
export default MegaMenu;