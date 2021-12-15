export const calculateIcon = (x: number, y: number): string => {
  let name = "";
  if (Math.abs(x) > Math.abs(y)) {
    if (x > 0) {
      name = "arrow-circle-right";
    } else {
      name = "arrow-circle-left";
    }
  } else if (y > 0) {
    name = "person-delete";
  } else {
    name = "heart";
  }
  return name;
};
