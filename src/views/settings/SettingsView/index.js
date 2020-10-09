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

const SettingsView = () => {
  const classes = useStyles()

  return (
    <Page className={classes.root} title="Settings">
      <Container maxWidth="lg">Contact details</Container>
    </Page>
  )
}

export default SettingsView
