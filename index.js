import { Fragment } from 'react'
import { Head, Appear } from '@mdx-deck/components'
import customTheme from 'styles/theme'
import FullScreenVideo from 'components/FullScreenVideo'
import Layout from 'components/Layout'
import { t } from "utils/translation"
import Translate from 'components/Translate'
import { slides as one } from 'slides/00-Hello/index.mdx'
import { slides as two } from 'slides/01-WhoAmI/index.mdx'
import { slides as three } from 'slides/02-Introduction/index.mdx'
import { slides as four } from 'slides/03-StylingWar/index.mdx'
import { slides as five } from 'slides/04-PeopleAgainstTools/index.mdx'
import { slides as six } from 'slides/05-StylingPeace/index.mdx'
import { slides as seven } from 'slides/06-MyExperience/index.mdx'
import { slides as eight } from 'slides/07-Conclusion/index.mdx'

export const themes = [customTheme]
export const slides = [
  ...one, ...two, ...three ,...four ,...five ,...six ,...seven ,...eight // nine -- it's the 10 Crack Commandments - ONE !
]
