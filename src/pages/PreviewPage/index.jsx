import Preview from "@/components/PreviewPage/Preview";
import { PreviewHeader } from "@/components/PreviewPage/PreviewHeader";
import { useParams } from "react-router";

const PreviewPage = () => {
  const { link } = useParams();
  return (
    <>
      <PreviewHeader link={link} />
      <Preview link={link} />
    </>
  );
};

export default PreviewPage;
