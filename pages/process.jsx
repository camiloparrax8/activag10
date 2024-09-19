import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ProcessMain from '../components/process';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Process'} />
      <ProcessMain/>
    </Wrapper>
  );
};

export default index;