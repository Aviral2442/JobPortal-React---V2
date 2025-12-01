import { useLayoutContext } from '@/context/useLayoutContext';
import { LuSettings } from 'react-icons/lu';
const CustomizerToggler = () => {
  const {
    customizer
  } = useLayoutContext();
  return <div className="topbar-item d-none d-sm-flex">
            <button onClick={customizer.toggle} className="topbar-link" type="button">
                <LuSettings className="fs-xxl" />
            </button>
        </div>;
};
export default CustomizerToggler;