import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useCookies } from "react-cookie"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const IndexPage = () => {
  const [, , removeCookie] = useCookies([])

  useEffect(() => {
    //clear the last constituency cookie, so that from the main page we always search by location
    removeCookie("last-constituency", { path: "/" })
  }, [removeCookie])
  return (
    <Layout pageTitle="Manitoban MLAs">
      <Seo title="Manitoban MLA information" />

      <StaticImage
        width={1800}
        quality={50}
        src="../images/mahesh-gupta.jpg"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Manitoba Legislature"
        placeholder="tracedSVG"
        className="w-full h-full bg-cover bg-no-repeat bg-right inset-0"
        style={{ position: "absolute", zIndex: -1 }}
      />
      <div style={{ minHeight: "85vh" }}>
        <div className="p-4 lg:p-6 bg-transparent grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="card shadow-lg bg-base-300 bg-opacity-70">
            <div className="card-body">
              <h2 className="text-3xl xl:text-4xl text-primary font-serif">
                Find your Rep
              </h2>
              <p className="text-primary text-sm sm:text-base xl:text-xl my-3 xl:my-6">
                See Bill's they've sponsored, links to transcripts of thier work
                in the Legislative Assembly of Manitoba, and more!
              </p>
              <div className="flex justify-between">
                <p className="text-xl text-primary ">Find based on location</p>
                <Link to="/Map/" className="btn btn-primary w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Map
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row justify-between mt-5">
                <p className="text-xl text-primary">
                  List of Constituencies (Ridings)
                </p>
                <Link
                  to="/Constituencies/"
                  className="btn btn-primary w-max self-end"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  Constituencies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
