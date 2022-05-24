import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Avatar, Tooltip, useColorMode } from "@chakra-ui/react";

export const SkillsBar = () => {
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
      <Box
        width={{ base: "300px", md: "650px", lg: "900px", xl: "1100px" }}
        transform={{
          base: "translateX(10px)",
          md: "translateX(60px)",
          lg: "translateX(80px)",
          xl: "translateX(80px)",
        }}
      >
        <Slider {...settings}>
          <Tooltip
            hasArrow
            offset={[0, 8]}
            label="React"
            placement="bottom"
            openDelay={345}
            closeOnClick={false}
          >
            <Avatar size="lg" name="react" bg="transparent" src="/react.png" />
          </Tooltip>

          <Tooltip
            hasArrow
            offset={[0, 8]}
            label="CSS"
            placement="bottom"
            openDelay={345}
            closeOnClick={false}
          >
            <Avatar size="lg" name="CSS" bg="transparent" src="/css.png" />
          </Tooltip>

          <Tooltip
            hasArrow
            offset={[0, 8]}
            label="Rust"
            placement="bottom"
            openDelay={345}
            closeOnClick={false}
          >
            <Avatar
              size="lg"
              name="Rust"
              bg="transparent"
              src="/rustIcon.png"
            />
          </Tooltip>

          <Tooltip
            hasArrow
            offset={[0, 8]}
            label="Tauri.Studio"
            placement="bottom"
            openDelay={345}
            closeOnClick={false}
          >
            <Avatar
              size="lg"
              name="Tauri.Studio"
              bg="transparent"
              src="/tauriIcon.png"
            />
          </Tooltip>

          <Tooltip
            hasArrow
            offset={[0, 8]}
            label="Netlify"
            placement="bottom"
            openDelay={345}
            closeOnClick={false}
          >
            <Avatar
              size="lg"
              name="Netlify"
              bg="transparent"
              src="/netlifyIcon.png"
            />
          </Tooltip>

          <Tooltip
            hasArrow
            offset={[0, 8]}
            label="GraphQL"
            placement="bottom"
            openDelay={345}
            closeOnClick={false}
          >
            <Avatar
              size="lg"
              name="graphql"
              bg="transparent"
              src="/graphqlIcon.png"
            />
          </Tooltip>

          <Tooltip
            hasArrow
            offset={[0, 8]}
            label="REST"
            placement="bottom"
            openDelay={345}
            closeOnClick={false}
          >
            <Avatar
              size="lg"
              name="REST"
              bg="transparent"
              borderRadius="none"
              src="/restIcon.png"
            />
          </Tooltip>

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
              src="/JSicon.png"
            />
          </Tooltip>

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
              src="/slate.png"
            />
          </Tooltip>

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

          <Tooltip
            hasArrow
            offset={[0, 8]}
            label="NodeJs"
            placement="bottom"
            openDelay={345}
            closeOnClick={false}
          >
            <Avatar
              size="lg"
              name="NodeJs"
              bg="transparent"
              src="/nodeJs.png"
            />
          </Tooltip>

          <Tooltip
            hasArrow
            offset={[0, 8]}
            label="Git"
            placement="bottom"
            openDelay={345}
            closeOnClick={false}
          >
            <Avatar size="lg" name="Git" bg="transparent" src="/Git.png" />
          </Tooltip>

          <Tooltip
            hasArrow
            offset={[0, 8]}
            label="HTML5"
            placement="bottom"
            openDelay={345}
            closeOnClick={false}
          >
            <Avatar
              size="md"
              name="HTML5"
              bg="transparent"
              borderRadius="0%"
              src="/Html.png"
            />
          </Tooltip>

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
        </Slider>
      </Box>
    </>
  );
};
