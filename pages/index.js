import Layout from "../components/MyLayout";
// import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      {/* <h1>My Blog</h1> */}
      <style jsx>{`
        body {
          margin: 0;
          font-family: Georgia;
        }
        h1 {
          font-family: "Arial";
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
