import { useLayoutContext } from '@/context/useLayoutContext';
import { scrollToElement } from '@/helpers/layout';
import { menuItems } from '@/layouts/components/data';
import { NavLink, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { TbChevronDown } from 'react-icons/tb';

const MenuItemWithChildren = ({
  item,
  openMenuKey,
  setOpenMenuKey,
  level = 0
}) => {
  const { pathname } = useLocation();
  const isTopLevel = level === 0;
  const [localOpen, setLocalOpen] = useState(false);
  const [didAutoOpen, setDidAutoOpen] = useState(false);

  const isChildActive = children =>
    children.some(
      child =>
        (child.url && pathname.startsWith(child.url)) ||
        (child.children && isChildActive(child.children))
    );

  const isActive = isChildActive(item.children || []);
  const isOpen = isTopLevel ? openMenuKey === item.key : localOpen;

  useEffect(() => {
    if (isTopLevel && isActive && !didAutoOpen) {
      setOpenMenuKey(item.key);
      setDidAutoOpen(true);
    }
    if (!isTopLevel && isActive && !didAutoOpen) {
      setLocalOpen(true);
      setDidAutoOpen(true);
    }
  }, [isActive, isTopLevel, item.key, setOpenMenuKey, didAutoOpen]);

  const toggleOpen = () => {
    if (isTopLevel) {
      setOpenMenuKey(isOpen ? null : item.key);
    } else {
      setLocalOpen(prev => !prev);
    }
  };

  return (
    <li className={`side-nav-item ${isOpen ? 'active' : ''}`}>
      <button onClick={toggleOpen} className="side-nav-link" aria-expanded={isOpen}>
        {item.icon && (
          <span className="menu-icon">
            <item.icon />
          </span>
        )}
        <span className="menu-text">{item.label}</span>
        {item.badge ? (
          <span className={`badge bg-${item.badge.variant}`}>{item.badge.text}</span>
        ) : (
          <span className="menu-arrow">
            <TbChevronDown />
          </span>
        )}
      </button>
      <Collapse in={isOpen}>
        <div>
          <ul className="sub-menu">
            {(item.children || []).map(child =>
              child.children ? (
                <MenuItemWithChildren
                  key={child.key}
                  item={child}
                  openMenuKey={openMenuKey}
                  setOpenMenuKey={setOpenMenuKey}
                  level={level + 1}
                />
              ) : (
                <MenuItem key={child.key} item={child} />
              )
            )}
          </ul>
        </div>
      </Collapse>
    </li>
  );
};

const MenuItem = ({ item }) => {
  const { sidenav, hideBackdrop } = useLayoutContext();
  const toggleBackdrop = () => {
    if (sidenav.size === 'offcanvas') {
      hideBackdrop();
    }
  };

  return (
    <li className="side-nav-item">
      <NavLink
        to={item.url ?? '#'}
        onClick={toggleBackdrop}
        className={({ isActive }) =>
          `side-nav-link ${isActive ? 'active' : ''} ${
            item.isDisabled ? 'disabled' : ''
          }`
        }
        end
      >
        {item.icon && (
          <span className="menu-icon">
            <item.icon />
          </span>
        )}
        <span className="menu-text">{item.label}</span>
        {item.badge && (
          <span className={`badge text-bg-${item.badge.variant}`}>
            {item.badge.text}
          </span>
        )}
      </NavLink>
    </li>
  );
};

const AppMenu = () => {
  const [openMenuKey, setOpenMenuKey] = useState(null);

  const scrollToActiveLink = () => {
    const activeItem = document.querySelector('.side-nav-link.active');
    if (activeItem) {
      const simpleBarContent = document.querySelector(
        '#sidenav .simplebar-content-wrapper'
      );
      if (simpleBarContent) {
        const offset = activeItem.offsetTop - window.innerHeight * 0.4;
        scrollToElement(simpleBarContent, offset, 500);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => scrollToActiveLink(), 100);
  }, []);

  return (
    <ul className="side-nav">
      {menuItems.map(item =>
        item.isTitle ? (
          <li className="side-nav-title mt-2" key={item.key}>
            {item.label}
          </li>
        ) : item.children ? (
          <MenuItemWithChildren
            key={item.key}
            item={item}
            openMenuKey={openMenuKey}
            setOpenMenuKey={setOpenMenuKey}
          />
        ) : (
          <MenuItem key={item.key} item={item} />
        )
      )}
    </ul>
  );
};

export default AppMenu;
