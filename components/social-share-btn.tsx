"use client"

import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

export default function SocialShareButtons({ product }: { product: Product }) {
  const { toast } = useToast()
  const url = typeof window !== "undefined" ? window.location.href : ""

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(product.name)}&url=${encodeURIComponent(url)}`,
      "_blank",
    )
  }

  const shareOnLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
  }

  const copyLink = () => {
    navigator.clipboard.writeText(url)
    toast({
      title: "Link copied",
      description: "Product link has been copied to clipboard",
    })
  }

  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="icon" onClick={shareOnFacebook}>
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Share on Facebook</span>
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnTwitter}>
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Share on Twitter</span>
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnLinkedin}>
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Share on LinkedIn</span>
      </Button>
      <Button variant="outline" size="icon" onClick={copyLink}>
        <LinkIcon className="h-4 w-4" />
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  )
}
