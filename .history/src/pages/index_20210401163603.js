import * as React from "react";
import { css } from '@emotion/react';
import Layout from "../components/layout";
import HomeImage from "../components/imageHome";
import ContentHome from "../components/contentHome";
import RoomPreview from "../components/roomPreview";
import useRoom from "../hooks/use-rooms";


const IndexPage = () => {

  const rooms = useRoom();

  console.log(rooms);

  return (
    <Layout>
      <HomeImage />

      <ContentHome />

      <h2
        css={css`
          text-align:center;
          margin-top: 4rem;
          font-size: 3rem;
        `}
      >
        Our Rooms
      </h2>

      <ul>
        {rooms.map( room => (
          <RoomPreview 
            key={room.id}
          />
        ))}
      </ul>
    </Layout> 
  )
}

export default IndexPage;
