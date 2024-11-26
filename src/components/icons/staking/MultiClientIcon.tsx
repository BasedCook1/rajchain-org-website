import { commonIconDefaultAttrs } from "@/components/icons/utils"

import { createIconBase } from "../icon-base"

export const MultiClientIcon = createIconBase({
  displayName: "MultiClientIcon",
  viewBox: "0 0 72 72",
  className: "size-[1em]",
  ...commonIconDefaultAttrs,
  children: (
    <>
      <path d="M11.2839 21.1111C11.2839 14.9746 16.2303 10 22.3319 10C28.4336 10 33.3799 14.9746 33.3799 21.1111C33.3799 27.2476 28.4336 32.2222 22.3319 32.2222C16.2303 32.2222 11.2839 27.2476 11.2839 21.1111ZM22.3319 28.0556C18.5184 28.0556 15.4269 24.9464 15.4269 21.1111C15.4269 17.2758 18.5184 14.1667 22.3319 14.1667C26.1455 14.1667 29.2369 17.2758 29.2369 21.1111C29.2369 24.9464 26.1455 28.0556 22.3319 28.0556Z" />

      <path d="M38.904 48.8889C38.904 42.7524 43.8503 37.7778 49.952 37.7778C56.0536 37.7778 61 42.7524 61 48.8889V57.2222C61 58.7563 59.7634 60 58.238 60H41.666C40.1406 60 38.904 58.7563 38.904 57.2222V48.8889ZM56.857 48.8889V55.8333H43.047V48.8889C43.047 45.0536 46.1384 41.9444 49.952 41.9444C53.7655 41.9444 56.857 45.0536 56.857 48.8889Z" />

      <path d="M41.666 10C40.1406 10 38.904 11.2437 38.904 12.7778V29.4444C38.904 30.9786 40.1406 32.2222 41.666 32.2222H58.238C59.7634 32.2222 61 30.9786 61 29.4444V12.7778C61 11.2437 59.7634 10 58.238 10H41.666ZM43.047 28.0556H56.857V14.1667H43.047V28.0556Z" />

      <path d="M19.942 39.1667C21.0051 37.3148 23.6629 37.3148 24.726 39.1667L34.2938 55.8333C35.3569 57.6852 34.0281 60 31.9019 60H12.7661C10.6399 60 9.31106 57.6852 10.3742 55.8333L19.942 39.1667ZM15.1581 55.8333L22.334 43.3333L29.5099 55.8333H15.1581Z" />
    </>
  ),
})