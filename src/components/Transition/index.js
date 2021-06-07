import React from 'react'
import Fade from '@material-ui/core/Fade'
import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'
import Slide from '@material-ui/core/Slide'
import Zoom from '@material-ui/core/Zoom'



const transitions = {
  fade: Fade,
  grow: Grow,
  slide: Slide,
  zoom: Zoom
}

function buildTransitionFromType(type, transitions) {
  const resultTransition = transitions[type];
  return resultTransition ? resultTransition : (children) => children
}

function Transition({ children }) {
  const CurrentTransition = buildTransitionFromType(type, transitions)
  return <CurrentTransition>{children}</CurrentTransition>;
}

export default Transition
