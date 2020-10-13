import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import Page from '../../../components/Page'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  productCard: {
    height: '100%',
  },
}))

const FAQs = () => {
  const classes = useStyles()

  return (
    <Page className={classes.root} title="FAQs">
      <Container maxWidth={false}>List of FAQS</Container>
    </Page>
  )
}

export default FAQs
