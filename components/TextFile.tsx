import { promises as fs } from "fs";

interface Props {
  filename: string;
}

export default async function TextFile({ filename }: Props) {
  const file = await fs.readFile(process.cwd() + filename, "utf8");
  return <>{file}</>;
}
