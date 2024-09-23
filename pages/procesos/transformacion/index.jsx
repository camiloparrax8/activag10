import SEO from '../../../components/seo';
import Wrapper from '../../../layout/wrapper';
import TransformacionMain from '../../../components/transformacion';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Transformacion'} />
      <TransformacionMain/>
    </Wrapper>
  );
};

export default index;