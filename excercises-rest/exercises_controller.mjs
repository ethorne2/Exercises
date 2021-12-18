import * as exercises from './exercises_model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;

app.use(express.json());

/**
 * Create a new exercise with the name, reps, weight, unit and date provided in the body parameters
 */

app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            // In case of an error, send back status code 500 in case of an error.
            res.status(500).json({ Error: `Request Failed. Information about this error: ${error}` });
        });
});

// Get exercises with filter, if no filter provided, sends all exercises
app.get('/exercises', (req, res) => {
    let filter = {};
    exercises.findExercises(filter, '', 0)
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            // In case of an error, send back status code 500 in case of an error.
            res.status(500).json({ Error: `Request Failed. Information about this error: ${error}` });
        });

});

/**
 * Update the exercise whose _id is provided and set its title, year and language to
 * the values provided in the query parameters
 */
 app.put('/exercises/:_id', (req, res) => {
    exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date })
            } else {
                res.status(500).json({ Error: 'Exercise you are attempting to update is not found' });
            }
        })
        .catch(error => {
            console.error(error);
            // In case of an error, send back status code 500 in case of an error.
            res.status(500).json({ Error: `Request Failed. Information about this error: ${error}` });
        });
});

/**
 * Delete the exercise whose _id is provided in the query parameters
 */
 app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(500).json({ Error: 'Exercise you are attempting to delete is not found' });
            }
        })
        .catch(error => {
            console.error(error);
            // In case of an error, send back status code 500 in case of an error.
            res.status(500).json({ Error: `Request Failed. Information about this error: ${error}` });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});