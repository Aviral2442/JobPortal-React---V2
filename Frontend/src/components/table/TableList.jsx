import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-responsive-bs5";

import jszip from "jszip";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Attach JSZip globally so DataTables can use it
window.JSZip = jszip;

// Fix pdfMake fonts
pdfMake.vfs = pdfFonts?.default?.vfs || pdfFonts.vfs;

const TableList = ({ data = [], columns = [], options = {}, className }) => {
  const tableRef = useRef(null);
  const dtInstance = useRef(null);

  useEffect(() => {
    if (!tableRef.current) return;

    if (dtInstance.current) {
      $(tableRef.current).DataTable().destroy();
      $(tableRef.current).empty();
    }

    dtInstance.current = $(tableRef.current).DataTable({
      data,
      columns,
       dom: "<'d-md-flex justify-content-between align-items-center my-2'<'dropdown'B>f>" + 'rt' + "<'d-md-flex justify-content-between align-items-center mt-2'ip>",
      buttons: [
        { extend: "copyHtml5", className: "btn btn-sm btn-secondary" },
        { extend: "csvHtml5", className: "btn btn-sm btn-secondary" },
        { extend: "excelHtml5", className: "btn btn-sm btn-secondary" },
        { extend: "pdfHtml5", className: "btn btn-sm btn-secondary" },
      ],
      responsive: true,
      ...options,
    });

  

    return () => {
      if (dtInstance.current) dtInstance.current.destroy();
    };
  }, [data, columns, options]);

  return (
    <table
      ref={tableRef}
      className={className || "table table-striped dt-responsive w-100 "}
    />
  );
};

export default TableList;
