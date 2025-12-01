import { useEffect, useState } from 'react';
import DataTable from 'datatables.net-react';
let initialized = false;
const useDataTables = () => {
  const [isDataTablesReady, setIsDataTablesReady] = useState(false);
  useEffect(() => {
    const load = async () => {
      if (!initialized) {
        const jQuery = (await import('jquery')).default;
        window.$ = jQuery;
        window.jQuery = jQuery;
        const DT = (await import('datatables.net-bs5')).default;
        await import('datatables.net-responsive'); // register responsive
        await import('datatables.net-select'); // register select
        DataTable.use(DT);
        initialized = true;
      }
      setIsDataTablesReady(true);
    };
    load();
  }, []);
  return isDataTablesReady;
};
export default useDataTables;