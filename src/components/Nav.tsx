import Button from "./Button";

export default function Nav({
  links = [],
  active = "",
}: {
  links?: string[];
  active?: string;
}) {
  return (
    <nav>
      {links.map((link) => (
        <Button key={link} active={link === active}>
          {link}
        </Button>
      ))}
    </nav>
  );
}
