import { useContinent } from "../../../contexts/ContinentContext";

import { PageBanner } from "../../PageBanner";

export function ContinentBanner() {
  const {
    bannerImageUrl
  } = useContinent()

  return (
    <PageBanner
      h={["9.375rem", null, "31.25rem"]}
      backgroundImageUrl={bannerImageUrl}
      backgroundPosition={["center", null, "center bottom"]}
    />
  )
}