import { RiTreasureMapLine as icon } from "react-icons/ri"

export default {
  name: "consImage",
  title: "Constituency Image",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      type: "mainImage",
      title: "Map Image",
      description: "a map of the constituency",
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
}
