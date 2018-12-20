import React, { Component } from 'react';
import './App.css';
import { Paper, Typography, TextField, Button, Badge } from '@material-ui/core'
import { List, ListItem, ListItemText, ListItemSecondaryAction, Chip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Delete } from '@material-ui/icons'

const styles = {
 root: {
  margin: 20,
  padding: 20,
  maxWidth: 800,
  display: 'flex',
  justifyContent: 'center',
  background: '#bdbdbd'

 },
 delete: {
  marginRight: 15
 },
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
      label="Add an exercise..."
      value={title}
      onChange={this.handleChange}
      margin='normal'
      />
      <Badge
      className={classes.delete}
       color='primary'
       badgeContent={this.state.exercises.length}
      />
      <Button
      type="submit"
      color="#bdbdbd"
      variant="raised"
      >
       Commit to it.
      </Button>   
      
      <List>
       {exercises.map(({id, title}) => <ListItem key={id}>
        
        <ListItemText primary={title}/>
        <ListItemSecondaryAction>
         <Chip
          color="primary"
          onClick={() => this.handleDelete(id)}
          icon={<Delete/>}
          label='delete'
         >
         Delete
         </Chip>
      
        </ListItemSecondaryAction>
       </ListItem>)}
      </List>
      </form>
     </Paper>
    );
  }
})

