import { Fragment, useEffect, useState } from 'react';
import Sidenav from '@/layouts/components/sidenav';
import Topbar from '@/layouts/components/topbar';
import Footer from '@/layouts/components/footer';
import Customizer from '@/layouts/components/customizer';
import Loader from "@/components/Loader";
const VerticalLayout = ({
  children
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return <Loader height="100vh" />;
  return <Fragment>
            <div className="wrapper">
                <Sidenav />

                <Topbar />

                <div className="content-page">
                    {children}

                    <Footer />
                </div>
            </div>

            <Customizer />
        </Fragment>;
};
export default VerticalLayout;