import { BsCardText as icon } from "react-icons/bs";

export default {
  name: "site",
  title: "Site",
  type: "document",
  icon,
  initialValue: {
    status: "New",
  },
  fields: [
    {
      name: "title",
      title: "Name",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "reference",
      to: [{ type: "client" }],
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: ["New", "in Progress", "Live", "On Hold", "Lost", "Self Hosted"],
        layout: "dropdown", // <-- defaults to 'dropdown'
      },
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "feature" }],
    },
    {
      name: "overview",
      title: "Overview",
      type: "blockContent",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "image",
      type: "mainImage",
      title: "header image",
      description: "an article header image",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "overview", media: "image" },
  },
};
