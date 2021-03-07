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
                  buildHookId: "6035d33be5a5d8699406da01",
                  title: "Preview Staging",
                  name: "jolly-curie-b15386",
                  apiId: "1a25ed20-c203-4ce8-92c5-9a5937a27f64",
                },
                {
                  buildHookId: "6035d1e973a70768bbcea77b",
                  title: "Production",
                  name: "jolly-curie-b15386",
                  apiId: "1a25ed20-c203-4ce8-92c5-9a5937a27f64",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/DarrenGrafton/Cactus-Wiki",
            category: "Code",
          },
          {
            title: "Production",
            value: "https://jolly-curie-b15386.netlify.app/",
            category: "apps",
          },
          {
            title: "Staging",
            value: "https://staging--jolly-curie-b15386.netlify.app/",
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
};
