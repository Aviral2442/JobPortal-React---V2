import { appDescription, appTitle, author as appAuthor } from "@/helpers";
const PageMeta = ({
  title,
  description = appDescription,
  keywords,
  author = appAuthor
}) => {
  return <>
            <title>{title ? `${title} | ${appTitle}` : appTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
        </>;
};
export default PageMeta;