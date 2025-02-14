import { Wrapper } from "../layout";
import SEO from "../components/seo";
import Advisory from "../components/advisory";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Advisory & Consultation'} />
      <Advisory/>
    </Wrapper>
  )
}
