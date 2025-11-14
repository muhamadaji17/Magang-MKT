import { useParams } from "react-router-dom";
import { Form, HeaderContent } from "../../components/molecules";
import { CardLayout } from "../../components/layouts";
import { inputAddArticle } from "../../pattern/modalPattern/inputArticlePattern";

const ArticleDetail = () => {
  const { action } = useParams();
  const title = `${action.replace(/^\s*\w/, (c) => c.toUpperCase())} Article`;

  return (
    <>
      <HeaderContent title={title} hiddenButton />

      <CardLayout>
        <Form
          configInput={inputAddArticle}
          buttonText={"Create"}
          handleSubmitData={(data) => console.log(data)}
        />
      </CardLayout>
    </>
  );
};

export default ArticleDetail;
