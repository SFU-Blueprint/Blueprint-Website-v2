import ExpandableContentCards from "../components/shared/ExpandableContentCards";
import PageContainer from "../components/layout/PageContainer";
import HeroCrosspoint from "../components/shared/HeroCrosspoint";

const FUNDING_CARDS = [
  {
    title: "Workshops & Learning",
    body: "So every Blueprint member leaves sessions more skilled than when they arrived.",
    image: "/images/sponsor/workshops-learning.jpg",
    imageAlt: "Blueprint members attending a workshop.",
    imageClassName: "h-full w-full object-cover object-bottom",
    accentColor: "#D2A6FB",
  },
  {
    title: "Project Maintenance",
    body: "Servers and hosting that make sure the software we build stays live for the NPOs who depend on it.",
    image: "/images/sponsor/project-maintenance.jpg",
    imageAlt: "A Blueprint project repository dashboard.",
    imageClassName: "h-full w-full object-cover object-left-top",
    accentColor: "#F49F00",
  },
  {
    title: "Equipping our Team",
    body: "Tools and software that help our developers, designers, and PMs do their best work.",
    image: "/images/sponsor/equipping-team.jpg",
    imageAlt: "Blueprint team members working together.",
    imageClassName: "h-full w-full object-cover object-[center_28%]",
    accentColor: "#A5C6FF",
  },
] as const;

const SPONSORSHIP_TIERS = [
  {
    title: "supporter",
    color: "bp-orange",
    amount: "$500",
    desc1: "Sponsor feature post on Instagram",
    desc2: "Named acknowledgement at Blueprint events",
    desc3: "End of year impact report",
  },
  {
    title: "partner",
    color: "bp-accent-medium-blue",
    amount: "$1000",
    desc1: "Everything in Supporter",
    desc2:
      "One recruiting info session with members (tech talk/info session/workshop)",
    desc3: "Full member resume database access",
  },
  {
    title: "lead sponsor",
    color: "bp-accent-purple",
    amount: "$1500",
    desc1: "Everything in Partner",
    desc2: "Named event sponsorship (your brand on the event itself)",
    desc3: "Dedicated point of contact on exec team",
  },
] as const;

function ReachOutButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <a
      href="mailto:sfublueprint@gmail.com"
      className={`
        inline-flex
        h-[52px]
        w-[200px]
        items-center
        justify-center
        rounded-[5px]
        bg-bp-blue
        px-[44px]
        font-poppins
        text-[14px]
        font-bold
        leading-none
        text-bp-white
        transition-colors
        duration-150
        hover:bg-bp-hover-blue
        active:bg-bp-pressed-blue

        md:h-[60px]
        md:text-[16px]

        ${className}
      `}
    >
      REACH OUT
    </a>
  );
}

/* ================================================================ */
/* SPONSOR TESTIMONIAL                                               */
/* ================================================================ */

function SponsorTestimonialCard() {
  return (
    <div
      className="
        relative
        mt-[9px]
        h-[405px]
        w-full
        max-w-[504px]
        shrink-0
        translate-x-[5px]

        max-lg:mx-auto
        max-lg:mt-0
        max-lg:translate-x-0

        max-[560px]:h-auto
        max-[560px]:w-full
        max-[560px]:max-w-[380px]
        max-[560px]:pb-[38px]
      "
    >
      {/* BACK / ROTATED CARD */}
      <div
        className="
          absolute
          left-0
          top-[41px]
          h-[365px]
          w-[474px]
          max-w-[calc(100%-20px)]
          rotate-[-4.95deg]
          rounded-[5px]
          bg-bp-accent-very-light-blue

          max-[560px]:left-1/2
          max-[560px]:top-[34px]
          max-[560px]:h-[calc(100%-38px)]
          max-[560px]:w-[calc(100%-28px)]
          max-[560px]:-translate-x-1/2
        "
        aria-hidden="true"
      />

      {/* FRONT / WHITE CARD */}
      <figure
        className="
          relative
          z-10
          ml-[10px]
          mt-[10px]
          flex
          h-[365px]
          w-[474px]
          max-w-[calc(100%-20px)]
          flex-col
          rounded-[5px]
          bg-white
          px-[43px]
          pb-[45px]
          pt-[44px]
          text-bp-black

          max-[560px]:mx-auto
          max-[560px]:mt-0
          max-[560px]:h-auto
          max-[560px]:min-h-[330px]
          max-[560px]:w-[calc(100%-28px)]
          max-[560px]:max-w-none
          max-[560px]:px-7
          max-[560px]:py-8
        "
      >
        <blockquote
          className="
            font-poppins
            text-body-l-reg

            max-[560px]:text-mobile-body-l-reg
          "
        >
          “[Blueprint’s] commitment to excellence and innovation is truly
          commendable, and we are grateful for the opportunity to collaborate
          with such talented individuals”
        </blockquote>

        <img
          src="/images/sponsor/mosaic-logo.svg"
          alt="Mosaic BC logo"
          className="mt-6 h-[31px] w-[46px] object-contain"
        />

        <figcaption className="mt-3 font-poppins text-body-s-reg uppercase">
          KUMAR LAL, MOSAIC BC
        </figcaption>
      </figure>
    </div>
  );
}

/* ================================================================ */
/* SPONSORSHIP TIER CARD                                             */
/* ================================================================ */

function SponsorshipCalloutCard({
  title,
  color,
  amount,
  desc1,
  desc2,
  desc3,
}: {
  title: string;
  color: string;
  amount: string;
  desc1: string;
  desc2: string;
  desc3: string;
}) {
  return (
    <div
      className="
        flex
        h-[460px]
        w-[355px]
        max-w-full
        shrink-0
        flex-col
        justify-start
        rounded-[5px]
        bg-bp-darkest-grey
        px-[48px]
        pb-[60px]
        pt-[36px]
        font-poppins
        text-bp-white

        max-[1300px]:w-full
        max-[1300px]:shrink

        max-md:h-auto
        max-md:px-6
        max-md:py-8
      "
    >
      {/* TIER TITLE */}
      <div className="flex flex-col gap-[24px] max-md:gap-4">
        <div
          className="
            inline-flex
            w-fit
            items-center
            justify-center
            gap-3
            rounded-[5px]
            bg-bp-black
            px-[15px]
            py-[10px]

            max-md:gap-2
            max-md:px-3
            max-md:py-2
          "
        >
          <span
            className={`size-4 rounded-[3px] bg-${color} max-md:size-3`}
            aria-hidden
          />

          <span
            className="
              font-poppins
              text-body-s-reg
              font-normal
              uppercase
              text-bp-white

              max-md:text-[10px]
            "
          >
            {title}
          </span>
        </div>

        <h2
          className="
            text-heading-m-reg
            text-bp-white

            max-md:text-[36px]
            max-md:tracking-[-0.72px]
          "
        >
          {amount}
        </h2>
      </div>

      {/* DESCRIPTIONS */}
      <div className="flex w-full flex-col pt-[48px] max-md:pt-6">
        <p className="text-body-m-reg max-md:text-mobile-body-m-reg">
          {desc1}
        </p>

        <div className="my-[12px] h-px w-full bg-white/30" />

        <p className="text-body-m-reg max-md:text-mobile-body-m-reg">
          {desc2}
        </p>

        <div className="my-[12px] h-px w-full bg-white/30" />

        <p className="text-body-m-reg max-md:text-mobile-body-m-reg">
          {desc3}
        </p>
      </div>
    </div>
  );
}

/* ================================================================ */
/* PAGE                                                             */
/* ================================================================ */

export default function SponsorUsPage() {
  return (
    <div
      className="
        relative
        overflow-x-clip
        bg-bp-lightest-grey
        font-poppins
        text-bp-black
      "
    >
      <HeroCrosspoint videoSrc="/videos/crosspoints/dotted-path-1.webm" />

      <PageContainer className="relative z-10">
        {/* ======================================================== */}
        {/* HERO                                                     */}
        {/* ======================================================== */}

        <section
          className="
            relative
            z-10
            w-full
            pt-main-desktop-top

            max-md:pt-main-mobile-top
          "
        >
          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[1440px]
              items-start
              justify-between
              gap-[80px]
              pb-[116px]

              max-lg:flex-col
              max-lg:items-center
              max-lg:gap-10

              max-md:pb-20
            "
          >
            {/* LEFT HERO CONTENT */}
            <div
              className="
                relative
                z-10
                flex
                max-w-[602px]
                flex-col
                items-start

                max-lg:w-full
                max-lg:max-w-none
                max-lg:self-start
              "
            >
              <h1
                className="
                  font-poppins
                  text-[72px]
                  font-normal
                  leading-none
                  tracking-[-1.44px]
                  text-bp-black

                  max-md:text-[46px]
                  max-md:tracking-[-0.92px]
                "
              >
                <span className="font-bold">sponsor </span>
                <span className="font-normal">us</span>
              </h1>

              <p
                className="
                  mt-6
                  font-poppins
                  text-heading-xs-reg
                  text-bp-black

                  max-md:mt-3
                  max-md:text-mobile-heading-xs-reg
                "
              >
                whether through sponsorships, recruiting events, or mentorship
                opportunities, partnering with us means investing in the next
                generation of leaders working on projects for social good.
              </p>

              <ReachOutButton className="mt-12 max-md:mt-8" />
            </div>

            {/* TESTIMONIAL */}
            <div
              className="
                shrink-0

                max-lg:flex
                max-lg:w-full
                max-lg:justify-center
              "
            >
              <SponsorTestimonialCard />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FUNDING                                                  */}
        {/* ======================================================== */}

        <section
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1440px]
            pb-[116px]

            max-md:pb-20
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-[1090px]
              flex-col
              items-center
              gap-12
            "
          >
            <h2
              className="
                text-center
                font-poppins
                text-heading-s-reg
                text-black

                max-md:text-mobile-heading-s-reg
              "
            >
              what will we{" "}
              <span className="font-semibold">use funds</span> for?
            </h2>

            <ExpandableContentCards cards={FUNDING_CARDS} />
          </div>
        </section>

        {/* ======================================================== */}
        {/* SPONSORSHIP TIERS                                        */}
        {/* ======================================================== */}

        <section
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1298px]
            flex-col
            gap-[72px]
            rounded-[20px]
            bg-bp-black
            px-[97px]
            py-[102px]

            max-lg:px-8

            max-md:mx-0
            max-md:max-w-none
            max-md:gap-10
            max-md:rounded-[12px]
            max-md:px-5
            max-md:py-12
          "
        >
          {/* TITLE */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-[6px]
              text-center
              font-poppins
              text-bp-white
            "
          >
            <h2 className="text-heading-s-reg max-md:text-mobile-heading-s-reg">
              sponsorship tiers
            </h2>

            <p className="text-body-s-reg font-normal max-md:text-mobile-body-s-reg">
              All sponsorships are a year-long commitment
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              flex
              w-full
              flex-row
              justify-center
              gap-[19px]

              max-[1300px]:flex-col
              max-[1300px]:items-stretch
            "
          >
            {SPONSORSHIP_TIERS.map((tier) => (
              <SponsorshipCalloutCard
                key={tier.title}
                {...tier}
              />
            ))}
          </div>

          {/* CTA */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              font-poppins
              text-bp-white
            "
          >
            <h2 className="text-heading-xs-reg max-md:text-mobile-heading-xs-reg">
              interested in partnering with blueprint at SFU?
            </h2>

            <p className="mt-[12px] text-body-m-reg max-md:text-mobile-body-m-reg">
              Send us a message at sfublueprint@gmail.com, or click the link
              below:
            </p>

            <ReachOutButton
              className="
                mt-12
                bg-bp-white
                !text-bp-black
                hover:!bg-bp-light-grey
                active:!bg-bp-grey

                max-md:mt-8
              "
            />
          </div>
        </section>
      </PageContainer>
    </div>
  );
}