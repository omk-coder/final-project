"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Scrollbars } from 'react-custom-scrollbars-2';

function StreamWatch() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    axios
      .get("https://lichess.org/api/streamer/live")
      .then((res) => {
        console.log(res);
        const channelData = res.data.map((streamer) => {
          const channelName = streamer.streamer.twitch
            ? streamer.streamer.twitch.split("/").pop()
            : "Unknown";
          console.log(channelName);
          return {
            name: channelName,
            url: streamer.streamer.twitch,
          };
        });
        setChannels(channelData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(channels);
  return (
  
    <Container
      fluid
      style={{ background: "black", overflow: "hidden", height: "100%", width: "100%" }}
    >
      <h1 className=" ml-4 underline decoration-sky-500 underline-offset-8 text-3xl font-500 ">Watch Stream</h1>
      <Scrollbars class="w-full h-300">
      <Row
        xs={2}
        md={4}
        className="g-4"
        style={{ background: "black", display: "flex", flexWrap: "wrap" }}
      >
        {channels.map((channel, index) => (
          <Col key={index}>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
                margin: "10px",
                background: "black",
                overflow: "hidden",
              }}
            >
              <iframe
                src={`https://player.twitch.tv/?channel=${channel.name}&parent=Chain-checkmate.vercel.app&muted=true`}
                height="250" // Adjust the height and width as needed
                width="350"
                allowFullScreen
              ></iframe>
            </Card>
          </Col>
        ))}
      </Row>
      </Scrollbars>
    </Container>
    
  );
}

export default StreamWatch;
