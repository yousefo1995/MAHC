import { Stack, styled } from "@mui/system";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton)(
  ({ bg, hoverBg, iconHover }) => ({
    padding: "0",
    borderRadius: "12px",
    width: "40px",
    height: "60px",
    border: "1px solid #ffffffb3",

    backgroundColor: bg,
    "&:hover": {
      backgroundColor: hoverBg,
      "& .MuiSvgIcon-root": {
        color: iconHover,
      },
    },
    "& .MuiSvgIcon-root": {
      fontSize: "28px",
      border: "none",
      color: "#2F2F2F",
    },
  })
);

export function Arrow({
  onClick,
  children,
  buttonHeight,
  ButtonsDisplay,
  currentSlide,
  isLeft = true,
  slideCount,
  slidesToShow,
}) {
  return (
    <Stack
      onClick={onClick}
      display={ButtonsDisplay}
      sx={{
        position: "absolute",
        bottom: "35%",
        left: { xs: isLeft && "8px", sm: isLeft && "-40px" },
        right: { xs: !isLeft && "8px", sm: !isLeft && "-42px" },
        zIndex: 1,
      }}
    >
      <StyledIconButton
        borderR="4px"
        showBorder={true}
        width="48px"
        height="64px"
        bg="rgb(18, 18, 18, 0.45)"
        hoverBg="rgb(18, 18, 18, 0.45)"
        iconColor="#fff"
        iconHover="#327C14"
        iconSize="30px"
      >
        {children}
      </StyledIconButton>
    </Stack>
  );
}
