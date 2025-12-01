import VerticalLayout from "@/layouts/VerticalLayout";
import { Outlet } from "react-router";
const MainLayout = () => {
  return <VerticalLayout>
            <Outlet />
        </VerticalLayout>;
};
export default MainLayout;