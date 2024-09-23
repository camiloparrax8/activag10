import SEO from '../../../components/seo';
import Wrapper from '../../../layout/wrapper';
import AgroMain from '../../../components/agro';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Siembra y Cosecha'} />
      <AgroMain/>
    </Wrapper>
  );
};

export default index;