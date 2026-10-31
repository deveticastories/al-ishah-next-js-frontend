import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import {
  GlobeFilledIcon,
  HandshakeIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@/components/icons/Icons";
import { COMPANY_VALUES, VISION_MISSION, type ValueIcon } from "@/utils/AboutData";

const VALUE_ICONS: Record<ValueIcon, typeof ShieldCheckIcon> = {
  shield: ShieldCheckIcon,
  handshake: HandshakeIcon,
  globe: GlobeFilledIcon,
  user: UserIcon,
};

export default function ValuesSection() {
  return (
    <section className="mt-24 bg-values-bg pb-24 pt-24 lg:mt-[159px] lg:pb-[145px] lg:pt-[127px]">
      <Container>
        <SectionHeading className="text-center leading-[1.12] text-black lg:leading-[1.12]">
          The Values That Move
          <br />
          Us Forward
        </SectionHeading>

        {/* Dark values bar overlaps the top of the white vision/mission card */}
        <div className="relative z-10 mx-auto mt-14 grid max-w-[818px] grid-cols-2 gap-y-8 rounded bg-dark px-6 py-10 sm:flex sm:justify-center sm:gap-[58px] lg:mt-[106px] lg:h-[193px] lg:items-center lg:py-0">
          {COMPANY_VALUES.map(({ label, icon }) => {
            const Icon = VALUE_ICONS[icon];
            return (
              <div key={label} className="flex flex-col items-center gap-2.5 text-center">
                <Icon className={`text-primary ${icon === "handshake" ? "h-6 w-11" : "size-8"}`} />
                <span className="text-body text-white">{label}</span>
              </div>
            );
          })}
        </div>

        <div className="mx-auto -mt-[96px] grid max-w-[1169px] gap-12 rounded bg-white px-6 pb-16 pt-[150px] md:grid-cols-[1fr_1px_1fr] md:gap-0 lg:grid-cols-[456px_1px_1fr] lg:pl-[116px] lg:pr-[80px] lg:pb-[100px] lg:pt-[168px]">
          {VISION_MISSION.map((item, index) => (
            <div key={item.title} className="contents">
              {index > 0 && <div className="hidden bg-divider md:mt-[58px] md:block md:h-[169px]" aria-hidden="true" />}
              <div className={index > 0 ? "md:pl-[160px]" : "md:pr-10"}>
                <h3 className="font-heading text-[40px] font-medium leading-none tracking-[-0.04em] text-black lg:text-h2">
                  {item.title}
                </h3>
                <p className="mt-[52px] max-w-[372px] text-body leading-6 text-dark">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
