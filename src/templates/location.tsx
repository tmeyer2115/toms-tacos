/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Pages system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import * as React from "react";
import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";

import PageLayout from "../components/PageLayout";
import { LexicalRichText } from "@yext/react-components";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "location-stream",
    // Defines the scope of entities that qualify for this stream.
    // You can use entityTypes, savedFilterIds, and/or entityIds
    filter: {
      entityTypes: ["location"],
    },
    // Specifies the exact data that each generated document will contain.
    // This data is passed in directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "services",
      "photoGallery"
    ],
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
    transform: {
      replaceOptionValuesWithDisplayNames: ["paymentOptions"],
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: To preview production URLs locally, you must return document.slug from this function
 * and ensure that each entity has the slug field pouplated.
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.locale}/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "viewport",
          content: "initial-scale=1, width=device-width",
        },
      }
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const {
    name,
    address,
    hours,
    mainPhone,
    services,
    description,
    siteDomain
  } = document;

  return (
    <>
      <PageLayout>
        <LexicalRichText serializedAST={JSON.stringify(AST)} />
      </PageLayout>
    </>
  );
};

const AST = {"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"const","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Location","type":"code-highlight","version":1,"highlightType":"literal-property"},{"detail":0,"format":0,"mode":"normal","style":"","text":":","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" Template","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"<","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":"TemplateRenderProps","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":">","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"(","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"{","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  relativePrefixToRoot","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":",","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  document","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":",","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"}","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":")","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=>","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"{","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"return","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"(","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"    ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"<","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":">","type":"code-highlight","version":1,"highlightType":"operator"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"      ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"<","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":"PageLayout","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":">","type":"code-highlight","version":1,"highlightType":"operator"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"        ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"<","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":"LexicalRichText serializedAST","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":"\"\"","type":"code-highlight","version":1,"highlightType":"string"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"/","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":">","type":"code-highlight","version":1,"highlightType":"operator"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"      ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"<","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":"/","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":"PageLayout","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":">","type":"code-highlight","version":1,"highlightType":"operator"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"    ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"<","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":"/","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":">","type":"code-highlight","version":1,"highlightType":"operator"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":")","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"}","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1}],"direction":"ltr","format":"","indent":0,"type":"code","version":1,"language":"javascript"}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}
export default Location;
