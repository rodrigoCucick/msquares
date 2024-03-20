import InvertocatImage from "../invertocatImage/InvertocatImage";

export default function Footer(): JSX.Element {
  return (
    <footer className="grid justify-items-center">
      <hr className="w-[400px] border-top border-white border-dotted mb-1"></hr>
      <p className="text-white mb-1">Rodrigo M. Cucick, 2024.</p>
      <a href="https://github.com/rodrigoCucick/msquares" title="GitHub repository link.">
        <InvertocatImage size={32} />
      </a>
    </footer>
  );
}
