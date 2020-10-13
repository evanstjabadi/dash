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
}))

const ServiceListView = () => {
  const classes = useStyles()

  return (
    <Page className={classes.root} title="Services">
      <Container maxWidth={false}>
        Something about our services here neh?
      </Container>
    </Page>
  )
}

export default ServiceListView
