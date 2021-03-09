//This sanity stores info about cactus apps research and projects

//plugins:
//https://www.sanity.io/plugins/sanity-plugin-media
//

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// We import object and document schemas
import blockContent from "./components/blockContent"

import mainImage from "./components/mainImage"
import consImage from "./Images/consImage"
import repImage from "./Images/repImage"
import backgroundImage from "./Images/backgroundImage"

import Faq from "./faq/Faq"
import FaqOrder from "./faq/FaqOrder"

import thanks from "./thanks/thanks"
import thanksOrder from "./thanks/thanksOrder"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "internal",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.

    mainImage,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    backgroundImage,
    consImage,
    repImage,
    Faq,
    FaqOrder,
    thanks,
    thanksOrder,
    blockContent,
  ]),
})
