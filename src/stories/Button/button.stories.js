import React from 'react'
import Button, { COLORS, SIZE } from 'components/Button'
import StyleProvider from 'Providers/StyleProvider'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    isPrimaryAction: true,
    color: {
      options: Object.values(COLORS),
      control: { type: 'radio' }
    },
    size: {
      options: Object.values(SIZE),
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => (
  <StyleProvider>
    <Button {...args} />
  </StyleProvider>
)

export const Preview = Template.bind({})
Preview.args = {
  children: 'EXAMPLE'
}
