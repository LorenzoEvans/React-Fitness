import React, { Component } from 'react';
import './App.css';
import { Paper, Typography, TextField, Button } from '@material-ui/core'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Delete } from '@material-ui/icons'

const styles = {
 root: {
  margin: 20,
  padding: 20,
  maxWidth: 400
 }
}

export default withStyles(styles)(
 class App extends Component {
 state = {
  exercises: [
   {id: 1, title: 'Bench Press'},
   {id: 2, title: 'Deadlift'},
   {id: 3, title: 'Squats'}
  ],
  title: ''
 }

 handleChange = (event) => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }

 handleAdd = (event) => {
  event.preventDefault()
  if (this.state.title) {
  this.setState(({exercises, title}) => (
   {
    exercises: [...exercises,
    {
     title,
     id: Date.now()
    }
    ],
    title: ''
   }
  ))
 }
 }

 handleDelete = (id) => {
  this.setState(({exercises}) => ({
   exercises: exercises.filter(ex => ex.id !== id)
  }))
 }
  render() {
   const { title, exercises } = this.state
   const { classes } = this.props
    return (
     <Paper className={classes.root}>
      <Typography
       variant='display1'
       align='center'
       gutterBottom
      >
       Exercises
      </Typography>
      <form onSubmit={this.handleAdd}>
      <TextField
      name="title"
      label="Add an exercises"
      value={title}
      onChange={this.handleChange}
      margin='normal'
      />
      <Button
      type="submit"
      color="primary"
      variant="raised"
      >
       Commit to it.
      </Button>
      <List>
       {exercises.map(({id, title}) => <ListItem key={id}>
        
        <ListItemText primary={title}/>
        <ListItemSecondaryAction>
         <IconButton
          color="primary"
          onClick={() => this.handleDelete(id)}
         >
          <Delete/>
         </IconButton>
        </ListItemSecondaryAction>
       </ListItem>)}
      </List>
      </form>
     </Paper>
    );
  }
})

