import { TiSortNumerically as icon } from "react-icons/ti"

export default {
  name: "ThanksOrder",
  title: "Thanks Order",
  type: "document",
  icon,
  fields: [
    {
      name: "ThanksOrder",
      title: "Thanks Order",
      type: "array",
      of: [{ type: "thanks" }],
    },
  ],
}
