
const FUNDING_CARDS = [
  {
    title: "Workshops & Learning",
    description:
      "So every Blueprint member leaves sessions more skilled than when they arrived.",
    imageSrc: "/images/sponsor/workshops-learning.jpg",
    imageAlt: "Blueprint members attending a workshop.",
    imageClassName: "object-bottom",
  },
  {
    title: "Project Maintenance",
    description:
      "Servers and hosting that make sure the software we build stays live for the NPOs who depend on it.",
    imageSrc: "/images/sponsor/project-maintenance.jpg",
    imageAlt: "A Blueprint project repository dashboard.",
    imageClassName: "object-left-top",
  },
  {
    title: "Equipping our Team",
    description:
      "Tools and software that help our developers, designers, and PMs do their best work.",
    imageSrc: "/images/sponsor/equipping-team.jpg",
    imageAlt: "Blueprint team members working together.",
    imageClassName: "object-[center_28%]",
  },
] as const;

const SPONSORSHIP_TIERS = [
  {
    title: 'supporter',
    color: 'bp-orange',
    amount: '$500',
    desc1: 'Sponsor feature post on Instagram',
    desc2: 'Named acknowledgement at Blueprint events',
    desc3: 'End of year impact report',
  },
  {
    title: 'partner',
    color: 'bp-accent-medium-blue',
    amount: '$1000',
    desc1: 'Everything in Supporter',
    desc2: 'One recruiting info session with members (tech talk/info session/workshop)',
    desc3: 'Full member resume database access',
  },
  {
    title: 'lead sponsor',
    color: 'bp-accent-purple',
    amount: '$1500',
    desc1: 'Everything in Partner',
    desc2: 'Named event sponsorship (your brand on the event itself)',
    desc3: 'Dedicated point of contact on exec team',
  }
] as const;

function ReachOutButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="mailto:sfublueprint@gmail.com"
      className={`inline-flex h-[52px] w-[200px] items-center justify-center rounded-[5px] 
        bg-bp-white px-[44px] font-poppins text-[14px] font-semibold leading-none text-bp-black
        transition-colors duration-150 hover:bg-bp-lightest-grey active:bg-bp-light-grey
        md:h-[60px] md:text-[16px] ${className}`}
    >
      REACH OUT
    </a>
  );
}

function TestimonialCard() {
  return (
    <div className="relative mt-[9px] h-[405px] w-full max-w-[504px] shrink-0 translate-x-[5px] max-lg:mt-0 max-lg:translate-x-0 max-[560px]:h-auto max-[560px]:pb-7">
      <div
        className="absolute left-0 top-[41px] h-[365px] w-[474px] max-w-[calc(100%-20px)] rotate-[-4.95deg] rounded-[5px] bg-bp-accent-very-light-blue max-[560px]:top-8 max-[560px]:h-full"
        aria-hidden="true"
      />
      <figure className="relative z-10 ml-[10px] mt-[10px] flex h-[365px] w-[474px] max-w-[calc(100%-20px)] flex-col rounded-[5px] bg-white px-[43px] pb-[45px] pt-[44px] text-bp-black max-[560px]:h-auto max-[560px]:min-h-[330px] max-[560px]:px-7 max-[560px]:py-8">
        <blockquote className="font-poppins text-body-l-reg max-[560px]:text-mobile-body-l-reg">
          “[Blueprint’s] commitment to excellence and innovation is truly commendable, and we are grateful for the opportunity to collaborate with such talented individuals”
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

function SponsorshipCalloutCard(
  {
    // Tier Title
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
  },
) {
  return (
  <div className='flex flex-col justify-start px-[48px] pb-[60px] pt-[36px] text-bp-white 
    bg-bp-darkest-grey rounded-[5px] w-[355px] h-[460px] font-poppins'>
    {/* Tier Title */}
    <div className='flex flex-col gap-[24px]'>
      <div className='inline-flex justify-center items-center gap-3 rounded-[5px] bg-bp-black px-[15px] py-[10px] 
      w-fit max-md:gap-2 max-md:px-3 max-md:py-2'>
      <span className={`size-4 rounded-[3px] bg-${color} max-md:size-3 max-md:bg-bp-blue`} aria-hidden />
      <span className="font-poppins uppercase text-body-s-reg text-bp-white font-normal 
      max-md:text-[10px]">
                {title}
      </span>
      </div>

      {/* Amount */}
      <h2 className='text-heading-m-reg text-bp-white'>
        {amount}
      </h2>
    </div>
    {/* Descriptions */}
    <div className='flex flex-col pt-[48px]'>
      <p className='text-body-m-reg'>
        {desc1}
      </p >
      <div className="w-full h-px bg-white/30 my-[12px]" />
      <p className='text-body-m-reg'>
        {desc2}
      </p>
      <div className="w-full h-px bg-white/30 my-[12px]" />
      <p className='text-body-m-reg'>
        {desc3}
      </p>
    </div>
  </div>
  )
}

function FundingCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imageClassName,
}: (typeof FUNDING_CARDS)[number]) {
  return (
    <li className="relative h-[470px] w-[351px] max-w-full shrink-0 overflow-hidden rounded-[10px] bg-white px-9 pb-[19px] pt-9 max-[390px]:h-auto max-[390px]:px-5 max-[390px]:pb-5">
      <div className="flex max-w-[282px] flex-col gap-[10px]">
        <h3 className="font-caveat text-[32px] leading-[1.3] tracking-[-0.64px] text-black max-[390px]:text-[28px]">
          {title}
        </h3>
        <p className="font-poppins text-body-m-reg text-black">{description}</p>
      </div>
      <div className="absolute bottom-[19px] left-5 h-[252px] w-[312px] max-w-[calc(100%-40px)] overflow-hidden rounded-[10px] max-[390px]:relative max-[390px]:bottom-auto max-[390px]:left-auto max-[390px]:mt-8 max-[390px]:h-[220px] max-[390px]:w-full max-[390px]:max-w-none">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`h-full w-full object-cover ${imageClassName}`}
        />
      </div>
    </li>
  );
}



export default function SponsorUsPage() {
  return (
    <div className="w-full overflow-x-hidden bg-bp-lightest-grey font-poppins text-bp-black">
      <section className="relative bg-bp-lightest-grey bg-[url('/images/non-profit/desktop_partner_crosspoint.svg')] bg-no-repeat min-[1622.1px]:bg-[calc((50vw+800px)-1689px)_-321px] max-[1622px]:bg-[calc(100%+585px)_-321px] max-[1279px]:bg-[calc(100%+689px)_-369px] max-md:bg-[url('/images/non-profit/mobile_partner_crosspoint.svg')] max-md:bg-[calc(100%+130px)_-132px]">
        <div className="mx-auto flex w-full max-w-[1440px] items-start justify-between gap-[80px] px-6 pb-[138px] pt-[190px] md:px-10 desktop:px-[114px] max-lg:flex-col max-lg:gap-10 max-lg:pb-24 max-lg:pt-[142px] max-md:pb-16 max-md:pt-28">
          <div className="flex max-w-[602px] flex-col items-start">
            <h1 className="font-poppins text-[72px] leading-none tracking-[-1.44px] text-bp-black max-md:text-mobile-heading-xl-reg max-md:tracking-[-1.12px]">
              <span className="font-bold">sponsor </span>
              <span className="font-normal">us</span>
            </h1>
            <p className="mt-6 font-poppins text-heading-xs-reg text-bp-black max-md:mt-3 max-md:text-mobile-heading-xs-reg">
              whether through sponsorships, recruiting events, or mentorship opportunities, partnering with us means investing in the next generation of leaders working on projects for social good.
            </p>
            <ReachOutButton className="mt-12 max-md:mt-8" />
          </div>

          <TestimonialCard />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-6 pb-[116px] md:px-10 desktop:px-[114px] max-md:pb-20">
        <div className="mx-auto flex max-w-[1090px] flex-col items-center gap-12">
          <h2 className="text-center font-poppins text-heading-s-reg text-black max-md:text-mobile-heading-s-reg">
            what will we <span className="font-semibold">use funds</span> for?
          </h2>
          <ul className="flex w-full justify-center gap-[23px] max-[1160px]:flex-col max-[1160px]:items-center">
            {FUNDING_CARDS.map((card) => (
              <FundingCard key={card.title} {...card} />
            ))}
          </ul>
        </div>
      </section>

      <section className="flex flex-col bg-bp-black w-full max-w-[1298px] h-[1072px] mx-auto py-[102px] px-[97px] rounded-[20px] gap-[72px]">
        {/* Title */}
        <div className='text-bp-white font-poppins flex flex-col gap-[6px] items-center justify-center'>
            <h2 className='text-heading-s-reg'>
              sponsorship tiers
            </h2>
            <p className='text-body-s-reg font-normal'>
              All sponsorships are a year-long commitment
            </p>
        </div>
        {/* Callout Cards */}
        <div className='flex flex-row gap-[19px]'>
          {SPONSORSHIP_TIERS.map((tier) => (
            <SponsorshipCalloutCard key={tier.title} {...tier} />
          ))}
        </div>

        {/* CTA */}
        <div className='flex flex-col justify-center items-center font-poppins text-bp-white'>
          <h2 className='text-heading-xs-reg'>
            interested in partnering with blueprint at SFU?
          </h2>
          <p className='text-body-m-reg mt-[12px]'>
            Send us a message at sfublueprint@gmail.com, or click the link below:
          </p>

          <ReachOutButton className="mt-12 max-md:mt-8 " />
        </div>
      </section>
    </div>
  );
}
