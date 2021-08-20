import * as React from 'react'

function SvgProject(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={332.531}
      height={309.043}
      {...props}
    >
      <defs>
        <filter
          id='project_svg__a'
          x={39.531}
          y={99.676}
          width={269}
          height={126}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result='b' />
          <feFlood floodOpacity={0.161} />
          <feComposite operator='in' in2='b' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='project_svg__c'
          x={259.531}
          y={79.676}
          width={58}
          height={58}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result='d' />
          <feFlood floodOpacity={0.161} />
          <feComposite operator='in' in2='d' />
          <feComposite in='SourceGraphic' />
        </filter>
        <style>{'.project_svg__d{fill:#dbdbdb}'}</style>
      </defs>
      <path
        d='M172.531 16.004c133.065-54.696 160 41.306 160 129.672s-43.778 182.47-160 160-206.675-31.431-160-160 26.935-74.977 160-129.672z'
        fill='#d7ebd8'
      />
      <g filter='url(#project_svg__a)'>
        <rect
          width={251}
          height={108}
          rx={8}
          transform='translate(48.53 105.68)'
          fill='#fff'
        />
      </g>
      <rect
        width={204}
        height={13}
        rx={6.5}
        transform='translate(71.531 177.676)'
        fill='#d38a8a'
      />
      <rect
        className='project_svg__d'
        width={124}
        height={7}
        rx={3.5}
        transform='translate(71.531 131.676)'
      />
      <rect
        className='project_svg__d'
        width={161}
        height={7}
        rx={3.5}
        transform='translate(71.531 154.676)'
      />
      <g filter='url(#project_svg__c)'>
        <circle
          cx={20}
          cy={20}
          r={20}
          transform='translate(268.53 85.68)'
          fill='#e27a7a'
        />
      </g>
    </svg>
  )
}

export default SvgProject

