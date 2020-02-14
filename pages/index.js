// import Link from "next/link";
// import Header from "../comps/Header";
import Layout from "../comps/MyLayout";
import Link from "next/Link";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Blog;

// export default function Index() {
//   return (
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   );
// }

// const Index = () => (
//   <Layout>
//     <p> Hello fat arrow syntax</p>
//   </Layout>
// );

// export default Index;
