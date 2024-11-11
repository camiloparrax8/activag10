import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import BlogMain from "../components/blog";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Noticias"} />
      <BlogMain />
    </Wrapper>
  );
};

export default index;
