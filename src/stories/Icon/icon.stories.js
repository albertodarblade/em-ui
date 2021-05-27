import React from 'react'
import Icon, { SIZE } from 'components/Icon'
import StyleProvider from 'Providers/StyleProvider'

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {
    size: {
      options: Object.values(SIZE),
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => (
  <StyleProvider>
    <Icon {...args} />
  </StyleProvider>
)

export const Preview = Template.bind({})
Preview.args = {
  children: 'add'
}
