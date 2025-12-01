import { useLayoutContext } from '@/context/useLayoutContext';
import { toPascalCase } from '@/helpers/casing';
import { Fragment } from 'react';
import { Button, Col, Offcanvas, Row } from 'react-bootstrap';
import { TbX } from 'react-icons/tb';
import SimpleBar from 'simplebar-react';
import pattern from '@/assets/images/user-bg-pattern.png';
import dark from '@/assets/images/layouts/dark.svg';
import { default as light, default as lightSideNavImg } from '@/assets/images/layouts/light.svg';
import darkSideNavImg from '@/assets/images/layouts/sidenav-dark.svg';
import darkTopBarImg from '@/assets/images/layouts/topbar-dark.svg';
import lightTopBarImg from '@/assets/images/layouts/topbar-light.svg';
import collapsedSideNavImg from '@/assets/images/layouts/sidebar-condensed.svg';
const themeOptions = [{
  theme: 'light',
  image: light
}, {
  theme: 'dark',
  image: dark
}];
const topBarColorOptions = [{
  color: 'light',
  image: lightTopBarImg
}, {
  color: 'dark',
  image: darkTopBarImg
}];
const sidenavColorOptions = [{
  color: 'light',
  image: lightSideNavImg
}, {
  color: 'dark',
  image: darkSideNavImg
}];
const sidenavSizeOptions = [{
  size: 'default',
  image: lightSideNavImg,
  label: 'Default'
}, {
  size: 'collapse',
  image: collapsedSideNavImg,
  label: 'Collapse'
}];
const layoutPositionOptions = [{
  position: 'fixed'
}, {
  position: 'scrollable'
}];
const Customizer = () => {
  const {
    customizer,
    theme,
    changeTheme,
    topBar,
    changeTopBarColor,
    sidenav,
    changeSideNavColor,
    changeSideNavSize,
    position,
    changePosition,
    toggleSideNavUser,
    reset
  } = useLayoutContext();
  return <Offcanvas show={customizer.isOpen} onHide={customizer.toggle} placement="end" className="overflow-hidden">
            <div className="d-flex justify-content-between text-bg-primary gap-2 p-3" style={{
      backgroundImage: `url(${pattern})`
    }}>
                <div>
                    <h5 className="mb-1 fw-bold text-white text-uppercase">Admin Customizer</h5>
                    <p className="text-white text-opacity-75 fst-italic fw-medium mb-0">
                        Easily configure layout, styles, and preferences for your admin interface.
                    </p>
                </div>

                <div className="flex-grow-0">
                    <button onClick={customizer.toggle} type="button" className="d-block btn btn-sm bg-white bg-opacity-25 text-white rounded-circle btn-icon">
                        <TbX className="fs-lg" />
                    </button>
                </div>
            </div>

            <SimpleBar className="offcanvas-body p-0 h-100">
                <div className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Color Scheme</h5>
                    <Row className="g-3">
                        {themeOptions.map((item, idx) => <Col sm={4} key={idx}>
                                <div className="form-check card-radio">
                                    <input id={`theme-${item.theme}`} className="form-check-input" type="radio" name="data-bs-theme" value={item.theme} checked={theme === item.theme} onChange={() => changeTheme(item.theme)} />
                                    <label className="form-check-label p-0 w-100" htmlFor={`theme-${item.theme}`}>
                                        <img src={item.image} alt="layout-img" className="img-fluid" width={104.33} height={83.45} />
                                    </label>
                                </div>
                                <h5 className="text-center text-muted mt-2 mb-0">{toPascalCase(item.theme)}</h5>
                            </Col>)}
                    </Row>
                </div>

                <div className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Topbar Color</h5>
                    <Row className="g-3">
                        {topBarColorOptions.map((item, idx) => <Col sm={4} key={idx}>
                                <div className="form-check card-radio">
                                    <input id={`topbar-color-${item.color}`} className="form-check-input" type="radio" name="data-topbar-color" value={item.color} checked={topBar.color === item.color} onChange={() => changeTopBarColor(item.color)} />
                                    <label className="form-check-label p-0 w-100" htmlFor={`topbar-color-${item.color}`}>
                                        <img src={item.image} alt="layout-img" className="img-fluid" width={104.33} height={83.45} />
                                    </label>
                                </div>
                                <h5 className="text-center text-muted mt-2 mb-0">{toPascalCase(item.color)}</h5>
                            </Col>)}
                    </Row>
                </div>

                <div className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Sidenav Color</h5>
                    <Row className="g-3">
                        {sidenavColorOptions.map((item, idx) => <Col sm={4} key={idx}>
                                <div className="form-check card-radio">
                                    <input id={`sidenav-color-${item.color}`} className="form-check-input" type="radio" name="data-menu-color" value={item.color} checked={sidenav.color === item.color} onChange={() => changeSideNavColor(item.color)} />
                                    <label className="form-check-label p-0 w-100" htmlFor={`sidenav-color-${item.color}`}>
                                        <img src={item.image} alt="layout-img" className="img-fluid" width={104.33} height={83.45} />
                                    </label>
                                </div>
                                <h5 className="text-center text-muted mt-2 mb-0">{toPascalCase(item.color)}</h5>
                            </Col>)}
                    </Row>
                </div>

                <div className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Sidebar Size</h5>
                    <Row className="g-3">
                        {sidenavSizeOptions.map((item, idx) => <Col sm={4} key={idx}>
                                <div className="form-check card-radio">
                                    <input id={`sidenav-size-${item.size}`} className="form-check-input" type="radio" name="data-sidenav-size" value={item.size} checked={sidenav.size === item.size} onChange={() => changeSideNavSize(item.size)} />
                                    <label className="form-check-label p-0 w-100" htmlFor={`sidenav-size-${item.size}`}>
                                        <img src={item.image} alt="layout-img" className="img-fluid" width={104.33} height={83.45} />
                                    </label>
                                </div>
                                <h5 className="text-center text-muted mt-2 mb-0">{item.label}</h5>
                            </Col>)}
                    </Row>
                </div>

                <div className="p-3 border-bottom border-dashed">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-0">Layout Position</h5>

                        <div className="btn-group radio" role="group">
                            {layoutPositionOptions.map((item, idx) => <Fragment key={idx}>
                                    <input type="radio" className="btn-check" name="data-layout-position" id={`position-${item.position}`} value={item.position} checked={position === item.position} onChange={() => changePosition(item.position)} />
                                    <label className="btn btn-sm btn-soft-primary w-sm" htmlFor={`position-${item.position}`}>
                                        {toPascalCase(item.position)}
                                    </label>
                                </Fragment>)}
                        </div>
                    </div>
                </div>

                <div className="p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">
                            <label className="fw-bold m-0" htmlFor="sidebaruser-check">
                                Sidebar User Info
                            </label>
                        </h5>

                        <div className="form-check form-switch fs-lg">
                            <input type="checkbox" className="form-check-input" name="sidebar-user" checked={sidenav.user} onChange={toggleSideNavUser} />
                        </div>
                    </div>
                </div>
            </SimpleBar>

            <div className="offcanvas-footer border-top p-3 text-center">
                <Row>
                    <Col sm={6}>
                        <Button variant="light" type="button" onClick={reset} className="fw-semibold py-2 w-100">
                            Reset
                        </Button>
                    </Col>
                    <Col sm={6}>
                        <a href="" target="_blank" className="btn btn-dark bg-gradient py-2 fw-semibold w-100">
                            Buy Now
                        </a>
                    </Col>
                </Row>
            </div>
        </Offcanvas>;
};
export default Customizer;