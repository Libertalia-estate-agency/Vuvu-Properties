import { Wrapper } from "../layout";
import SEO from "../components/seo";
import CoursesMain from '../components/courses';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Course Overview'} />
      <CoursesMain/>
    </Wrapper>
  )
}
