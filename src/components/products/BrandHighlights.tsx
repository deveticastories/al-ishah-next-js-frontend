import Container from "@/components/common/Container";
import { BoxIcon, ChatIcon, DocumentIcon } from "@/components/icons/Icons";
import type { BrandCatalogue, HighlightIcon } from "@/utils/ProductsData";

const HIGHLIGHT_ICONS: Record<HighlightIcon, { Icon: typeof BoxIcon; className: string }> = {
  box: { Icon: BoxIcon, className: "h-[50px] w-[50px]" },
  document: { Icon: DocumentIcon, className: "h-[38px] w-[50px]" },
  chat: { Icon: ChatIcon, className: "h-[44px] w-[50px]" },
};

type BrandHighlightsProps = {
  highlights: BrandCatalogue["highlights"];
};

export default function BrandHighlights({ highlights }: BrandHighlightsProps) {
  return (
    <section className="pt-16 lg:pt-[113px]">
      <Container className="grid gap-[23px] md:grid-cols-3">
        {highlights.map(({ title, description, icon }) => {
          const { Icon, className } = HIGHLIGHT_ICONS[icon];
          return (
            <div key={title} className="flex min-h-[132px] items-center gap-7 bg-highlight-bg px-9 py-6">
              <Icon className={`shrink-0 text-primary ${className}`} />
              <div>
                <h3 className="font-heading text-title font-medium tracking-[-0.03em] text-dark">{title}</h3>
                <p className="mt-1.5 max-w-[260px] text-body leading-6 text-muted-text">{description}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
