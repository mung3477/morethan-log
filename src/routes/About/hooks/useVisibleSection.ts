import { throttle } from "lodash"
import { useEffect, useState } from "react"
import type { TSection } from "../constant/CV"

export function useVisibleSection(sections: Array<TSection>) {
  const [visibleSectionId, setVisibleSectionId] = useState<string | undefined>()

  const isSectionVisible = (elementId: string) => {
    const section = document.getElementById(elementId)

    if (section) {
      const sectionPosition = section.getBoundingClientRect()

      const viewPort = {
        height: window.innerHeight,
        width: window.innerWidth,
      }

      return (
        sectionPosition.top >= 0 &&
        sectionPosition.left >= 0 &&
        sectionPosition.bottom <= viewPort.height &&
        sectionPosition.right <= viewPort.width
      )
    }

    return false
  }

  const checkVisibility = () => {
    let decided = false

    sections.forEach(({ id }) => {
      if (!decided && isSectionVisible(id)) {
        setVisibleSectionId(id)
        decided = true
      }
    })
  }

  useEffect(() => {
    if (sections) {
      window.addEventListener("scroll", throttle(checkVisibility, 300))
    }

    checkVisibility()

    return () =>
      window.removeEventListener("scroll", throttle(checkVisibility, 300))
  }, [])

  return visibleSectionId
}
