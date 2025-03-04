"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Key, useEffect, useState } from "react";
import { Timeline as MuiTimeline } from "@mui/lab";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Text from "./Text";
import colors from "@/app/utils/colors";
import Button from "./Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RoundIcon from "./RoundIcon";
import stack from "@/app/utils/stackIcons";
import { useTranslations } from "next-intl";

interface TimelineProps {
  items: any[];
}

export default function Timeline({ items }: TimelineProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isMounted, setIsMounted] = useState(false);

  const t = useTranslations("home");
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <MuiTimeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {items.map((item, itemIndex) => (
          <TimelineItem key={itemIndex}>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: colors["primary"] }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Text variant="h4">{item.title}</Text>
              <Text variant="h5">{item.subtitle}</Text>
              <img className="timeline-media" src={item.imgPath} />
              <div>
                <Text variant="h5">{item.time}</Text>
              </div>
              <Text variant="h6">{item.body}</Text>
              {item.link && (
                <Button onClick={() => window.open(item.link, "_blank")}>
                  {t("experiences.visit")} <KeyboardArrowRightIcon />
                </Button>
              )}
              <Box className="stack-container">
                {item.stack.map(
                  (stackItem: string, stackItemIndex: Key | null | undefined) =>
                    stack[stackItem.toLowerCase()] ? (
                      <RoundIcon
                        key={stackItemIndex}
                        item={stack[stackItem.toLowerCase()]}
                      />
                    ) : (
                      <div key={stackItemIndex}></div>
                    )
                )}
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MuiTimeline>
    </>
  );
}
