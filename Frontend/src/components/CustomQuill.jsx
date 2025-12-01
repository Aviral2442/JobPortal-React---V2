import Quill from "quill";
import { lazy } from "react";
import ReactDOMServer from "react-dom/server";
import {
  TbAlignCenter, TbAlignJustified, TbAlignLeft, TbAlignRight,
  TbBackground, TbBlockquote, TbBold, TbCode, TbH1, TbH2, TbH3,
  TbIndentDecrease, TbIndentIncrease, TbItalic, TbLetterT, TbLink,
  TbList, TbPaint, TbPhoto, TbStrikethrough, TbSubscript, TbSuperscript,
  TbTrash, TbUnderline, TbVideo, TbTable
} from "react-icons/tb";

// Import quill table module
import Table from "quill-table-ui";
import "quill-table-ui/dist/index.css";

// Register table module
Quill.register(
  {
    "modules/table": Table,
  },
  true
);

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

// Toolbar configuration
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  [{ script: "sub" }, { script: "super" }],
  ["blockquote", "code-block"],

  [{ header: [1, 2, 3, false] }],

  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],

  [{ align: [] }],

  [{ color: [] }, { background: [] }],

  ["link", "image", "video", "table"],

  ["clean"],
];

// Quill modules
export const modules = {
  toolbar: toolbarOptions,
  table: true,
  history: {
    delay: 1000,
    maxStack: 100,
    userOnly: true,
  },
};

// Lazy load react-quill-new
const CustomQuill = lazy(() => import("react-quill-new"));

export default CustomQuill;
