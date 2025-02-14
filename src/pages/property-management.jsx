import { Wrapper } from "../layout";
import SEO from "../components/seo";
import PropertyManagement from "../components/property-management";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Property Management'} />
      <PropertyManagement />
    </Wrapper>
  )
}
