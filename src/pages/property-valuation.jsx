import { Wrapper } from "../layout";
import SEO from "../components/seo";
import PropertyValuation from "../components/property-valuation";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Property Valuation'} />
      <PropertyValuation />
    </Wrapper>
  )
}
