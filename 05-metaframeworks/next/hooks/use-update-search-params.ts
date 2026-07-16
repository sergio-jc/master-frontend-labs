"use client"

import { useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"

export function useUpdateSearchParams() {
  const router = useRouter()
  const pathname = usePathname()

  const updateSearchParams = useCallback(
    (updates: Record<string, string | number | null>) => {
      const params = new URLSearchParams()

      for (const [key, value] of Object.entries(updates)) {
        if (value === null || value === "") {
          params.delete(key)
        } else {
          params.set(key, String(value))
        }
      }

      router.push(`${pathname}?${params.toString()}`)
    },
    [pathname, router],
  )

  return updateSearchParams
}
