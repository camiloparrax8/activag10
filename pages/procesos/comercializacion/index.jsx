import SEO from '../../../components/seo';
import Wrapper from '../../../layout/wrapper';
import ComercializacionMain from '../../../components/comercializacion';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Comercialización'} />
      <ComercializacionMain/>
    </Wrapper>
  );
};

export default index;