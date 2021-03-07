export default {
  widgets: [
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              title: "Website deploys",
              description:
                "After making changes, you can deploy them to preview, or deploy to the production site.  Note that the status badge only tracks production deploys.  The link to see the staging deploy is found in project info below",
              sites: [
                {
                  buildHookId: "TBD",
                  title: "Preview Staging",
                  name: "",
                  apiId: "TBD",
                },
                {
                  buildHookId: "TBD",
                  title: "Production",
                  name: "TBD",
                  apiId: "TBD",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/DarrenGrafton/my-rep-mb",
            category: "Code",
          },
          {
            title: "Production",
            value: "TBD",
            category: "apps",
          },
          {
            title: "Staging",
            value: "TBD",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent Articles",
        order: "_createdAt desc",
        types: ["article"],
      },
      layout: { width: "medium" },
    },
  ],
}
