"use client";
import Carousel from "@/components/Carousel";
import Text from "@/components/Text";
import TextFile from "@/components/TextFile";
import EmailForm from "@/components/EmailForm";
import DividerLine from "@/components/DividerLine";
import { Box, CircularProgress, useMediaQuery, useTheme } from "@mui/material";

import Timeline from "@/components/Timeline";
import stack from "./utils/stackIcons";
import RoundIcon from "@/components/RoundIcon";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMounted, setIsMounted] = useState(false);
  const t = useTranslations("home");
  const sectionsT = useTranslations("sections");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const educations = [
    {
      title: t("educations.computerScience.title"),
      subtitle: t("educations.computerScience.subtitle"),
      body: t("educations.computerScience.body"),
      imgPath: "/unpsjb.png",
      link: "https://www.unp.edu.ar/ingenieria/index.php/es/?view=article&id=381:licenciatura-en-informatica&catid=70:carreras-contenido",
    },
    {
      title: t("educations.analystProgrammer.title"),
      subtitle: t("educations.analystProgrammer.subtitle"),
      body: t("educations.analystProgrammer.body"),
      imgPath: "/unpsjb.png",
      link: "https://www.unp.edu.ar/ingenieria/index.php/es/?view=article&id=380:analista-programador-universitario&catid=70:carreras-contenido",
    },
    {
      title: t("educations.cs50Introduction.title"),
      subtitle: t("educations.cs50Introduction.subtitle"),
      body: t("educations.cs50Introduction.body"),
      imgPath: "/cs50.png",
      link: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
    },
    {
      title: t("educations.cs50Ai.title"),
      subtitle: t("educations.cs50Ai.subtitle"),
      body: t("educations.cs50Ai.body"),
      imgPath: "/cs50.png",
      link: "https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python",
    },
  ];

  const experiences = [
    {
      title: t("experiences.mic.title"),
      subtitle: t("experiences.mic.subtitle"),
      time: t("experiences.mic.time"),
      body: t("experiences.mic.body"),
      stack: [
        "NextJS",
        "NestJS",
        "Javascript",
        "Typescript",
        "PostgreSQL",
        "MinIO",
        "Git",
        "Scrum",
      ],
      imgPath: "/mic.png",
      link: "https://mapainteractivocultural.ar",
    },
    {
      title: t("experiences.cva.title"),
      subtitle: t("experiences.cva.subtitle"),
      time: t("experiences.cva.time"),
      body: t("experiences.cva.body"),
      stack: ["Flask", "Vue", "Python", "Javascript", "Mongodb", "Git"],
      imgPath: "/cva.png",
      link: "https://cvagaming.com.ar",
    },
    {
      title: t("experiences.poo.title"),
      subtitle: t("experiences.poo.subtitle"),
      time: t("experiences.poo.time"),
      body: t("experiences.poo.body"),
      stack: ["Java", "Git"],
      imgPath: "/unpsjb.png",
    },
    {
      title: t("experiences.entranceCourse.title"),
      subtitle: t("experiences.entranceCourse.subtitle"),
      time: t("experiences.entranceCourse.time"),
      body: t("experiences.entranceCourse.body"),
      stack: [],
      imgPath: "/unpsjb.png",
    },
  ];

  const descriptionSection = (
    <>
      {isMobile && (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "-10%",
            marginBottom: "-10%",
          }}
        >
          <img
            className="profile-img"
            alt="Profile picture"
            src="/profile.png"
          />
        </div>
      )}
      <div style={{ marginTop: "2%" }}>
        <Text variant="h2">{t("introduction.title")}</Text>
      </div>
      <Text variant="h6" justify={true}>
        <b style={{ fontSize: "1.6 rem" }}>{t("introduction.years")} </b>
        {t("introduction.body")}
      </Text>
    </>
  );

  const educationSection = (
    <>
      <div id="education" className="section">
        <Text variant="h2">{sectionsT("education")}</Text>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Carousel cards={educations} />
      </div>
    </>
  );

  const experienceSection = (
    <>
      <div id="experience" className="section">
        <Text variant="h2">{sectionsT("experience")}</Text>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Timeline items={experiences} />
      </div>
    </>
  );

  const contactSection = (
    <>
      <div id="contact">
        <Text variant="h2">{sectionsT("contact")}</Text>
        <EmailForm />
      </div>
    </>
  );

  const knowledge = [
    {
      icon: stack["nextjs"].icon,
      color: stack["nextjs"].color,
      tooltip: stack["nextjs"].tooltip,
    },
    {
      icon: stack["nestjs"].icon,
      color: stack["nestjs"].color,
      tooltip: stack["nestjs"].tooltip,
    },
    {
      icon: stack["java"].icon,
      color: stack["java"].color,
      tooltip: stack["java"].tooltip,
    },
    {
      icon: stack["html"].icon,
      color: stack["html"].color,
      tooltip: stack["html"].tooltip,
    },
    {
      icon: stack["css"].icon,
      color: stack["css"].color,
      tooltip: stack["css"].tooltip,
    },
    {
      icon: stack["git"].icon,
      color: stack["git"].color,
      tooltip: stack["git"].tooltip,
    },
    {
      icon: stack["scrum"].icon,
      color: stack["scrum"].color,
      tooltip: stack["scrum"].tooltip,
    },
    {
      icon: stack["postgresql"].icon,
      color: stack["postgresql"].color,
      tooltip: stack["postgresql"].tooltip,
    },
    {
      icon: stack["flask"].icon,
      color: stack["flask"].color,
      tooltip: stack["flask"].tooltip,
    },
    {
      icon: stack["spring"].icon,
      color: stack["spring"].color,
      tooltip: stack["spring"].tooltip,
    },
    {
      icon: stack["mongodb"].icon,
      color: stack["mongodb"].color,
      tooltip: stack["mongodb"].tooltip,
    },
    {
      icon: stack["minio"].icon,
      color: stack["minio"].color,
      tooltip: stack["minio"].tooltip,
    },
    {
      icon: stack["angular"].icon,
      color: stack["angular"].color,
      tooltip: stack["angular"].tooltip,
    },
    {
      icon: stack["react"].icon,
      color: stack["react"].color,
      tooltip: stack["react"].tooltip,
    },
    {
      icon: stack["vue"].icon,
      color: stack["vue"].color,
      tooltip: stack["vue"].tooltip,
    },
    {
      icon: stack["nodejs"].icon,
      color: stack["nodejs"].color,
      tooltip: stack["nodejs"].tooltip,
    },
    {
      icon: stack["javascript"].icon,
      color: stack["javascript"].color,
      tooltip: stack["javascript"].tooltip,
    },
    {
      icon: stack["typescript"].icon,
      color: stack["typescript"].color,
      tooltip: stack["typescript"].tooltip,
    },
    {
      icon: stack["python"].icon,
      color: stack["javascript"].color,
      tooltip: stack["javascript"].tooltip,
    },
  ];

  const knowledgeSection = (
    <>
      <div id="technologies">
        <Text variant="h2">{sectionsT("technologies")}</Text>
        <Box className="knowledge-container">
          {knowledge.map((item, index) => (
            <RoundIcon key={index} item={item} />
          ))}
        </Box>
      </div>
    </>
  );

  return (
    <main>
      <div style={{ margin: "3%" }}>
        {descriptionSection}

        <DividerLine />

        {experienceSection}

        <DividerLine />

        {educationSection}

        <DividerLine />

        {knowledgeSection}

        <DividerLine />

        {contactSection}
      </div>
    </main>
  );
}
