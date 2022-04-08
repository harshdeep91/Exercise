import router from 'express';
import Exercise from '../models/exercise.model.js';
const Router = router.Router();
Router.route('/').get((req, res) => {
    Exercise.find()
        .then(Exercises => res.json(Exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});
Router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({ username, description, duration, date });
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    
        
});
export default Router;