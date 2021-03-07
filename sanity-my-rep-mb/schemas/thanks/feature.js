import { GrTextWrap as icon } from "react-icons/gr";

export default {
  name: "feature",
  title: "Feature",
  type: "object",
  icon,
  fields: [
    {
      name: "title",
      title: "username",
      type: "string",
    },
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: ["Sanity", "Firebase", "Hosting", "Shopify", "Sharp"],
        layout: "dropdown", // <-- defaults to 'dropdown'
      },
    },

    {
      name: "details",
      title: "details",
      type: "blockContent",
    },
  ],
  preview: {
    select: { title: "type", subtitle: "details" },
  },
};
