import React, { Component } from 'react';
import './App.css';
import { Paper, Typography, TextField, Button, Badge } from '@material-ui/core'
import { List, ListItem, ListItemText, ListItemSecondaryAction, Chip } from '@material-ui/core'
import { Divider, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Delete } from '@material-ui/icons'

const styles = {
 root: {
  margin: 20,
  padding: 20,
  height: 400,
  display: 'flex',
  justifyContent: 'center',
  background: '#bdbdbd',
  border: '1px solid black'

 },
 delete: {
  marginRight: 200
 },
 form: {
  display: 'flex',
  alignItems: 'baseline',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%' 
 },
 list: {
  maxWidth: '100%',
  marginLeft: 40
 },
 section: {
  display: 'flex',
  flexDirection: 'column'
 },
 badge: {
  marginLeft: 50,
  marginTop: 17
  // marginBottom: 125
 },
 buttonBadge: {
  display: 'flex',
  flexDirection: 'row',
 },
 AppFlexColumn: {
  display: 'flex',
  flexDirection: 'column',
  // border: '1px solid black'
 },
 innerPaper: {
  width: 200,
  background: '#4e2884',
  marginRight: 45
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
  title: '',
  habits: [{habit: "Stay away from processed foods."}],
  habit: ''
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

 habitChange = event => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }

 handleHabit = event => {
  event.preventDefault()
  if (this.state.habit){
   this.setState((habits, habit) => ({
    exercises: [...habits,
     {
      habit,
      id: Date.now()
     }
    ],
    habit: ''
   }))
  }
 }

 handleDelete = (id) => {
  this.setState(({exercises}) => ({
   exercises: exercises.filter(ex => ex.id !== id)
  }))
 }
  render() {
   const { title, exercises, habit, habits } = this.state
   const { classes } = this.props
    return (
     <Paper className={classes.root}>
     
     <Paper className={classes.innerPaper}>
       Healthy Eating
       <Divider/>
       
       <form onSubmit={this.handleAdd} >
       <TextField
      name="habit"
      label="Add a eating habit..."
      value={habit}
      onChange={this.habitChange}
      margin='normal'
      />
      </form>
      {habits.map((habit) => <Tab label={habit.habit} />
      )}
      </Paper>
     <div className={classes.AppFlexColumn}>
      <Typography
       variant='display1'
       align='center'
       gutterBottom
      >
       Exercises
      </Typography>
       
      <form onSubmit={this.handleAdd} className={classes.form}>
      <section className={classes.section}>
     
      <TextField
      name="title"
      label="Add an exercise..."
      value={title}
      onChange={this.handleChange}
      margin='normal'
      />
      <div className={classes.buttonBadge}>
      <Button
      type="submit"
      color="#bdbdbd"
      variant="raised"
      >
       Commit to it.
      </Button>
      <Badge
      // className={classes.delete}
       color='primary'
       badgeContent={this.state.exercises.length}
       className={classes.badge}
      />  
      </div>
      </section>
       
      
      <List  className={classes.list}>
       {exercises.map(({id, title}) => <ListItem key={id}>
        
        <ListItemText primary={title} style={{marginRight: 45}}/>
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
      </div>
      
     </Paper>
     
    );
  }
})

