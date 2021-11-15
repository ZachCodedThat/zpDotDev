import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Avatar, Tooltip } from "@chakra-ui/react";
import { reactIcon } from "@components/ProjectCards/Icons";

export const SkillsBar = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    initialSlide: 0,
    pauseonHover: true,
  };
  return (
    <>
      <Box width={{ base: "300px", md: "650px", lg: "1100px" }}>
        <Slider {...settings}>
          <Box>
            <Box>
              <Box>
                <Tooltip
                  hasArrow
                  offset={[0, 8]}
                  label="React"
                  placement="bottom"
                  openDelay={345}
                  closeOnClick={false}
                >
                  <Avatar
                    size="lg"
                    name="react"
                    bg="transparent"
                    src="/react.png"
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="skills-bar__bar">
              <Box className="skills-bar__bar__css">
                <Tooltip
                  hasArrow
                  offset={[0, 8]}
                  label="CSS"
                  placement="bottom"
                  openDelay={345}
                  closeOnClick={false}
                >
                  <Avatar
                    size="lg"
                    name="react"
                    bg="transparent"
                    src="/css.png"
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="skills-bar__bar">
              <Box className="skills-bar__bar__js">
                <Tooltip
                  hasArrow
                  offset={[0, 8]}
                  label="JavaScript"
                  placement="bottom"
                  openDelay={345}
                  closeOnClick={false}
                >
                  <Avatar
                    size="lg"
                    borderRadius="0%"
                    name="Javascript"
                    bg="transparent"
                    src="/JSicon.jpg"
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="skills-bar__bar">
              <Box className="skills-bar__bar__react">
                <Avatar
                  size="lg"
                  name="react"
                  bg="transparent"
                  src="/nextjsicon.svg"
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="skills-bar__bar">
              <Box className="skills-bar__bar__node">
                <Avatar
                  size="lg"
                  borderRadius="0%"
                  name="react"
                  bg="transparent"
                  src="/slate.avif"
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="skills-bar__bar">
              <Box className="skills-bar__bar__mongodb">
                <Avatar
                  size="lg"
                  name="react"
                  bg="transparent"
                  src="/react.png"
                />
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>
    </>
  );
};
