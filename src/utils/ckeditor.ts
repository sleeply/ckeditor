import * as ClassicEditor from "@ckeditor/ckeditor5-editor-classic";

import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage";
import AutoLink from "@ckeditor/ckeditor5-link/src/autolink";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import ExportPdf from "@ckeditor/ckeditor5-export-pdf/src/exportpdf";
import ExportWord from "@ckeditor/ckeditor5-export-word/src/exportword";
import ImportWord from "@ckeditor/ckeditor5-import-word/src/importword";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace";
import Font from "@ckeditor/ckeditor5-font/src/font";
import GeneralHtmlSupport from "@ckeditor/ckeditor5-html-support/src/generalhtmlsupport";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Link from "@ckeditor/ckeditor5-link/src/link";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";
import List from "@ckeditor/ckeditor5-list/src/list";
import ListProperties from "@ckeditor/ckeditor5-list/src/listproperties";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Mention from "@ckeditor/ckeditor5-mention/src/mention";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import PictureEditing from "@ckeditor/ckeditor5-image/src/pictureediting";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import { ShowBlocks } from "@ckeditor/ckeditor5-show-blocks";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Style from "@ckeditor/ckeditor5-style/src/style";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableColumnResize from "@ckeditor/ckeditor5-table/src/tablecolumnresize";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextPartLanguage from "@ckeditor/ckeditor5-language/src/textpartlanguage";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import { MENTION_FEEDS, REDUCED_MATERIAL_COLORS } from "./constants";

const exportHorizontalSpace = "10mm";
const exportVerticalSpace = "12mm";

const editorConfig: any = {
  plugins: [
    Alignment,
    Autoformat,
    AutoImage,
    AutoLink,
    BlockQuote,
    Bold,
    CloudServices,
    Code,
    CodeBlock,
    Essentials,
    ExportPdf,
    ExportWord,
    FindAndReplace,
    Font,
    GeneralHtmlSupport,
    Heading,
    HorizontalLine,
    HtmlEmbed,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Base64UploadAdapter,
    ImportWord,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    MediaEmbed,
    Mention,
    PageBreak,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    RemoveFormat,
    ShowBlocks,
    SourceEditing,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextPartLanguage,
    TextTransformation,
    TodoList,
    Underline,
    UploadAdapter
    // WProofreader,
  ],
  toolbar: {
		shouldNotGroupWhenFull: true,
    items: [
      // --- Document-wide tools ----------------------------------------------------------------------
      "undo",
      "redo",
      "|",
      "sourceEditing",
      "showBlocks",
      "|",
      "importWord",
      "exportWord",
      "exportPdf",
      "|",
      "findAndReplace",
      "selectAll",
      "wproofreader",
      "|",
      "link",
      "insertImage",
      "insertTable",
      "blockQuote",
      "mediaEmbed",
      "codeBlock",
      "htmlEmbed",
      "pageBreak",
      "horizontalLine",
      "-",

      // --- Block-level formatting -------------------------------------------------------------------
      "heading",
      "style",
      "|",

      // --- Basic styles, font and inline formatting -------------------------------------------------------
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "superscript",
      "subscript",
      {
        label: "Basic styles",
        icon: "text",
        items: ["fontSize", "fontFamily", "fontColor", "fontBackgroundColor", "code", "|", "textPartLanguage", "|"]
      },
      "removeFormat",
      "|",

      // --- Text alignment ---------------------------------------------------------------------------
      "alignment",
      "|",

      // --- Lists and indentation --------------------------------------------------------------------
      "bulletedList",
      "numberedList",
      "todoList",
      "|",
      "outdent",
      "indent"
    ]
  },
  exportPdf: {
    stylesheets: ["EDITOR_STYLES", "./content.css"],
    fileName: "export-pdf-demo.pdf",
    appID: "cke5-demos",
    converterOptions: {
      format: "Tabloid",
      margin_top: exportVerticalSpace,
      margin_bottom: exportVerticalSpace,
      margin_right: exportHorizontalSpace,
      margin_left: exportHorizontalSpace,
      page_orientation: "portrait"
    },
    tokenUrl: false
  },
  exportWord: {
    stylesheets: ["EDITOR_STYLES", "./content.css"],
    fileName: "export-word-demo.docx",
    appID: "cke5-demos",
    converterOptions: {
      format: "A4",
      margin_top: exportVerticalSpace,
      margin_bottom: exportVerticalSpace,
      margin_right: exportHorizontalSpace,
      margin_left: exportHorizontalSpace
    },
    tokenUrl: false
  },

  fontFamily: {
    supportAllValues: true
  },
  fontSize: {
    options: [10, 12, 14, "default", 18, 20, 22],
    supportAllValues: true
  },
  fontColor: {
    columns: 12,
    colors: REDUCED_MATERIAL_COLORS
  },
  fontBackgroundColor: {
    columns: 12,
    colors: REDUCED_MATERIAL_COLORS
  },
  heading: {
    options: [
      {
        model: "paragraph",
        title: "Paragraph",
        class: "ck-heading_paragraph"
      },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1"
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2"
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "ck-heading_heading3"
      },
      {
        model: "heading4",
        view: "h4",
        title: "Heading 4",
        class: "ck-heading_heading4"
      },
      {
        model: "heading5",
        view: "h5",
        title: "Heading 5",
        class: "ck-heading_heading5"
      },
      {
        model: "heading6",
        view: "h6",
        title: "Heading 6",
        class: "ck-heading_heading6"
      }
    ]
  },
  htmlEmbed: {
    showPreviews: true
  },
  htmlSupport: {
    allow: [
      // Enables all HTML features.
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true
      }
    ],
    disallow: [
      {
        attributes: [{ key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i }]
      }
    ]
  },
  image: {
    styles: ["alignCenter", "alignLeft", "alignRight"],
    resizeOptions: [
      {
        name: "resizeImage:original",
        label: "Default image width",
        value: null
      },
      {
        name: "resizeImage:50",
        label: "50% page width",
        value: "50"
      },
      {
        name: "resizeImage:75",
        label: "75% page width",
        value: "75"
      }
    ],
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "|",
      "imageStyle:inline",
      "imageStyle:wrapText",
      "imageStyle:breakText",
      "imageStyle:side",
      "|",
      "resizeImage"
    ],
    insert: {
      integrations: ["insertImageViaUrl"]
    }
  },
  importWord: {
    tokenUrl: false,
    defaultStyles: true
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true
    }
  },
  link: {
    decorators: {
      toggleDownloadable: {
        mode: "manual",
        label: "Downloadable",
        attributes: {
          download: "file"
        }
      }
    },
    addTargetToExternalLinks: true,
    defaultProtocol: "https://"
  },
  mention: {
    feeds: MENTION_FEEDS
  },
  placeholder: "Type or paste your content here!",
  language: "en",
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells", "tableProperties", "tableCellProperties", "toggleTableCaption"]
  }
};

export const useCkeditor = () => {
  return {
    editor: ClassicEditor,
    editorConfig: editorConfig
  };
};
