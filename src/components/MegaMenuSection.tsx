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
    <div className="flex flex-col gap-4">
      <h3 className="subheading-sm font-semibold tracking-wide text-foreground">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="body-text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
            >
              - {item.label}
            </a>
          </li>
        ))}
      </ul>
      {showViewAll && (
        <a
          href={viewAllHref}
          className="cta-text font-bold tracking-widest text-primary hover:text-primary/80 transition-smooth mt-2"
        >
          VIEW ALL →
        </a>
      )}
    </div>
  );
};

export default MegaMenuSection;

