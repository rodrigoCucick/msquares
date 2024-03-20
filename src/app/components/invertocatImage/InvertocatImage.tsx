import Image from "next/image";

interface InvertocatImageInterface {
  size: number;
}

export default function InvertocatImage({size}: InvertocatImageInterface): JSX.Element {
  return (
    <Image
      src={"/img/github-mark-white.png"}
      alt={"GitHub Invertocat"}
      className="hover:opacity-50 duration-500"
      width={size}
      height={size} />
  );
}
