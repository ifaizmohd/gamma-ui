import styled, { css } from "styled-components";
import type { ViewProps } from "./View.types";
import { responsiveCss } from "./View.util";

export const StyledView = styled.div<ViewProps>`
  ${({ display }) => display && responsiveCss("display", display)}
  ${({ flexDirection }) => responsiveCss("flex-direction", flexDirection)}
  ${({ justifyContent }) => responsiveCss("justify-content", justifyContent)}
  ${({ alignItems }) => responsiveCss("align-items", alignItems)}
  ${({ gap }) => responsiveCss("gap", `--unit-${gap}`)}

  ${({ gridTemplateColumns }) =>
    responsiveCss("grid-template-columns", gridTemplateColumns)}
  ${({ gridTemplateRows }) =>
    responsiveCss("grid-template-rows", gridTemplateRows)}
  ${({ gridAutoFlow }) => responsiveCss("grid-auto-flow", gridAutoFlow)}

  ${({ p }) => responsiveCss("padding", `--unit-${p}`)}
  ${({ px }) => css`
    ${responsiveCss("padding-left", `--unit-${px}`)}
    ${responsiveCss("padding-right", `--unit-${px}`)}
  `}
  ${({ py }) => css`
    ${responsiveCss("padding-top", `--unit-${py}`)}
    ${responsiveCss("padding-bottom", `--unit-${py}`)}
  `}
  ${({ pt }) => responsiveCss("padding-top", `--unit-${pt}`)}
  ${({ pb }) => responsiveCss("padding-bottom", `--unit-${pb}`)}
  ${({ pl }) => responsiveCss("padding-left", `--unit-${pl}`)}
  ${({ pr }) => responsiveCss("padding-right", `--unit-${pr}`)}

  ${({ m }) => responsiveCss("margin", `--unit-${m}`)}
  ${({ mx }) => css`
    ${responsiveCss("margin-left", `--unit-${mx}`)}
    ${responsiveCss("margin-right", `--unit-${mx}`)}
  `}
  ${({ my }) => css`
    ${responsiveCss("margin-top", `--unit-${my}`)}
    ${responsiveCss("margin-bottom", `--unit-${my}`)}
  `}
  ${({ mt }) => responsiveCss("margin-top", `--unit-${mt}`)}
  ${({ mb }) => responsiveCss("margin-bottom", `--unit-${mb}`)}
  ${({ ml }) => responsiveCss("margin-left", `--unit-${ml}`)}
  ${({ mr }) => responsiveCss("margin-right", `--unit-${mr}`)}

  ${({ w }) => responsiveCss("width", `--unit-${w}`)}
  ${({ h }) => responsiveCss("height", `--unit-${h}`)}

  ${({ bg }) => responsiveCss("background", `--unit-${bg}`)}
  ${({ radius }) => responsiveCss("border-radius", `--unit-${radius}`)}
`;
