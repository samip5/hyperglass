import * as React from "react";
import { Box, useColorMode } from "@chakra-ui/core";

// export const TableCell = styled("div")`
//     ${space};
//     ${color};
//     ${justifyContent};
//     flex: 1;
//     display: flex;
//     min-width: 150px;
//     align-items: center;
//     border-bottom-width: 1px;
//     overflow: hidden;
//     text-overflow: ellipsis;
// `;

const cellBorder = {
  dark: { borderLeft: "1px", borderLeftColor: "whiteAlpha.100" },
  light: { borderLeft: "1px", borderLeftColor: "blackAlpha.100" }
};

const TableCell = ({
  bordersVertical = [false, 0, 0],
  align,
  cell,
  children,
  ...props
}) => {
  const { colorMode } = useColorMode();
  const [doVerticalBorders, index] = bordersVertical;
  let borderProps = {};
  if (doVerticalBorders && index !== 0) {
    borderProps = cellBorder[colorMode];
  }
  return (
    <Box
      as="td"
      p={4}
      m={0}
      w="1%"
      whiteSpace="nowrap"
      textAlign={align}
      {...borderProps}
      {...props}
    >
      {children}
    </Box>
  );
};

TableCell.displayName = "TableCell";

export default TableCell;
