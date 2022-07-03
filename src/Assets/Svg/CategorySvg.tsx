import * as React from "react"
import Svg, { Path } from "react-native-svg"

type Props = {
    color: string
    width: number | string
    height: number | string
}

function CategorySvg(data: Props) {
    const {color,width,height,...props} = data
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 3.571c-.717 0-1.724.172-2.41.31a.202.202 0 00-.16.17c-.137.879-.342 2.381-.342 3.449s.205 2.57.343 3.449c.014.09.079.154.16.17.685.138 1.692.31 2.409.31.717 0 1.724-.172 2.41-.31a.202.202 0 00.16-.17c.137-.879.342-2.381.342-3.449s-.205-2.57-.343-3.449a.202.202 0 00-.16-.17c-.685-.138-1.692-.31-2.409-.31zm-2.726-1.23C4.462 2.202 5.607 2 6.5 2s2.038.202 2.726.34a1.78 1.78 0 011.413 1.471c.137.877.361 2.487.361 3.689s-.224 2.812-.361 3.689a1.78 1.78 0 01-1.413 1.47C8.538 12.798 7.393 13 6.5 13s-2.038-.202-2.726-.34a1.78 1.78 0 01-1.413-1.471C2.224 10.312 2 8.702 2 7.5s.224-2.812.361-3.689a1.78 1.78 0 011.413-1.47zM17.5 20.429c-.717 0-1.724-.172-2.41-.31a.202.202 0 01-.16-.17c-.136-.879-.342-2.381-.342-3.449s.206-2.57.343-3.449a.202.202 0 01.16-.17c.685-.138 1.692-.31 2.409-.31.717 0 1.724.172 2.41.31.08.016.145.08.16.17.136.879.342 2.381.342 3.449s-.206 2.57-.343 3.449a.202.202 0 01-.16.17c-.685.138-1.692.31-2.409.31zm-2.726 1.23c.688.139 1.833.341 2.726.341s2.038-.202 2.726-.34a1.78 1.78 0 001.413-1.471c.137-.877.361-2.487.361-3.689s-.224-2.812-.361-3.689a1.78 1.78 0 00-1.413-1.47C19.538 11.202 18.393 11 17.5 11s-2.038.202-2.726.34a1.78 1.78 0 00-1.413 1.471c-.137.877-.361 2.487-.361 3.689s.224 2.812.361 3.689c.114.73.67 1.32 1.413 1.47zM6.5 16.615c-.761 0-1.838.182-2.517.314a.168.168 0 00-.135.118c-.13.469-.26 1.052-.26 1.453 0 .4.13.984.26 1.453.014.053.06.103.135.118.68.132 1.756.314 2.517.314.761 0 1.838-.182 2.517-.314a.168.168 0 00.135-.118c.13-.469.26-1.052.26-1.453 0-.4-.13-.984-.26-1.453a.168.168 0 00-.135-.118c-.68-.132-1.756-.314-2.517-.314zm-2.817-1.272C4.362 15.21 5.572 15 6.5 15c.928 0 2.138.21 2.817.343.643.126 1.18.602 1.364 1.265.132.478.319 1.249.319 1.892 0 .643-.187 1.414-.32 1.892a1.766 1.766 0 01-1.363 1.265C8.638 21.79 7.428 22 6.5 22c-.928 0-2.138-.21-2.817-.343a1.766 1.766 0 01-1.364-1.265C2.187 19.914 2 19.143 2 18.5c0-.643.187-1.414.32-1.892a1.766 1.766 0 011.363-1.265zM17.5 7.385c-.761 0-1.838-.181-2.517-.314a.168.168 0 01-.135-.118c-.13-.469-.26-1.052-.26-1.453 0-.4.13-.984.26-1.453a.168.168 0 01.135-.118c.68-.133 1.756-.314 2.517-.314.761 0 1.838.181 2.517.314.076.015.12.065.135.118.13.469.26 1.052.26 1.453 0 .4-.13.984-.26 1.453a.168.168 0 01-.135.118c-.68.133-1.756.314-2.517.314zm-2.817 1.272C15.362 8.79 16.572 9 17.5 9c.928 0 2.138-.21 2.817-.343a1.766 1.766 0 001.364-1.265C21.813 6.914 22 6.143 22 5.5c0-.643-.187-1.414-.32-1.892a1.766 1.766 0 00-1.363-1.265C19.638 2.21 18.428 2 17.5 2c-.928 0-2.138.21-2.817.343a1.766 1.766 0 00-1.364 1.265C13.187 4.086 13 4.857 13 5.5c0 .643.187 1.414.32 1.892a1.766 1.766 0 001.363 1.265z"
        fill={color}
      />
    </Svg>
  )
}

export default CategorySvg
