import * as React from "react";
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from "../components/layout";
import HomeImage from "../components/imageHome";
import ContentHome from "../components/contentHome";
import RoomPreview from "../components/roomPreview";
import useRoom from "../hooks/use-rooms";

const ListRoom = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem
  }
`;


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

      <ListRoom>
        {rooms.map( room => (
          <RoomPreview 
            key={room.id}
            room={room}
          />
        ))}
      </ListRoom>
    </Layout> 
  )
}

export default IndexPage;
