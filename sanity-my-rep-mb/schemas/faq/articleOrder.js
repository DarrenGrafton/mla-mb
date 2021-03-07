import { TiSortNumerically as icon } from "react-icons/ti";

export default {
  name: "front-page",
  title: "Front Page Articles",
  type: "document",
  icon,
  fields: [
    {
      name: "articles",
      title: "Articles Order",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "article" }],
        },
      ],
    },
  ],
};
