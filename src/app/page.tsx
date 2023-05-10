import { Typography } from "../components/typography/Typography";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Typography variant="h1">Hello Main Page</Typography>
      <Image src='/panda.svg' alt="panda" width={400} height={400} />
    </div>
  )
}
