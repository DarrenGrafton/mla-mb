import { GrTextWrap as icon } from "react-icons/gr";

export default {
  name: "section",
  title: "Section",
  type: "object",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "details",
      title: "details",
      type: "blockContent",
    },
    {
      name: "image",
      type: "mainImage",
      title: "small image",
      description: "optional 200x200",
    },
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "details" },
  },
};
