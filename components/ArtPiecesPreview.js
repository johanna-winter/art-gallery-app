import Image from "next/image";
import Link from "next/link";

export default function Preview({ artist, title, image, slug }) {
  return (
    <>
      <h4>{title}</h4>
      <p>{artist}</p>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={300} height={300}></Image>
      </Link>
    </>
  );
}
