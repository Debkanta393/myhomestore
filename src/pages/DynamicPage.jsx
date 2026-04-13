import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPageData } from "../features/page/page";
// import { blocks } from "../utils/blocks";
// import { HeroSection, AboutSection, Heading, Paragraph, SectionsGrid, CallToAction, CardSection, ImageSection, Spacer,
//      Card, Image, Button, FeatureGrid, Testimonials, Accordion, Stats, Divider, Newsletter, Footer } from "../utils/blocks";
     import HeroSection from "../components/blocks/HeroSection";
     import AboutSection from "../components/blocks/AboutSection";

const EMPTY_DATA = { content: [], root: { props: {} } };
// const componentMap = {
//   HeroSection: blocks.components.HeroSection,
//   AboutSection: blocks.components.AboutSection,
//   Heading: blocks.components.Heading,
//   Paragraph: blocks.components.Paragraph,
//   SectionsGrid: blocks.components.SectionsGrid,
//   CallToAction: blocks.components.CallToAction,
//   CardSection: blocks.components.CardSection,
//   ImageSection: blocks.components.ImageSection,
// };

const componentMap={
    HeroSection,
    AboutSection
}

function DynamicPage() {
  const [pageData, setPageData] = useState([]);
  const [customCss, setCustomCss] = useState("");
  const [theme, setTheme] = useState({
    primaryColor: "#4f46e5",
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    baseBg: "#ffffff",
    baseText: "#111827",
  });
  const dispath = useDispatch();
  const { slug } = useParams();
  console.log(slug);

  const parseMaybeJson = (raw) => {
    if (typeof raw === "string") {
      try {
        return JSON.parse(raw);
      } catch {
        return null;
      }
    }
    return raw;
  };

  const normalizeLoadedPayload = (json) => {
    console.log(json);
    const payload = json?.data || json?.page || json || {};
    const rawContent =
      payload?.content ??
      json?.content ??
      json?.data?.content ??
      json?.page?.content;
    const parsedContent = parseMaybeJson(rawContent) || EMPTY_DATA;
    console.log(parsedContent);
    const embeddedMeta = parsedContent?.root?.props?.__cmsMeta || {};

    return {
      data: {
        root: parsedContent?.root || {},
        content: parsedContent?.content || [],
      },
      meta: {
        title: payload?.title || json?.title || embeddedMeta?.title || "",
        status: (
          payload?.status ||
          json?.status ||
          embeddedMeta?.status ||
          "draft"
        ).toLowerCase(),
        customCss:
          payload?.customCss ||
          json?.customCss ||
          embeddedMeta?.customCss ||
          "",
        theme: payload?.theme || json?.theme || embeddedMeta?.theme || null,
      },
    };
  };

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await dispath(fetchPageData(slug));
        console.log(res);
        const loaded = normalizeLoadedPayload(res.payload);

        const freshData = loaded.data || EMPTY_DATA;
        console.log(freshData);
        setPageData(freshData);
        setCustomCss(loaded.meta.customCss || "");
        if (loaded.meta.theme) {
          setTheme((prev) => ({
            ...(prev || {}),
            ...(loaded.meta.theme || {}),
          }));
        }
      } catch (err) {
        const httpStatus = err?.response?.status;
        if (httpStatus === 404) {
          setPuckData(EMPTY_DATA);
          setCustomCss("");
          setTheme({
            primaryColor: "#4f46e5",
            fontFamily:
              "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
            baseBg: "#ffffff",
            baseText: "#111827",
          });
          return;
        }
        console.error("Load error:", err);
      }
    };
    fetchPage();
  }, []);

  console.log(pageData);
  return (
    <div>
      {pageData?.content?.map((block, index) => {
        const Component = componentMap[block.type];

        if (!Component) {
          return <div key={index}>Unknown: {block.type}</div>;
        }

        return <Component key={index} {...block.props} />;
      })}
    </div>
  );
}

export default DynamicPage;
