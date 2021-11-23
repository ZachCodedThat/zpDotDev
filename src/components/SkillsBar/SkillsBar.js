import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Avatar, Tooltip, useColorMode, Flex } from "@chakra-ui/react";

export const SkillsBar = (props) => {
  const { colorMode } = useColorMode();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    initialSlide: 0,
    pauseonHover: true,
    speed: 1000,
  };
  return (
    <>
      <Box width={{ base: "300px", md: "650px", lg: "900px", xl: "1100px" }}>
        <Slider {...settings}>
          <Flex>
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
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"}>
            <Tooltip
              hasArrow
              offset={[0, 8]}
              label="CSS"
              placement="bottom"
              openDelay={345}
              closeOnClick={false}
            >
              <Avatar size="lg" name="react" bg="transparent" src="/css.png" />
            </Tooltip>
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"}>
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
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"}>
            <Tooltip
              hasArrow
              offset={[0, 8]}
              label="NextJS"
              placement="bottom"
              openDelay={345}
              closeOnClick={false}
            >
              <Avatar
                size="lg"
                name="NextJS"
                bg="transparent"
                src="/NextJS.png"
              />
            </Tooltip>
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"}>
            <Tooltip
              hasArrow
              offset={[0, 8]}
              label="SlateJS"
              placement="bottom"
              openDelay={345}
              closeOnClick={false}
            >
              <Avatar
                size="lg"
                borderRadius="0%"
                name="SlateJS"
                bg="transparent"
                src="/slate.jpg"
              />
            </Tooltip>
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"}>
            <Tooltip
              hasArrow
              offset={[0, 8]}
              label="supabase"
              placement="bottom"
              openDelay={345}
              closeOnClick={false}
            >
              <Avatar
                size="lg"
                name="supabase"
                bg="transparent"
                src="/supabase.png"
              />
            </Tooltip>
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"}>
            <Tooltip
              hasArrow
              offset={[0, 8]}
              label="Chakra-ui"
              placement="bottom"
              openDelay={345}
              closeOnClick={false}
            >
              <Avatar
                size="lg"
                name="chakraui"
                bg="transparent"
                src="/chakraui.svg"
              />
            </Tooltip>
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"}>
            <Tooltip
              hasArrow
              offset={[0, 8]}
              label="Vercel"
              placement="bottom"
              openDelay={345}
              closeOnClick={false}
            >
              <Avatar
                size="lg"
                name="Vercel"
                bg="transparent"
                borderRadius="0%"
                src={
                  colorMode === "light"
                    ? "/vercel-icon-dark.png"
                    : "/vercel-icon-light.png"
                }
              />
            </Tooltip>
          </Flex>
        </Slider>
      </Box>
    </>
  );
};
