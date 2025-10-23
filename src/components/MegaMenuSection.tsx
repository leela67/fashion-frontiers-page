interface MegaMenuSectionProps {
  title: string;
  items: Array<{
    label: string;
    href: string;
  }>;
  showViewAll?: boolean;
  viewAllHref?: string;
}

const MegaMenuSection = ({
  title,
  items,
  showViewAll = true,
  viewAllHref = "#",
}: MegaMenuSectionProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-darker-grotesque text-xs font-bold tracking-widest uppercase text-foreground">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-darker-grotesque text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      {showViewAll && (
        <a
          href={viewAllHref}
          className="font-darker-grotesque text-xs font-bold tracking-widest uppercase text-primary hover:text-primary/80 transition-colors duration-300 mt-2"
        >
          VIEW ALL →
        </a>
      )}
    </div>
  );
};

export default MegaMenuSection;

