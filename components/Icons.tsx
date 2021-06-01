
import { CurrencyEuroIcon, ShieldCheckIcon, AcademicCapIcon, MailIcon, UsersIcon, ScaleIcon, PaperAirplaneIcon } from '@heroicons/react/outline'

type Props = {
  icon: "CurrencyEuroIcon" | "ShieldCheckIcon" | "AcademicCapIcon" | "MailIcon" | "UsersIcon" | "ScaleIcon" | "PaperAirplaneIcon"
  className?: string
  ariaHidden: boolean
}

const Icons = ({ icon, className, ariaHidden }: Props) => {
  switch (icon) {
    case "AcademicCapIcon":
      return <AcademicCapIcon aria-hidden={ariaHidden && ariaHidden} className={className && className} />;
    case "CurrencyEuroIcon":
      return <CurrencyEuroIcon aria-hidden={ariaHidden && ariaHidden} className={className && className} />;
    case "ShieldCheckIcon":
      return <ShieldCheckIcon aria-hidden={ariaHidden && ariaHidden} className={className && className} />;
    case "MailIcon":
      return <MailIcon aria-hidden={ariaHidden && ariaHidden} className={className && className} />;
    case "ScaleIcon":
      return <ScaleIcon aria-hidden={ariaHidden && ariaHidden} className={className && className} />;
    case "PaperAirplaneIcon":
      return <PaperAirplaneIcon aria-hidden={ariaHidden && ariaHidden} className={className && className} />;
    case "UsersIcon":
      return <UsersIcon aria-hidden={ariaHidden && ariaHidden} className={className && className} />;

  }
}

export default Icons
