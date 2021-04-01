import * as React from "react";
import Layout from "../components/layout";
import HomeImage from "../components/imageHome";
import ContentHome from "../components/contentHome";
import useRoom from "../hooks/use-rooms";


const IndexPage = () => {

  const rooms = useRoom();

  console.log(rooms);
  
  return (
    <Layout>
      <HomeImage />

      <ContentHome />
    </Layout> 
  )
}

export default IndexPage;
