import { Redirect } from "@docusaurus/router";

// make default landing page as docs
export default function Home() {
  return <Redirect to="/python-tech-doc/docs/category/python-documentations" />;
}
