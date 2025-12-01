import { useMemo, useState, useEffect, lazy, useRef } from "react";
import Quill from "quill";
import ReactDOMServer from "react-dom/server";
import {
  TbAlignCenter, TbAlignJustified, TbAlignLeft, TbAlignRight,
  TbBackground, TbBlockquote, TbBold, TbCode, TbH1, TbH2, TbH3,
  TbIndentDecrease, TbIndentIncrease, TbItalic, TbLetterT, TbLink,
  TbList, TbPaint, TbPhoto, TbStrikethrough, TbSubscript, TbSuperscript,
  TbTrash, TbUnderline, TbVideo, TbTable
} from "react-icons/tb";

// Lazy load react-quill-new
const CustomQuill = lazy(() => import("react-quill-new"));

// quill-better-table imports
import QuillBetterTable from "quill-better-table";
import "quill-better-table/dist/quill-better-table.css";

// Register better-table module
Quill.register({ "modules/better-table": QuillBetterTable }, true);

// Custom icons
const icons = Quill.import("ui/icons");
icons["bold"] = ReactDOMServer.renderToStaticMarkup(<TbBold className="fs-lg" />);
icons["italic"] = ReactDOMServer.renderToStaticMarkup(<TbItalic className="fs-lg" />);
icons["underline"] = ReactDOMServer.renderToStaticMarkup(<TbUnderline className="fs-lg" />);
icons["strike"] = ReactDOMServer.renderToStaticMarkup(<TbStrikethrough className="fs-lg" />);
icons["list"] = ReactDOMServer.renderToStaticMarkup(<TbList className="fs-lg" />);
icons["bullet"] = ReactDOMServer.renderToStaticMarkup(<TbList className="fs-lg" />);
icons["indent"] = ReactDOMServer.renderToStaticMarkup(<TbIndentIncrease className="fs-lg" />);
icons["outdent"] = ReactDOMServer.renderToStaticMarkup(<TbIndentDecrease className="fs-lg" />);
icons["link"] = ReactDOMServer.renderToStaticMarkup(<TbLink className="fs-lg" />);
icons["image"] = ReactDOMServer.renderToStaticMarkup(<TbPhoto className="fs-lg" />);
icons["video"] = ReactDOMServer.renderToStaticMarkup(<TbVideo className="fs-lg" />);
icons["code-block"] = ReactDOMServer.renderToStaticMarkup(<TbCode className="fs-lg" />);
icons["clean"] = ReactDOMServer.renderToStaticMarkup(<TbTrash className="fs-lg" />);
icons["color"] = ReactDOMServer.renderToStaticMarkup(<TbPaint className="fs-lg" />);
icons["background"] = ReactDOMServer.renderToStaticMarkup(<TbBackground className="fs-lg" />);
icons["script"]["super"] = ReactDOMServer.renderToStaticMarkup(<TbSuperscript className="fs-lg" />);
icons["script"]["sub"] = ReactDOMServer.renderToStaticMarkup(<TbSubscript className="fs-lg" />);
icons["blockquote"] = ReactDOMServer.renderToStaticMarkup(<TbBlockquote className="fs-lg" />);
icons["align"][""] = ReactDOMServer.renderToStaticMarkup(<TbAlignLeft className="fs-lg" />);
icons["align"]["center"] = ReactDOMServer.renderToStaticMarkup(<TbAlignCenter className="fs-lg" />);
icons["align"]["right"] = ReactDOMServer.renderToStaticMarkup(<TbAlignRight className="fs-lg" />);
icons["align"]["justify"] = ReactDOMServer.renderToStaticMarkup(<TbAlignJustified className="fs-lg" />);
icons["header"]["1"] = ReactDOMServer.renderToStaticMarkup(<TbH1 className="fs-lg" />);
icons["header"]["2"] = ReactDOMServer.renderToStaticMarkup(<TbH2 className="fs-lg" />);
icons["header"]["3"] = ReactDOMServer.renderToStaticMarkup(<TbH3 className="fs-lg" />);
icons["header"][""] = ReactDOMServer.renderToStaticMarkup(<TbLetterT className="fs-lg" />);
icons["table"] = ReactDOMServer.renderToStaticMarkup(<TbTable className="fs-lg" />);

const SnowEditor = ({ value = "", onChange }) => {
  const [editorValue, setEditorValue] = useState(value);
  const quillRef = useRef(null);

  // keep local state synced with external value (reset, defaultValues, etc.)
  useEffect(() => {
    setEditorValue(value || "");
  }, [value]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }, { header: [false, 1, 2, 3, 4, 5, 6] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "super" }, { script: "sub" }],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
          [{ align: [] }],
          ["link", "image", "video", "table"],
          ["clean"],
        ],
        handlers: {
          table: function () {
            const quill = quillRef.current?.getEditor?.();
            if (quill) {
              const tableModule = quill.getModule("better-table");
              tableModule.insertTable(3, 3);
            }
          },
        },
      },
      "better-table": {
        operationMenu: {
          items: {
            insertRowAbove: true,
            insertRowBelow: true,
            insertColumnLeft: true,
            insertColumnRight: true,
            deleteRow: true,
            deleteColumn: true,
            deleteTable: true,
          },
        },
      },
      keyboard: {
        bindings: QuillBetterTable.keyboardBindings,
      },
      history: {
        delay: 1000,
        maxStack: 100,
        userOnly: true,
      },
    }),
    []
  );

  return (
    <CustomQuill
      ref={quillRef}
      theme="snow"
      modules={modules}
      value={editorValue}
      onChange={(content) => {
        setEditorValue(content);
        onChange?.(content);
      }}
      placeholder="Start typing..."
    />
  );
};

export default SnowEditor;
