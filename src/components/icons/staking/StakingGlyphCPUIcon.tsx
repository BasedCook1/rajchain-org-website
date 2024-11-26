import { createIcon } from "@chakra-ui/react"

// TODO: migrate with StakingHierarchy

export const StakingGlyphCPUIcon = createIcon({
  displayName: "StakingGlyphCPUIcon",
  viewBox: "0 0 50 50",
  defaultProps: {
    width: "50px",
    height: "50px",
  },
  d: "M34.1319 2.24247C34.0429 2.04376 33.9934 1.82343 33.9934 1.59151C33.9934 0.712544 34.7041 0 35.5807 0C36.4573 0 37.168 0.712544 37.168 1.59151C37.168 2.47048 36.4573 3.18302 35.5807 3.18302C35.3247 3.18302 35.0829 3.12227 34.8688 3.01437L30.6001 7.29453V12.2789H35.4906C36.6691 12.2789 37.6244 13.2342 37.6244 14.4127V19.113H42.5711L46.9627 14.7095C46.8737 14.5108 46.8242 14.2904 46.8242 14.0584C46.8242 13.1794 47.5349 12.4668 48.4115 12.4668C49.2881 12.4668 49.9987 13.1794 49.9987 14.0584C49.9987 14.9373 49.2881 15.6499 48.4115 15.6499C48.1556 15.6499 47.9139 15.5892 47.6998 15.4813L43.0138 20.1799H37.6244V24.283H45.1915C45.4058 23.6584 45.997 23.2095 46.6927 23.2095C47.5694 23.2095 48.28 23.9221 48.28 24.8011C48.28 25.68 47.5694 26.3926 46.6927 26.3926C46.0085 26.3926 45.4254 25.9584 45.2024 25.3499H37.6244V29.453H43.0653L47.7138 34.1139C47.9244 34.0104 48.1611 33.9523 48.4115 33.9523C49.2881 33.9523 49.9987 34.6648 49.9987 35.5438C49.9987 36.4228 49.2881 37.1353 48.4115 37.1353C47.5349 37.1353 46.8242 36.4228 46.8242 35.5438C46.8242 35.3062 46.8762 35.0807 46.9693 34.8782L42.6226 30.5199H37.6244V35.4621C37.6244 36.6406 36.6691 37.5959 35.4906 37.5959H30.6001V42.6871L34.8811 46.9795C35.0921 46.8754 35.3296 46.817 35.5807 46.817C36.4573 46.817 37.168 47.5295 37.168 48.4085C37.168 49.2875 36.4573 50 35.5807 50C34.7041 50 33.9934 49.2875 33.9934 48.4085C33.9934 48.1716 34.045 47.9469 34.1376 47.7449L29.5332 43.1281V37.5959H25.4514V45.6026C26.0382 45.8362 26.4531 46.4107 26.4531 47.0823C26.4531 47.9613 25.7425 48.6738 24.8659 48.6738C23.9892 48.6738 23.2786 47.9613 23.2786 47.0823C23.2786 46.3716 23.7432 45.7697 24.3845 45.5653V37.5959H20.291V43.1804L15.7307 47.753C15.8209 47.9529 15.8711 48.1748 15.8711 48.4085C15.8711 49.2875 15.1605 50 14.2838 50C13.4072 50 12.6966 49.2875 12.6966 48.4085C12.6966 47.5295 13.4072 46.817 14.2838 46.817C14.5381 46.817 14.7783 46.8769 14.9914 46.9835L19.2241 42.7394V37.5959H14.5088C13.3303 37.5959 12.375 36.6406 12.375 35.4621V30.5199H7.32738L3.01377 34.8451C3.11673 35.056 3.17453 35.2931 3.17453 35.5438C3.17453 36.4228 2.46389 37.1353 1.58726 37.1353C0.710643 37.1353 0 36.4228 0 35.5438C0 34.6648 0.710643 33.9523 1.58726 33.9523C1.82459 33.9523 2.04974 34.0045 2.25193 34.0981L6.88462 29.453H12.375V25.3499H4.40184C4.17886 25.9584 3.59573 26.3926 2.91148 26.3926C2.03486 26.3926 1.32422 25.68 1.32422 24.8011C1.32422 23.9221 2.03486 23.2095 2.91148 23.2095C3.60722 23.2095 4.19841 23.6584 4.41276 24.283H12.375V20.1799H6.83309L2.28589 15.6205C2.07508 15.7243 1.83796 15.7826 1.58726 15.7826C0.710643 15.7826 0 15.07 0 14.191C0 13.3121 0.710643 12.5995 1.58726 12.5995C2.46389 12.5995 3.17453 13.3121 3.17453 14.191C3.17453 14.4283 3.12275 14.6534 3.02991 14.8557L7.27585 19.113H12.375V14.4127C12.375 13.2342 13.3303 12.2789 14.5088 12.2789H19.2241V7.34683L14.933 3.04424C14.7349 3.13342 14.5151 3.18302 14.2838 3.18302C13.4072 3.18302 12.6966 2.47048 12.6966 1.59151C12.6966 0.712544 13.4072 0 14.2838 0C15.1605 0 15.8711 0.712544 15.8711 1.59151C15.8711 1.84817 15.8105 2.09063 15.7029 2.30531L20.291 6.90575V12.2789H24.3845V4.43488C23.7432 4.23048 23.2786 3.62858 23.2786 2.91786C23.2786 2.03889 23.9892 1.32634 24.8659 1.32634C25.7425 1.32634 26.4531 2.03889 26.4531 2.91786C26.4531 3.58947 26.0382 4.16391 25.4514 4.39757V12.2789H29.5332V6.85345L34.1319 2.24247Z",
})