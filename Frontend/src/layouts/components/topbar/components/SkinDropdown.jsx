import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { useLayoutContext } from '@/context/useLayoutContext';
import { toPascalCase } from '@/helpers/casing';
import { chunkArray } from '@/helpers/array';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import shadcn from '@/assets/images/themes/shadcn.svg';
import corporate from '@/assets/images/themes/corporate.svg';
import spotify from '@/assets/images/themes/spotify.svg';
import saas from '@/assets/images/themes/saas.svg';
import nature from '@/assets/images/themes/nature.svg';
import vintage from '@/assets/images/themes/vintage.svg';
import leafline from '@/assets/images/themes/leafline.svg';
import ghibli from '@/assets/images/themes/ghibli.svg';
import slack from '@/assets/images/themes/slack.svg';
import material from '@/assets/images/themes/material.svg';
import flat from '@/assets/images/themes/flat.svg';
import pastel from '@/assets/images/themes/pastel.svg';
import caffieine from '@/assets/images/themes/caffieine.svg';
import redshift from '@/assets/images/themes/redshift.svg';
const skinOptions = [{
  name: 'shadcn',
  img: shadcn
}, {
  name: 'corporate',
  img: corporate
}, {
  name: 'spotify',
  img: spotify
}, {
  name: 'saas',
  img: saas
}, {
  name: 'nature',
  img: nature
}, {
  name: 'vintage',
  img: vintage
}, {
  name: 'leafline',
  img: leafline
}, {
  name: 'ghibli',
  img: ghibli
}, {
  name: 'slack',
  img: slack
}, {
  name: 'material',
  img: material
}, {
  name: 'flat',
  img: flat
}, {
  name: 'pastel',
  img: pastel
}, {
  name: 'caffieine',
  img: caffieine
}, {
  name: 'redshift',
  img: redshift
}];
const SkinDropdown = () => {
  const {
    skin,
    changeSkin
  } = useLayoutContext();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentSkin = useMemo(() => {
    if (!mounted || !skin) return {
      name: 'Loading...',
      img: shadcn
    };
    return skinOptions.find(s => s.name === skin) ?? skinOptions[0];
  }, [mounted, skin]);
  const handleSkinChange = option => {
    changeSkin(option.name);
  };
  return <div className="topbar-item me-2">
            <Dropdown align="end">
                <DropdownToggle as={'button'} className="topbar-link fw-semibold drop-arrow-none">
                    <img src={currentSkin.img} alt="skin-image" className="w-100 rounded me-2" height={18} width={18} suppressHydrationWarning />
                    <span className="text-nowrap" suppressHydrationWarning>
                        {' '}
                        {toPascalCase(currentSkin.name)}{' '}
                    </span>
                    <span className="dot-blink" aria-label="live status indicator"></span>
                </DropdownToggle>

                <DropdownMenu className="dropdown-menu-lg p-1">
                    <SimpleBar className="h-100" style={{
          maxHeight: '250px'
        }}>
                        <Row className="g-0">
                            {chunkArray(skinOptions, 7).map((chunk, idx) => <Col md={6} key={idx}>
                                    {chunk.map((item, index) => <button key={index} className={clsx('dropdown-item position-relative', item.name === currentSkin.name && 'drop-custom-active')} onClick={() => handleSkinChange(item)}>
                                            <img src={item.img} alt="" className="me-1 rounded" height={18} width={18} />
                                            <span className="align-middle">{toPascalCase(item.name)}</span>
                                        </button>)}
                                </Col>)}
                        </Row>
                    </SimpleBar>
                </DropdownMenu>
            </Dropdown>
        </div>;
};
export default SkinDropdown;